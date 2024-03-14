import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

function HomeMainSection() {
  const [randomNewReviews, setRandomNewReviews] = useState([]);
  const [trigger, setTrigger] = useState(0); // A state to trigger useEffect

  useEffect(() => {
    const generateRandomIndices = () => {
      let index1 = Math.floor(Math.random() * reviews.length);
      let index2 = Math.floor(Math.random() * reviews.length);
      while (index1 === index2) {
        index2 = Math.floor(Math.random() * reviews.length);
      }
      return [index1, index2];
    };

    const selectRandomReviews = () => {
      const [randomIndex1, randomIndex2] = generateRandomIndices();
      setRandomNewReviews([reviews[randomIndex1], reviews[randomIndex2]]);
    };

    selectRandomReviews();
  }, [trigger]); 

  return (
    <div className="main-section">
      <h1>About Us</h1>
      <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
      <button onClick={() => setTrigger(prev => prev + 1)}>Shop Now</button>
      
      <h2>Customer Reviews</h2>
      {randomNewReviews.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.customerName}</h3>
          <p>{review.reviewContent}</p>
          <p>Rating: {'★'.repeat(review.stars)}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeMainSection;
