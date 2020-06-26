import React from "react";
import css from "./style.module.css";

import ProductMenuItem from "../ProductMenuItem";
import { MdTv } from "react-icons/md";
import { MdTabletAndroid } from "react-icons/md";
import { AiOutlineAlignRight } from "react-icons/ai";

const MenuModal = (props) => {
  return (
    <div className={props.act ? css.MenuModal : css.MenuModal1}>
      <ul>
        <ProductMenuItem exact link="/">
          <MdTv /> Зурагт
        </ProductMenuItem>

        <ProductMenuItem link="/1">
          {" "}
          <MdTabletAndroid /> Гар утас
        </ProductMenuItem>
        <ProductMenuItem link="/2">
          {" "}
          <AiOutlineAlignRight /> Бусад
        </ProductMenuItem>
      </ul>
    </div>
  );
};
export default MenuModal;