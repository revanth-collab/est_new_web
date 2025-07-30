import { useState } from "react";

const BasicDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");

    return (
        <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Your Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Contact Number */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Contact Number<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="Enter contact number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Date of Birth<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter DOB or any value"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-1 col-span-1">
                    <label className="text-sm font-medium text-gray-700">
                        Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
                    Next &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default BasicDetails;
