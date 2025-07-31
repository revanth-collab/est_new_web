// import { React, useState, useEffect, useCallback } from 'react';
// import { MapPin, ChevronDown } from 'lucide-react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import { FiEdit } from "react-icons/fi";

// const libraries = ['places'];
// const mapContainerStyle = {
//     width: '100%',
//     height: '200px',
// };

// const defaultCenter = {
//     lat: 28.6139,
//     lng: 77.2090,
// };

// const Location = () => {
//     const [address, setAddress] = useState('')
//     const [pincode, setPincode] = useState('')
//     const [latitude, setLatitude] = useState('')
//     const [longitude, setLongitude] = useState('')
//     const [location, setLocaiton] = useState("")

//     const [selected, setSelected] = useState(null);
//     const [isLoadingAddress, setIsLoadingAddress] = useState(false);
//     const [step, setStep] = useState('map');

//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: 'AIzaSyD68kxLx285OInWNU7TuSg5QHda1Ih_E_U',
//         libraries,
//     });

//     useEffect(() => {
//         if (initialData) {
//             const { latitude, longitude, location, land_mark, address_label, address: fullAddress } = initialData;
//             const coords = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
//             setSelected(coords);
//             setAddress(fullAddress);
//             setFloor(location || '');
//             setLandmark(land_mark || '');
//             setTag(address_label || '');
//             setStep('map');
//         }
//     }, [initialData]);

//     const fetchAddress = useCallback((lat, lng) => {
//         if (!window.google) return;
//         setIsLoadingAddress(true);
//         const geocoder = new window.google.maps.Geocoder();
//         geocoder.geocode({ location: { lat, lng } }, (results, status) => {
//             setIsLoadingAddress(false);
//             if (status === 'OK' && results[0]) {
//                 setAddress(results[0].formatted_address);
//             } else {
//                 setAddress('Address not found');
//             }
//         });
//     }, []);

//     const handleMapClick = useCallback(
//         (event) => {
//             const coords = {
//                 lat: event.latLng.lat(),
//                 lng: event.latLng.lng(),
//             };
//             setSelected(coords);
//             fetchAddress(coords.lat, coords.lng);
//         },
//         [fetchAddress]
//     );

//     useEffect(() => {
//         if (isLoaded && !selected) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const coords = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };
//                     setSelected(coords);
//                     fetchAddress(coords.lat, coords.lng);
//                 },
//                 () => {
//                     setSelected(defaultCenter);
//                     fetchAddress(defaultCenter.lat, defaultCenter.lng);
//                 }
//             );
//         }
//     }, [isLoaded, selected, fetchAddress]);


//     return (
//         <div className=" rounded-2xl p-6 space-y-6">
//             {/* Map */}
//             <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
//                 {step === 'map' && (
//                     <>
//                         <GoogleMap
//                             mapContainerStyle={mapContainerStyle}
//                             zoom={15}
//                             center={selected || defaultCenter}
//                             onClick={handleMapClick}
//                         >
//                             {selected && <Marker position={selected} />}
//                         </GoogleMap>

//                         <div className="mt-4">
//                             <h4 className="font-semibold mb-1">Selected Address:</h4>
//                             <p className="text-sm text-gray-700">
//                                 {isLoadingAddress ? 'Fetching address...' : address}
//                             </p>
//                         </div>

//                         <div className="mt-4 flex justify-end gap-2">
//                             <button className="border px-4 py-2" onClick={onClose}>
//                                 Cancel
//                             </button>
//                             <button
//                                 className="bg-gradient-to-r from-[#BFA6FF] to-[#6C5DD3] text-white px-4 py-2 rounded disabled:opacity-50"
//                                 onClick={() => setStep('confirm')}
//                                 disabled={!selected || isLoadingAddress}
//                             >
//                                 Confirm Location
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Address Summary */}
//             <div className="flex items-start space-x-2 text-sm text-gray-700 border rounded-lg px-3 py-3 focus:outline-none">
//                 <MapPin className="mt-1 text-blue-600" size={18} />
//                 <p>
//                     1208, Spline Arcade, Flat no 102 1st Floor Plot no 1209, Ayyappa Society, Hyderabad, Telangana 500081
//                 </p>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Full Address<span className="text-red-500">*</span></label>
//                     <input
//                         type="text"
//                         value={address}
//                         placeholder="Enter the Full Address"
//                         className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onChange={(e) => setAddress(e.target.value)}
//                     />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">State<span className="text-red-500">*</span></label>
//                         <div className="relative">
//                             <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
//                                 <option>Telangana</option>
//                                 <option>Andra Prasad</option>
//                             </select>
//                             <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">District<span className="text-red-500">*</span></label>
//                         <div className="relative">
//                             <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
//                                 <option>Uppal</option>
//                                 <option>Kokapet</option>
//                             </select>
//                             <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">City<span className="text-red-500">*</span></label>
//                         <div className="relative">
//                             <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
//                                 <option>Hyderabad</option>
//                                 <option>Warangal</option>
//                             </select>
//                             <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Pincode<span className="text-red-500">*</span></label>
//                         <input
//                             type="number"
//                             value={pincode}
//                             placeholder="Enter the Pincode"
//                             className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             onChange={(e) => setPincode(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="flex justify-end mt-8">
//                 <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
//                     Next &gt;&gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Location;


import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { FiEdit } from "react-icons/fi";

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '200px',
};

const defaultCenter = {
    lat: 28.6139,
    lng: 77.2090,
};

const Location = ({ initialData = null, onClose = () => { } }) => {
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [location, setLocation] = useState('');

    const [selected, setSelected] = useState(null);
    const [isLoadingAddress, setIsLoadingAddress] = useState(false);
    const [step, setStep] = useState('map');

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyD68kxLx285OInWNU7TuSg5QHda1Ih_E_U',
        libraries,
    });

    useEffect(() => {
        if (initialData) {
            const { latitude, longitude, location, land_mark, address_label, address: fullAddress } = initialData;
            const coords = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
            setSelected(coords);
            setLatitude(latitude);
            setLongitude(longitude);
            setAddress(fullAddress || '');
            setLocation(location || '');
            setStep('map');
        }
    }, [initialData]);

    const fetchAddress = useCallback((lat, lng) => {
        if (!window.google) return;
        setIsLoadingAddress(true);
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            setIsLoadingAddress(false);
            if (status === 'OK' && results[0]) {
                setAddress(results[0].formatted_address);
            } else {
                setAddress('Address not found');
            }
        });
    }, []);

    const handleMapClick = useCallback((event) => {
        const coords = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        setSelected(coords);
        setLatitude(coords.lat);
        setLongitude(coords.lng);
        fetchAddress(coords.lat, coords.lng);
    }, [fetchAddress]);

    useEffect(() => {
        if (isLoaded && !selected) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coords = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setSelected(coords);
                    setLatitude(coords.lat);
                    setLongitude(coords.lng);
                    fetchAddress(coords.lat, coords.lng);
                },
                () => {
                    setSelected(defaultCenter);
                    setLatitude(defaultCenter.lat);
                    setLongitude(defaultCenter.lng);
                    fetchAddress(defaultCenter.lat, defaultCenter.lng);
                }
            );
        }
    }, [isLoaded, selected, fetchAddress]);

    const handleSubmit = () => {
        const payload = {
            address,
            pincode,
            latitude,
            longitude,
            location,
        };
        console.log("Submitted Address Info:", payload);
        // TODO: Send to backend or move to next step
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps...</div>;

    return (
        <div className="rounded-2xl p-6 space-y-6">
            {/* Map Section */}
            <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
                {step === 'map' && (
                    <>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={15}
                            center={selected || defaultCenter}
                            onClick={handleMapClick}
                        >
                            {selected && <Marker position={selected} />}
                        </GoogleMap>

                        <div className="mt-4">
                            <h4 className="font-semibold mb-1">Selected Address:</h4>
                            <p className="text-sm text-gray-700">
                                {isLoadingAddress ? 'Fetching address...' : address}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-end gap-2">
                            <button className="border px-4 py-2" onClick={onClose}>
                                Cancel
                            </button>
                            <button
                                className="bg-gradient-to-r from-[#BFA6FF] to-[#6C5DD3] text-white px-4 py-2 rounded disabled:opacity-50"
                                onClick={() => setStep('confirm')}
                                disabled={!selected || isLoadingAddress}
                            >
                                Confirm Location
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Address Summary */}
            <div className="flex items-start space-x-2 text-sm text-gray-700 border rounded-lg px-3 py-3 focus:outline-none">
                <MapPin className="mt-1 text-blue-600" size={18} />
                <p>{address}</p>
            </div>

            {/* Address Form */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Address<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={address}
                        placeholder="Enter the Full Address"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">State<span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Telangana</option>
                                <option>Andhra Pradesh</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">District<span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Uppal</option>
                                <option>Kokapet</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">City<span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select className="w-full border rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Hyderabad</option>
                                <option>Warangal</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pincode<span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            value={pincode}
                            placeholder="Enter the Pincode"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPincode(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
                <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300"
                >
                    Next &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default Location;

