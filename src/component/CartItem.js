import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: {item.quantity * item.price}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
