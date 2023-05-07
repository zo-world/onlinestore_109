import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  function handleProductText(e) {
    const text = e.target.value;
    const name = e.target.name;

    //create copy, modify the copy, set the copy back
    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);

    //create copy, modify the copy, set the copy back
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  const handleCouponText = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const saveCoupon = (e) => {
    console.log(coupon);

    let copy = { ...allCoupons };
    copy.push(coupon);
    setAllCoupons(copy);
  };

  return (
    <div className="page admin">
      <h2>Store Administration</h2>

      <div className="parent">
        <section id="secProducts">
          <h4>Create Product</h4>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              onBlur={handleProductText}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              name="category"
              onBlur={handleProductText}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              name="price"
              onBlur={handleProductText}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="text"
              name="image"
              onBlur={handleProductText}
              className="form-control"
            ></input>
          </div>

          <div className="mb-3 text-center">
            <button onClick={saveProduct} className="btn btn-dark">
              Save Product
            </button>
          </div>

          <ul className="prod-list">
            {allProducts.map((prod) => (
              <li key={prod.title}>{prod.title}</li>
            ))}
          </ul>
        </section>

        <section id="secCoupons">
          <h4>Create Coupons</h4>

          <div className="mb-3">
            <label className="form-label">Code</label>
            <input
              type="text"
              name="title"
              onBlur={handleCouponText}
              className="form-control"
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Discount</label>
            <input
              type="number"
              name="title"
              onBlur={saveCoupon}
              className="form-control"
            ></input>
          </div>

          <div className="mb-3 text-center">
            <button
              onClick={saveProduct}
              className="btn btn-sm btn-outline-dark"
            >
              Save Coupon
            </button>
          </div>

          <ul className="coupon-list">
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admin;
