import React from "react";

const AccountDeletion = () => {
    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <section className="max-w-4xl mx-auto">
                <div className="mb-10" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-3xl font-bold text-[#BFA6FF] mb-4">
                        Account <span className="text-[#6C5DD3]">Deletion</span>
                    </h2>

                    <p className="text-gray-800 mb-6">
                        We value your privacy and respect your decision if you wish to delete your Estetica account. Please review the information below regarding the account deletion process.
                    </p>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        How to <span className="text-[#6C5DD3]">Delete</span> Your Account
                    </h3>
                    <p className="text-gray-800 mb-6">
                        To request deletion of your Estetica account, please contact our support team directly via email:
                    </p>

                    <div className="bg-[#F3F0FF] p-4 rounded-md mb-6 border-l-4 border-[#6C5DD3]">
                        <p className="text-gray-900 font-medium">
                            📧 Email:{" "}
                            <a
                                href="mailto:support@esteticanow.com"
                                className="text-[#6C5DD3] underline"
                            >
                                support@esteticanow.com
                            </a>
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                            Please include your registered phone number or email address in your request so our team can verify your identity.
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        What to Expect
                    </h3>
                    <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
                        <li>Your request will be reviewed by our support team within 3–5 business days.</li>
                        <li>Once verified, all your personal data and booking history will be permanently deleted.</li>
                        <li>This process is irreversible. Once deleted, your account cannot be recovered.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Need <span className="text-[#6C5DD3]">Assistance?</span>
                    </h3>
                    <p className="text-gray-800">
                        If you have any questions or concerns before proceeding, feel free to reach out to our support team. We're here to help you.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AccountDeletion;
