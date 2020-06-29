import React from "react";
import css from "./style.module.css";
import Tuhai from "../Tuhai";
import { Route} from "react-router-dom";
const Bottom = () => {
  return (
    <div>
      <div className={css.Bottom}>
        <div className={css.bottommenu}>
          <ul>
            Мэдээлэл
            <li>
              Бид таны тав тухтай гэр, хэрэглээнээс авах сэтгэл ханамжийн төлөө
              ажиллада
            </li>
            <li>Утас:7575-3535 9903-1256 9990-3535 9335-3535 9595-3535</li>
            <li>Имэйл: eshop@summit.mn eshop@pcmall.mn</li>
          </ul>
          <ul>
            Компанийн тухай
            <li onClick="//">sdfsd</li>
            <li>
              <Route path="//" component={Tuhai} />
            </li>
            <li>sdfsd</li>
          </ul>
          <ul>
            Холбоос
            <li>sdfsd</li>
            <li>sdfsd</li>
            <li>sdfsd</li>
          </ul>
        </div>
      </div>
      <div className={css.footer}>
        <h1>© 2020 - 2020 IT SYSTEM. Бүх эрх хуулийн дагуу хамгаалагдсан.</h1>
      </div>
    </div>
  );
};
export default Bottom;
