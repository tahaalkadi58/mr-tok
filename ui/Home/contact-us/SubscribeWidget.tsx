import { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTentArrowLeftRight } from "@fortawesome/free-solid-svg-icons";
const SubscribeWidget: FunctionComponent = () => {
  return (
    <div className={styles["footer-widget"]}>
      <div className={styles["footer-widget-heading"]}>
        <h3>Subscribe</h3>
      </div>
      <div className={styles["footer-text"]}>
        <p>
          Don’t miss to subscribe to our new feeds, kindly fill the form below.
        </p>
      </div>
      <div className={styles["subscribe-form"]}>
        <form action="#">
          <input type="text" placeholder="Email Address" />
          <button>
            <FontAwesomeIcon
              className={styles["fa-icon"]}
              icon={faTentArrowLeftRight}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeWidget;
