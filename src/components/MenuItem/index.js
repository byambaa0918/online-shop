import React from "react";
import css from "./style.module.css"
import {FaSave} from "react-icons/fa";
import {RiShoppingBasketLine} from "react-icons/ri";
const MenuItem=(props)=>(
        <li className={css.MenuItem}>
              {/* <FaSave/> */}
              <RiShoppingBasketLine/>
              <a href="/">{props.text}</a>             
        </li>
);
export default MenuItem;