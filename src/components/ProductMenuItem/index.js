import React from "react";
import css from "./style.module.css";

import { NavLink, withRouter } from "react-router-dom";

const ProductMenuItem = (props) => {
  return (
    <div className={css.item}>
      <NavLink exact={props.exact} activeClassName={css.active} to={props.link}>
        {props.children}
      </NavLink>
      {/* <a src={props.link}> {props.children}</a> */}
      {/*ooroo active esehee meddeg activeClassName*/}
    </div>
  );
};
export default withRouter(ProductMenuItem);
