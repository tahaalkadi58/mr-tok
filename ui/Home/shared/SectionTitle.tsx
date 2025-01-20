import clsx from "clsx";
import React, { FunctionComponent, ReactNode } from "react";

const SectionTitle: FunctionComponent<{
  className: string;
  children: ReactNode;
}> = ({ children, className }) => {
  return (
    <h2
      className={clsx("section-title", className)}
      data-aos="fade-up"
      data-aos-offset={50}
      data-aos-delay={"100"}
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <span>{children}</span>
    </h2>
  );
};

export default SectionTitle;
