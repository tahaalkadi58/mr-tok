"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "./button";
import scrollToSmoothly from "@/lib/utils/smooth-scroll";
import styles from "./Main.module.scss";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

export default function ToTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState<number | null>(null);
  const handleClick = () => {
    scrollToSmoothly(-2, 500);
  };
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScrollTop(scroll);
  };

  const active = scrollTop > (windowHeight as number) ? true : false;
  useLayoutEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles["to-top-container"]}>
      <Button
        type="button"
        icon={faChevronUp}
        className={clsx(styles["to-top"], 'bubble')}
        onClick={handleClick}
        style={{ display: active ? "flex" : "none" }}
      >
      </Button>
    </div>
  );
}
