import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image
import './logo_styles.scss'; // Tell Webpack that logo.js uses these styles

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" className="logo" />;
}

export default Header;
