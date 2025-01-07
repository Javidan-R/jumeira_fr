"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { StaticImageData } from "next/image";

// Import ParallaxImage component with proper type annotations
import ParallaxImage from "@/app/utils/ParallaxImage";

// Type for images
import galery1 from "../../../../public/images/gallery.png";
import galery2 from "../../../../public/images/gallery.png";
import galery3 from "../../../../public/images/gallery.png";

// Assuming these are SVG components with props
import { ActiveDot, ArrowLeft, ArrowRight, DeactiveDot } from "@public/icons";

const Gallery: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleBulletClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="my-10" id="galery">
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
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Listen for slide change events to update activeIndex
            swiper.on("slideChange", () => {
              setActiveIndex(swiper.realIndex);
            });
          }}
        >
          {([galery1, galery2, galery3] as StaticImageData[]).map(
            (image: StaticImageData, index: number) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[500px] sm:h-[700px] md:h-[900px] relative">
                  <ParallaxImage
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    height={900}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    parallaxSpeed={0.05}
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="flex items-center justify-center ">
          <div className="relative flex justify-between top-2">
            <button
              className="absolute right-[100px] p-0 bg-transparent border-none "
              onClick={handlePrevClick}
            >
              <ArrowLeft />
            </button>
            <div className="flex items-center justify-center gap-4">
              {[0, 1, 2].map((idx) => (
                <button key={idx} onClick={() => handleBulletClick(idx)}>
                  {idx === activeIndex ? <ActiveDot /> : <DeactiveDot />}
                </button>
              ))}
            </div>
            <button
              className="absolute left-[100px] p-0 bg-transparent border-none "
              onClick={handleNextClick}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Pagination Dot Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: auto;
          height: auto;
          background: none;
          opacity: 1;
        }
        .swiper-pagination-bullet svg {
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
