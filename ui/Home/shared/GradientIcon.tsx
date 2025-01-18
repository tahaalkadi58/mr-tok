import React, { CSSProperties, FunctionComponent } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface iGradientIcon {
  faIcon: IconDefinition;
  className: string
  style?: CSSProperties;
}
const GradientIcon: FunctionComponent<iGradientIcon> = ({ style, faIcon, className }) => {
  const [width, height, , , pathData] = faIcon.icon;

  return (
    <div
    className={className}
      style={{
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cpath fill='black' d='${pathData}'/%3E%3C/svg%3E")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cpath fill='black' d='${pathData}'/%3E%3C/svg%3E")`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        ...style,
      }}
    />
  );
};

export default GradientIcon;
