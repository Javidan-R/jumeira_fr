import Image from "next/image";
import React from "react";
import Locationimage from "../../../../public/images/Locationimage.png";
const Location = () => {
  return (
    <section id="location" className="py-32">
      {/* Title Section */}
      <div className="flex items-center justify-between w-full gap-10">
        <div className="w-[514px] xl:w-[380px]  h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-[#DAD5D6] ">
          Расположение
        </h2>
        <div className="w-[514px] xl:w-[380px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start mt-10 md:flex-row xl:items-start md:justify-between md:gap-10">
        {/* Placeholder for Image/Map */}
        <div className=" w-[60%] xl:w-[50%] ">
          <Image
            src={Locationimage}
            alt="Parking Image"
            objectFit="cover"
            className="rounded-r-md"
          />
        </div>
        {/* Description */}
        <div className=" w-[504px] xl:w-[404px] h-[224px] flex justify-start   ">
          <div className="text-[16px] leading-relaxed text-[#474747] md:text-lg lg:text-xl relative right-[40%]">
            <p>
              <span className="font-medium text-gray-900">Jumeira House</span>{" "}
              расположен в самом динамичном районе Каспийска, рядом с Анжи
              Ареной, живописным пляжем и всего в нескольких минутах
              от аэропорта Махачкалы. Удобный выезд на проспект
              Насрутдинова и улицу Амет-Хана Султана позволяет быстро добраться
              до центра Махачкалы и других ключевых точек города.
            </p>

            {/* Button */}
            <button className="mt-6 px-6 py-3 bg-transparent text-[#C0A06C] border-2 border-[#C0A06C] rounded-sm font-lato font-medium text-[16px] leading-6 tracking-wide hover:bg-[#C0A06C] hover:text-white transition-colors duration-300">
              узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
