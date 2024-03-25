import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  }

  const handleMouseLeave = () => {
    setShowDetails(false);
  }

  return (
    <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {showDetails && <p>{product.description}</p>}
    </div>
  );
}

export default ProductItem;
