import React, { useState, useEffect } from "react";
import RightSideComponent from "../components/RightSideComponent/RightSideComponent"
import logoImage from "../assets/images/est_logo.png"; // replace with correct path
import LogoutHeader from "../components/Header/LogoutHeader";
import ProgressCircle from "../components/RightSideComponent/ProgressCircle";

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
    // const [activeField, setActiveField] = useState(1)
    const [activeField, setActiveField] = useState(
        parseInt(localStorage.getItem("activeField") || "1")
    );

    useEffect(() => {
        localStorage.setItem("activeField", activeField);
    }, [activeField]);


    return (
        <>
            <LogoutHeader />
            <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl px-5 py-2">
                <div className="w-full min-h-screen flex flex-col gap-6 px-8 py-7">
                    <div className="flex flex-row justify-between gap-3 items-center">
                        <div>
                            <h1 className="text-[#313131] text-2xl font-semibold">Register your store</h1>
                            <p className="label text-xs">Create your account to access your Esteticanow partner</p>
                        </div>
                        <div className="flex justify-end pr-6">
                            <ProgressCircle percentage={Math.round((activeField - 1) / (leftSideBar.length - 1) * 100)} />
                        </div>
                    </div>
                    <div className="min-h-[78vh] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
                        <div className="bg-white rounded-2xl shadow-xl py-8 px-4">
                            {leftSideBar.map((each) => (
                                <div
                                    key={each.id}
                                    className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${activeField === each.id
                                        ? "text-[#6C5DD3] font-semibold bg-gray-100"
                                        : "text-[#777777]"
                                        }`}
                                    onClick={() => { setActiveField(each.id) }}
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
                </div>
            </div>
        </>
    );
};

export default RegisterStorePage;
