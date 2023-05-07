import './App.css';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./pages/about";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Cart from './pages/cart';
import ShoppingList from "./pages/shoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalState from './state/globalState';

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar />

          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/shoppingList" element={<ShoppingList />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
