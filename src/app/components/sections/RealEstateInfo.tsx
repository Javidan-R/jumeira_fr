import React from "react";
import Image from "next/image";

interface RealEstateInfoProps {
  title: string;
  description: string;
  details: string[];
  imageUrl: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

const RealEstateInfo: React.FC<RealEstateInfoProps> = ({
  title,
  description,
  details,
  imageUrl,
  imageAlt,
  imagePosition,
}) => {
  return (
    <div className="p-6 bg-white rounded shadow-md flex flex-col md:flex-row">
      {imagePosition === "left" && (
        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={300}
            className="rounded"
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
        <div className="space-y-4">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-700">
              {detail}
            </p>
          ))}
        </div>
      </div>
      {imagePosition === "right" && (
        <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={300}
            className="rounded"
          />
        </div>
      )}
    </div>
  );
};

export default RealEstateInfo;
