import React from "react";
import css from "./style.module.css";
import logoimg from "./logo.png";
import MenuButton from "../MenuButton";
const Logo=(props)=>(
    <div className={css.Logo}>
        <MenuButton Change={props.Change} />
        <img src={logoimg} alt="/"/>   
    </div>
);
export default Logo;