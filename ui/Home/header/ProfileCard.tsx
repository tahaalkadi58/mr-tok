import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Main.module.scss";
import clsx from "clsx";
interface Refs {
  profilePicture?: HTMLElement | null;
  pictureContainerCon?: HTMLElement | null;
  card?: HTMLElement | null;
}

export default function ProfileCard() {
  const refs = useRef<Refs>({});
  const [show, setShow] = useState(true);
  // إعداد المرجع للمكونات
  const setRef = (key: keyof Refs) => (el: HTMLElement | null) => {
    refs.current[key] = el;
  };

  const spans = new Array(4)
    .fill(null)
    .map((_, i) => (
      <span className={styles[`corner${i + 1}`]} key={`span-${i}`}></span>
    ));

  // remove hover from card
  useEffect(() => {
    const { card } = refs.current;
    if (!card) {
      console.warn("Some elements are not properly referenced.");
      return;
    }
    const timeOut = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  // change height
  useLayoutEffect(() => {
    const { profilePicture, pictureContainerCon } = refs.current;

    if (!profilePicture || !pictureContainerCon) {
      console.warn("Some elements are not properly referenced.");
      return;
    }
    const rootElement = document.documentElement;
    const handleResize = () => {
      const profileWidth = profilePicture.offsetWidth;
      rootElement.style.setProperty("--height", `${profileWidth}px`);
      profilePicture.style.height = `${profileWidth}px`;
      pictureContainerCon.style.height = `${profileWidth}px`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      rootElement.style.setProperty("--height", "0px");
    };
  }, []);

  return (
    <div
      className={styles["profile-picture-container-container"]}
      ref={setRef("pictureContainerCon")}
    >
      <div className={styles["profile-picture-container"]}>
        <div
          className={styles["profile-picture"]}
          ref={setRef("profilePicture")}
        >
          <div
            className={clsx(styles.card, { [styles.hover]: show }, "hover")}
            ref={setRef("card")}
            onClick={() => {
              setShow(!show);
              setTimeout(() => setShow(false), 3000);
            }}
          >
            <div className={clsx(styles.front, "tok")}></div>
            <div className={styles.back}></div>
          </div>
        </div>
        {spans}
      </div>
    </div>
  );
}
