import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../redux/cartSlice';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPlants = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Total Plants: {totalPlants}</p>
        <p>Total Cost: ${totalCost}</p>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} width={100} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        ))}
        <button onClick={() => alert('Coming Soon!')}>Checkout</button>
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
      </div>
    </>
  );
};

export default ShoppingCart;
