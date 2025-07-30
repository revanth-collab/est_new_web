import { React, useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const Location = () => {
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    return (
        <div className=" rounded-2xl p-6 space-y-6">
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
                <img
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Madhapur,Hyderabad&zoom=15&size=600x300&maptype=roadmap&key=YOUR_GOOGLE_MAPS_API_KEY"
                    alt="Map Preview"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Address Summary */}
            <div className="flex items-start space-x-2 text-sm text-gray-700 border rounded-lg px-3 py-3 focus:outline-none">
                <MapPin className="mt-1 text-blue-600" size={18} />
                <p>
                    1208, Spline Arcade, Flat no 102 1st Floor Plot no 1209, Ayyappa Society, Hyderabad, Telangana 500081
                </p>
            </div>

            {/* Form Fields */}
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
                                <option>Andra Prasad</option>
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

            <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
                    Next &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default Location;
