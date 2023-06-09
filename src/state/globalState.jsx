import DataContext from "./dataContext";
import { useState } from "react";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [user, setUser] = useState({ id: 23, name: 'Yreish' });

  function addProductToCart(prod) {
    let found = false;
    let copy = cart.map((p) => {
      if (p._id === prod._id) {
        found = true;
        return {...prod, quantity: prod.quantity+1}
      }
      return p;
    });
    if (!found) {
      copy.push({...prod, quantity:1})
    }
    setCart(copy);
  }

  function removeProductFromCart(_id) {
    const updatedCart = cart.filter((product) => product._id !== _id);
    setCart(updatedCart);
  }

  return (
    <DataContext.Provider value={{
      cart: cart,
      shoppingList: shoppingList,
      user: user,

      addProductToCart,
      removeProductFromCart,
    }}a
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default GlobalState;