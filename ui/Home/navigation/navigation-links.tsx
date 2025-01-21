import React, {
  useState,
  useContext,
  MouseEvent,
  useEffect,
  useLayoutEffect,
} from "react";
import { list_item } from "@/lib/utils/Class_list_item";
import scrollToSmoothly from "@/lib/utils/smooth-scroll";
import IsElementInViewport from "@/lib/utils/isElementInViewPort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Main.module.scss";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
export default function NavgationLinks() {
  const [currentSection, setCurrentSection] = useState<string>("");

  const [isMax, setIsMax] = useState<boolean | null>(null);
  useEffect(() => {
    const checkInviewPort = () => {
      const sections = document.querySelectorAll(".p-section");
      sections.forEach((el) => {
        if (IsElementInViewport(el)) {
          setCurrentSection(el.id);
        }
      });
    };
    checkInviewPort();
    window.addEventListener("scroll", checkInviewPort);
    return () => window.removeEventListener("scroll", checkInviewPort);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMax(window.innerWidth >= 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const list_item_components = list_item.map(({ name, href, icon, id }) => {
    const shorLinkName = (name.split(" ") as string[]).reduce(
      (acc, current) => {
        return acc.length > current.length ? acc : current;
      },
      ""
    );

    let enhancedName = isMax ? name : shorLinkName;
    const linkname = enhancedName[0].toUpperCase() + enhancedName.substr(1);
    console.log(currentSection, href, currentSection === href);
    return (
      <li
        className={clsx(currentSection === href ? styles.active : "")}
        key={"name-" + id}
        onClick={() => {
          const position = document.getElementById(`${href}`)?.offsetTop;
          scrollToSmoothly((position as number) + 1, 500);
        }}
      >
        <FontAwesomeIcon
          className={styles["fa-icon"]}
          icon={icon as IconDefinition}
        ></FontAwesomeIcon>
        {linkname}
      </li>
    );
  });
  return <>{list_item_components}</>;
}
