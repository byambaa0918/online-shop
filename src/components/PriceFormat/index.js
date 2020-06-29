import React from "react";
import NumberFormat from "react-number-format";
const PriceFormat = (props) => {
  return (
    <div>
      <NumberFormat
        value={props.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₮"}
      />
    </div>
  );
};
export default PriceFormat;
