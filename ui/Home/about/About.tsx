import React, { FunctionComponent } from "react";
import Image from "next/image";
import "./About.scss";
const About: FunctionComponent = () => {
  return (
    <section className="about-me p-section" id="about-me">
      <h1
        data-aos="fade-up"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      >
        About me
      </h1>
      <div className="about-text">
        <h3
          data-aos="fade-left"
          data-aos-offset={50}
          data-aos-delay={"100"}
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <span className="strong">Hello, I am</span> Freelance Full Stack
          Developer and Graphic Designer, combining my technical skills with
          creative design expertise to deliver innovative solutions.
        </h3>
        <div
          className="about-widget"
          data-aos="fade-left"
          data-aos-offset={50}
          data-aos-delay={"200"}
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <h1>7+</h1>
          <h3>Completed projects!</h3>
        </div>
        <div
          className="about-widget"
          data-aos="fade-left"
          data-aos-offset={50}
          data-aos-delay={"300"}
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <h1>2+</h1>
          <h3>Year of experience!</h3>
        </div>
      </div>
      <div
        className="about-image"
        data-aos="fade-right"
        data-aos-offset={50}
        data-aos-delay={"100"}
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      >
        <Image
          src={`/photos/taha.JPG`}
          alt="Mr. Tok personlity"
          width={3000}
          height={3000}
        />
      </div>
    </section>
  );
};

export default About;
