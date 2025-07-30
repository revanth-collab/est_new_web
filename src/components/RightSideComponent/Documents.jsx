// import React from 'react'

// const Documents = () => {
//     return (
//         <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                     <label className='label text-[14px] id="medical'>Medical Council Certificate</label>
//                 </div>
//                 <div>
//                     <label className='label text-[14px] id="clinic'>Clinic registration certificate</label>
//                 </div>
//                 <div>
//                     <label className='label text-[14px] id="other'>Upload Other documents</label>
//                 </div>
//             </div>

//             <div className="flex justify-end mt-8">
//                 <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
//                     Next &gt;&gt;
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Documents


import React from 'react';
import UploadBox from './UploadBox';
import { useRef, useState } from 'react';

const Documents = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UploadBox label="Medical Council Certificate" />
                <UploadBox label="Clinic registration certificate" />
            </div>
            <div className="mt-6">
                <UploadBox label="Upload Other documents" />
            </div>

            <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
                    Next &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default Documents;
