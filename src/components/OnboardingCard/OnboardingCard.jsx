import React from 'react';
import partnerAd from "../../assets/images/partner_ad.png";

const OnboardingCard = () => {
  return (
    <div className=" py-4 bg-white">
      <div className="max-w-5xl mx-auto ad_card border border-gray-200 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
        <div className="w-full md:w-1/2">
          <img
            src={partnerAd}
            alt="Onboarding video"
            className="rounded-lg w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            Get Onboarded in Minutes
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Our short video walks you through everything — from setting up your profile to adding your services. You’ll be up and running in just 10 minutes!
          </p>
          <button className='partner-button py-3 px-5 rounded-lg mt-5 text-white font-semibold text-[12px]'>Register your store</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;
