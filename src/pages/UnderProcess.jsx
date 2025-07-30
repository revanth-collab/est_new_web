import React from "react";
import processTimeImg from "../assets/images/process_time.svg"
const UnderProcess = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-content items-center p-10 gap-5">
            <div className="w-full md:w-3/5"></div>
            <div className="w-full md:w-2/5 shadow-md bg-white p-10 rounded-2xl flex flex-col justify-center items-center">
                <img src={processTimeImg} alt="Under Process Time" className="w-[50%] h-[40%]" />
                <h1 className="text-[#111111] text-center text-3xl font-semibold mb-2">Thank you for submitting your profile! </h1>
                <p className="text-[#64748B] text-center text-xs">We've received your information and are currently reviewing it. If we require any additional details or have further questions, we'll be sure to reach out to you promptly.</p>
                <button type="button" className="bg-[#E3E5E5] w-[70%] px-4 py-2 text-sm rounded-lg shadow-sm mt-5">Estimated time 2 to 4 Working days</button>
            </div>
        </div>
    )
}

export default UnderProcess