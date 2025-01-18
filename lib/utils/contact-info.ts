import {
  IconDefinition,
  faPhone,
  faEnvelopeOpen,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

interface iContactInfo {
  icon: IconDefinition;
  contactType: string;
  moreInfo: string;
  id: number;
}

class Contact implements iContactInfo {
  public id: number;
  static lastId = -1;
  constructor(
    public contactType: string,
    public moreInfo: string,
    public icon: IconDefinition
  ) {
    this.id = ++Contact.lastId;
  }
}

export const ContactInfo: iContactInfo[] = [
  new Contact("find", "Lebanon, Tripoli, Baddawi", faMapMarkedAlt),
  new Contact("call", "+961 70 380 113", faPhone),
  new Contact("mail", "tahaalkadi57@gmail.com", faEnvelopeOpen),
];
