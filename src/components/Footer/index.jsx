import React from 'react';
import Logo from '../img/logo-dark-small.png'
import './Footer.css'

function Footer () {
    return <div className='containerFooter'>
      <div className='footerText'><p>Build a better community.</p></div><div className="footerImage"><img src={ Logo } alt="Logo" /></div>
      </div>;
  }
  
  export default Footer;