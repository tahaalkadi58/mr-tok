"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import Overlay from "../shared/Overlay";
import background_linear from "@/lib/utils/main-colors";
import CircleHolder from "./CircleHolder";
import GitHubCharts from "./GitHubCharts";
import SectionTitle from "../shared/SectionTitle";
import { iData } from "./GitHubCharts";
import scrollToSmoothly from "@/lib/utils/smooth-scroll";
import clsx from "clsx";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Services: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(true);
  const [stats, setStats] = useState<iData[]>();
  const handleSetActiveTab = (num: number) => {
    setActiveTab(num);
  };
  const color = background_linear[activeTab]["second-color"];
  const handleSetStats = (data: iData[]) => {
    setStats(data);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("overlay")) {
        setAnimate(!animate);
      }
    });
  }, [animate]);
  return (
    <section
      className={clsx(styles.services, styles[`p-section`], { animate })}
      id="services"
    >
      <SectionTitle className={clsx(styles["section-title"])}>
        My Skills
      </SectionTitle>
      <CircleHolder
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        animate={animate}
      ></CircleHolder>
      <GitHubCharts
        color={color}
        activeTab={activeTab}
        stats={stats as iData[]}
        setStats={handleSetStats}
      ></GitHubCharts>
      <Overlay
        styles={{
          backgroundColor: "#333",
          opacity: "0.3",
        }}
      ></Overlay>
      <Overlay
        styles={{
          background: `linear-gradient(-45deg, ${background_linear[activeTab]["second-color"]} 1%,  #333)`,
          opacity: "0.2",
        }}
      ></Overlay>
      <p
        className={styles["section-description"]}
        data-aos="fade-up"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      >
        Counted from {stats?.length} completed web apps on
        <a href="https://github.com/" className="link">
          {" "}
          GitHub{" "}
        </a>{" "}
        from
        <a href="https://github.com/tahaalkadi58" className="link">
          My Personal Account{" "}
        </a>
      </p>
      <div
        className={styles["take-action"]}
        data-aos="fade-left"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      >
        <div
          className={clsx(styles.bubble, styles.contact, styles.btn, "btn")}
          onClick={() => {
            scrollToSmoothly(
              document.getElementById("contact-us")?.offsetTop as number,
              500
            );
          }}
        >
          Contact Me
        </div>
        <a
          href="https://github.com/tahaalkadi58"
          className={clsx(
            "btn",
            styles.btn,
            "bubbles",
            styles["see-more"],
            styles["to-fill"]
          )}
          data-aos="fade-right"
          data-aos-offset={50}
          data-aos-delay={"100"}
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          See More
        </a>
      </div>
      <button
        type="button"
        className={clsx("btn", styles.pause)}
        data-aos="fade-left"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        onClick={() => {
          setAnimate(!animate);
        }}
      >
        {animate && (
          <FontAwesomeIcon className={styles["fa-icon"]} icon={faPause} />
        )}
        {!animate && (
          <FontAwesomeIcon className={styles["fa-icon"]} icon={faPlay} />
        )}
      </button>
      <div className={styles["layer-1"]}></div>
      <div className={styles["layer-2"]}></div>
      <div className={styles["layer-3"]}></div>
    </section>
  );
};

export default Services;
