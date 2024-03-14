import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <div className="header">
      <div class= "wrapper"> 
        <div> <img src=".\images\logo.png" alt="company-logo"  width="90px"/> </div>
        <div>Company Name</div>
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
