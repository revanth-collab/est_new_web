// src/utils/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Context to store the auth state
const AuthContext = createContext();

// Custom hook to access the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap your app and provide authentication state
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Simulate loading or fetching authentication state (e.g., from localStorage, API)
    useEffect(() => {
        const checkAuth = async () => {
            // Simulate loading (e.g., fetching from API or localStorage)
            setLoading(true);
            const token = localStorage.getItem('authToken'); // For example
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setIsInitialized(true);
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = () => {
        // Simulate login logic
        localStorage.setItem('authToken', 'some-auth-token');
        setIsAuthenticated(true);
        navigate('/dashboard'); // Redirect to dashboard after login
    };

    const logout = () => {
        // Simulate logout logic
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isInitialized, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
