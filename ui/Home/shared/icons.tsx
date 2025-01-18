import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from './Main.module.scss'

export default function Icon({
  icon,
  className,
}: {
  icon: IconDefinition;
  className: string;
}) {
  return (
    <div className={className}>
      <FontAwesomeIcon className={styles["fa-icon"]} icon={icon} />
    </div>
  );
}
