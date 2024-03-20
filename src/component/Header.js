import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the Homepage.css file
function Header() {
  return (
    <div className="header">
      <div> 
        <div class = "logo"> <img src=".\images\logo.png" alt="company-logo"  width="90px"/> </div>
        <div class = "brand-name">Company Name</div>
      </div>
      <div className="nav-links">
        {/* link component from react-router-dom */}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
