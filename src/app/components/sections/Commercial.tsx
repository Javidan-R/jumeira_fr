import React from "react";
import comm from "../../../../public/images/comm.png";
import comm2 from "../../../../public/images/comm2.png";
import ParallaxImage from "@/app/utils/ParallaxImage";

export const Commercial = () => {
  return (
    <section className="relative flex justify-end py-32" id="commercial">
      <div className="w-[1740px] h-[824px] gap-0 ">
        <h2 className=" text-[28px] xl:text-[24px] font-medium tracking-[2px] text-left leading-[40px]  text-[#C0A06C] w-[70%] xl:ml-20">
          РАЗВИВАЙТЕ СВОЙ БИЗНЕС И ПОЛЬЗУЙТЕСЬ ПРЕИМУЩЕСТВАМИ УНИКАЛЬНОЙ СРЕДЫ
          JUMEIRA HOUSE КАЖДЫЙ ДЕНЬ
        </h2>

        <div className="relative flex items-start justify-between gap-20 mt-16">
          <div className="relative xl:left-[5%]">
            <div className="absolute  w-[372px] xl:w-[320px] h-[464px] xl:h-[380px] z-10  left-[264px] xl:left-[200px]">
              <ParallaxImage
                src={comm}
                alt="Arch"
                layout="fill"
                objectFit="cover"
                quality={75}
                parallaxSpeed={0.05}
              />
            </div>
            <div className="absolute top-[200px] xl:w-[320px] xl:top-[200px] left-0  w-[372px] h-[464px] xl:h-[380px]">
              <ParallaxImage
                src={comm2}
                alt="Arch2"
                layout="fill"
                objectFit="cover"
                quality={75}
                parallaxSpeed={0.07}
              />
            </div>
          </div>
          <div className="w-1/3 relative left-[15%] xl:left-[20%] bottom-[10%]">
            <h2 className=" text-[80px] 2xl:text-[60px] xl:text-[50px] lg:text-[40px] leading-[50px] xl:leading-[40px] lg:leading-[20px] font-extralight tracking-[8px] text-left  text-[#DAD5D6]">
              Коммерция
            </h2>

            <p className="text-[#474747] text-[18px] leading-[32px] xl:my-5 tracking-[1px] text-left">
              {" "}
              Арочные элементы, ставшие ключевым мотивом дизайна, придают
              зданиям элегантность и выразительность, подчеркивая их статус и
              уникальный характер. Архитектура{" "}
              <span className="font-medium text-gray-900">Jumeira House</span> —
              это утонченное искусство, наполняющее пространство величием и
              красотой.
            </p>

            {/* Button */}
            <button className="mt-16 px-6 py-3 bg-transparent text-[#C0A06C] border-2 border-[#C0A06C] rounded-sm font-lato font-medium text-[16px] leading-6 tracking-wide hover:bg-[#C0A06C] hover:text-white transition-colors duration-300">
              узнать больше
            </button>
          </div>
          <div className="relative">
            <div className="w-[200px] absolute right-0 top-[20%]">
              <div className="w-[200px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
              <div className="w-[2px] h-[400px] bg-[#D1D1D1] rounded-b-md  ml-[40%] mb-[10%] "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
