import { faHandshakeAngle, faTrophy, faCommentDots, faPhoneAlt , faUserAlt} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
export class Class_List_Item {
  public id;
  static #last_id = -1;
  constructor(
    public name: string,
    public href: string,
    public icon?: IconDefinition,
  ) {
    this.name = name;
    this.href = href;
    this.icon = icon;
    this.id = ++Class_List_Item.#last_id;
  }
}

export const list_item = [
  new Class_List_Item("about me", "about-me", faUserAlt),
  new Class_List_Item("my skills", "services", faHandshakeAngle),
  new Class_List_Item("my projects", "our-works",  faTrophy),
  new Class_List_Item("testimonials", "testimonials", faCommentDots),
  new Class_List_Item("contact me", "contact-us", faPhoneAlt),
];
