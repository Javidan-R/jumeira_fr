import Image from "next/image";
import Navbar from "./components/layout/Navbar"; // Adjust the path to where your Navbar component is located
import Footer from "./components/layout/Footer"; // Adjust the path to where your Footer component is located
import ConsultationForm from "./components/sections/ConsultationForm"; // Adjust the path to where your ConsultationForm component is located
import PropertyInfo from "./components/sections/PropertyInfo"; // Adjust the path to where your PropertyInfo component is located
import RealEstateInfo from "./components/sections/RealEstateInfo"; // Adjust the path to where your RealEstateInfo component is located

export default function Home() {
  const projectDetails = [
    "Jumeira House представляет собой уникальный проект для ценителей утонченной архитектуры и гармоничного пространства для жизни. Комплекс сочетает в себе благородство облика, внимание к деталям и высокий уровень комфорта.",
    "Следуя современным архитектурным тенденциям, Jumeira House воплощает идею пространства мечты, где каждая деталь продумана для вашего удобства. Внутри закрытой территории создается приватная атмосфера, где тишина и уединение встречаются с комфортом и элегантностью. Здесь каждый день наполнен комфортом, стилем и гармонией.",
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: "url('../../public/images/HeroBackground.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "var(--font-geist-mono)",
        color: "var(--text-color)",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center gap-8 p-8 pb-20 sm:items-start sm:p-20">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <ConsultationForm />

          <PropertyInfo
            address="Каспийск, проспект Акулиничева, 27"
            apartmentsCount={375}
            apartmentArea="45,9 м² - 129,2 м²"
            presentationLink="/path/to/presentation.pdf"
            floorPlansLink="/path/to/floor-plans"
          />

          <RealEstateInfo
            title="О проекте"
            description="Роскошный жилой комплекс в одной из самых востребованных локаций с видом на море"
            details={projectDetails}
            imageUrl="/path/to/image.jpg"
            imageAlt="Jumeira House"
            imagePosition="left"
          />
        </div>
      </div>
    </div>
  );
}
