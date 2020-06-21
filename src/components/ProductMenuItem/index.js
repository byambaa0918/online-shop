import React from "react";
import css from "./style.module.css";

const ProductMenuItem = (props) => {
  return <div className={css.item}>{props.item}</div>;
};
export default ProductMenuItem;
