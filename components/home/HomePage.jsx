"use client";
import React, { useEffect } from "react";
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
import Lenis from "lenis";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3, // default is 1.2, lower = faster, higher = smoother
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease (smooth acceleration/deceleration)
      direction: "vertical", // or 'horizontal'
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true, // can set to true for smoother touch scroll
      touchMultiplier: 1.8, // increases touch scroll sensitivity
      infinite: false, // enable infinite scrolling if desired
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full relative lg:w-[80%] xl:w-[1200px] 2xl:w-[1300px] mx-auto bg-transparent border-l border-r">
      <SnackbarProvider
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <Hero />
      <Projects />
      <About />
      <Border />
      <Experience />
      <Border />
      <PorftolioProjects />
      <Border />
      <Services />
      <Border />
      <Testimonials />
      <Border />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
