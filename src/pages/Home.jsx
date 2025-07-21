// import React from 'react'

// const Home = () => {
//     return (
//         <div className='p-7 flex flex-col justify-center items-center gap-5'>
//             <h1 className='text-[#000000] text-[30px] md:text-[70px] leading-[65px] text-center font-semibold w-[700px] '>Your <span className='text-[#6C5DD3]'>Beauty & Wellness</span> Ecosystem</h1>
//             <p className='text-[#64748B] text-center text-[20px]'>Discover top-rated salons, spas & clinics. Book instantly.</p>


//             <div className='bg-white p-8 rounded-lg flex justify-between items-center'>
//                 <div className=''>
//                     <h1>5000</h1>
//                     <p>Stores</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home


// import React from 'react';

// const Home = () => {
//   return (
//     <div className="relative px-4 py-10 flex flex-col justify-center items-center gap-4 text-center">
//       {/* Heading */}
//       <h1 className="text-black text-[26px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[65px] font-semibold max-w-[90%] md:max-w-[700px]">
//         Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
//       </h1>

//       {/* Subtext */}
//       <p className="text-[#64748B] text-[16px] sm:text-[18px] md:text-[20px] max-w-[90%] md:max-w-[600px]">
//         Discover top-rated salons, spas & clinics. Book instantly.
//       </p>
//       <button className='text-[#ffffff] font-semibold bg-[#6C5DD3] p-2 px-5 rounded-[20px]'>Get the App</button>

//       <h1 className="absolute bottom-[-40px] lg:bottom-[-60px] text-[120px] sm:text-[160px] md:text-[200px] lg:text-[280px] font-bold text-[#6C5DD3]/10 z-0 select-none">
//         Estetica
//       </h1>

//       {/* Stats Box */}
//       <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-[300px] flex justify-between items-center gap-5">
//         <div className="flex flex-col text-left">
//           <h1 className="text-[24px] font-bold text-[#6C5DD3]">5000+</h1>
//           <p className="text-gray-600 text-[14px]">Stores</p>
//         </div>
//         <div className="flex flex-col text-left">
//           <h1 className="text-[24px] font-bold text-[#6C5DD3]">100+</h1>
//           <p className="text-gray-600 text-[14px]">Cities</p>
//         </div>
//         <div className="flex flex-col text-left">
//           <h1 className="text-[24px] font-bold text-[#6C5DD3]">20000</h1>
//           <p className="text-gray-600 text-[14px]">Services</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';

const Home = () => {
  return (
    <div className="relative px-4 py-10 flex flex-col justify-center items-center gap-4 text-center overflow-hidden">
      {/* Heading */}
      <h1 className="text-black text-[26px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[65px] font-semibold max-w-[90%] md:max-w-[700px] z-10">
        Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
      </h1>

      {/* Subtext */}
      <p className="text-[#64748B] text-[16px] sm:text-[18px] md:text-[20px] max-w-[90%] md:max-w-[600px] z-10">
        Discover top-rated salons, spas & clinics. Book instantly.
      </p>

      <button className='text-white font-semibold bg-[#6C5DD3] p-2 px-5 rounded-[20px] z-10'>
        Get the App
      </button>

      <div className='relative w-100 flex justify-center items-center mt-10'>
        <h1 className="absolute text-[120px] sm:text-[160px] md:text-[200px] lg:text-[280px] font-bold text-[#6C5DD3]/10 z-0 select-none">
          Estetica
        </h1>
        <div className=" absolute z-10 mt-10 flex gap-6 justify-center items-center">
          <div className="w-[150px] h-[300px] bg-black rounded-[30px] shadow-xl"></div>
          <div className="w-[150px] h-[300px] bg-black rounded-[30px] shadow-xl rotate-[-10deg]"></div>
        </div>
        <div className="bg-white p-6 mt-[100px] sm:p-8 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[600px] flex justify-around items-center gap-5 z-10">
          <div className="flex flex-col text-center">
            <h1 className="text-[24px] font-bold text-[#6C5DD3]">5000+</h1>
            <p className="text-gray-600 text-[14px]">Stores</p>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-[24px] font-bold text-[#6C5DD3]">100+</h1>
            <p className="text-gray-600 text-[14px]">Cities</p>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-[24px] font-bold text-[#6C5DD3]">20,000</h1>
            <p className="text-gray-600 text-[14px]">Services</p>
          </div>
        </div>
      </div>

      {/* <div className="relative w-full flex flex-col items-center mt-20">
        <h1 className="absolute text-[120px] sm:text-[160px] md:text-[200px] lg:text-[280px] font-bold text-[#6C5DD3]/10 z-0 select-none whitespace-nowrap">
          Estetica
        </h1>

        <div className="relative z-10 flex gap-6 justify-center items-center mb-32">
          <div className="w-[120px] sm:w-[140px] md:w-[150px] h-[240px] sm:h-[280px] md:h-[300px] bg-black rounded-[30px] shadow-xl" />
          <div className="w-[120px] sm:w-[140px] md:w-[150px] h-[240px] sm:h-[280px] md:h-[300px] bg-black rounded-[30px] shadow-xl rotate-[-10deg]" />
        </div>

        <div className="absolute bottom-[-40px] sm:bottom-[-50px] z-20 bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-[90%] sm:max-w-[600px] flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-5">
          <div className="flex flex-col text-center">
            <h1 className="text-[24px] font-bold text-[#6C5DD3]">5000+</h1>
            <p className="text-gray-600 text-[14px]">Stores</p>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-[24px] font-bold text-[#6C5DD3]">100+</h1>
            <p className="text-gray-600 text-[14px]">Cities</p>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-[24px] font-bold text-[#6C5DD3]">20,000</h1>
            <p className="text-gray-600 text-[14px]">Services</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
