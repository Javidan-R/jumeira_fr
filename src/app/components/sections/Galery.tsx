import Image from "next/image";
import React from "react";
import galery from "../../../../public/images/gallery.png";

const Galery = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-20">
        <h2 className="text-[#C0A06C] font-[Playfair Display] font-medium text-[28px] leading-[40px] tracking-wide w-[1030px] h-[80px] 	">
          JUMEIRA HOUSE — ЭТО ВОЗМОЖНОСТЬ СОЗДАТЬ СВОЙ ИДЕАЛЬНЫЙ СЦЕНАРИЙ ЖИЗНИ
          И НАСЛАЖДАТЬСЯ ИМ ежедневно!
        </h2>
      </div>
      <div className="w-full h-[900px]">
        <Image
          src={galery}
          alt="Jumeira galery"
          objectFit="contain"
          quality={100}
          className="w-full h-[900px]"
        />
      </div>
    </div>
  );
};

export default Galery;
