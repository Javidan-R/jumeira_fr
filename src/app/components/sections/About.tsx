"use client";

import React from "react";
import Image from "next/image";
import Jumeiralogo from "../../../../public/images/JumeiraLogoMini.webp";

const About: React.FC = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-presentation.pdf";
    link.download = "presentation.pdf";
    link.click();
  };

  const handleViewLayoutsClick = () => {
    window.location.href = "/path-to-your-layouts-page";
  };

  return (
    <section className="p-10" id="about">
      <div className="flex flex-col items-center w-[636px] h-[514px] relative  left-[45%] xl:left-[40%]">
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-between w-[238px] h-[96px] p-6  space-y-3">
            <div className="text-[16px] font-medium text-[#B2B2B2] font-playfair tracking-wider text-right decoration-2">
              Адрес
            </div>
            <div className="text-[16px] font-medium text-[#B2B2B2] font-playfair tracking-wider text-right decoration-2">
              Количество квартир
            </div>
            <div className="text-[16px] font-medium text-[#B2B2B2] font-playfair tracking-wider text-right decoration-2">
              Площадь квартир
            </div>
          </div>
          <div className="w-[2px] h-[514px] bg-[#BC9861] rounded-b-md opacity-100"></div>
          <div className="flex flex-col justify-around items-start w-[372px] h-[514px] p-6">
            <Image
              src={Jumeiralogo}
              alt="Jumeira Logo"
              width={108}
              height={126}
            />
            <div className="w-full mb-6 space-y-3">
              <div className="text-[16px] font-medium text-[#474747] tracking-wider text-left ">
                Каспийск, проспект Акулиничева,27
              </div>
              <div className="text-[16px] font-medium text-[#474747] tracking-wider text-left ">
                375 квартир
              </div>
              <div className="text-[16px] font-medium text-[#474747] tracking-wider text-left ">
                45,9 м² - 129,2 м²
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={handleDownloadClick}
                className="w-[240px] h-[24px] text-[#474747] hover:text-[#BC9861] text-start"
              >
                СКАЧАТЬ ПРЕЗЕНТАЦИЮ
              </button>
              <button
                onClick={handleViewLayoutsClick}
                className="w-[240px] h-[24px] text-[#474747] hover:text-[#BC9861] text-start"
              >
                СМОТРЕТЬ ПЛАНИРОВКИ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
