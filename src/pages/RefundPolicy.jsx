import React from "react";

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <section className="max-w-4xl mx-auto">
                <div className="mb-10" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-3xl font-bold text-[#BFA6FF] mb-4">
                        Refund <span className="text-[#6C5DD3]">Policy</span>
                    </h2>
                    <p className="text-gray-800">
                        Customers can cancel their booking reservation up to 4 hours before the booked slot. Within 48 hours, the customer will receive a refund to their e-wallet for any service charges paid.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;
