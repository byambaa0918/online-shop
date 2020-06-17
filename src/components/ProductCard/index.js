import React from "react";
import css from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={css.Card} onClick="">
      <div>
        <img src={props.pic} alt="zurag" className={css.pic}></img>
      </div>
      <h2>ҮНЭ:{props.price}$</h2>
      <h1>{props.exp}</h1>
      <button>Сагслах</button>
    </div>
  );
};
export default ProductCard;
