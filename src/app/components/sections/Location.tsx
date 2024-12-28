import React from "react";

const Location = () => {
  return (
    <div className="">
      {/* Title Section */}
      <div className="flex items-center justify-between w-full gap-10">
        <div className="w-[514px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
        <p className="text-[#DAD5D6] text-[80px] font-light font-lato text-center w-[768px]">
          Расположение
        </p>
        <div className="w-[514px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start mt-10 md:flex-row md:items-center md:justify-between md:gap-10">
        {/* Placeholder for Image/Map */}
        <div className="w-[1080px] h-[588px] bg-gray-300 rounded-r-md opacity-100"></div>
        {/* Description */}
        <div className=" w-[504px] h-[224px] flex justify-start   ">
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
    </div>
  );
};

export default Location;
