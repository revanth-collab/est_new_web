import React, { useState } from 'react';

const staffrole = ['', 'Stylist', 'Makeup Artist', 'Pedicurist', 'Madicurist'];

const StaffDetails = () => {
    const [staffList, setStaffList] = useState([
        { staffname: '', mobileNumber: '', role: '', experience: '' }
    ]);

    const handleChange = (index, field, value) => {
        const updatedList = [...staffList];
        updatedList[index][field] = value;
        setStaffList(updatedList);
    };

    const handleAddStaff = () => {
        setStaffList([...staffList, { staffname: '', mobileNumber: '', role: '', experience: '' }]);
    };

    const handleSubmit = () => {
        console.log('Final staff list:', staffList);
        // Send to API or store globally
    };

    const handleRemoveStaff = (indexToRemove) => {
        const updatedList = staffList.filter((_, index) => index !== indexToRemove);
        setStaffList(updatedList);
    };


    return (
        <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6">
            {staffList.map((staff, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 mb-6 relative border border-gray-200 p-4 rounded-lg shadow-sm">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Staff Name<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            value={staff.staffname}
                            placeholder="Enter the Staff Name"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleChange(index, 'staffname', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            value={staff.mobileNumber}
                            placeholder="Enter the Number"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleChange(index, 'mobileNumber', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Staff Role<span className="text-red-500">*</span></label>
                        <select
                            value={staff.role}
                            onChange={(e) => handleChange(index, 'role', e.target.value)}
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {staffrole.map((each, i) => (
                                <option key={i} value={each}>
                                    {each === '' ? 'Select Role' : each}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Years of Experience<span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            value={staff.experience}
                            placeholder="Enter the Experience"
                            className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleChange(index, 'experience', e.target.value)}
                        />
                    </div>

                    <div className="absolute top-2 right-2">
                        {staffList.length > 1 && (
                            <button
                                onClick={() => handleRemoveStaff(index)}
                                className="text-red-600 hover:underline text-sm"
                            >
                                Delete
                            </button>
                        )}
                    </div>

                </div>
            ))}

            <div className='flex justify-center mb-6'>
                <button
                    type="button"
                    className="border-2 border-transparent bg-white text-[#7c3aed] px-6 py-2 rounded-xl min-w-[200px] shadow hover:font-semibold transition-all duration-300 hover:opacity-90"
                    style={{
                        borderImage: 'linear-gradient(to right, #a78bfa, #7c3aed) 1',
                        borderImageSlice: 1,
                        borderRadius: 10,
                    }}
                    onClick={handleAddStaff}
                >
                    + Add Staff
                </button>
            </div>

            <div className="flex justify-end gap-3 mt-8">
                <button className="transparent border border-black text px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 hover:font-semibold transition-all duration-300">
                    Skip &gt;&gt;
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 hover:font-semibold transition-all duration-300"
                >
                    Next &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default StaffDetails;
