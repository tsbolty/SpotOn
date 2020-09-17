import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Footer from './Footer/Footer';

const Main = ()=>{
  return(
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}

export default Main;