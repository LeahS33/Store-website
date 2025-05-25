import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import shopping_cart from './assets/shopping-cart3.png';
import shopping_cart2 from './assets/shopping-cart2.png'
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Error from './components/Error';
import { useSelector } from "react-redux";
import './App.css'
import { useState } from "react";

function App() {

  const productsOrdered = useSelector(state => state.cart.productsInCart)

  const [cartImage, setCartImage] = useState(shopping_cart);
  const [active, setActive] = useState(false);

  const handleProductAboutClick = () => {
    setCartImage(shopping_cart);
    setActive(false);
  };
  const handleCartClick = () => {
    setCartImage(shopping_cart2);
    setActive(true);
  };

  const handleMouseOver = () => {
    setCartImage(shopping_cart2);
  };

  const handleMouseOut = () => {
    if (!active) {
      setCartImage(shopping_cart);
    }
  }

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleProductAboutClick} color='#61dafb'>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleProductAboutClick}>About</NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleCartClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img id='cart' src={cartImage} width="30px" height="30px" alt="Cart" />
          {productsOrdered.length}
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
