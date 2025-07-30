import React, { useState } from "react";
import RightSideComponent from "../components/RightSideComponent/RightSideComponent"
import logoImage from "../assets/images/est_logo.png"; // replace with correct path

import { CiImageOn } from "react-icons/ci";
import { TiBusinessCard, TiDatabase } from "react-icons/ti";
import { IoDocuments } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiBankCardFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";

const leftSideBar = [
    {
        id: 1,
        title: "Basic Details",
        img: <CiImageOn size={20} />
    },
    {
        id: 2,
        title: 'Business Details',
        img: <TiBusinessCard size={20} />
    },
    {
        id: 3,
        title: 'Documents',
        img: <IoDocuments size={20} />
    },
    {
        id: 4,
        title: 'Location',
        img: <FaLocationDot size={20} />
    },
    {
        id: 5,
        title: 'Bank Details',
        img: <RiBankCardFill size={20} />
    }, {
        id: 6,
        title: 'Staff Details',
        img: <IoIosPeople size={20} />
    }, {
        id: 7,
        title: 'Services',
        img: <AiFillProduct size={20} />
    }
]

const RegisterStorePage = () => {
    const [activeField, setActiveField] = useState(1)


    return (
        // <div className="min-h-screen grid md:grid-cols-2 gap-4 p-8 bg-gray-100">
        //     {/* LEFT SIDE - Info / Image */}
        //     <div className="w-full md:w-2/5 flex flex-col bg-white rounded-2xl shadow-xl py-8 px-3">
        //         {leftSideBar.map((each) => (
        //             <div key={each.id}
        //                 className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${activeField === each.id ? "text-[#6C5DD3] font-semibold bg-gray-100" : "text-[#777777]"}`}
        //                 onClick={() => setActiveField(each.id)}
        //             >
        //                 <span>{each.img}</span>
        //                 <span>{each.title}</span>
        //             </div>
        //         ))}
        //     </div>

        //     <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
        //         <RightSideComponent value={activeField} />
        //     </div>
        // </div>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 p-8 bg-gray-100">
            {/* Sidebar - fixed width */}
            <div className="bg-white rounded-2xl shadow-xl py-8 px-4">
                {leftSideBar.map((each) => (
                    <div
                        key={each.id}
                        className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${activeField === each.id
                            ? "text-[#6C5DD3] font-semibold bg-gray-100"
                            : "text-[#777777]"
                            }`}
                        onClick={() => setActiveField(each.id)}
                    >
                        <span>{each.img}</span>
                        <span>{each.title}</span>
                    </div>
                ))}
            </div>

            {/* Right Side Content */}
            <div className="flex flex-col justify-center w-full h-full">
                <RightSideComponent value={activeField} />
            </div>
        </div>
    );
};

export default RegisterStorePage;
