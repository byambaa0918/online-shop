import React from "react";
import css from "./style.module.css";
import logoimg from "./logo.png";
import MenuButton from "../MenuButton";
const Logo=()=>(
    <div className={css.Logo}>
        <MenuButton/>
        <img src={logoimg}/>   
    </div>
);
export default Logo;