import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import feedbackImg from "../assets/images/feedback.png";

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
        {[1, 2, 3, 4, 5].map((id) => (
          <SwiperSlide key={id}>
            <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 h-full flex flex-col gap-4">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={feedbackImg}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm">Rubaida Kanon</h3>
                  <p className="text-xs text-gray-500">New York, USA</p>
                </div>
                <div className="ml-auto flex text-[#6C5DD3]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Standard Dummy Lorem Ipsum Is
                Simply. Lorem Ipsum Is Simply Dummy Text."
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
