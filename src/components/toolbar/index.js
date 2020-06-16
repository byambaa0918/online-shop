import React from "react";
import css from "./toolbar.module.css";
import Logo from "../logo";
import Search from "../Search";
import Menu from "../Menu";
const Toolbar=()=>{
    return (
    <div className={css.Toolbar}>
        <div className={css.container}>
        <Logo/> 
        <Search/>
        <Menu/>
    </div>
    </div>
    );
}
export default Toolbar;