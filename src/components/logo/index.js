import React from "react";
import css from "./style.module.css";
import logoimg from "./logo.png";
const Logo=()=>(
    <div className={css.Logo}>
        <img src={logoimg}/>
    </div>
);
export default Logo;