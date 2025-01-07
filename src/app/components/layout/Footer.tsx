import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Telegram, Whatsapp } from "@public/icons";

// Define a type for the props to enhance type safety
interface FooterProps {
  logo: StaticImageData;
  links: { href: string; label: string }[];
  address: string;
  phoneNumber: string;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  links,
  address,
  phoneNumber,
  copyright,
}) => {
  return (
    <footer className="text-[#4B4F54] flex justify-end">
      <div className="w-[80%] h-[375px] flex flex-col justify-end">
        <div className="flex justify-center">
          <Image src={logo} alt="Logo" loading="lazy" />
        </div>
        <div className="border-b-2 border-[#D1D1D1] w-full my-8">
          <ul className="flex flex-col justify-around md:flex-row pb-8 w-[50rem]">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} passHref>
                  <p className="text-[#4B4F54] font-[300] text-[16px] leading-[20px] tracking-[2px] align-middle">
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-start gap-4 my-4 text-left">
          <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          <div>
            <p className="text-[#4B4F54] font-[300] text-[16px] leading-[20px] tracking-[2px] align-middle">
              {address}
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-4 my-4">
          <Telegram />
          <Whatsapp />
        </div>
        <div className="my-4 text-left">
          <p className="text-[#4B4F54] font-[300] text-[16px] leading-[20px] tracking-[2px] align-middle">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
