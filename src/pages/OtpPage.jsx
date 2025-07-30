import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const OtpPage = () => {
    const location = useLocation();
    const phone = location?.state?.phone || "+91 90XXX XXXXX";

    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(118); // 1:58 in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/, "");
        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (index < 3 && value) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const formatTime = () => {
        const m = String(Math.floor(timer / 60));
        const s = String(timer % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    const handleResend = () => {
        setOtp(["", "", "", ""]);
        setTimer(118); // Restart timer
        // Trigger resend OTP logic here
    };

    const handleSubmit = () => {
        console.log("Entered OTP:", otp.join(""));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-100 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
                <p className="text-sm text-gray-700 mb-6">
                    Enter the 4-digit that we have sent to the phone number<br />
                    <span className="text-blue-600 font-medium">+91 {phone?.slice(-10, -8)}XXX XXXXX</span>
                </p>

                <div className="flex justify-center gap-3 mb-2">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                        />
                    ))}
                </div>

                <div className="text-xs text-gray-500 mt-1 mb-6">
                    {timer > 0 ? (
                        <>Resend code <span className="text-purple-600">{formatTime()}</span></>
                    ) : (
                        <button
                            onClick={handleResend}
                            className="text-purple-600 font-medium text-xs"
                        >
                            Resend
                        </button>
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white py-3 rounded-xl font-medium transition"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default OtpPage;
