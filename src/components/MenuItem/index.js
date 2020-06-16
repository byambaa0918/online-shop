import React from "react";
import css from "./style.module.css"

const MenuItem=(props)=>(
        <li className={css.MenuItem}>
              <img src={props.imgname}/>
              <a href="/">{props.text}</a>             
        </li>
);
export default MenuItem;