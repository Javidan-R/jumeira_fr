import Image from "next/image";
import Navbar from "./components/layout/Navbar"; // Adjust the path to where your Navbar component is located
import Footer from "./components/layout/Footer"; // Adjust the path to where your Footer component is located
import ConsultationForm from "./components/sections/ConsultationForm"; // Adjust the path to where your ConsultationForm component is located
import PropertyInfo from "./components/sections/PropertyInfo"; // Adjust the path to where your PropertyInfo component is located
import RealEstateInfo from "./components/sections/RealEstateInfo"; // Adjust the path to where your RealEstateInfo component is located
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Project";
import Location from "./components/sections/Location";
import Galery from "./components/sections/Galery";
export default function Home() {
  const projectDetails = [
    "Jumeira House представляет собой уникальный проект для ценителей утонченной архитектуры и гармоничного пространства для жизни. Комплекс сочетает в себе благородство облика, внимание к деталям и высокий уровень комфорта.",
    "Следуя современным архитектурным тенденциям, Jumeira House воплощает идею пространства мечты, где каждая деталь продумана для вашего удобства. Внутри закрытой территории создается приватная атмосфера, где тишина и уединение встречаются с комфортом и элегантностью. Здесь каждый день наполнен комфортом, стилем и гармонией.",
  ];

  return (
    <>
      <div
        className=" flex flex-row   h-[calc(100vh-.5rem)]  "
        style={{ height: "100%" }}
      >
        <Navbar />
        <Hero />
      </div>

      <div className="">
        {" "}
        <About />
        <Projects />
        <Location />
        <Galery />
      </div>
      {/* 
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
      /> */}
    </>
  );
}
