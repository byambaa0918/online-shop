import React from "react";
import css from "./topbar.module.css";
import TopbarItem from "../TopbarItem";
const Topbar=()=>{
    return( 
    <div className={css.Topbar}>
                <p><strong>Online-Shop</strong></p>
                <TopbarItem>Мэдээ видео</TopbarItem>
                <TopbarItem>Дэлгүүрийн байршил</TopbarItem>
                <TopbarItem>Тусламж</TopbarItem>
                <TopbarItem>Холбоо барих</TopbarItem>   
                
    </div>
    );
}
export default Topbar;