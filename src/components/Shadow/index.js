import React from "react";
import css from "./style.module.css";

const Shadow = (props) => {
  return (
    <div
      className={props.ProMenu ? css.Shadow : css.Shadow1}
      onClick={props.Change}
    ></div>
  );
};
export default Shadow;