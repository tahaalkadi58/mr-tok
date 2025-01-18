import clsx from "clsx";
import React, { FunctionComponent, ReactNode } from "react";

const SectionTitle: FunctionComponent<{
  className: string,
  children: ReactNode;
}> = ({ children , className}) => {
  return (
    <h2 className={clsx('section-title', className)}>
      <span>{children}</span>
    </h2>
  );
};

export default SectionTitle;
