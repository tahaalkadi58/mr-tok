import Logo from "../shared/logo";
import Hero from "../shared/Hero";
import { FunctionComponent } from "react";
import { list_item } from "../header/ExternalLink";
import clsx from "clsx";
import styles from "./Main.module.scss";
import GradientIcon from "../shared/GradientIcon";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
const FooterInfoWidget: FunctionComponent = () => {
  const list_item_components = list_item.map(({ name, href, id, icon }, i) => {
    const key = `${name}-${id}`;
    return (
      <li
        className={clsx(styles.social, styles[name], name)}
        key={key}
        id={key}
      >
        <a href={href} target="_blank">
          <GradientIcon
            className={clsx(styles["fa-icon"], "fa-icon")}
            faIcon={icon as IconDefinition}
          />
        </a>
      </li>
    );
  });
  return (
    <div className={styles["footer-widget"]}>
      <div className={styles["footer-logo"]}>
        <Logo></Logo>
        <Hero customeSyles={styles.hero}></Hero>
      </div>
      <div className={styles["footer-text"]}>
        <p>
          Hello, I am Freelance Full Stack Developer and Graphic Designer,
          combining my technical skills with creative design expertise to
          deliver innovative solutions.
        </p>
      </div>
      <div className={styles["footer-social-icon"]}>
        <span>Follow us</span>
        <ul className={"external-nav-ul"}>{list_item_components}</ul>
      </div>
    </div>
  );
};

export default FooterInfoWidget;
