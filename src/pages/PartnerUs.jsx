import React from 'react'
import downloadImg from "../assets/images/Download.png";
// import qrImg from "../assets/images/QrCode.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import partnerQR from "../assets/images/PartnerQR.jpeg"

const PartnerUs = () => {
  return (
    <div className='partner-us flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-10 pt-10 pb-6'>
        <div className="w-full md:w-2/5 max-w-[700px] text-center md:text-right">
            <h1 className="text-[#000000] text-[30px] sm:text-[40px] md:text-[50px] leading-tight md:leading-[60px] font-semibold mb-4">
            Be a <span className="text-[#6C5DD3] tracking-wide">Partner</span> with us
            </h1>
    
            <p className="text-[#A1A2A1] text-[16px] sm:text-[18px] font-medium tracking-wide mb-6">
            Estetica empowers you to grow your brand, promote services, and manage bookings with ease. Track performance and engage a wider audience—all from one powerful platform.
            </p>
    
            <div className="flex flex-col sm:flex-row-reverse justify-start items-center gap-4">
            <img src={partnerQR} alt="qr_image" className="w-[120px]" />
    
            <div className="flex flex-row sm:flex-col gap-2">
                <a className="bg-black rounded-xl flex items-center gap-2 p-2 px-4 min-w-[100px]" href="https://play.google.com/store/apps/details?id=com.esteticaapp.user" target="_blank">
                    <BiLogoPlayStore className="text-white size-6" />
                    <div>
                        <p className="text-[10px] text-white tracking-tighter">GET IT ON</p>
                        <p className="text-white text-[14px] font-semibold">Google Play</p>
                    </div>
                </a>
    
                <a className="bg-black rounded-xl flex items-center gap-2 p-2 px-4 min-w-[100px]" href="https://apps.apple.com/in/app/estetica/id6739260215" target="_blank">
                    <FaApple className="text-white size-6" />
                    <div>
                        <p className="text-[10px] text-white tracking-tighter">Download on</p>
                        <p className="text-white text-[14px] font-semibold">App Store</p>
                    </div>
                </a>
            </div>
            </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
            <img
                src={downloadImg}
                alt="Download_image"
                className="w-full max-w-[400px] md:max-w-[430px] mt-6 md:mt-0"
            />
        </div>
    </div>
  )
}

export default PartnerUs
