import React from "react";
import css from "./ProductStyle.module.css";
import ProductMenuItem from "../ProductMenuItem";

const ProductMenu = (props) => {
  return (
    <div>
      <ul className={css.ProductMenu}>
        <ProductMenuItem item="Зурагт" />
        <ProductMenuItem item="Бусад бараа" />
      </ul>
    </div>
  );
};
export default ProductMenu;
