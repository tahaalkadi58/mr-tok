"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import aosConfig from "../utils/aos";
import "aos/dist/aos.css";
import Rellax from "rellax";

export default function LibrariesWrapper() {
  const initializeLibraries = () => {
    AOS.init(aosConfig);
    new Rellax(".rellax");
  };
  const animateVisibleElements = () => {
    const header = document.querySelector("header");
    if (header) {
      const aosElements = header.querySelectorAll("[data-aos]");
      if (aosElements)
        aosElements.forEach((el) => {
          const { top } = el.getBoundingClientRect();
          if (top < window.innerHeight) {
            el.classList.add("aos-animate");
          }
        });
    }
  };

  useEffect(() => {
    if (document.readyState !== "loading") {
      initializeLibraries();
    } else {
      document.addEventListener("DOMContentLoaded", initializeLibraries);
    }
    if (document.readyState === "complete") {
      animateVisibleElements();
    } else {
      window.addEventListener("load", animateVisibleElements);
    }
    // Clean up
    return () => {
      document.removeEventListener("DOMContentLoaded", initializeLibraries);
      window.removeEventListener("load", animateVisibleElements);
    };
  }, []);

  return null;
}
