import { createContext } from "react";
import ShoppingList from '../pages/shoppingList';

/*
  Context is a promise/interface/plan for the data that will be stored it should not have any implementations
*/

const DataContext = createContext({
  cart: [],
  ShoppingList: [],
  user: {},

  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;