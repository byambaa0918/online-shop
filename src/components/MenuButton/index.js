import React from "react";
import css from "./style.module.css";
const MenuButton=(props)=>{
    return(
    <div class={css.menubutton} onClick={props.Change}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    );
}
export default MenuButton;