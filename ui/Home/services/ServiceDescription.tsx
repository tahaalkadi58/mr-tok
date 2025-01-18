import React, { useRef } from "react";
import { services_items_data } from "@/lib/utils/Class_services_items";
import { svgIcons, SvgIconKey } from "@/lib/utils/Class_services_items";
import clsx from "clsx";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface iServiceDescription {
  activeTab: number;
}

export default function ServiceDescription({ activeTab }: iServiceDescription) {
  const ref = useRef(null);
  const description_item = services_items_data.map(
    ({ description, title, icon, id, isIcon }, i) => {
      const Svg = svgIcons[title as SvgIconKey];
      const key = `${title.toLowerCase()}-${id + 1}`;
      return (
        <div
          className={clsx(
            styles["description-box"],
            activeTab === id ? styles.active : ""
          )}
          key={key}
          id={key}
        >
          <h2 className={styles.title}>
            <span>{title}</span>
          </h2>
          <p>{description}</p>
          {isIcon && (
            <FontAwesomeIcon
              className={clsx(styles['fa-icon'], 'fa-icon')}
              icon={icon as IconDefinition}
            />
          )}
          {!isIcon && Svg && (
            <div
              className={styles["svg-icon"]}
              style={{
                mask: `url(${Svg}) center / cover no-repeat`,
              }}
            ></div>
          )}
        </div>
      );
    }
  );

  return (
    <div className={styles["services-description"]}>{description_item}</div>
  );
}
