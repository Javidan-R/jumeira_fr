import Image from "next/image";
import React from "react";
import arch from "../../../../public/images/arch.png";
import arch2 from "../../../../public/images/arch2.png";
import { ArchVector } from "@public/icons/ArchVector";

export const Architecture = () => {
  return (
    <section className="relative flex justify-center py-20" id="architecture">
      <div className="w-[400px] absolute left-0 top-[-3%]">
        <div className="w-[400px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
        <div className="w-[2px] h-[400px] bg-[#D1D1D1] rounded-b-md  ml-[60%] mb-[10%] "></div>
      </div>
      <div className="w-[1454px] h-[1173px] gap-0  pl-[10%]">
        <h2 className=" text-[80px] font-light tracking-[8px] text-left  text-[#DAD5D6]">
          Архитектура
        </h2>

        <div className="flex items-start justify-start mt-10">
          <div className="w-1/2">
            <p className="text-[#474747] font-inter text-[18px] font-light leading-[32px] tracking-[1px] text-left  decoration-from-font  w-10/12">
              Изящный и благородный облик здания вдохновлен
              традициями неоклассики, где каждая деталь отражает роскошь и
              элегантность. Четкий ритм фасадов, геометрическое деление и
              богатый декор создают ощущение величия и гармонии, наделяя
              архитектуру особой царственной харизмой.
            </p>

            {/* Button */}
            <button className="mt-16 px-6 py-3 bg-transparent text-[#C0A06C] border-2 border-[#C0A06C] rounded-sm font-lato font-medium text-[16px] leading-6 tracking-wide hover:bg-[#C0A06C] hover:text-white transition-colors duration-300">
              узнать больше
            </button>
          </div>

          <div className="relative ">
            <div className="absolute top-0 left-0 w-[372px] h-[464px] z-10">
              <Image
                src={arch}
                alt="Arch"
                className="border-t-2 border-l-2 border-[#C0A06C] rounded-tl-[2px]"
              />
            </div>
            <div className="absolute top-[200px] left-[264px] w-[372px] h-[464px]">
              <Image
                src={arch2}
                alt="Arch2"
                className="border-t-2 border-l-2 border-[#C0A06C] rounded-tl-[2px]"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 mt-[15%] ">
          <div className="w-[372px] h-[406px]  pr-[46px] ">
            <ArchVector />
          </div>
          <div className="w-4/12 mt-20">
            <p className="text-[#474747] text-[18px] leading-[32px] tracking-[1px] text-left">
              {" "}
              Арочные элементы, ставшие ключевым мотивом дизайна, придают
              зданиям элегантность и выразительность, подчеркивая их статус и
              уникальный характер. Архитектура{" "}
              <span className="font-medium text-gray-900">Jumeira House</span> —
              это утонченное искусство, наполняющее пространство величием и
              красотой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};