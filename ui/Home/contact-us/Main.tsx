'use client';
import FooterInfoWidget from "./FooterInfoWidget";
import SubscribeWidget from "./SubscribeWidget";
import UseFullLinks from "./UseFullLinks";
import CopyRightWidget from "./CopyRightWidget";
import FooterTop from "./FooterTop";
import clsx from "clsx";
import styles from './Main.module.scss';
export default function ContactUs() {
  return (
    <footer className={clsx(styles['p-section'], styles['contact-us'], 'p-section')} id="contact-us">
      <FooterTop></FooterTop>
      <div className={styles["footer-content"]}>
        <FooterInfoWidget></FooterInfoWidget>
        <UseFullLinks />
        <SubscribeWidget />
      </div>
      <div className={styles["globals"]}></div>
      <CopyRightWidget />
    </footer>
  );
}
