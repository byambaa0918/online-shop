import React from "react";
import css from "./style.module.css";

const Angilal = (props) => {
  return (
    <div
      className={css.Hamburg}
      onClick={props.Change}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Angilal;