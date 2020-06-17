import React from "react";
import css from "./style.module.css";
import icon from "./icon.png";
const Search = (props) => {
  return (
    <div className={css.Search}>
      <input type="search" placeholder="Хайх утга оруулна уу" />
      <div className={css.imgdiv}>
        <img src={icon} alt="ds" />
      </div>
    </div>
  );
};
export default Search;
