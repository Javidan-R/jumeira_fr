"use client";
import React from "react";
import projectimage from "../../../../public/images/projectimage.png";
import ParallaxImage from "@/app/utils/ParallaxImage";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-between py-12 text-[#474747] sm:flex-row"
    >
      {/* Text Section */}
      <div className="flex-1 max-w-[600px] sm:max-w-[55%]">
        {/* Header */}
        <div className="relative ">
          <h2 className="text-2xl font-light text-[#C0A06C] md:text-2xl lg:text-3xl tracking-[1px] max-w-[900px] h-[80px] xl:h-[60px] absolute left-[10%] top-10">
            роскошный жилой комплекс в одной из самых востребованных локаций с
            видом на море
          </h2>
        </div>

        {/* Divider */}
        <div className="flex gap-2 mt-[20%]">
          <div className="w-[500px] xl:w-[288px] xl:mt-10 h-1 bg-[#D1D1D1] rounded-tr-lg rounded-br-lg opacity-90"></div>
          <div>
            <h2 className=" text-[80px] xl:mt-10 2xl:text-[60px] xl:text-[50px] lg:text-[40px] leading-[50px] xl:leading-[40px] lg:leading-[20px] font-extralight tracking-[8px] text-left  text-[#DAD5D6]">
              О проекте
            </h2>
            <div className="mt-10 text-[16px] leading-relaxed text-[#474747] md:text-lg lg:text-xl w-[400px] h-[504px]">
              <p>
                <span className="font-medium text-gray-900">Jumeira House</span>{" "}
                представляет собой уникальный проект для ценителей утонченной
                архитектуры и гармоничного пространства для жизни. Комплекс
                сочетает в себе благородство облика, внимание к деталям и
                высокий уровень комфорта. Следуя современным архитектурным
                тенденциям, Jumeira House воплощает идею пространства мечты, где
                каждая деталь продумана для вашего удобства. Внутри закрытой
                территории создается приватная атмосфера, где тишина и уединение
                встречаются с комфортом и элегантностью. Здесь каждый день
                наполнен комфортом, стилем и гармонией.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-[42.5%] mt-8 sm:mt-10 ">
        <ParallaxImage
          src={projectimage}
          alt="Jumeira project Image"
          height={900}
          objectFit="cover"
          quality={100}
          objectPosition="center"
          layout="responsive"
          loading="lazy"
          parallaxSpeed={0.1} // Adjust this value for the desired parallax effect
        />
      </div>
    </section>
  );
};

export default Projects;
