import { faReact} from "@fortawesome/free-brands-svg-icons";
import { faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";

class ServicesItemsClass {
  id;
  static #last_id = -1;
  constructor(
    public description: string,
    public title: string,
    public isIcon: boolean,
    public mainColor: string,
    public secondColor: string,
    public percentage: string,
    public icon?: IconDefinition,
  ) {
    this.description = description;
    this.icon = icon;
    this.title = title;
    this.isIcon = isIcon;
    this.mainColor = mainColor;
    this.secondColor = secondColor;
    this.percentage = percentage;
    this.id = ++ServicesItemsClass.#last_id;
  }
}
export const services_items_data = [
  new ServicesItemsClass(
    "NodeJS enables fast, scalable backend solutions with its powerful JavaScript runtime.",
    "NodeJS",
    false,
    "#8CC84B",
    "#A9D56B",
    "75",
  ),
  new ServicesItemsClass(
    "ReactJS builds dynamic interfaces with ease, offering flexibility and high performance.",
    "ReactJS",
    true,
    "#61DAFB",
    "#85E1FB",
    "32",
    faReact
  ),
  new ServicesItemsClass(
    "TailwindCSS simplifies modern web design with its utility-first and responsive approach.",
    "TailwindCSS",
    false,
    "#38BDF8",
    "#6CCAFD",
    "25",
  ),
  new ServicesItemsClass(
    "NextJS delivers advanced React apps with server-side rendering and improved SEO tools.",
    "NextJS",
    false,
    "#000000",
    "#333333",
    "19",
  ),
  new ServicesItemsClass(
    "MongoDB handles complex data effortlessly with its scalable and flexible NoSQL design.",
    "MongoDB",
    false,
    "#47A248",
    "#66B765",
    "45",
  ),
  new ServicesItemsClass(
    "And More! Explore more tools for enhancing your projects with cutting-edge solutions.",
    "And More!",
    true,
    "cornflowerblue",
    "lightblue",
    "",
    faPlus
  ),
];

export const svgIcons = {
  NextJS: "/services/nextjs.svg",
  NodeJS: "/services/mongodb.svg",
  MongoDB: "/services/node.svg",
  TailwindCSS: "/services/tailwindcss.svg",
} as const;

export type SvgIconKey = keyof typeof svgIcons;
