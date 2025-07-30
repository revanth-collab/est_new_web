import React, { useState, useRef } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";

const RegisterStore = () => {
    const [storeType, setStoreType] = useState("Single Outlet");
    const [brandOwner, setBrandOwner] = useState(false);
    const Services = ['Clinic', 'Spa', 'Salon']

    const [selectedServices, setSelectedServices] = useState([]);

    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const handleUploadClick = () => {
        fileInputRef.current.click(); // Trigger hidden file input
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f3edff] to-white px-4 py-10">
            <div className="max-w-4xl w-full bg-white p-10 rounded-3xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">Register your store</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Create your account to access your Esteticanow partner
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Your Full Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Fullname"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
                        <input type="email" placeholder="Email"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Contact Number<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Contact Number"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Store Outlet Type<span className="text-red-500">*</span></label>
                        <select
                            value={storeType}
                            onChange={(e) => setStoreType(e.target.value)}
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                        >
                            <option>Single Outlet</option>
                            <option>Multi Outlet</option>
                        </select>
                    </div>

                    {storeType === "Multi Outlet" && (
                        <div>
                            <label className="text-sm font-medium text-gray-700">How many outlets you have?<span className="text-red-500">*</span></label>
                            <input
                                type="number"
                                placeholder="Enter the outlets count"
                                className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>
                    )}

                    <div>
                        <label className="text-sm font-medium text-gray-700">Select Category type<span className="text-red-500">*</span></label>
                        <div className="mt-1 w-full border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-purple-300">
                            <MultiSelectDropdown options={Services} placeholder="Select Service Types" selectedValues={selectedServices} setSelectedValues={setSelectedServices} />
                        </div>
                    </div>

                    {/* Brand Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Brand Name<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            placeholder="Enter the Brand Name"
                            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Upload Brand Logo<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2 mt-1 border rounded-lg py-1 px-4">
                            {/* Hidden File Input */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            {/* Disabled Text Input to show file name */}
                            <input
                                type="text"
                                placeholder="Upload the Logo"
                                value={fileName}
                                className="w-full focus:outline-none text-sm text-gray-500"
                                disabled
                            />

                            {/* Upload Button */}
                            <button
                                type="button"
                                className="bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600"
                                onClick={handleUploadClick}
                            >
                                Upload
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                        <label className="text-sm font-medium text-gray-700 block mb-1">
                            Are you owner of Brand?
                        </label>
                        <div
                            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${brandOwner ? "bg-green-500" : "bg-gray-400"
                                }`}
                            onClick={() => setBrandOwner(!brandOwner)}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${brandOwner ? "translate-x-6" : "translate-x-0"
                                    }`}
                            ></div>
                        </div>
                    </div>
                </form>

                <div className="mt-10 text-right">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-purple-300 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:from-purple-600 hover:to-purple-400"
                    >
                        Register your store
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterStore;
