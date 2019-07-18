import React from 'react';
import Button from 'components/Button/button.js';
import Header from 'components/Logo/logo.js';
import DangerButton from 'components/DangerButton/DangerButton.js';
import { ReactComponent as LogoSVG } from 'components/MySVGLogo/mySVG.svg';
import './App.scss';

// 1st commit, new repo.

function App() {
  return (
    <div className="App">
      {/* Importing Header with Logo */}
      <Header />

      {/* Importing Button */}
      <Button />

      {/* Logo svg */}
      <div className="mySVGDiv">
        <LogoSVG />
      </div>

      {/* Importing DangerButton */}
      <DangerButton />
    </div>
  );
}

export default App;
