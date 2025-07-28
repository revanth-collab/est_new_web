// import React from 'react';
// import MobileImage from "../assets/images/mobileImage.png"
// import UpdatedMobileImage from "../assets/images/UpdatedHomePageImage.png"

// const Home = () => {
//   return (
//     <div className="relative px-4 py-10 flex flex-col justify-center items-center gap-4 text-center overflow-hidden">
//       <h1 className="text-black text-[26px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[65px] font-semibold max-w-[90%] md:max-w-[700px] z-10">
//         Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
//       </h1>

//       <p className="text-[#64748B] text-[16px] sm:text-[18px] md:text-[20px] max-w-[90%] md:max-w-[600px] z-10">
//         Discover top-rated salons, spas & clinics. Book instantly.
//       </p>

//       <button className='text-white font-semibold bg-[#6C5DD3] p-2 px-5 rounded-[20px] z-10 mb-3'>
//         <a href="https://play.google.com/store/apps/details?id=com.esteticaapp.user" target="_blank">Get the App</a>
//       </button>

//       <div className='relative w-100 flex justify-center items-center mt-10 gap-0'>
//         <h1 className="absolute text-[120px] sm:text-[160px] md:text-[200px] lg:text-[280px] font-bold bg-gradient-to-b from-[#6C5DD3] to-white bg-clip-text text-transparent z-0 select-none">
//           Estetica
//         </h1>
//         <div className="absolute z-10 flex gap-6 justify-center items-center -mt-10">
//           <div className='w-[370px] h-[350px] rounded-[30px]'>
//             <img src={MobileImage} alt="mobile_image" className='bg-transparent' />
//           </div>
//         </div>
//         <div className="bg-white p-6 mt-[100px] sm:px-10 sm:py-6 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[600px] flex justify-around items-center  gap-5 sm:gap-10 z-10">
//           <div className="flex flex-col text-left w-[100px]">
//             <h1 className="text-[18px] sm:text-[24px] font-bold text-[#6C5DD3]">5000+</h1>
//             <p className="text-gray-600 text-[10px] sm:text-[14px]">Stores</p>
//           </div>
//           <div className="flex flex-col text-left w-[100px]">
//             <h1 className="text-[18px] sm:text-[24px] font-bold text-[#6C5DD3]">100+</h1>
//             <p className="text-gray-600 text-[10px] sm:text-[14px]">Cities</p>
//           </div>
//           <div className="flex flex-col text-left w-[80px]">
//             <h1 className="text-[18px] sm:text-[24px] font-bold text-[#6C5DD3]">20,000</h1>
//             <p className="text-gray-600 text-[10px] sm:text-[14px]">Services</p>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Home;


import React from 'react';
import SecondSection from '../pages/SecondSection'
import DownloadSection from '../pages/DownloadSection'
import PartnerUs from '../pages/PartnerUs'
import Feedback from '../pages/Feedback'
import Footer from '../pages/Footer'
import HomePage from '../pages/HomePage'

const Home = () => {
  return (
        <>
            <HomePage />
            {/* <Home /> */}
            <SecondSection />
            <DownloadSection />
            <PartnerUs />
            <Feedback />
        </>
    )
}

export default Home;