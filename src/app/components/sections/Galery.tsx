"use client"; // Bu xətti əlavə edin
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper CSS-in doğru yolu

import "swiper/css/navigation";
import "swiper/css/pagination";

// Şəkil yollarını tənzimləyin
import galery1 from "../../../../public/images/gallery.png";
import galery2 from "../../../../public/images/gallery.png";
import galery3 from "../../../../public/images/gallery.png";

// Custom Arrow Components
// const CustomPrevArrow = () => (
//   <button className="swiper-button-prev bg-[#C0A06C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#b0905a] absolute left-0 top-[50%] transform -translate-y-[50%] z-10">
//     &#8592;
//   </button>
// );

// const CustomNextArrow = () => (
//   <button className="swiper-button-next bg-[#C0A06C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#b0905a] absolute right-0 top-[50%] transform -translate-y-[50%] z-10">
//     &#8594;
//   </button>
// );

const Gallery = () => {
  return (
    <section className="my-20" id="galery">
      {/* Title Section */}
      <div className="flex items-center justify-center px-4 mb-10">
        <h2 className="text-[#C0A06C] font-[Playfair Display] font-medium text-[20px] leading-[30px] text-center md:text-[28px] md:leading-[40px] max-w-[90%] md:max-w-[1030px]">
          JUMEIRA HOUSE — ЭТО ВОЗМОЖНОСТЬ СОЗДАТЬ СВОЙ ИДЕАЛЬНЫЙ СЦЕНАРИЙ ЖИЗНИ
          И НАСЛАЖДАТЬСЯ ИМ ежедневно!
        </h2>
      </div>

      {/* Slider Section */}
      <div className="relative w-full mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
        >
          <SwiperSlide>
            <div className="w-full h-[500px] sm:h-[700px] md:h-[900px] relative">
              <Image
                src={galery1}
                alt="Gallery Image 1"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[500px] sm:h-[700px] md:h-[900px] relative">
              <Image
                src={galery2}
                alt="Gallery Image 2"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[500px] sm:h-[700px] md:h-[900px] relative">
              <Image
                src={galery3}
                alt="Gallery Image 3"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Gallery;
