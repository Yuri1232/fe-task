import React from "react";
import Logo from "../assets/logo.svg";
import Email from "../assets/email-footer.svg";
import { data, socialData } from "../data/Mockdata";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <img className="footer__copyright_logo" src={Logo} alt="logo" />
        <p className="footer__copyright_description">
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
        <p className="footer__copyright_text">
          © 2021 Ratepunk. All Rights Reserved.
        </p>
      </div>
      <div className="footer__quicklinks">
        <h3 className="footer__quicklinks_title">QUICK LINKS</h3>
        <a className="footer__quicklinks--link" href="#">
          Price Comparison
        </a>
        <a className="footer__quicklinks--link" href="#">
          Chrome Extension
        </a>
        <a className="footer__quicklinks--link" href="#">
          How It Works
        </a>
        <a className="footer__quicklinks--link" href="#">
          Ratepunk Blog
        </a>
        <a className="footer__quicklinks--link" href="#">
          Privacy Policy
        </a>
      </div>
      <div className="footer__contact">
        <h3 className="footer__contact_title">CONTACT</h3>
        <div className="footer__contact_wrapper">
          <img src={Email} alt="email logo" />
          <p className="footer__contact_wrapper_text">hi@ratepunk.com</p>
        </div>
        <div className="footer__contact_social_wappper">
          <h3 className="footer__contact_title">SOCIAL</h3>
          <div className="footer__contact_socials">
            {socialData.map((data, key) => {
              return (
                <div key={key} className="footer__contact_socials_container">
                  <img
                    className="footer__contact_socials_container--1"
                    src={data.img}
                    alt="instagram logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
