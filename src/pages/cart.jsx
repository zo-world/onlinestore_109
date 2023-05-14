import "./cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function Cart() {
  const {cart, removeProductFromCart} = useContext(DataContext);

  function itemDelete() {

  }

  return (
    <div className="cart">
      <h1>Welcome to Alchemy Store</h1>
      <h4>{cart.length} products are in your cart</h4>
      <Link className="btn btn btn-dark" to="/catalog">
        Add more items!
      </Link>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => (
            <tr key={prod._id}>
              <td>
                <img src={"/images/" + prod.image} alt="" />
              </td>
              <td>
                <h6>{prod.title}</h6>
              </td>
              <td>
                <p>{prod.quantity}</p>
              </td>
              <td>
                <label>${(prod.price * prod.quantity).toFixed(2)}</label>
              </td>
              <td>
                <button onClick={() => removeProductFromCart(prod._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
