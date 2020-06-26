import React from "react";
import css from "./style.module.css";
import ProductDetailTitle from "../ProductDetailTitle";
import FieldPrice from "../General/FieldPrice";
import Button from "../General/Button";
import FieldSeller from "../General/FieldSeller";
const ProductDetailBasket=()=>{
    return <div className={css.ProductDetailBasket}>
        <FieldPrice price="111111111"/>
        <FieldSeller/>
        <Button/>
    </div>
}
export default ProductDetailBasket;
