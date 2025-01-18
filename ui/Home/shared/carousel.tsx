"use client;";
import { CSSProperties, FunctionComponent, ReactNode } from "react";
import Button from "./button";
import clsx from "clsx";
import styles from "./Main.module.scss";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
interface iCarousel {
  array: { id: number }[];
  width: number;
  children: ReactNode;
  className: string;
  activeIndex: number;
  setActiveIndex: (num: number) => void;
  style?: CSSProperties;
}

const Carousel: FunctionComponent<iCarousel> = ({
  array,
  width,
  children,
  className,
  activeIndex,
  setActiveIndex,
}) => {
  const navigators = array.map(({ id }, i) => (
    <span
      data-index={i}
      key={id}
      className={clsx(activeIndex === id ? styles.active : "", styles.navigators)}
      onClick={() => {
        setActiveIndex(id);
      }}
    ></span>
  ));
  function handleNextClick() {
    setActiveIndex(activeIndex + 1);
    if (activeIndex >= array.length - 1) {
      setActiveIndex(0);
    }
  }
  function handlePrevClick() {
    setActiveIndex(activeIndex - 1);
    if (activeIndex <= 0) setActiveIndex(array.length - 1);
  }
  console.log(-width * -1);
  return (
    <div
      className={clsx(styles["carousel-container"], className ? className : "")}
    >
      <ul
        style={{
          transition: `transform 0.5s`,
          gridTemplateColumns: `repeat(${array.length}, ${width}px)`,
          transform: `translateX(${-width * (activeIndex - 1)}px)`,
        }}
      >
        {children}
      </ul>
      <Button
        className={clsx("prev", styles.btn, styles.prev)}
        icon={faChevronLeft}
        type={"button"}
        onClick={handlePrevClick}
      ></Button>

      <Button
        className={clsx("next", styles.btn, styles.next)}
        icon={faChevronRight}
        type={"button"}
        onClick={handleNextClick}
      ></Button>
      <div className={styles.navigators}>{navigators}</div>
    </div>
  );
};

export default Carousel;
