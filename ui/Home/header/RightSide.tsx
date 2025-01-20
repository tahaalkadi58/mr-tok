import React, { useEffect, useRef, useState } from "react";
import TxtType from "@/lib/utils/writting-effect";
import styles from "./Main.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import GradientIcon from "../shared/GradientIcon";
export default function RightSide() {
  const typewriteRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    if (typewriteRef.current) {
      const rotate = setTimeout(() => {
        new TxtType(
          typewriteRef.current as HTMLElement,
          ["I code like a ninja, create like a wizard!"],
          500
        );
      }, 900);
      return () => {
        clearTimeout(rotate);
      };
    }
  }, []);
  return (
    <div className={styles["profile-right-container"]}>
      <div className={styles["profile-right"]}>
        <div
          className={clsx(styles.rellax, styles["profile-right"], "rellax")}
          data-rellax-speed="1"
        >
          <h1
            className={clsx(styles["h-1"], styles.coder)}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <GradientIcon
              faIcon={faChevronLeft}
              style={{}}
              className={styles["gradient-icon"]}
            />
            <span>\</span>coder
            <GradientIcon
              faIcon={faChevronRight}
              style={{}}
              className={styles["gradient-icon"]}
            />
          </h1>
          <h4>
            <p
              className={clsx(
                styles["coder-slogan"],
                styles.typewrite,
                styles.slogan
              )}
              ref={typewriteRef}
            >
              <span className={"wrap"}></span>
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
}
