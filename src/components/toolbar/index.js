import React from "react";
import css from "./toolbar.module.css";
import Logo from "../logo";
import Search from "../Search";
import Menu from "../Menu";
const Toolbar = () => {
  return (
    <div className={css.Toolbar}>
        
        <Logo />
        <Search />
        <Menu/>     
    </div>
  );
};
export default Toolbar;
