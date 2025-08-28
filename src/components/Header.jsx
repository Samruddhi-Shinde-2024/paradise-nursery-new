import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h2>Paradise Nursery</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          🛒 Cart ({totalQty})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
