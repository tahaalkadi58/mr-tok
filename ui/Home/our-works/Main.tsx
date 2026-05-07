"use client";
import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useContext,
  useMemo,
} from "react";
import { mapGithubReposToProjects, groupProjectsByType } from "@/lib/utils/project-schema";
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

  const projects = useMemo(() => {
    const mapped = mapGithubReposToProjects(repos);
    return groupProjectsByType(mapped);
  }, [repos]);

  const currentTypeSetter = (type: string) => {
    setCurrentType(type);
  };

  const currentProjects = projects[currentType] || [];

  const ProjectsTypesLinks = Object.keys(projects).map((type, i) => (
    <li
      key={type}
      id={`link-${i}`}
      onClick={(e) => {
        currentTypeSetter(type);
        setCurrentIndex(i);
      }}
      className={clsx(
        type === currentType ? "active" : "",
        styles["type-link"],
        "type-link"
      )}
    >
      {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
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
      const links = document.querySelectorAll(".type-link") as NodeListOf<HTMLElement>;
      const activeLink = links[currentIndex];
      if (activeLink) {
        indicator.current.style.width = `${activeLink.offsetWidth}px`;
        indicator.current.style.left = `${activeLink.offsetLeft}px`;
      }
    }
  }, [currentIndex, currentType]);

  const [perimeter, setPerimeter] = useState({
    width: 350,
    height: 400,
  });

  useEffect(() => {
    switch (true) {
      case (windowWidth as number) < 320:
        setPerimeter({ width: 200, height: 400 });
        break;
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
    }
  }, [windowWidth]);

  useEffect(() => {
    const columns =
      (windowWidth as number) >= xl
        ? Math.floor(((windowWidth as number) * 0.85) / perimeter.width)
        : Math.floor((windowWidth as number) / perimeter.width);
    const rows = Math.ceil(currentProjects.length / columns);
    setGridArea({
      columns,
      rows,
    });
  }, [windowWidth, currentProjects, perimeter]);

  const isPhoneScreen = useMemo(() => {
    return (windowWidth as number) <= xs;
  }, [windowWidth]);

  return (
    <section
      className={clsx(styles["our-works"], styles["p-section"], "our-works", "p-section")}
      id="our-works"
    >
      <h2
        className={clsx(styles["section-title"])}
        data-aos="fade-up"
        data-aos-delay={"100"}
      >
        My Projects
      </h2>
      <ul
        className={clsx(styles["projects-type-links"])}
        data-aos="fade-up"
        data-aos-delay={"150"}
      >
        {ProjectsTypesLinks}
        <div className={styles.indicator} ref={indicator}></div>
      </ul>
      <ProjectCard
        projects={currentProjects}
        isShowMore={isActiveBtn}
        rows={gridArea.rows as number}
        width={perimeter.width}
        columns={gridArea.columns as number}
        height={perimeter.height}
        isPhoneScreen={isPhoneScreen}
      ></ProjectCard>
      {currentProjects.length && (gridArea.rows as number) > 1 && (
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
          data-aos="fade-up"
          data-aos-delay={"100"}
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
