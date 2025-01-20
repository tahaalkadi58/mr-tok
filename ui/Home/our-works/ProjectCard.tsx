"use client";
import { projectByTypes } from "@/lib/utils/project-schema";
import { formatDate } from "@/lib/utils/date-functions";
import { FunctionComponent, useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const ProjectCard: FunctionComponent<{
  currentType: string;
  isShowMore: boolean;
  rows: number;
  columns: number;
  height: number;
  width: number;
  isPhoneScreen: boolean;
}> = ({
  currentType,
  isShowMore,
  rows,
  height,
  width,
  columns,
  isPhoneScreen,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // تحديد البيانات مرة واحدة
  const projects = projectByTypes[currentType] || [];

  // استخدام تأثير لتحسين أداء الحسابات المتعلقة بالـ ref
  useEffect(() => {
    if (contentRef.current) {
      document.documentElement.style.setProperty(
        "--github-overlay-height",
        contentRef.current.offsetHeight + "px"
      );
    }
  }, []);

  return (
    <div
      className={clsx(styles["projects-cards"], isShowMore ? "show-full" : "")}
      style={{
        gridTemplateColumns: isPhoneScreen
          ? `repeat(${columns}, minmax(${width}px, 1fr)`
          : `repeat(${columns}, minmax(${width - 50}px, ${width}px)`,
        gridTemplateRows: `repeat(${rows}, minmax(${
          height - 50
        }px, ${height}px)`,
        overflow: "hidden",
        maxHeight:
          rows && isShowMore
            ? `${rows * height + 0.35 * window.innerHeight}px`
            : `${height + 60}px`,
      }}
    >
      {projects.map(({ name, id, createdAt, type }) => {
        const [day, month, year] = formatDate(createdAt);
        const enhancedName = name.split("-").join(" ").toUpperCase();
        const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

        return (
          <div
            className={styles["project-card"]}
            key={id}
            data-aos="fade-left"
            data-aos-offset={50}
            data-aos-delay={`${100 * id}`}
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <div className={styles.date}>
              <span className={styles.day}>{day}</span>
              <span className={styles.month}>{month}</span>
              <span className={styles.year}>{year}</span>
            </div>
            <div className={styles.data} ref={contentRef}>
              <div className={styles.content}>
                <span className={styles.type}>{formattedType}</span>
                <h2 className={styles.title}>
                  <a href="#">{enhancedName}</a>
                  <FontAwesomeIcon
                    className={styles["fa-icon"]}
                    icon={faLink}
                  />
                </h2>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className={styles["menu-content"]}>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className={styles["fa-icon"]}
                        icon={faHtml5}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className={styles["fa-icon"]}
                        icon={faCss3Alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className={styles["fa-icon"]}
                        icon={faJs}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["github-overlay"]}>
              <FontAwesomeIcon className={styles["fa-icon"]} icon={faGithub} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
