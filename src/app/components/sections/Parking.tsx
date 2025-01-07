import React from "react";
import ParallaxImage from "@/app/utils/ParallaxImage"; // Make sure this path is correct
import parkingImage from "../../../../public/images/Parking.png";

const Parking = () => {
  return (
    <section id="parking" className="">
      <div className="flex flex-col items-center mt-10 md:flex-row md:items-start md:justify-between md:gap-10">
        {/* Description */}
        <div className="flex items-end justify-center w-full mb-10 md:w-1/2 md:mb-0 ">
          <div className="w-[400px] xl:w-[300px]">
            <div className="w-[400px] xl:w-[300px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>
            <div className="w-[2px] h-[400px] bg-[#D1D1D1] rounded-b-md  ml-[60%]  mb-[10%] "></div>
          </div>
          <div className="w-[504px]   text-base leading-relaxed text-[#474747] md:text-lg lg:text-xl flex flex-col items-start justify-end ">
            <p className="mt-20 ">
              В <span className="font-medium text-gray-900">Jumeira House</span>{" "}
              расположен двухуровневый подземный паркинг на 160 автомобилей, где
              продумана каждая деталь для вашего удобства. Широкие проезды
              обеспечивают комфортную парковку, а места под каждой секцией
              сокращают путь до лифта, позволяя легко разгрузить вещи или
              донести спящего ребенка. Чистоту в паркинге поддерживает
              автоматическая система мойки колес на въезде, создавая опрятное и
              комфортное пространство для жителей.
            </p>
            {/* Button */}
            <button className="w-[240px]  h-[60px] px-6 py-3  bg-transparent text-[#C0A06C] border-2 border-[#C0A06C] rounded-sm font-lato font-medium text-[16px] leading-6 tracking-wide hover:bg-[#C0A06C] hover:text-white transition-colors duration-300">
              узнать больше
            </button>
          </div>
        </div>
        {/* Image/Map */}
        <div className="w-full md:w-1/2 ">
          <ParallaxImage
            src={parkingImage}
            alt="Parking Image"
            height={598}
            objectFit="cover"
            quality={100}
            parallaxSpeed={0.1} // Adjust this value for the desired parallax effect
          />
        </div>
      </div>
    </section>
  );
};

export default Parking;
