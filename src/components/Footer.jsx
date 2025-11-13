import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Import logo from src/assets
import logoImg from "../assets/redlogo.png";

// Import icons from react-icons
// import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logoImg} alt="Logo" />
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/return-shipping-policy">Return & Shipping Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        {/* Payment Icons */}
        {/* <div className="footer-payments">
          <FaCcVisa className="payment-icon" />
          <FaCcMastercard className="payment-icon" />
          <FaCcPaypal className="payment-icon" />
          <FaCcAmazonPay className="payment-icon" />
        </div> */}

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 MAISON GALVANI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
