import React from 'react';
//made width 500px to match the gif
const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{width: '500px'}} /> 
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.quantity * item.price}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
