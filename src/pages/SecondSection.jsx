// import React from 'react'
// import image_content from "../assets/images/Image_Content.png";

// const SecondSection = () => {
//   return (
//     <div className='px-4 py-[100px] flex flex-col justify-center items-center gap-4 text-center'>
//       <h1 className='text-[#000000] text-[25px] font-semibold max-w-[90%] md:max-w-[700px]'>Lorem Ipsum is simply dummy</h1>
//       <p className='text-[#A1A2A1] text-[16px] font-medium max-w-[90%] md:max-w-[700px]'>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy Lorem Ipsum is simply.</p>
//       <img src={image_content} alt="image_content" />
//     </div>
//   )
// }

// export default SecondSection


import React from 'react';
import image_content from "../assets/images/Image_Content.png";

const SecondSection = () => {
  return (
    <div className="px-4 pt-16 pb-4 sm:pt-20 sm:pb-4 md:pt-24 md:pb-4 flex flex-col justify-center items-center gap-0 text-center">
      {/* Heading */}
      <h1 className="text-black text-[22px] sm:text-[26px] md:text-[32px] font-semibold max-w-[90%] md:max-w-[700px]">
        Lorem Ipsum is simply dummy
      </h1>

      {/* Subtext */}
      <p className="text-[#A1A2A1] text-[14px] sm:text-[16px] md:text-[18px] font-medium max-w-[90%] md:max-w-[700px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.
      </p>

      {/* Image */}
      {/* <img
        src={image_content}
        alt="image_content"
        className="w-[400px] h-[300px] mt-6"
      /> */}
      <img
        src={image_content}
        alt="image_content"
        className="w-full max-w-[700px] h-auto mt-6"
      />

    </div>
  );
};

export default SecondSection;
