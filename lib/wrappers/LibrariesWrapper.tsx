"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Rellax from "rellax";
import aosConfig from "../utils/aos";
import "aos/dist/aos.css";

export default function LibrariesWrapper() {
  useEffect(() => {
    scrollTo(0, -1)
    const updateVHHeight = () => {
      document.documentElement.style.setProperty(
        "--vh-height",
        `${window.innerHeight}px`
      );
    };

    const initializeLibraries = () => {
      AOS.init(aosConfig);
      new Rellax(".rellax");
    };

    const animateVisibleElements = () => {
      const aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        const { top } = el.getBoundingClientRect();
        if (top < window.innerHeight) {
          el.classList.add("aos-animate");
        }
      });
    };

    const handleLoad = () => {
      updateVHHeight();
    };
    const handelWindowLoad = () => {
      initializeLibraries();
      animateVisibleElements();
    };
    // Initialize on DOMContentLoaded or immediately if already loaded
    if (document.readyState !== "loading") {
      handleLoad();
    } else {
      document.addEventListener("DOMContentLoaded", handleLoad);
    }
    if (document.readyState === "complete") {
      handelWindowLoad();
    } else {
      window.addEventListener("load", handelWindowLoad);
    }
    // Clean up
    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
      window.removeEventListener("load", handelWindowLoad);
    };
  }, []);

  return <></>;
}
