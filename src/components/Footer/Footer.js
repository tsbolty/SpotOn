import React from 'react';
import './footer.css';
import Contact from '../Contact/Contact';

const Footer = ()=>{
  return(
    <div className= "row footer">
      <div className= "col-lg-4 col-sm-6 locations">
        <p id= "locations-header">Locations</p>
        <br/>
        <h4>Denver Office</h4>
        <br/>
        <p>1234 Address St</p>
        <p>Denver, CO 80222</p>
        <p>123-456-7890</p>
        <br/>
        <p>Email: email@gmail.com</p>
      </div>
      <div className= "col-lg-4 col sm-6">
        <h4 style= {{textDecoration: "underline"}}>Main Site</h4>
        <p className= "site-nav-links"><a href= "#">Home</a></p>
        <p className= "site-nav-links"><a href= "#services">Services</a></p>
        <p className= "site-nav-links"><a href= "#">Products</a></p>
        <p className= "site-nav-links"><a href= "#">Partners</a></p>
      </div>
      <Contact />
    </div>
  )
}

export default Footer;