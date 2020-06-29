import React from "react";
import SlideAnim from "../../components/SlideAnim";
import tv from "../../components/General/picture/logo.png";
import ProductCard from "../../components/ProductCard";
import css  from "./style.module.css";
import ProductALL from "../../components/ProductAll";
const HomePage=()=>{
    let i = 32;
    let b =
      "Дэлэнгэрэнгүй тайлбах хэсэг буюу барааны нэр зэрэг...................................";
    let c = 12;
    return(
        <div >
            <SlideAnim />
            <p>
            <strong className={css.str}>Шинэ бараа</strong>
            </p>
            <ProductALL/>
        </div>
            
    );
    
}
export default HomePage;