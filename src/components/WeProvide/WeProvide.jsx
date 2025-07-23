// import React from 'react'
// import laptop from "../../assets/images/laptop.png"

// const WeProvide = () => {
//   return (
//     <div className='w-full flex flex-col justify-between md:flex-row md:gap-[50px] px-4 sm:px-10 py-8 min-h-[100vh] bg-white'>
//         <div className='relative w-full md:w-2/6'>
//             <div className=' sticky top-0 pt-2'>
//                 <h1 className='primary-color pb-3'>We Provide for you</h1>
//                 <p className='text-[24px] md:text-[40px] leading-[50px]  font-semibold'>Smart tools to grow your business, all in one platform</p>
//             </div>
//         </div>
//         <div className='relative flex flex-col gap-10 w-full md:w-4/6'>
//             <div className='sticky bg-white top-10 flex flex-col md:flex-row rounded-[20px] shadow-md my-3'>
//                 <div className='bg-[#F5F5F5] p-2 flex justify-center items-center rounded-tl-[20px] rounded-bl-[20px]'>
//                     <img src={laptop} alt="laptop" className='w-fit h-auto max-h-[650px]' />
//                 </div>
//                 <div className='p-4 flex flex-col justify-center'>
//                     <h1 className='text-[24px] font-semibold'>Web CRM – Your Command Center</h1>
//                     <p className='text-[#64748B] text-[14px]'>Get a bird’s-eye view of your business — from appointments to analytics, all in real-time.Easily manage bookings, monitor staff performance, check reports, and control pricing. </p>
//                 </div>
//             </div>

//             <div className='sticky bg-white top-10 w:1/2 flex flex-col md:flex-row rounded-[20px] shadow-md my-3'>
//                 <div className='p-4 w:1/2 flex flex-col justify-center'>
//                     <h1 className='text-[24px] font-semibold'>Web CRM – Your Command Center</h1>
//                     <p className='text-[#64748B] text-[14px]'>Get a bird’s-eye view of your business — from appointments to analytics, all in real-time.Easily manage bookings, monitor staff performance, check reports, and control pricing. </p>
//                 </div>
//                 <div className='bg-[#F5F5F5] p-2 flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]'>
//                     <img src={laptop} alt="laptop" className='w-fit h-auto max-h-[650px]' />
//                 </div>
//             </div>

//             <div className='sticky bg-white top-10 w:1/2 flex flex-col md:flex-row rounded-[20px] shadow-md'>
//                 <div className='bg-[#F5F5F5] p-2 flex justify-center items-center rounded-tl-[20px] rounded-bl-[20px]'>
//                     <img src={laptop} alt="laptop" className='w-fit h-auto max-h-[650px]' />
//                 </div>
//                 <div className='p-4 w:1/2 flex flex-col justify-center'>
//                     <h1 className='text-[24px] font-semibold'>Web CRM – Your Command Center</h1>
//                     <p className='text-[#64748B] text-[14px]'>Get a bird’s-eye view of your business — from appointments to analytics, all in real-time.Easily manage bookings, monitor staff performance, check reports, and control pricing. </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default WeProvide


import React from 'react';
import laptop from '../../assets/images/laptop.png';
import Image2 from "../../assets/images/PartnerPageImage2.png"
import Image3 from "../../assets/images/PartnerPageImage3.png"

const WeProvide = () => {
  const services = [
    {
      title: 'Web CRM – Your Command Center',
      description:
        'Get a bird’s-eye view of your business — from appointments to analytics, all in real-time. Easily manage bookings, monitor staff performance, check reports, and control pricing.',
      imageLeft: true,
      image:laptop
    },
    {
      title: 'Automated Booking Management',
      description:
        'Let your calendar fill itself. Customers can schedule appointments online while you manage your availability, buffer times, and cancellations effortlessly.',
      imageLeft: false,
      image:Image2
    },
    {
      title: 'Insightful Reports and Analytics',
      description:
        'Understand trends, peak hours, and employee performance with powerful, easy-to-read reports. Make data-driven decisions to grow your business.',
      imageLeft: true,
      image:Image3
    },
  ];

  return (
    <div className="w-full py-16  px-6 md:px-10 lg:px-[90px] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side Title */}
        <div className="md:w-1/3 md:h-[285px] sticky top-6 md:top-10 h-fit">
          <h4 className="text-indigo-600 font-medium mb-3">We Provide for you</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Smart tools to grow your business, all in one platform
          </h2>
        </div>

        {/* Right Side Cards */}
        <div className=" relative md:w-2/3 flex flex-col gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`sticky top-[135px] md:top-10  flex flex-col ${
                service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } bg-white rounded-2xl shadow-md overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 bg-[#F5F5F5] flex items-center justify-center p-4">
                <img
                  src={service.image}
                  alt="Service Illustration"
                  className="w-full h-auto max-h-[250px] object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
