"use client";
import React, { FunctionComponent, useEffect } from "react";
import { createRoot } from "react-dom/client";
import createRipple from "../utils/ripple-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type element = HTMLAnchorElement | HTMLButtonElement;
const UtilsWrapper: FunctionComponent = () => {
  useEffect(() => {
    Array.from(document.getElementsByTagName("img")).forEach((el) => {
      el.style.height = "auto";
      el.style.width = "auto";
    });
  }, []);
  useEffect(() => {
    const ripples = document.querySelectorAll(".bubble");
    ripples.forEach((el) => {
      const target = el as element;
      target.addEventListener("click", (ev) => {
        createRipple(ev as MouseEvent); // تحديد النوع هنا
      });
    });
    const linkElements = document.querySelectorAll(".link");

    // إضافة أيقونة FontAwesome لكل عنصر
    linkElements.forEach((el) => {
      const span = document.createElement("span");
      el.appendChild(span);
      const root = createRoot(el.querySelector("span") as HTMLElement);
      root.render(<FontAwesomeIcon icon={faLink} />);
    });
    return () => {
      // إذا كنت بحاجة إلى إزالة المستمعين
      ripples.forEach((el) => {
        const target = el as element;
        target.removeEventListener(
          "click",
          createRipple as unknown as EventListener
        );
      });
    };
  }, []);

  // set responsive operator

  useEffect(() => {
    const baseWidth = 1920;
    const rootStyle = document.documentElement.style;
    const handleResize = () => {
      rootStyle.setProperty(
        "--responsive-operator",
        `${window.innerWidth / baseWidth}`
      );
    };
    // handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      rootStyle.setProperty("--responsive-operator", `${0}`);
    };
  }, []);
  const handleClick = (ev: MouseEvent) => {
    const target = ev.target;
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return <></>;
};

export default UtilsWrapper;
