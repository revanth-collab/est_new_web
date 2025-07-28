import React from 'react'
import UpdatedMobileImage from "../assets/images/UpdatedHomePageImage.png"
import shop from "../assets/images/shop.svg"

const stats = [
  { value: '5000', label: 'Stores' },
  { value: '100+', label: 'Cities' },
  { value: '20,000', label: 'Services' },
];

const HomePage = () => {
  return (
    <div className='container mx-auto px-4  relative flex flex-col md:flex-row justify-center items-center gap-4'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className="md:-mt-4 flex flex-col w-full md:w-1/2 items-center md:items-start gap-4 md:gap-2 lg:gap-3 py-4 sm:py-6 md:py-8 lg:py-10">

          <h1 className="text-black font-semibold text-[26px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[50px] leading-[1.2] text-center md:text-left max-w-[90%] md:max-w-[700px] z-10">
            Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
          </h1>

          <p className="text-[#64748B] text-[14px] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[19px] leading-snug md:leading-normal text-center md:text-left max-w-[90%] md:max-w-[600px] z-10">
            Discover top-rated salons, spas & clinics. Book instantly.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.esteticaapp.user"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6C5DD3] text-white font-semibold text-[14px] sm:text-[16px] px-6 py-2 rounded-full mb-2 z-10 hover:bg-[#5947c5] transition duration-200"
          >
            Get the App
          </a>

        </div>

        {/* <div className="flex flex-col items-start text-center md:text-left w-full md:w-1/2 gap-4 z-10">
          <h1 className="text-black text-[28px] sm:text-[36px] lg:text-[56px] font-semibold leading-tight">
            Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
          </h1>
          <p className="text-[#64748B] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[90%] md:max-w-[600px]">
            Discover top-rated salons, spas & clinics. Book instantly.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.esteticaapp.user"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold bg-[#6C5DD3] px-6 py-2 rounded-full mt-2"
          >
            Get the App
          </a>
        </div> */}

        <div className='w-full md:w-1/2 z-10'>
          <img src={UpdatedMobileImage} alt="mobileImage" className='w-full max-w-[500px] mx-auto' />
        </div>

        <div className='absolute bottom-0 flex justify-center items-center md:-bottom-44 lg:-bottom-32 w-full max-w-[90%]'>
          <div className='relative flex justify-center items-center w-full'>
            <h1 className="w-full text-[100px] sm:text-[160px] md:text-[180px] lg:text-[300px] font-bold bg-gradient-to-b from-[#6C5DD3] to-white bg-clip-text text-transparent -z-40 select-none opacity-[0.10]">
              Estetica
            </h1>

            

            {/* <div className="absolute bottom-0 md:bottom-36 lg:bottom-28 bg-white shadow-md 
                            px-3 py-4 sm:px-6 sm:py-3 lg:py-5 2xl:py-7 w-full max-w-[90%] mx-auto rounded-xl 
                            flex flex-wrap justify-around items-center gap-y-4 z-50">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-2 justify-center"
                >
                  <div className="w-6 h-6 sm:w-10 sm:h-10">
                    <img src={shop} alt="shop" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-sm sm:text-3xl font-semibold text-black">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div> */}


            <div className="absolute bottom-0 md:bottom-40 lg:bottom-24 xl:bottom-28 2xl:bottom-20 bg-white shadow-md
                            w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-7 2xl:py-10
                            rounded-xl flex justify-around items-center gap-2 md:4 z-50">
              {/* {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 justify-center min-w-[100px] sm:min-w-[140px]"
                >
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 self-start">
                    <img
                      src={shop}
                      alt="shop"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-[12px] sm:text-xl md:text-xl lg:text-2xl font-semibold text-black">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-sm md:text-base text-gray-500">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))} */}

              <h1 className="text-[10px] sm:text-[20px] md:text-[12px] lg:text-[16px]
                             sm:font-semibold text-gray-500 text-center leading-snug sm:leading-snug md:leading-normal">
                Discover handpicked salons, spas, and specialists across the city, and indulge in curated beauty and wellness experiences — your self-care rituals, delivered with precision and grace.
              </h1>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage


// import React from 'react';
// import UpdatedMobileImage from "../assets/images/UpdatedHomePageImage.png";

// const HomePage = () => {
//   return (
//     <div className="relative px-4 md:px-10 lg:px-20 py-10">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//         <div className="flex flex-col items-start text-center md:text-left w-full md:w-1/2 gap-4 z-10">
//           <h1 className="text-black text-[28px] sm:text-[36px] lg:text-[56px] font-semibold leading-tight">
//             Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
//           </h1>
//           <p className="text-[#64748B] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[90%] md:max-w-[600px]">
//             Discover top-rated salons, spas & clinics. Book instantly.
//           </p>
//           <a
//             href="https://play.google.com/store/apps/details?id=com.esteticaapp.user"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white font-semibold bg-[#6C5DD3] px-6 py-2 rounded-full mt-2"
//           >
//             Get the App
//           </a>
//         </div>

//         <div className="w-full md:w-1/2 flex justify-center z-10">
//           <img
//             src={UpdatedMobileImage}
//             alt="Mobile App"
//             className="w-[80%] sm:w-[60%] md:w-[80%] lg:w-[90%] max-w-[400px]"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
//         <h1 className="text-[80px] sm:text-[140px] md:text-[180px] lg:text-[300px] font-bold bg-gradient-to-b from-[#6C5DD3] to-white bg-clip-text text-transparent select-none leading-none z-0">
//           Estetica
//         </h1>
//       </div>

//       <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-[90%] sm:max-w-[80%] bg-white shadow-lg rounded-xl px-4 sm:px-8 py-4 flex justify-around items-center">
//         {['Stores', 'Bookings', 'Happy Clients'].map((label, idx) => (
//           <div key={idx} className="flex flex-col items-center">
//             <h2 className="text-[18px] sm:text-[24px] font-bold text-[#6C5DD3]">5000+</h2>
//             <p className="text-gray-600 text-[12px] sm:text-[14px]">{label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
