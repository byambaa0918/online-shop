import React from "react";
import css from "./toolbar.module.css";
import Logo from "../logo";
import Search from "../Search";
import Menu from "../Menu";

import SideBar from "../SideBar";
import Shadow from "../Shadow";
const Toolbar = (props) => {
  return (
    <div className={css.Toolbar}>
      <SideBar SideBar={props.SideBar} Change={props.ChangeSidebar} />
      <Shadow Change={props.ChangeSidebar} ProMenu={props.SideBar} />
        <Logo  Change={props.ChangeSidebar}/>
        <Search />
        <Menu/>     
    </div>
  );
};
export default Toolbar;
