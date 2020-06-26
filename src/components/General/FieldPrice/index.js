import React from "react";
import css from "./style.module.css";
const FieldPrice=(props)=>{
    return(
        <div className={css.FieldPrice}>{props.price}₮</div>
    );
}
export default FieldPrice;