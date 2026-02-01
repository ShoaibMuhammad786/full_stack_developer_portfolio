import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Border from "../common/Border";
import Experience from "./Experience";
import PorftolioProjects from "./PorftolioProjects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import HomeClient from "../common/HomeClient";

const HomePage = () => {
  return (
    <HomeClient>
      <main className="w-full relative lg:w-[80%] xl:w-[1200px] 2xl:w-[1300px] mx-auto bg-transparent border-l border-r">
        <Hero />
        {/* <Projects />
        <Border /> */}
        <About />
        <Border />
        <Experience />
        <Border />
        {/* <PorftolioProjects />
        <Border /> */}
        <Services />
        <Border />
        <Testimonials />
        <Border />
        <Contact />
        <Footer />
      </main>
    </HomeClient>
  );
};

export default HomePage;
