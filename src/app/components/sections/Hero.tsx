import Image from "next/image";
import background from "../../../../public/images/HeroBackground.png";
import Jumeiralogo from "../../../../public/images/JumeiraLogo.svg";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative w-full" id="hero">
      <Image
        src={background}
        alt="Jumeira House"
        objectFit="contain"
        quality={100}
        width={1820}
        height={1200}
        className="w-full h-full"
      />
      <div className="absolute flex flex-col items-center text-white left-5 top-20 md:left-[4%] md:top-24 lg:top-14 z-10">
        <div className="flex flex-col items-start justify-start">
          <Image
            src={Jumeiralogo}
            alt="Jumeira House"
            width={154}
            height={172}
            objectFit="contain"
            quality={100}
          />
          <h2 className="mt-4 text-4xl font-normal leading-tight tracking-wide text-center md:text-5xl lg:text-6xl font-playfair">
            новый стиль жизни
          </h2>
          <p className="max-w-xl mt-4 text-base font-light leading-6 text-left md:text-lg lg:text-xl font-lato">
            Если выражение «all inclusive» ассоциируется обычно лишь с короткой
            радостью отпуска, в Jumeira House преимущества дорогого отеля будут
            украшать каждый день. А вы сможете беззаботно наслаждаться моментом!
          </p>
          <Link href="#">
            <button className="flex items-center justify-center gap-2 px-6 py-4 mt-8 transition-all border border-white rounded shadow-md w-60 h-14 backdrop-blur-lg hover:text-black">
              <p className="text-base font-medium text-center text-white font-lato">
                Узнать больше
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
