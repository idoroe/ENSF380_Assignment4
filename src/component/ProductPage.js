import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const ProductPage = () => {
    //this will initialize the cart with what is saved in localstorage.
    const [cart, setCart] = useState(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      return Array.isArray(savedCart) ? savedCart : [];
    });
  
    useEffect(() => {
      // Save cart data to local storage whenever it changes
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

  

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id); //checks if item is in cart already
    if (existingItem) { //if it is it adds 1 to quantity
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const removeFromCart = (product) => { 
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  }

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td ><ProductList addToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top',}}><Cart cart={cart} removeFromCart={removeFromCart} /></td> 
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default ProductPage;
