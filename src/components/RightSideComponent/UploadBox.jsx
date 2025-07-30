import React, { useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';

const UploadBox = ({ label }) => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>

            <div
                className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition"
                onClick={handleClick}
            >
                <UploadCloud className="text-gray-400 mb-2" size={32} />
                <span className="text-sm text-gray-500">
                    {fileName || 'Add document'}
                </span>
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                ref={inputRef}
                onChange={handleChange}
                className="hidden"
            />
        </div>
    );
};

export default UploadBox;
