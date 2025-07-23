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
    question: 'Lorem ipsum dolor sit amet, consectetur ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
