import React from "react";
import css from "./style.module.css";
import TopbarItem from "../TopbarItem";

const Container=(props)=>{
    return(
            <div className={css.container}>
                <p><strong>Online-Shop</strong></p>
                <TopbarItem>Мэдээ видео</TopbarItem>
                <TopbarItem>Дэлгүүрийн байршил</TopbarItem>
                <TopbarItem>Тусламж</TopbarItem>
                <TopbarItem>Холбоо барих</TopbarItem>
            </div>
        );
}
export default Container;