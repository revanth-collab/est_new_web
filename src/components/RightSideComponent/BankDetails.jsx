import { React, useState } from 'react'

const BankDetails = () => {
    const [accountNumber, setAccountNumber] = useState('')
    const [reenterAccountNumber, setReEnterAccountNumber] = useState('')
    const [bankName, setBankName] = useState('');
    const [ifscCode, setIFSCCODE] = useState('')
    const [branch, setBranch] = useState('')

    return (
        <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Account Number<span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        value={accountNumber}
                        placeholder="Enter the Account Number"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Re-enter Account Number<span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        value={reenterAccountNumber}
                        placeholder="Re-Enter the Account Number"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setReEnterAccountNumber(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Bank Name<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={bankName}
                        placeholder="Enter the Bank Name"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setBankName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">IFSC Code<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={ifscCode}
                        placeholder="Enter the IFSC Code"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setIFSCCODE(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Branch <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={branch}
                        placeholder="Enter the Branch"
                        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setBranch(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
                    Next &gt;&gt;
                </button>
            </div>
        </div>
    )
}

export default BankDetails