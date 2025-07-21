// import React from 'react'
// import downloadImg from "../assets/images/Download.png"
// // import playStoreImg from "../assets/images/PlayStore.png"
// // import appleImg from "../assets/images/Apple.png"
// import { BiLogoPlayStore } from "react-icons/bi";
// import { FaApple } from "react-icons/fa";

// import qrImg from "../assets/images/QrCode.png"

// const DownloadSection = () => {
//   return (
//     <div className='download-section flex justify-center items-center gap-10 px-10 pt-10 pb-6'>
//       <div>
//         <img src={downloadImg} alt="Download_image" className='w-[430px] mt-6'/>
//       </div>
//       <div className='max-w-[50%]'>
//         <h1 className='text-[#000000] text-[50px] leading-[60px] font-semibold'>Download the <span className='primary-color'>esteticanow</span> App </h1>
//         <p className='text-[#A1A2A1] text-[18px] font-medium tracking-wide'>Discover top-rated providers, explore exclusive services, and book appointments effortlessly — all in one place. Estetica makes self-care simple, smart, and accessible.</p>
//         <div className='flex flex-row items-center'>
//             <img src={qrImg} alt="qr_image" className='w-[100px]' />
//             <div className='flex flex-col justify-center gap-2'>
//                 <div className='bg-black rounded-xl flex flex-row justify-center items-center gap-2 p-1 px-4'>
//                     <BiLogoPlayStore className='text-white size-7'/>
//                     <div className='gap-0'>
//                         <p className='text-[10px] text-white tracking-tighter'>GET IT ON</p>
//                         <p className='text-white text-[14px] font-semibold '>Google Play</p>
//                     </div>
//                 </div>
//                 <div className='bg-black rounded-xl flex flex-row justify-center items-center gap-2 p-1 px-4'>
//                     <FaApple className='text-white size-7'/>
//                     <div className='gap-0'>
//                         <p className='text-[10px] text-white tracking-tighter'>Download on</p>
//                         <p className='text-white text-[14px] font-semibold '>App Store</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DownloadSection


import React from 'react';
import downloadImg from "../assets/images/Download.png";
import qrImg from "../assets/images/QrCode.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const DownloadSection = () => {
  return (
    <div className="download-section flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-4 md:px-10 pt-10 pb-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={downloadImg}
          alt="Download_image"
          className="w-full max-w-[400px] md:max-w-[430px] mt-6 md:mt-0"
        />
      </div>

      {/* Right: Text and App Links */}
      <div className="w-full md:w-1/2 max-w-[700px] text-center md:text-left">
        <h1 className="text-[#000000] text-[30px] sm:text-[40px] md:text-[50px] leading-tight md:leading-[60px] font-semibold mb-4">
          Download the <span className="text-[#6C5DD3]">esteticanow</span> App
        </h1>

        <p className="text-[#A1A2A1] text-[16px] sm:text-[18px] font-medium tracking-wide mb-6">
          Discover top-rated providers, explore exclusive services, and book appointments effortlessly — all in one place. Estetica makes self-care simple, smart, and accessible.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* QR */}
          <img src={qrImg} alt="qr_image" className="w-[120px]" />

          {/* App Store Buttons */}
          <div className="flex flex-row sm:flex-col gap-2">
            {/* Google Play */}
            <div className="bg-black rounded-xl flex items-center gap-2 p-2 px-4 min-w-[100px]">
              <BiLogoPlayStore className="text-white size-6" />
              <div>
                <p className="text-[10px] text-white tracking-tighter">GET IT ON</p>
                <p className="text-white text-[14px] font-semibold">Google Play</p>
              </div>
            </div>

            {/* App Store */}
            <div className="bg-black rounded-xl flex items-center gap-2 p-2 px-4 min-w-[100px]">
              <FaApple className="text-white size-6" />
              <div>
                <p className="text-[10px] text-white tracking-tighter">Download on</p>
                <p className="text-white text-[14px] font-semibold">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
