import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function NavBar() {
  const cart = useContext(DataContext).cart;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Alchemy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shoppingList">
                Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart" className="btn btn-outline-success mx-2">
              {cart.length} Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;