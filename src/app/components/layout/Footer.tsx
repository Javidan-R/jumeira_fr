import Link from "next/link";
import Image from "next/image";
import AbsoluteLogo from "../../../../public/images/AbsoluteLogo.png";
import { Telegram, Whatsapp } from "@public/icons";
const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-[#4B4F54] bg-white  ">
      <div className="container flex flex-col justify-end mx-auto">
        <div className="flex justify-center">
          <Image src={AbsoluteLogo} alt="Absolute Logo" loading="lazy" />
        </div>
        <div className=" border-b-2 border-[#D1D1D1] w-full my-8">
          <ul className="flex flex-col justify-around md:flex-row pb-8 w-[50rem] ">
            <li>
              <Link href="/about">О проекте</Link>
            </li>
            <li>
              <Link href="/about">Планировки</Link>
            </li>
            <li>
              <Link href="/developer">Застройщик</Link>
            </li>
            <li>
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-start gap-4 my-4 text-left">
          <Link href="+7 (928) 210-00-00">+7 (928) 210-00-00</Link>
          <div>
            <p>каспийск, проспект Акулиничева, 21</p>
          </div>
        </div>
        <div className="flex justify-start gap-4 my-4">
          <Telegram />
          <Whatsapp />
        </div>
        <div className="my-4 text-left">
          <p>© 2024 JUMEIRA HOUSE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
