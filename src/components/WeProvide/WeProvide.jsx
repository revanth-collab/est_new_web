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
import UpdateLaptop from "../../assets/images/UpdateLaptop.png"
import Image2 from "../../assets/images/PartnerPageImage2.png"
import Image3 from "../../assets/images/PartnerPageImage3.png"

const WeProvide = () => {
  const services = [
    {
      title: 'Web CRM – Your Command Center',
      description:
        'Get a bird’s-eye view of your business — from appointments to analytics, all in real-time. Easily manage bookings, monitor staff performance, check reports, and control pricing.',
      imageLeft: true,
      image:UpdateLaptop,
      features: [
        'Smart-Dashboard',
        'Quick-Bookings',
        'Staff-Tracking',
        'Live-Analytics',
        'Easy-Pricing',
      ]
    },
    {
      title: 'Partner App – Manage Anytime, Anywhere',
      description:
        'Run your outlet on-the-go. Accept bookings, manage availability, and launch offers with a tap. Stay connected with your business, wherever you are.',
      imageLeft: false,
      image:Image2,
      features: [
        'Quick-Offers',
        'On-the-Go',
        'Always-Connected',
        'Instant-Bookings',
        'Smart-Availability',
      ]
    },
    {
      title: 'Professional App – Empower Your Staff',
      description:
        'Let your team view their daily schedules, client notes,  mark attendance, and performance tracking at their fingertips .Seamlessly supports both in-store operations and home visit services.',
      imageLeft: true,
      image:Image3,
      features: [
        'Team-Schedules',
        'Client-Notes',
        'Attendance',
        'Performance-Track',
        'Dual-Mode (for in-store + home visits)',
      ]
      
    },
  ];

  return (
    <div className="w-full py-[70px]  px-6 md:px-10 lg:px-[90px] lg:py-[150px] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side Title */}
        <div className="md:w-1/3 md:h-[285px] sticky top-6 md:top-[30%] h-fit">
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
              className={`sticky top-[135px] md:top-[30%]  flex flex-col ${
                service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } bg-white rounded-3xl shadow-md overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full md:w-1/10 bg-[#F5F5F5] flex items-center justify-center p-4">
                <img
                  src={service.image}
                  alt="Service Illustration"
                  className="w-full h-auto max-h-[250px] object-contain"
                />
              </div>

              {/* Text Content */}
              <div className={`w-full md:w-7/10 p-6 flex flex-col justify-center ${service.imageLeft ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-lg sm:text-2xl font-bold mb-2">{service.title}</h3>
                {/* <p className="text-[16px] keading-[25px] text-[#64748B]">{service.description}</p> */}
                {service.features && (
                  // <ul className="flex flex-wrap gap-3 space-y-1 text-[14px] text-[#64748B] font-semibold">
                  //   {service.features.map((feature, i) => (
                  //     <li key={i} className="flex items-center gap-2">
                  //       <span className="text-[#64748B]">•</span> {feature}
                  //     </li>
                  //   ))}
                  // </ul>
                  <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-[#64748B] font-semibold ${service.imageLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                    {service.features.map((feature, i) => (
                      <li key={i} className="gap-2 text-left w-[140px]">
                        <span className="text-[#64748B]">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
