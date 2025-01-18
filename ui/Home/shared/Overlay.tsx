import React, { FunctionComponent } from "react";
import stylesIm from "./Main.module.scss";
const Overlay: FunctionComponent<{ styles: React.CSSProperties }> = ({
  styles,
}) => {
  return <div className={stylesIm.overlay} style={styles}></div>;
};

export default Overlay;
