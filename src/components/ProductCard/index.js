import React from "react";
import css from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={css.Card} onClick="">
      <div>
        <img src={props.pic} alt="zurag" className={css.pic}></img>
        <div className={css.sale}>{props.sale}</div>
      </div>
      <div className={css.price}>ҮНЭ:{props.price}$</div>
      <div>
        <h1>{props.exp}</h1>
      </div>

      <button>Сагслах</button>
    </div>
  );
};
export default ProductCard;
