import React from "react";
import css from "./style.module.css";
import {RiCheckboxCircleLine} from "react-icons/ri";
import {GrLocation} from "react-icons/gr";//ai bs di fi fc fa gi go gr io md ri ti
import {RiTruckLine} from "react-icons/ri";
const MoreInformation =(props)=>{
    return(
        <div className={css.MoreInformation}>
            <div>
                <RiCheckboxCircleLine size="20px"/> <p>Агуулахад байгаа</p>
            </div>
            <div>
                <GrLocation size="20px"/> <p>Улаанбаатар</p>
            </div>
            <div>
                <RiTruckLine size="20px"/><p> Хүргэлттэй</p>
            </div>
        </div>
    );
}
export default MoreInformation;