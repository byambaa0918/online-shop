import React from "react";
import css from "./style.module.css"
import {FaSave} from "react-icons/fa";
import {RiShoppingBasketLine} from "react-icons/ri";
import {MdPerson} from "react-icons/md";
const MenuItem=(props)=>{

      const [Color,setColor]=React.useState("");
     
       return(<li onMouseLeave={() =>{setColor("")}}  onMouseEnter={() =>{setColor("red")}} style={{color:Color}}  className={css.MenuItem}>         
              {   
                  props.text==="Хадгалсан"?<FaSave/>:
                  props.text==="Сагс"?<RiShoppingBasketLine/>:
                                          <MdPerson/>               
              }         
              <a href="/"  style={{color:Color}}>{props.text}</a>             
        </li>
       );
       };
export default MenuItem;