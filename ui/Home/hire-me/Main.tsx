"use client";
import React, { FunctionComponent } from "react";
import scrollToSmoothly from "@/lib/utils/smooth-scroll";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBriefcase } from "@fortawesome/free-solid-svg-icons";
const HireMe: FunctionComponent = () => {
  return (
    <section className={styles.hire}>
      <div className={styles["hire-widget"]}>
        <span className={styles["hire-icon"]}>
          <FontAwesomeIcon
            className={styles["fa-icon"]}
            icon={faComment}
          ></FontAwesomeIcon>
        </span>
        <div className={styles["hire-text"]}>
          <h3>Project in Mind?</h3>
          <p>Give your ideas a chance to live in the outside world.</p>
        </div>
        <button
          className={styles["hire-button"]}
          type="button"
          onClick={() => {
            scrollToSmoothly(
              (document.getElementById("contact-us") as HTMLElement).offsetTop,
              500
            );
          }}
        >
          <h4>Hire Me</h4>
          <h4>
            <FontAwesomeIcon className={styles["fa-icon"]} icon={faBriefcase} />
          </h4>
        </button>
      </div>
    </section>
  );
};

export default HireMe;
