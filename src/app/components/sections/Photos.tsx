import React from "react";
import Image from "next/image";
import image01 from "../../../../public/images/image01.png";
import image02 from "../../../../public/images/image02.png";
import image03 from "../../../../public/images/image03.png";
import image04 from "../../../../public/images/image04.png";
import image05 from "../../../../public/images/image05.png";

const images = [
  { src: image01, alt: "Jumeira Hotel Dagistan - Image 1" },
  { src: image02, alt: "Jumeira Hotel Dagistan - Image 2" },
  { src: image03, alt: "Jumeira Hotel Dagistan - Image 3" },
  { src: image04, alt: "Jumeira Hotel Dagistan - Image 4" },
  { src: image05, alt: "Jumeira Hotel Dagistan - Image 5" },
];

export const Photos = () => {
  return (
    <section id="photos" className="w-full min-h-[420px] py-20">
      <div className="flex justify-start gap-5">
        {images.map((image, index) => (
          <Image
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-lg"
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
