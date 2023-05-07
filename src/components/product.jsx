import DataContext from "../state/dataContext";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState, useContext } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(props.data.price.toFixed(2));
  const globalAdd = useContext(DataContext).addProductToCart;
  const cart = useContext(DataContext).cart;

  useEffect(function () {
    //when the component loads
  }, []);

  function handleQuantity(qnty) {
    setQuantity(qnty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  const handleChange = quantity => {
    const newTotal = quantity * props.data.price;
    setTotalPrice(newTotal.toFixed(2));
  }

  function handleAdd(){
    console.log("adding", props.data.title)
    const existingProduct = cart.find((p) => p._id === props.data._id);
      if (existingProduct){
        existingProduct.quantity += quantity;
      } else {
        globalAdd({...props.data, quantity:quantity});
      }
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>
          Total <span className="total">${getTotal()}</span>
        </label>
        <label>
          Price <span className="price">${props.data.price.toFixed(2)}</span>
        </label>
      </div>

      <div className="controls">
        <QuantityPicker onQuantityChange={handleQuantity} />
        <button onClick={handleAdd} className="btn btn-sm btn-success">Add</button>
      </div>
    </div>
  );
}

export default Product;