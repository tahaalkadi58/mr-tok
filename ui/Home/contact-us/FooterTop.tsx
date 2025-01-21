import React, { FunctionComponent } from "react";
import { ContactInfo } from "@/lib/utils/contact-info";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientIcon from "../shared/GradientIcon";
const FooterTop: FunctionComponent = () => {
  const contactInfo = ContactInfo.map(({ icon, id, contactType, moreInfo }) => {
    return (
      <div
        className={styles["info-type"]}
        key={id}
        id={`${id}`}
        data-aos="fade-up"
        data-aos-delay={100 * id}
      >
        <GradientIcon className={styles["fa-icon"]} faIcon={icon} />
        <div className={styles.info}>
          <h4>
            {contactType.charAt(0).toUpperCase() + contactType.substring(1)} me
          </h4>
          <span>{moreInfo}</span>
        </div>
      </div>
    );
  });
  return <div className={styles["footer-top"]}>{contactInfo}</div>;
};

export default FooterTop;
