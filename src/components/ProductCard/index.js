import React from "react";
import css from "./ProductCard.module.css";
import PriceFormat from "../PriceFormat";
import Gift from "../gift";

const ProductCard = (props) => {
  return (
    <div className={css.Card} onClick="">
      <div>
        <span className={props.sale === 0 ? css.sale1 : css.sale}>
          <PriceFormat price={props.sale} />
        </span>
        <img src={props.pic} alt="zurag" className={css.pic}></img>
        <div className={css.sale}>{props.sale}</div>
      </div>
      <div className={css.p}>
        <span className={css.price}>
          <PriceFormat price={props.price - props.sale} />
        </span>
        <span className={props.sale === 0 ? css.sale1 : css.disprice}>
          <PriceFormat price={props.price} />
        </span>
      </div>
      <div>
        <h1>{props.exp}</h1>
      </div>
      <button className={css.but}>Сагслах</button>

      <div className={css.brand}>
        <Gift Gift="b" />
      </div>
    </div>
  );
};
export default ProductCard;

    // <Link  to="/Product"className={css.Card} onClick={add}>
