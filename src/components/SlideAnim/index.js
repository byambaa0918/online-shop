import React from "react";
import css from "./style.module.css";
import { Slide } from "react-slideshow-image";
import slide1 from "../General/picture/logo-og.png";
import slide2 from "../General/picture/images.png";
import slide3 from "../General/picture/logo.png";

const slideImages = [slide1, slide2, slide3];
const properties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};
const SlideAnim = () => {
  return (
    <div className={css.slideContainer}>
      <Slide {...properties}>
        <div className={css.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className={css.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className={css.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};
export default SlideAnim;
