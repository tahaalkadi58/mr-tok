"use client";
import React, { useEffect, useRef, useState } from "react";
import NavgationLinks from "./navigation-links";
import Logo from "../shared/logo";
import Hero from "../shared/Hero";
import Button from "../shared/button";
import styles from "./Main.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [whiteBg, setBg] = useState(false);
  useEffect(() => {
    let lastScrollTop = window.scrollY || window.innerHeight;
    const show = () => {
      const lastScrollTopBlock = window.scrollY || window.innerHeight;
      if (lastScrollTopBlock > lastScrollTop) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
      lastScrollTop = lastScrollTopBlock <= 0 ? 0 : lastScrollTopBlock;
    };
    const changeBg = () => {
      if (window.scrollY > 120) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    function handleIsShow() {
      show();
      changeBg();
    }
    handleIsShow();
    window.addEventListener("scroll", handleIsShow);
    return () => {
      window.removeEventListener("scroll", handleIsShow);
    };
  }, []);

  return (
    <nav
      className={styles.navigation}
      style={{
        top: isShow ? 0 : -80,
      }}
    >
      <div
        className={clsx(styles["nav-container"], whiteBg ? styles.show : "")}
        ref={navRef}
      >
        <Logo></Logo>
        <Hero customeSyles={styles.hero}></Hero>
        <ul
          className={`${clsx(
            { show: isOpened },
            isOpened ? styles.show : "",
            "show"
          )}`}
        >
          <NavgationLinks></NavgationLinks>
          <Button
            type="button"
            icon={faXmark}
            className={styles.close}
            onClick={() => {
              setIsOpened(false);
            }}
          ></Button>
        </ul>
        <div className={styles["burger-container"]}>
          <button
            type="button"
            className={clsx(styles.burger, "btn", styles.btn)}
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <FontAwesomeIcon
              className={styles["fa-icon"]}
              icon={faBurger}
              style={{
                pointerEvents: "none",
              }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
