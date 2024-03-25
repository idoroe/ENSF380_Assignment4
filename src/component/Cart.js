import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
    // Check if cart is defined and is an array before using reduce
    const totalPrice = cart ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
  
    return (
      <div className="cart" >
        <h2>Shopping Cart</h2>
        {cart && cart.map((item, index) => (
          <CartItem key={index} item={item} removeFromCart={removeFromCart} />
        ))}
        <h3>Total (in cart): ${totalPrice}</h3>
      </div>
    );
  }
  
export default Cart;