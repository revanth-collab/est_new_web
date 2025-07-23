import React from 'react'
import PartnerLady from "../../assets/images/partner_lady.png"

const features = [
  {
    id: '01',
    title: 'Smart Scheduling',
    description: 'Auto-reminders, real-time status, and instant confirmations.',
  },
  {
    id: '02',
    title: 'Performance Insights',
    description: 'Daily revenue tracking and service-wise performance reports.',
  },
  {
    id: '03',
    title: 'Staff Management',
    description: 'Assign tasks, track attendance, and manage payouts effortlessly.',
  },
  {
    id: '04',
    title: 'Client Engagement',
    description: 'Offer loyalty points, run personalized campaigns, and retain happy clients.',
  },
];

const KeyFeatures = () => {
  return (
    <div className="w-full bg-white py-16  px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={PartnerLady}
            alt="Illustration"
            className="w-full max-w-[400px] md:max-w-[500px] h-fit"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-sm text-[#7E3AF2] font-medium mb-2">Our Key Features</p>
          <h2 className="text-[28px] md:text-[40px] w-[80%] font-bold leading-tight text-gray-900 mb-8">
            Handle & Grow with Confidence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex sm:flex-col items-start gap-4">
                <div className="bg-[#7E3AF2] text-white font-semibold rounded-full w-9 h-9 flex items-center justify-center text-sm">
                  {feature.id}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-[14px] text-gray-600 w-[80%]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
