import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OtpVerification = () => {
    const location = useLocation();
    const { phone, email } = location.state || {};

    const [timer, setTimer] = useState(118);
    const intervalRef = useRef();

    // OTP states
    const [phoneOtp, setPhoneOtp] = useState(Array(4).fill(''));
    const [emailOtp, setEmailOtp] = useState(Array(4).fill(''));

    const phoneRefs = useRef([]);
    const emailRefs = useRef([]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((prev) => {
                if (prev === 0) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(1, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleResend = () => {
        setTimer(118);
        // Trigger resend API
        console.log('Resend triggered');
    };

    const handleOtpChange = (index, value, setOtp, otpArray, refs) => {
        if (!/^\d?$/.test(value)) return; // Allow only digits and empty string

        const updatedOtp = [...otpArray];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        // Move to next input
        if (value && index < refs.current.length - 1) {
            refs.current[index + 1]?.focus();
        }

        // Move to previous if cleared
        if (!value && index > 0) {
            refs.current[index - 1]?.focus();
        }
    };

    const handleRegister = () => {
        const phoneCode = phoneOtp.join('');
        const emailCode = emailOtp.join('');
        console.log('Phone OTP:', phoneCode);
        console.log('Email OTP:', emailCode);
    };

    const renderOtpInputs = (otpArray, setOtp, refs) => (
        <div className="flex space-x-2 justify-center">
            {otpArray.map((val, i) => (
                <input
                    key={i}
                    maxLength={1}
                    value={val}
                    ref={(el) => (refs.current[i] = el)}
                    onChange={(e) => handleOtpChange(i, e.target.value, setOtp, otpArray, refs)}
                    className="w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    type="text"
                />
            ))}
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-100 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">OTP Verification</h2>

                {/* Phone OTP */}
                <div className="mb-8">
                    <p className="text-sm text-gray-700 mb-2">
                        Enter the 4-digit that we have sent to the phone number<br />
                        <span className="text-blue-600 font-medium">{phone}</span>
                    </p>
                    {renderOtpInputs(phoneOtp, setPhoneOtp, phoneRefs)}
                    <p className="text-xs text-gray-500 text-center mt-2">
                        {timer > 0 ? (
                            <>Resend code <span className="text-purple-600">{formatTime(timer)}</span></>
                        ) : (
                            <button className="text-purple-600 font-medium" onClick={handleResend}>Resend</button>
                        )}
                    </p>
                </div>

                {/* Email OTP */}
                <div className="mb-6">
                    <p className="text-sm text-gray-700 mb-2">
                        Enter the 4-digit that we have sent to the mail number<br />
                        <span className="text-purple-600 font-medium">{email}</span>
                    </p>
                    {renderOtpInputs(emailOtp, setEmailOtp, emailRefs)}
                    <p className="text-xs text-gray-500 text-center mt-2">
                        {timer > 0 ? (
                            <>Resend code <span className="text-purple-600">{formatTime(timer)}</span></>
                        ) : (
                            <button className="text-purple-600 font-medium" onClick={handleResend}>Resend</button>
                        )}
                    </p>
                </div>

                <button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition"
                    onClick={() => handleRegister()}
                >
                    Register your store
                </button>
            </div>
        </div>
    );
};

export default OtpVerification;
