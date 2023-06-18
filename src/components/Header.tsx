import React from "react";
import logo from "../assets/logo.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header__logo_container">
        <img src={logo} alt="ratepunk logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li className="header__nav--item">
            <a href="#">Chrome Extension</a>
          </li>
          <li className="header__nav--item">
            <a href="#">Price Comparison</a>
          </li>
          <li className="header__nav--item">
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
