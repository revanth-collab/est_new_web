import React from "react";

const AboutUsSection = () => {
    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <section className="max-w-4xl mx-auto">
                <div className="mb-10" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-3xl font-bold text-[#BFA6FF] mb-4">
                        About <span className="text-[#6C5DD3]">Us</span>
                    </h2>
                    <p className="text-gray-800 mb-6">
                        Estetica transforms your beauty and wellness journey into an effortless, enjoyable experience. Our platform bridges the gap between customers and professionals, offering seamless appointment scheduling, verified reviews, and personalized recommendations.
                    </p>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Our <span className="text-[#6C5DD3]">Mission</span>
                    </h3>
                    <p className="text-gray-800 mb-6">
                        Estetica is dedicated to empowering beauty and wellness professionals to grow their businesses and reach more clients. We provide robust tools and a user-friendly interface to help professionals manage appointments, track performance, and showcase their services.
                    </p>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Our <span className="text-[#6C5DD3]">Values</span>
                    </h3>
                    <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
                        <li><strong>Commitment:</strong> We connect users with trusted beauty and wellness experts through a reliable platform.</li>
                        <li><strong>Relationships:</strong> Building long-lasting bonds between users and professionals is our top priority.</li>
                        <li><strong>User Convenience:</strong> Every design choice we make focuses on user-friendliness and simplicity.</li>
                        <li><strong>Exceptional Service:</strong> We strive to offer a high-quality experience from discovery to booking and feedback.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2">
                        Why <span className="text-[#6C5DD3]">Choose Us</span>
                    </h3>
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                        <li><strong>Personalized Experience:</strong> Tailored recommendations and services for every individual.</li>
                        <li><strong>Premium Benefits:</strong> Access exclusive deals and premium service options.</li>
                        <li><strong>Trusted Quality:</strong> Verified professionals and authentic reviews ensure top-tier service.</li>
                        <li><strong>Support:</strong> We’re always here to assist you with anything you need.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-[#BFA6FF] mb-2 mt-8">
                        About Our <span className="text-[#6C5DD3]">Team</span>
                    </h3>
                    <p className="text-gray-800">
                        The Estetica team is a passionate group of innovators, designers, and developers who believe in redefining the way people discover and experience beauty and wellness. Our collaborative spirit drives us to build technology that supports both users and service providers.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUsSection;
