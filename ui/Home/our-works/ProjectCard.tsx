"use client";
import { iProject } from "@/lib/types/app-type";
import { formatDate } from "@/lib/utils/date-functions";
import { FunctionComponent, useRef } from "react";
import styles from "./Main.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const getTechIcons = (language: string | null | undefined): IconProp[] => {
  if (!language) return [faReact];
  switch (language.toLowerCase()) {
    case "html":
      return [faHtml5];
    case "css":
      return [faCss3Alt];
    case "javascript":
      return [faJs];
    case "typescript":
      return [faReact];
    case "python":
      return [faReact];
    default:
      return [faReact];
  }
};

const ProjectCard: FunctionComponent<{
  projects: iProject[];
  isShowMore: boolean;
  rows: number;
  columns: number;
  height: number;
  width: number;
  isPhoneScreen: boolean;
}> = ({
  projects,
  isShowMore,
  rows,
  height,
  width,
  columns,
  isPhoneScreen,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  console.log(height, window.innerHeight);
  return (
    <div
      className={clsx(styles["projects-cards"], isShowMore ? "show-full" : "")}
      style={{
        overflow: "hidden",
        gridTemplateColumns: isPhoneScreen
          ? `repeat(${columns}, minmax(${width}px, 1fr))`
          : `repeat(${columns}, minmax(${width - 50}px, ${width}px))`,
        gridTemplateRows: `repeat(${rows}, minmax(${height - 50}px, ${height}px)`,
        maxHeight: isShowMore
          ? `${rows * height + 0.35 * window.innerHeight}px`
          : `${height + 40}px`,
      }}
    >
      {projects
        .slice(0, isShowMore ? projects.length : 2)
        .map(
          ({
            name,
            id,
            createdAt,
            type,
            githubUrl,
            homepageUrl,
            description,
            language,
          }) => {
            const [day, month, year] = formatDate(createdAt);
            const enhancedName = name.replace(/-/g, " ").toUpperCase();
            const formattedType = type.charAt(0).toUpperCase() + type.slice(1);
            const techIcons = getTechIcons(language);

            return (
              <div
                className={styles["project-card"]}
                key={id}
                data-aos="zoom-in-up"
                data-aos-delay={`${100 * id}`}
                data-aos-once="false"
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
                      <a
                        href={homepageUrl || githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {enhancedName}
                      </a>
                      <FontAwesomeIcon
                        className={styles["fa-icon"]}
                        icon={faLink}
                      />
                    </h2>
                    <p className={styles.text}>
                      {description
                        ? description.slice(0, 40) + "..."
                        : "No description available."}
                    </p>
                    <ul className={styles["menu-content"]}>
                      {techIcons.map((icon, i) => (
                        <li key={i}>
                          <a href="#">
                            <FontAwesomeIcon
                              className={styles["fa-icon"]}
                              icon={icon}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles["github-overlay"]}>
                  <a
                    href={githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles["fa-icon"]}
                      icon={faGithub}
                    />
                  </a>
                </div>
              </div>
            );
          },
        )}
    </div>
  );
};

export default ProjectCard;
