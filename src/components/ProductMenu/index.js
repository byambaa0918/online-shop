import React from "react";
import css from "./ProductStyle.module.css";
import ProductMenuItem from "../ProductMenuItem";
import Angilal from "../Angilal";
import MenuModal from "../MenuModal.js";
import Shadow from "../Shadow";

const ProductMenu = (props) => {
  return (
    <div>
      <ul className={css.ProductMenu}>
        <Shadow ProMenu={props.ProMenu} Change={props.Change} />
        <Angilal ProMenu={props.ProMenu} Change={props.Change} />

        <MenuModal act={props.ProMenu} />
        <div className={css.wid}>
          <ProductMenuItem active ProMenu={props.ProMenu} link="/">
            Зурагт
          </ProductMenuItem>
          <ProductMenuItem link="/garUtas">Гар утас</ProductMenuItem>
          <ProductMenuItem link="/Busad">Бусад</ProductMenuItem>
        </div>
        {/* <ProductMenuItem item="Зурагт" />
        <ProductMenuItem item="Бусад бараа" /> */}
      </ul>
    </div>
  );
};
export default ProductMenu;
