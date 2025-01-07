import Navbar from "./components/layout/Navbar"; // Adjust the path to where your Navbar component is located
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Project";
import Location from "./components/sections/Location";
import Galery from "./components/sections/Galery";
import Flats from "./components/sections/Flats";
import Services from "./components/sections/Services";
import Garden from "./components/sections/Garden";
import Parking from "./components/sections/Parking";
import { Architecture } from "./components/sections/Architecture";
import { Commercial } from "./components/sections/Commercial";
import Developer from "./components/sections/Developer";
import Form from "./components/sections/Form";
import { Photos } from "./components/sections/Photos";
export default function Home() {
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
        <Architecture />
        <Flats />
        <Garden />
        <Services />
        <Parking />
        <Commercial />
        <Developer />
        <Form />
        <Photos />
      </div>
    </>
  );
}
