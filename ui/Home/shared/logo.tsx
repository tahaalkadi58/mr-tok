import React, { useContext } from "react";
import clsx from "clsx";
import styles from "./Main.module.scss";

export default function Logo() {
  return (
    <div className={clsx(styles["logo-container"])}>
      <div className={clsx(styles.logo, "tok")}>
        <a href="/"></a>
      </div>
    </div>
  );
}
