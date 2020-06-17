import React, { Component } from "react";
import Toolbar from "../../components/toolbar";
import SlideAnim from "../../components/SlideAnim";
import Topbar from "../../components/topbar";
import ProductCard from "../../components/ProductCard";
import tv from "../../components/General/picture/logo.png";

import css from "./App.css";
import Bottom from "../../components/BottomMenu";
class App extends Component {
  render() {
    let i = 32;
    let b =
      "Дэлэнгэрэнгүй тайлбах хэсэг буюу барааны нэр зэрэг..................................................";
    return (
      <div>
        <Topbar />
        <Toolbar />
        <div class="test  "></div>
        <Toolbar />
        <SlideAnim />
        <p>
          <strong className={css.str}>Шинэ бараа</strong>
        </p>
        <div className={css.flex}>
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
          <ProductCard pic={tv} price={i} exp={b} />
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;
