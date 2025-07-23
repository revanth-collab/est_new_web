import React from 'react';
import laptop from '../../assets/images/laptop.png';
import Image2 from "../../assets/images/PartnerPageImage2.png"
import Image3 from "../../assets/images/PartnerPageImage3.png"

const PartnerCarousel = () => {
  const logos = new Array(12).fill(0);

  return (
    <div className="bg-white py-16  px-6 md:px-10 lg:px-[90px] overflow-hidden">
      <div className="text-center text-sm text-gray-700 font-medium mb-6 relative">
        <div className="w-full flex items-center justify-center">
          {/* <hr className="flex-grow border-gray-200" /> */}
          <span className="px-4 whitespace-nowrap font-semibold">Our Worldwide Reputed Partner</span>
          {/* <hr className="flex-grow border-gray-200" /> */}
        </div>
      </div>

      {/* Scrolling logos */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-8">
          {logos.concat(logos).map((_, i) => (
            <div
              key={i}
              className="w-32 h-[50px] bg-gray-300 rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
