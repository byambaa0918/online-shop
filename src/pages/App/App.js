import React, { Component } from "react";
import Toolbar from "../../components/toolbar";
import SlideAnim from "../../components/SlideAnim";
import Topbar from "../../components/topbar";
import tv from "../../components/General/picture/logo.png";
import ProductDetail from "../../components/ProductDetail";
import css from "./style.module.css";
import Bottom from "../../components/BottomMenu";
import ProductMenu from "../../components/ProductMenu";

class App extends Component {
  state = {
    sidebar: false,
  };
  render() {
    let i = 32;
    let b =
      "Дэлэнгэрэнгүй тайлбах хэсэг буюу барааны нэр зэрэг...................................";
    let c = 12;
    return (
      <div>
        <Topbar />
        <Toolbar />
        {/* undsen menu */}
        <ProductMenu />
        <SlideAnim />
        <ProductDetail/>
        <p>
          <strong className={css.str}>Шинэ бараа</strong>
        </p>
        <div className={css.Flex}>
          {/* <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} />
          <ProductCard pic={tv} price={i} exp={b} sale={c} /> */}
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;
