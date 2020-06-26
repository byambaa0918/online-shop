import React from "react";
import css from "./style.module.css";
import ProductDetailTitle from "../ProductDetailTitle";
import ProductInformation from "../ProductInformation";
import ProductDetailBasket from "../ProductDetailBasket";
import ProductDetailTopImage from "../ProductDetailTopImage";
import MoreInformation from "../General/MoreInformation";
const ProductDetail=()=>{
    return <div className={css.ProductDetail}>                  
                <div class={css.ProductDetailLeft}>
                    <ProductDetailTopImage/>
                    <div >
                        <img src="https://pc-mall.mn/uploads/products/202001/300/1578311930Dell-Latitude-7390.jpg"/>
                    </div>
                </div>
                <div class={css.ProductDetailright}>                 
                    <ProductDetailTitle/>
                    <ProductInformation/>   
                    <div className={css.Contain}>              
                        <ProductDetailBasket/>
                        <MoreInformation/>  
                    </div>                  
                </div>


       
    </div>
}
export default ProductDetail;
