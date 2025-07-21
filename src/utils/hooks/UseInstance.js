import axios from "axios";
import { useAuth } from "../AuthContext";


// Base URL of your API
export const BASE_URL = "https://test.esteticanow.com/api";

export const useApi = (authRequired = false) => {
    const { authToken, location } = useAuth();

    const api = axios.create({
        baseURL: BASE_URL,
    });

    api.interceptors.request.use((config) => {
        // Ensure params & headers exist
        config.params = config.params || {};
        config.headers = config.headers || {};

        // Set Content-Type header
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

        // Add auth_code in query string if required
        if (authRequired) {
            config.params.auth_code = authToken;
        }

        // Always add latitude & longitude to data (body)
        if (config.data instanceof URLSearchParams) {
            config.data.append("latitude", location.latitude);
            config.data.append("longitude", location.longitude);
        } else if (typeof config.data === "object") {
            config.data = {
                ...(config.data || {}),
                latitude: location.latitude,
                longitude: location.longitude,
            };
        } else {
            config.data = {
                latitude: location.latitude,
                longitude: location.longitude,
            };
        }

        return config;
    });

    return api;
};