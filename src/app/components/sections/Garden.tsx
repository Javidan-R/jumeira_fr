"use client";
import React from "react";
import gardenImage from "../../../../public/images/garden.png";
import Image from "next/image";

type Props = {};

const Garden: React.FC<Props> = () => {
  // const [scrollY, setScrollY] = useState(0);

  // // Scroll handle function optimized with useCallback and throttling
  // const handleScroll = useCallback(() => {
  //   requestAnimationFrame(() => {
  //     setScrollY(window.scrollY);
  //   });
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);
  return (
    <section
      id="garden"
      className="flex flex-col justify-between py-32 text-gray-800 sm:flex-row"
    >
      {/* Text Section */}
      <div className="flex-1 max-w-[600px] sm:max-w-[55%]">
        {/* Header */}
        <div className="relative ">
          <h2 className="text-2xl font-light text-[#C0A06C] md:text-3xl lg:text-4xl max-w-[900px] h-[80px] absolute left-[10%] top-10">
            ИДЕАЛЬНОЕ СОЧЕТАНИЕ ПРИРОДЫ, КОМФОРТА И ФУНКЦИОНАЛЬНОГО
            БЛАГОУСТРОЙСТВА
          </h2>
        </div>

        {/* Divider */}
        <div className="flex gap-2 mt-[20%]">
          <div className="w-[500px] h-1 bg-[#D1D1D1] rounded-tr-lg rounded-br-lg opacity-90"></div>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-[#DAD5D6] w-[400px]">
              обустройство
            </h1>
            <div className="mt-10 text-[16px] leading-relaxed text-[#474747] md:text-lg lg:text-xl w-[400px] h-[504px]">
              <p>
                Гордость{" "}
                <span className="font-medium text-gray-900">Jumeira House</span>{" "}
                — собственный двор-сад, созданный профессиональными ландшафтными
                дизайнерами. Пространство сочетает в себе  мощеные дорожки,
                гравийные тропы и зеленые газоны, где пирамидальные туи и
                ярусное озеленение формируют гармоничный ландшафт. Лиственные
                деревья плавно переходят в низкорослые сосны и аккуратно
                стриженные кустарники, создавая ощущение уюта и порядка. Живая
                изгородь обеспечивает приватность зон отдыха, а продуманная
                планировка двора делает его идеальным местом для прогулок,
                спокойного отдыха с семьей и встреч с близкими.
              </p>
            </div>
          </div>
        </div>

        {/* Subheader & Description */}
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-[42.5%] mt-8 sm:mt-10 ">
        <Image
          src={gardenImage}
          alt="Jumeira project Image"
          width={816}
          height={900}
          objectFit="cover"
          quality={100}
          objectPosition="center"
          layout="responsive"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Garden;
