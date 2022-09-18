import React from 'react';
import Logo from '../img/Contributi-Large.png'
import './HeroSection.css'

function HeroSection () {
    return <div className='container'>
      <div className='herotext'><h1>Build a better community.</h1></div><div className="heroimage"><img src={ Logo } alt="Logo" /></div>
      </div>;
  }
  
  export default HeroSection;

