import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  useEffect(function () {
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
    let cats = ["Fruit", "Canned"];
    setCategory(cats);
    setProdsToDisplay(prods);
  }

  function filter(category) {
    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setProdsToDisplay(list);
  }

  return (
    <div className="page catalog">
      <h2>Check out our amazing catalog!</h2>
      <h5>We have {products.length} products for you!</h5>

      <div className="category-filter">
        <span>Filter by category:</span>
        {category.map((c) => (
          <button
            key={c}
            onClick={() => filter(c)}
            className="btn btn-sm btn-outline-success btn-filter"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="product-list">
        {prodsToDisplay.map((p) => (
          <Product key={p._id} data={p} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;