import React from "react";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import GradientIcon from "../shared/GradientIcon";
export default function ForDown() {
  return (
    <span
      className={styles["down-container"]}
      data-aos="fade-down"
      data-aos-offset={100}
      data-aos-delay={"100"}
      data-aos-anchor-placement="top-bottom"
    >
      <div className={styles.down}>
        <GradientIcon
          faIcon={faChevronDown}
          style={{}}
          className={styles["chevron-down"]}
        />
      </div>
      <span className={styles.sd}>Scroll Down</span>
    </span>
  );
}
