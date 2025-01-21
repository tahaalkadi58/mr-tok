import React from "react";
import { Class_List_Item } from "@/lib/utils/Class_list_item";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Main.module.scss";
import GradientIcon from "../shared/GradientIcon";
import clsx from "clsx";
import Link from "next/link";
export default function ExternalLink() {
  const list_item_components = list_item.map(({ name, href, id, icon }, i) => {
    const key = `${name}-${id}`;
    return (
      <li
        className={`${name} social`}
        key={key}
        id={key}
        data-aos="slide-up"
        data-aos-offset={200 + 100 * i}
        data-aos-delay={i * 200}
        data-aos-easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)"
        data-aos-anchor-placement="top-bottom"
      >
        <Link href={href} target="_blank">
          <GradientIcon
            className={clsx(styles["fa-icon"], "fa-icon")}
            faIcon={icon as IconDefinition}
          />
        </Link>
      </li>
    );
  });
  return (
    <ul className={clsx(styles["external-nav-ul"], "external-nav-ul")}>
      {list_item_components}
    </ul>
  );
}

export const list_item = [
  new Class_List_Item("facebook", "https://www.facebook.com/the.mr.tok/", faFacebook),
  new Class_List_Item("instagram", "https://www.instagram.com/the.mr.tok/", faInstagram),
  new Class_List_Item("telegram", "https://www.tiktok.com/@mrtok813", faTiktok),
];
