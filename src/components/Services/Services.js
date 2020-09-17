import React from 'react';
import './Services.css';

const Services = ()=>{
  return(
    < div id= "services">
    <h2 className= "services-heading">Services</h2>
    <div className= "row services-section">
      <div className= "card col-lg-4 col-md-6 col-sm-12">
        <img className= "card-img-top" alt= "placeholder" src= "./images/bellspic1.jpg" />
        <div className= "card-body">
          <h4 className= "card-title">Service #1</h4>
          <p className= "card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet arcu ut lacus rutrum sollicitudin sit amet eget eros. Praesent vel libero pharetra, eleifend erat et.</p>
          <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
      </div>
      <div className= "card col-lg-4 col-md-6 col-sm-12">
        <img className= "card-img-top" alt= "placeholder" src= "./images/bellspic1.jpg" />
        <div className= "card-body">
          <h4 className= "card-title">Service #2</h4>
          <p className= "card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet arcu ut lacus rutrum sollicitudin sit amet eget eros. Praesent vel libero pharetra, eleifend erat et.</p>
          <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
      </div>
      <div className= "card col-lg-4 col-md-6 col-sm-12">
        <img className= "card-img-top" alt= "placeholder" src= "./images/bellspic1.jpg" />
        <div className= "card-body">
          <h4 className= "card-title">Service #3</h4>
          <p className= "card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet arcu ut lacus rutrum sollicitudin sit amet eget eros. Praesent vel libero pharetra, eleifend erat et.</p>
          <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services;