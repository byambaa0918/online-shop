import React from "react";
import css from "./style.module.css";
const TopbarItem=(props)=>{
    return(
            <div className={css.TopbarItem}>
              {props.children}
            </div>
        );
}
export default TopbarItem;