import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <section className="max-w-4xl mx-auto">
                <div className="mb-10" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-3xl font-bold text-[#BFA6FF] mb-4">
                        Privacy <span className="text-[#6C5DD3]">Policy</span>
                    </h2>

                    <p className="text-gray-800 mb-6">
                        At Estetica, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our app. By using Estetica, you consent to the practices described in this policy.
                    </p>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Information We <span className="text-[#6C5DD3]">Collect</span>
                    </h3>
                    <p className="text-gray-800 mb-2">
                        We may collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
                        <li>
                            <strong>Personal Information:</strong> Information you provide during registration, such as your name, email address, phone number, and payment information.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information about how you use the app, including your interactions with services, bookings, and preferences.
                        </li>
                        <li>
                            <strong>Device Information:</strong> Information about your device, including IP address, operating system, and app version.
                        </li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        How We Use Your <span className="text-[#6C5DD3]">Information</span>
                    </h3>
                    <p className="text-gray-800 mb-2">
                        We may use your information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
                        <li>To provide and maintain our services.</li>
                        <li>To process your bookings and payments.</li>
                        <li>To communicate with you about your account and appointments.</li>
                        <li>To improve our app and services based on user feedback.</li>
                        <li>To send you promotional materials, special offers, and updates (with your consent).</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Sharing Your <span className="text-[#6C5DD3]">Information</span>
                    </h3>
                    <p className="text-gray-800 mb-2">
                        We do not sell or rent your personal information to third parties. We may share your information with:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
                        <li>
                            <strong>Service Providers:</strong> To facilitate your bookings and ensure the provision of services.
                        </li>
                        <li>
                            <strong>Payment Processors:</strong> To handle secure payment transactions.
                        </li>
                        <li>
                            <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                        </li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Data <span className="text-[#6C5DD3]">Security</span>
                    </h3>
                    <p className="text-gray-800 mb-6">
                        We implement reasonable security measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                    </p>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Your <span className="text-[#6C5DD3]">Rights</span>
                    </h3>
                    <p className="text-gray-800 mb-2">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                        <li>Access and request a copy of your personal information.</li>
                        <li>Request correction of any inaccurate information.</li>
                        <li>Request deletion of your personal information, subject to legal obligations.</li>
                        <li>Opt-out of receiving promotional communications.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
