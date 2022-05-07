import './Navbar.scss';
import { useState, useEffect } from "react";
import CartDrawer from "./CartDrawer";

export default function Navbar(props) {

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 0) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <header className={navbarClasses.join(" ")}>

      <nav className="navbar">
        <h1 className="navbar-logo">Fulhaus Shop</h1>
        <CartDrawer
          cart={props.cart}
          removeFromCart={props.removeFromCart}
        />
      </nav>
    </header>
  );
};