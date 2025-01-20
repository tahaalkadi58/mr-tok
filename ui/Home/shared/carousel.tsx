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
      className={clsx(
        activeIndex === id ? styles.active : "",
        styles.navigators
      )}
      onClick={() => {
        setActiveIndex(id);
      }}
      data-aos="fade-up"
      data-aos-offset={50}
      data-aos-delay={100 * id}
      data-aos-duration="1000"
      data-aos-easing="ease-in"
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

  let touchStartX: number = 0;
  let touchEndX: number = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX; // تسجيل نقطة بداية اللمس
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.changedTouches[0].clientX; // تسجيل نقطة نهاية اللمس
    handleSwipe(); // التحقق من اتجاه التمرير
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      // تمرير لليسار
      handleNextClick();
    } else if (swipeDistance < -50) {
      // تمرير لليمين
      handlePrevClick();
    }
  };
  return (
    <div
      className={clsx(styles["carousel-container"], className ? className : "")}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
        data-aos="fade-left"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      ></Button>

      <Button
        className={clsx("next", styles.btn, styles.next)}
        icon={faChevronRight}
        type={"button"}
        onClick={handleNextClick}
        data-aos="fade-right"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      ></Button>
      <div className={styles.navigators}>{navigators}</div>
    </div>
  );
};

export default Carousel;
