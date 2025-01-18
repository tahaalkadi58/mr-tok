"use client";
import React from "react";
import ExternalLink from "./ExternalLink";
import ProfileCard from "./ProfileCard";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ForDown from "./ForDown";
import styles from "./Main.module.scss";
import clsx from "clsx";
export default function Header() {
  return (
    <header className={clsx(styles.header, "p-section")}>
      <nav className={styles["external-nav"]}>
        <ExternalLink></ExternalLink>
      </nav>
      <div className={styles.profile}>
        <ProfileCard></ProfileCard>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
      <ForDown></ForDown>
    </header>
  );
}
