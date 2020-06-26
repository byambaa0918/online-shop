import React from "react";
import css from "./style.module.css";
const FieldSeller=(props)=>{
    return(
        <div className={css.FieldSeller}>
            <div className={css.name}>Борлуулагч:</div>
            
            <div className={css.value}>PCmall</div>
        </div>
    )
}
export default FieldSeller;
