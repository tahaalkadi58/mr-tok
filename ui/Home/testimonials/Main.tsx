"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { testimonialsArray } from "@/lib/utils/testimonials.api";
import Carousel from "../shared/carousel";
import Icon from "../shared/icons";
import clsx from "clsx";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const thumbnailHeight = useRef<number | null>(null);
  useEffect(() => {
    const thumbnail = document.querySelector(".thumbnail") as HTMLElement;
    if (thumbnail) {
      thumbnailHeight.current = thumbnail.offsetHeight;
    }
    return () => {};
  }, [thumbnailHeight.current]);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const cardWidth = (windowWidth as number) * 0.8;
  const testimonialsItem = testimonialsArray.map(
    ({ firstname, lastname, thumbnail, rating, comment, work, id }, i) => {
      const starts = Array(rating)
        .fill(null)
        .map((el, i) => <Icon className="start" key={i} icon={faStar}></Icon>);
      return (
        <li
          className={clsx(id === activeIndex ? styles.active : "", styles.item)}
          id={`item-${id} `}
          key={id}
          style={{
            minWidth: `${cardWidth}px`,
          }}
          onClick={(e) => {
            setActiveIndex(id);
            console.log(id);
          }}
        >
          <h2 className={clsx(styles.hero, "hero")}>
            <span>Mr.TOk</span>
          </h2>
          <div
            className={clsx(styles.thumbnail)}
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          >
            <div
              className={styles["wavy-clipper"]}
              style={{
                mask: `url(/photos/wavy-clipper.svg) center / cover no-repeat`,
              }}
            ></div>
          </div>
          <p>{comment}</p>
          <div className={styles.rating}>{starts}</div>
          <div className={styles["user-info"]}>
            <div className={styles["full-name"]}>
              {firstname} {lastname}
            </div>
            <div className={styles["user-work"]}>{work}</div>
          </div>
          <FontAwesomeIcon className={clsx(styles["fa-icon"], styles.quote)} icon={faQuoteRight} />
        </li>
      );
    }
  );
  return (
    <div
      className={clsx(
        styles.testimonials,
        styles["p-section"],
        styles["testimonials-container"]
      )}
      id="testimonials"
    >
      <h2>What my clients say about me?</h2>
      <Carousel
        array={testimonialsArray}
        width={cardWidth}
        className={styles.testimonials}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {testimonialsItem}
      </Carousel>
    </div>
  );
}
