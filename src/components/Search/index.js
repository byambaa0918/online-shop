import React from "react";
import css from "./style.module.css";
import icon from "./icon.png";
const Search=(props)=>{
    return(
      <div className={css.Search}>      
            <input
              type="search"
              placeholder="Хайх утга оруулна уу"           
            />       
              <img src={icon} />
           
  </div>
    );
}
export default Search