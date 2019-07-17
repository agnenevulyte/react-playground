import React, { Component } from 'react';
import './styles.scss'; // Tell Webpack that button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <button className="button">My Button</button>;
  }
}

export default Button;
