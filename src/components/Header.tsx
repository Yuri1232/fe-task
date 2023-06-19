import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../state/menuSlice";
import { RootState } from "../state/store";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isMenu: boolean = useSelector(
    (state: RootState) => state.menu.isMenuOpen
  );
  const handleMenuToggle = (toggle: boolean) => {
    dispatch(toggleMenu(toggle));
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    if (!isMobileView) {
      handleMenuToggle(true);
      setIsMenuOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  return (
    <header className={!isMenu ? "expand header" : "header"}>
      <div className="header__logo_container">
        <img src={logo} alt="ratepunk logo" />
        {isMenuOpen && (
          <nav className="header__menu_nav">
            <ul>
              <li className="header__nav--item menu">
                <a href="#">Chrome Extension</a>
              </li>
              <li className="header__nav--item menu">
                <a href="#">Price Comparison</a>
              </li>
              <li className="header__nav--item menu">
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {isMobileView ? (
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="header__menu">
          {isMenuOpen ? (
            <img
              onClick={() => handleMenuToggle(isMenuOpen)}
              src={close}
              alt="bruger menu"
            />
          ) : (
            <img
              onClick={() => handleMenuToggle(isMenuOpen)}
              src={menu}
              alt="bruger menu"
            />
          )}
        </div>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
