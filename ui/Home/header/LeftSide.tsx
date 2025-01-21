import React from "react";
import Image from "next/image";
import { Images } from "@/lib/utils/Class_Images";
import styles from "./Main.module.scss";
import clsx from "clsx";
export default function LeftSide() {
  const images = Images.map(({ name, id, path, aos, width }) => {
    return (
      <div
        key={`name-${id}`}
        id={`name-${id}`}
        className={[styles[name], styles.rellax, styles.img, "rellax"].join(
          " "
        )}
        data-rellax-speed={id + 1}
      >
        <Image
          src={path}
          width={width}
          height={width}
          alt={`${name} Image`}
          data-aos={aos}
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    );
  });

  return (
    <div className={styles["profile-left-container"]}>
      <div className={clsx(styles["profile-left"])}>
        <div
          className={clsx(styles["profile-left"], styles.rellax, "rellax")}
          data-rellax-speed="2"
        >
          <h1
            className={clsx(styles.designer, "h-1")}
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
          >
            <span>Designer</span>
            <span className={styles.before}>Designer</span>
          </h1>
          <h4>
            <p
              className={clsx(styles["design-slogan"], styles.slogan)}
              data-aos="zoom-out"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              Self learned, design Like experted!
            </p>
          </h4>
        </div>
        {images}
      </div>
    </div>
  );
}
