"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { SnackbarProvider } from "notistack";

export default function HomeClient({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <SnackbarProvider
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      {children}
    </SnackbarProvider>
  );
}
