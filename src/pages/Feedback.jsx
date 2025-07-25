// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { FaStar } from "react-icons/fa";
// import "swiper/css";
// import feedbackImg from "../assets/images/feedback.png";

// const Feedback = () => {
//   return (
//     <div className="px-6 sm:px-10 py-16 max-w-screen-xl mx-auto">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
//         <h1 className="text-3xl sm:text-4xl font-semibold text-center">
//           Real <span className="text-[#6C5DD3]">Feedback</span> From Our{" "}
//           <span className="text-[#6C5DD3]">Happy</span> Customers
//         </h1>
//       </div>

//       {/* Swiper Carousel */}
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={24}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 1.2 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 2.5 },
//           1280: { slidesPerView: 3 },
//         }}
//       >
//         {[1, 2, 3, 4, 5].map((id) => (
//           <SwiperSlide key={id}>
//             <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 h-full flex flex-col gap-4">
//               {/* Profile */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src={feedbackImg}
//                   alt="profile"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-sm">Rubaida Kanon</h3>
//                   <p className="text-xs text-gray-500">New York, USA</p>
//                 </div>
//                 <div className="ml-auto flex text-[#6C5DD3]">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <FaStar key={i} size={14} />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed">
//                 "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
//                 Industry. Lorem Ipsum Has Been The Standard Dummy Lorem Ipsum Is
//                 Simply. Lorem Ipsum Is Simply Dummy Text."
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Feedback;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { StarHalf } from "lucide-react";
import "swiper/css";
import feedbackImg from "../assets/images/feedback.png";
import harshaImg from "../assets/images/harsha.png";
import vamshiImg from "../assets/images/vamshi.png";
import rajeshImg from "../assets/images/rajesh.png";
import lavanyaImg from "../assets/images/lavanya.png";

const feedbackData = [
  {
    name: "Nomula Harsha Vardhan Reddy",
    location: "Hyderabad, Telangana - User",
    image: harshaImg,
    feedback:
      "Estetica made it so easy to book my appointments! The interface is clean, and everything—from choosing services to payment—was seamless. I love how quick and professional the whole process was.",
    fullStars:4,
    halfStar:1,
  },
  {
    name: "Vamsi Manda",
    location: "Hyderabad, Telangana -Vendor",
    image: vamshiImg,
    feedback:
      "Being a vendor on Estetica has been a game changer for my salon. We get more visibility, smoother customer bookings, and the backend system is super intuitive. Highly recommend it to any salon business!",
    fullStars:5,
    halfStar:0,
  },
  {
    name: "Lavanya Mareddy",
    location: "Chennai, Tamil Nadu - User",
    image: lavanyaImg,
    feedback:
      "I absolutely loved using Estetica! The booking was quick, the professionals were polite and skilled, and I felt genuinely cared for. This platform saves me time and gives me peace of mind every time.",
    fullStars:5,
    halfStar:0,
  },
  {
    name: "Rajesh Alachandra",
    location: "Hyderabad, Telangana - User",
    image: rajeshImg,
    feedback:
      "Fantastic experience! The service providers were professional, punctual, and the app made everything so convenient. I’ve already recommended Estetica to all my friends!",
    fullStars:5,
    halfStar:0,
  },
];



const Feedback = () => {
  return (
    <div className="px-6 sm:px-10 py-16 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center md:text-left">
          Real <span className="text-[#6C5DD3]">Feedback</span> From Our{" "}
          <span className="text-[#6C5DD3]">Happy</span> Customers
        </h1>
        <p className="text-center md:text-left text-[#455151] text-[14px] w-[500px]" >Every review you see here is a real story from a happy customer or a thriving vendor. Their words reflect the ease, trust, and satisfaction that Estetica delivers with every appointment and service experience.</p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
      >
        {feedbackData.map((item, index) => (
          <SwiperSlide key={index} className="p-2">
            <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 h-full flex flex-col gap-4 min-h-[200px] max-w-[360px] w-full mx-auto">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt="profile"
                  className="w-12 h-12 rounded-full"  
                />
                <div>
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
                <div className="ml-auto flex text-[#FFCB14]">
                  {Array.from({ length: item.fullStars }, (_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                  {item.halfStar > 0 && <StarHalf size={14} />}
                </div>
              </div>
              <p className="text-[14px]  text-gray-700 leading-tight">
                "{item.feedback}"
              </p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
