import "./quantityPicker.css"
import { useState } from "react";

function QuantityPicker(props) {
  let [quantity, setQuantity] = useState(1);

  function increase() {
    // quantity = 100; // Don't
    // setQuantity(1);
    let val = quantity + 1;
    setQuantity(val);
    props.onQuantityChange(val);
  }

  function decrease() {
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
    props.onQuantityChange(val);
  }

  return (
    <div className="qt-picker">
      <button className="btn btn-sm btn-outline-primary" onClick={increase}>
        +
      </button>
      <label>{quantity}</label>
      <button
        className="btn btn-sm btn-outline-primary"
        disabled={quantity === 1}
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
}

export default QuantityPicker;