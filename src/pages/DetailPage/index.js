import React from "react";
import ProductDetail from "../../components/ProductDetail"; 
import {withRouter} from "react-router-dom";
const DetailPage=(props)=>{
    console.log("aaaA"+props.history);
    return<div>
           <ProductDetail/>
    </div>
}
export default withRouter(DetailPage);