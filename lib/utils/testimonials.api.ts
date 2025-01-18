export default class Testimonial {
  static #lastId = -1;
  id;
  constructor(
    public firstname: string,
    public lastname: string,
    public thumbnail: string,
    public comment: string,
    public rating: number,
    public work: string,
  ) {
    this.id = ++Testimonial.#lastId;
  }
}

export const testimonialsArray = [
  new Testimonial(
    "Mamman",
    "Abubakar",
    "/photos/man-one.avif",
    "I can't say enough about Mr.TOK. Mr.TOK has really helped our business.",
    4,
    "Data Manager & IT",
  ),
  new Testimonial(
    "Nehir",
    "Erva",
     "/photos/man-two.avif",
    "We don’t need to spend as much time in meetings now that we use Mr.TOK.",
    5,
    "App Designer",
  ),
  new Testimonial(
    "Anh",
    "Umar",
     "/photos/man-three.avif",
    "We don’t need to spend as much time in meetings now that we use Mr.TOK.",
    5,
    "Cyber-Security Specialist",
  ),
];
