import React from 'react';
import logo from './chatty_logo.png';

const Header = ({ scrollToAboutUs }) => {
  return (
    <header className="header">
      <div className="header-content">
        <a className="category" href="#about-us">Über uns</a>
        <a className="category" href="#functions">Funktionen</a>
        <div><img src={logo} className="app-logo" alt="logo"/></div>
        <a className="category" href="#pricing">Preise</a>
        <a className="category" href="#contact">Kontakt</a>
      </div>
    </header>
    
  );
};

export default Header;
