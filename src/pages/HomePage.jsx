import React from 'react'
import UpdatedMobileImage from "../assets/images/UpdatedHomePageImage.png"

const HomePage = () => {
  return (
    <div className='px-4 py-10 flex flex-col md:flex-row justify-center items-center gap-4'>
      <div className='flex flex-col items-start gap-4'>
        <h1 className="text-black text-[26px] sm:text-[36px] md:text-[50px] lg:text-[70px] leading-tight md:leading-[65px] font-semibold max-w-[90%] md:max-w-[700px] z-10">
            Your <span className="text-[#6C5DD3]">Beauty & Wellness</span> Ecosystem
        </h1>
        <p className="text-[#64748B] text-[16px] sm:text-[18px] md:text-[20px] max-w-[90%] md:max-w-[600px] z-10">
            Discover top-rated salons, spas & clinics. Book instantly.
        </p>
        <button className='text-white font-semibold bg-[#6C5DD3] p-2 px-5 rounded-[20px] z-10 mb-3'>
            <a href="https://play.google.com/store/apps/details?id=com.esteticaapp.user" target="_blank">Get the App</a>
        </button>
      </div>
    </div>
  )
}

export default HomePage
