import React from "react";
import devimg from "../../../../public/images/devimg.png";
import ParallaxImage from "@/app/utils/ParallaxImage";
const Developer = () => {
  return (
    <section className="" id="developer">
      {/* Title Section */}

      {/* Content Section */}
      <div className="flex flex-col items-start mt-10 md:flex-row md:justify-between md:gap-10">
        <div className="w-[288px] h-[2px] bg-[#D1D1D1] rounded-b-md "></div>

        {/* Description */}
        <div className=" w-[504px] h-[256px] flex justify-end items-start   ">
          <div className="">
            <h2 className=" text-[80px] 2xl:text-[60px] xl:text-[50px] lg:text-[40px] leading-[50px] xl:leading-[30px] lg:leading-[20px] font-extralight tracking-[8px] text-left  text-[#DAD5D6]">
              застройщик
            </h2>

            <p className="mb-20 xl:mb-14 lg:mb-10 my-14 text-[#474747] text-[18px] leading-[32px] tracking-[1px] text-left font-extralight">
              Ваш будущий дом строила девелоперская компания{" "}
              <span className="font-medium text-gray-900">ABSOLUT</span>,
              успешно работающая на рынке более 15 лет. За это время компания
              реализовала более 250 000 м² недвижимости, зарекомендовав себя как
              надёжный застройщик. Компания строит свою репутацию на высоком
              качестве работ, строгом соблюдении сроков и норм строительства, а
              также  индивидуальном подходе к каждому покупателю. Именно эти
              принципы обеспечивают высокий уровень доверия и лояльности
              клиентов.
            </p>

            {/* Button */}
            <button className=" px-6 py-3 bg-transparent text-[#C0A06C] border-2 border-[#C0A06C] rounded-sm font-lato font-medium text-[16px] leading-6 tracking-wide hover:bg-[#C0A06C] hover:text-white transition-colors duration-300">
              узнать больше
            </button>
          </div>
        </div>
        {/* Placeholder for Image/Map */}
        <div className="w-[816px] h-[752px] xl:w-[716px] xl:h-[670px]  rounded-;-md opacity-100 ml-[6%]">
          <ParallaxImage
            src={devimg}
            alt="Developer Image"
            objectPosition="fill"
            objectFit="cover"
            quality={100}
            parallaxSpeed={0.1} // Adjust this value for the desired parallax effect
          />
        </div>
      </div>
    </section>
  );
};

export default Developer;
