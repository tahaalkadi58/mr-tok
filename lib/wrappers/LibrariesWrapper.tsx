"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import aosConfig from "../utils/aos";
import "aos/dist/aos.css";
import Rellax from "rellax";

export default function LibrariesWrapper() {
  const initializeRellax = () => {
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
  const handleLoad = () => {
    scrollTo(-1, 0);
    animateVisibleElements();
    initializeRellax();
  };
  useEffect(() => {
    AOS.init(aosConfig);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    // Clean up
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}
