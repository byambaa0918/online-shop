import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import login from "../MenuItem/login.png";
import saved from "../MenuItem/saved.png";
import basket from "../MenuItem/basket.jpg";
const Menu=()=>(
    <div className={css.Menu}>
        <ul >
           <MenuItem text="Хадгалсан" imgname={saved}/>
           <MenuItem text="Сагс" imgname={basket}/>
           <MenuItem text="Нэвтрэх" imgname={login}/>
        </ul>
    </div>
);
export default Menu;