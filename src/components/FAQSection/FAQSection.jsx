import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '1. What is included in the Estetica Partner Suite?',
    answer:
      'The Partner Suite includes the Estetica CRM, Partner App, and Professional App — designed to help you manage bookings, staff, customers, and business insights all from one unified system.',
  },
  {
    question: '2. Can my staff use the Professional App for home visits?',
    answer: 'Yes. The Professional App is built to support both in-store and on-location (home visit) services. Staff can track their appointments, update statuses, and access client info from anywhere.',
  },
  {
    question: '3. How does the CRM help my business?',
    answer: 'The CRM gives you real-time insights into bookings, revenue, staff performance, and customer trends — helping you make informed decisions and grow faster.',
  },
  {
    question: '4. Can I manage multiple outlets from one account?',
    answer: 'Absolutely. Estetica’s CRM and Partner App support multi-outlet management, so you can oversee performance, teams, and bookings across locations from a single dashboard.',
  },
  {
    question: '5. Is there training provided for using the Partner Suite?',
    answer: 'Yes, we offer onboarding assistance, training videos, and ongoing support to ensure you and your team get the most out of the Partner Suite.',
  },
  {
    question: '6. Can I run offers or loyalty programs through the platform?',
    answer: 'Yes. You can launch targeted offers, create loyalty programs, and run promotions directly from the Partner App or CRM.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-8 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#7E3AF2] font-medium mb-2">Have Any Question?</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Here Some Questions Answer</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all rounded-xl border border-gray-200 p-5 ${
              activeIndex === index ? 'bg-[#f9f9f9]' : 'bg-white'
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-[16px] sm:text-[18px] font-semibold">{faq.question}</h3>
              {activeIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {activeIndex === index && faq.answer && (
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
