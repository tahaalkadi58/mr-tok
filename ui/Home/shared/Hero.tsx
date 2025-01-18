'use client';
import React from "react";
import scrollToSmoothly from "@/lib/utils/smooth-scroll";
import styles from "./Main.module.scss";
export default function Hero({ customeSyles }: { customeSyles: string }) {
  return (
    <div
      className={[styles.hero, customeSyles].join(" ")}
      onClick={() => {
        scrollToSmoothly(0, 500);
      }}
    >
      <h1>
        <span className="mr">Mr.</span> <span>TOK</span>
      </h1>
    </div>
  );
}
