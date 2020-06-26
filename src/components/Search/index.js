import React from "react";
import css from "./style.module.css";
import {FaSearch} from "react-icons/fa"
const Search = (props) => {
  return (
    <div className={css.Search}>
      <input type="text" placeholder="Хайх утга оруулна уу" />
      <div className={css.imgdiv}>
          <FaSearch/>
      </div>
    </div>
  );
};
export default Search;
