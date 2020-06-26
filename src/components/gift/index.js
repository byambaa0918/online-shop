  
import React from "react";
import css from "./style.module.css";
import tc from "./tv.png";

const Gift = (props) => {
  return (
    <div className={css.Gift}>
      <img src={tc} alt="ds"></img>
    </div>
  );
};
export default Gift;