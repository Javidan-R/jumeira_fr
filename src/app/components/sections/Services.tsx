import React from "react";
import servicesImage from "../../../../public/images/services.png";
import ParallaxImage from "@/app/utils/ParallaxImage";

const Services = () => {
  return (
    <section id="services" className="">
      {/* Title Section */}
      <div className="w-[420px] xl:w-[280px] h-[2px] bg-[#D1D1D1] rounded-b-md absolute right-0"></div>

      {/* Content Section */}
      <div className="flex flex-col items-start mt-10 md:flex-row md:items-center md:justify-between md:gap-10">
        {/* Placeholder for Image/Map */}
        <div className="w-[980px] h-[618px] xl:w-[680px] xl:h-[558px]  rounded-r-md opacity-100 ml-[6%] ">
          <ParallaxImage
            src={servicesImage}
            alt="Gallery Image 2"
            width="100%"
            height="618px"
            className="rounded-r-md"
            objectFit="cover"
            quality={100}
            objectPosition="center"
            layout="responsive"
            loading="lazy"
            parallaxSpeed={0.1}
          />
        </div>
        {/* Description */}
        <div className=" w-[504px] xl:w-[404px] h-[256px] flex justify-start items-center   ">
          <div className="text-[16px] leading-relaxed text-[#474747] md:text-lg lg:text-xl relative right-[40%]">
            <p className="mb-20 xl:mb-4">
              Современные инженерные системы обеспечивают автономное отопление и
              бесперебойную подачу воды, создавая идеальные условия для жизни.
              Круглосуточный консьерж-сервис возьмет на себя ваши повседневные
              заботы, освобождая время для важного и ценного. За вашу
              безопасность отвечают передовые охранные системы и электронный
              контроль доступа, чтобы вы могли наслаждаться жизнью в атмосфере
              спокойствия и уюта.
            </p>

            {/* Button */}
            <button className=" px-6 py-3 bg-transparent text-[#C0A06C] border-2 border-[#C0A06C] rounded-sm font-lato font-medium text-[16px] leading-6 tracking-wide hover:bg-[#C0A06C] hover:text-white transition-colors duration-300">
              узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
