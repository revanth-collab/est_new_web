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
import "swiper/css";
import feedbackImg from "../assets/images/feedback.png"; // Same image for all users, you can customize

const feedbackData = [
  {
    name: "Aarav Mehta",
    location: "Mumbai, Maharashtra",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    feedback:
      "Super seamless experience! Booking was quick, and the service quality was top-notch. Definitely using it again.",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "The app is very user-friendly. I could book a service for my parents within minutes. Highly recommended!",
  },
  {
    name: "Rohit Verma",
    location: "Bengaluru, Karnataka",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    feedback:
      "Excellent range of services and the providers arrived right on time. Very professional and hassle-free.",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    feedback:
      "Customer support was very helpful when I had a query. Really impressed with how smooth the process was.",
  },
  {
    name: "Karan Patel",
    location: "Ahmedabad, Gujarat",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "Loved the experience! Clean UI and reliable service. Glad to see something this efficient in India.",
  },
];



const Feedback = () => {
  return (
    <div className="px-6 sm:px-10 py-16 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          Real <span className="text-[#6C5DD3]">Feedback</span> From Our{" "}
          <span className="text-[#6C5DD3]">Happy</span> Customers
        </h1>
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
              {/* Profile */}
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
                <div className="ml-auto flex text-[#6C5DD3]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
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
