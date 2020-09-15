import React from 'react';
import './Navbar.css';

const Navbar = ()=>{
  return(
    <div className= "row nav-row">
      <img src= "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg" alt= "logo placeholder" id= "logo-image"></img>
      <div className= "nav-links">
        <h4 className= "nav-link-btn">Home</h4>
        <h4 className= "nav-link-btn">Services</h4>
        <h4 className= "nav-link-btn">Products</h4>
        <h4 className= "nav-link-btn">Partners</h4>
        <h4 className= "nav-link-btn">Contact</h4>
      </div>
    </div>
  )
}

export default Navbar;