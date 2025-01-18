"use client";
import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Main.module.scss'

interface ButtonProps {
  className: string;
  icon: IconDefinition;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  key?: React.Key;
  type: "button" | "submit" | "reset";
}

export default function Button({
  className,
  icon,
  id,
  onClick,
  style,
  key,
  type,
}: ButtonProps) {
  return (
    <button
      className={`${className} btn`}
      id={id}
      style={style}
      key={key}
      onMouseEnter={(e) => {
        // هنا نستخدم Type Assertion لتحديد أن target هو HTMLButtonElement
        (e.target as HTMLElement).classList.add("hover");
      }}
      type={type}
      onMouseLeave={(e) => {
        const target = e.target as HTMLElement;
        target.classList.contains("hover")
          ? target.classList.remove("hover")
          : "";
      }}
      onClick={onClick}
    >
      {icon ? (
        <FontAwesomeIcon className={styles["fa-icon"]} icon={icon} />
      ) : (
        "add icon"
      )}
    </button>
  );
}
