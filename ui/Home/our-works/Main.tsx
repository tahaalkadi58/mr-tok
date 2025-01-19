"use client";
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useContext,
  useLayoutEffect,
} from "react";
import { projectByTypes } from "@/lib/utils/project-schema";
import { RepoContext } from "@/lib/contexts/GithubContext";
import ProjectCard from "./ProjectCard";
import scrollToSmoothly from "@/lib/utils/smooth-scroll";
import windowMedia from "@/lib/utils/windowMediaWidth";
import styles from "./Main.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const OurWorks: FunctionComponent = () => {
  const [currentType, setCurrentType] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const indicator = useRef<HTMLDivElement | null>(null);
  const [isActiveBtn, setActiveBtn] = useState<boolean>(false);
  const [gridArea, setGridArea] = useState<{
    columns: number | null;
    rows: number | null;
  }>({
    columns: null,
    rows: null,
  });
  const { repos } = useContext(RepoContext);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const { xs, s, md, l, xl } = windowMedia;
  const currentTypeSetter = (type: string) => {
    setCurrentType(type);
  };
  const projects = projectByTypes[currentType];
  const ProjectsTypesLinks = Object.keys(projectByTypes).map((type, i) => (
    <li
      key={type}
      id={`link-${i}`}
      onClick={(e) => {
        currentTypeSetter(type);
        setCurrentIndex(i);
        e.currentTarget.id === `link-${i}`
          ? e.currentTarget.classList.add("active")
          : e.currentTarget.classList.remove("active");
      }}
      className={clsx(
        type === currentType ? "active" : "",
        styles["type-link"],
        "type-link"
      )}
    >
      {[[...type][0].toUpperCase(), ...type.slice(1)]}
    </li>
  ));
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (indicator.current) {
      indicator.current.style.width = `${
        (document.querySelector(".type-link") as HTMLElement)?.offsetWidth
      }px`;
      indicator.current.style.gridColumn = `1 / -1`;
      // حساب المسافة الصحيحة بناءً على currentIndex
      indicator.current.style.left = `${
        currentIndex *
        (indicator.current.offsetWidth + (currentIndex !== 0 ? 20 : 0))
      }px`;
    }
    console.log(currentIndex);
  }, [currentIndex]);
  const [perimeter, setPerimeter] = useState({
    width: 350,
    height: 400,
  });
  useEffect(() => {
    switch (true) {
      case (windowWidth as number) > s.min && (windowWidth as number) < md.max:
        setPerimeter({ width: 300, height: 400 });
        break;
      case (windowWidth as number) > l.min && (windowWidth as number) < l.max:
        setPerimeter({ width: 350, height: 400 });
        break;
      case (windowWidth as number) > xl:
        setPerimeter({ width: 400, height: 400 });
        break;
      default:
        console.log("error, debug switch");
    }
  }, [windowWidth]);
  useEffect(() => {
    console.log(repos);
    return () => {};
  }, [repos]);
  useEffect(() => {
    const columns =
      (windowWidth as number) >= xl
        ? Math.floor(((windowWidth as number) * 0.85) / perimeter.width)
        : Math.floor((windowWidth as number) / perimeter.width);
    const rows = Math.ceil(projects.length / columns);
    setGridArea({
      columns,
      rows,
    });
  }, [windowWidth, projects, perimeter]);
  return (
    <section
      className={clsx(styles["our-works"], styles["p-section"], "our-works")}
      id="our-works"
    >
      <h2 className={clsx(styles["section-title"])}>My Projects</h2>
      <ul
        className={clsx(styles["projects-type-links"])}
        style={{
          width: `${80 * Object.keys(projectByTypes).length}px`,
          gridTemplateColumns: `repeat(${
            Object.keys(projectByTypes).length
          }, minmax(0, 1fr))`,
        }}
      >
        {ProjectsTypesLinks}
        <div className={styles.indicator} ref={indicator}></div>
      </ul>
      <ProjectCard
        currentType={currentType}
        isShowMore={isActiveBtn}
        rows={gridArea.rows as number}
        width={perimeter.width}
        columns={gridArea.columns as number}
        height={perimeter.height}
      ></ProjectCard>
      {projects.length && (gridArea.rows as number) > 1 && (
        <div
          className={styles["show-more"]}
          onClick={() => {
            setActiveBtn(!isActiveBtn);
            if (isActiveBtn) {
              scrollToSmoothly(
                (document.querySelector(".our-works") as HTMLElement).offsetTop,
                1
              );
            }
          }}
        >
          {isActiveBtn && (
            <FontAwesomeIcon className={styles["fa-icon"]} icon={faChevronUp} />
          )}
          {!isActiveBtn && (
            <FontAwesomeIcon
              className={styles["fa-icon"]}
              icon={faChevronDown}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default OurWorks;
