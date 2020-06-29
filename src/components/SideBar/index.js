import React from "react";
import css from "./style.module.css";
import ProductMenuItem from "../ProductMenuItem";
import Shadow from "../Shadow";

const Sidebar = (props) => {
  return (
    <div className={props.SideBar ? css.SideBar : css.Sidebar1}>
      <ul>
        <li>
          <ProductMenuItem active ProMenu={props.ProMenu} link="/">
            Зурагт
          </ProductMenuItem>
          <ProductMenuItem link="/1">Гар утас</ProductMenuItem>
          <ProductMenuItem link="/2">Бусад</ProductMenuItem>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
