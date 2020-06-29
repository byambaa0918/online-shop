import React from "react";
import ProductCard from "../../components/ProductCard";
import css from "./style.module.css";
import tv from "../../components/General/picture/logo.png";
let i = 5322222;
let b = " барааны нэр зэрэг..dfsdfsdf fds czdsfzx";
let c = 1;
const ProductALL = () => {
  return (
    <div className={css.all}>
      <div className={css.Flex}>
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
        <ProductCard pic={tv} price={i} exp={b} sale={c} />
      </div>
    </div>
  );
};
export default ProductALL;