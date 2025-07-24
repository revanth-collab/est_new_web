import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header'
import dashboardImg from "../assets/images/PartnerDashboard.png";
import FAQSection from '../components/FAQSection/FAQSection';
import Contact from '../components/Contact/Contact';
import KeyFeatures from '../components/KeyFeatures/KeyFeatures';
import OnboardingCard from '../components/OnboardingCard/OnboardingCard';
import WeProvide from '../components/WeProvide/WeProvide';
import PartnerCarousel from '../components/PartnerCarousel/PartnerCarousel';
import BorderImage from "../assets/images/Border.png"
import Vector from "../assets/images/Vector.png"
import UpdateDashboardImg from "../assets/images/UpdateDashboardImg.png"

import Footer from "./Footer"

const PartnerPage = () => {
  const navigate = useNavigate();
  return (
      <>
        <Header color='#0D0C17'/>

        <div className='relative bg-[#0D0C17]'>
          <img src={BorderImage} alt="Border_Image" className='absolute top-0 right-0 h-[120px] sm:h-[250px] md:h-[300px] z-10' />
          <img src={Vector} alt="vector" className='absolute top-[20px] md:top-[50px] left-10 md:left-20 h-[12px] z-10' />
          <div className='pt-10'>
              <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[#FFFFFF] text-[24px] sm:text-[50px] text-center font-bold leading-[24px] sm:leading-[70px] w-[90%] mb-5'>Everything You Need to Run <br />& Grow Your Business</h1>
                  <p className='text-[#64748B] font-medium text-center text-[14px] leading-[18px] w-[90%] sm:w-[57%] mb-5'>Estetica’s Partner Suite brings bookings, staff, revenue, and customer management into one smart system — built to simplify your day-to-day and boost your growth.</p>
                  <button className='partner-button px-[65px] sm:px-[100px] py-3 sm:py-4 rounded-[15px] mb-[10px] text-white font-semibold' onClick={()=>navigate('/contact')}>Register your store</button>
              </div>
          </div>

          <div className="sticky w-full flex justify-center pt-5 pb-5">
            <div className="absolute top-0 left-0 w-full h-1/2 z-[-1] bg-[#0D0C17]" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-[-1] bg-white" />
            <img
              src={UpdateDashboardImg}
              alt="dummyImage"
              className="w-full max-w-[900px] h-auto"
            />
          </div>

        </div>


        <PartnerCarousel />
        <WeProvide />
        <KeyFeatures />
        <OnboardingCard />
        <Contact />
        <FAQSection />
        <Footer />
      </>
  )
}

export default PartnerPage

