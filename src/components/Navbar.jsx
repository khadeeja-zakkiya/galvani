import React, { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLinkClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX /> : <RxHamburgerMenu />}
      </div>

      {/* ✅ Left: Nav Links */}
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          About Us
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact Us
        </Link>

        <div className={`dropdown ${isDropdownOpen ? "active" : ""}`}>
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            <span>Our Product</span>
            <FiChevronDown
              className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`}
            />
          </div>

          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/products/shirts" onClick={handleLinkClick}>
                Shirts
              </Link>
              <Link to="/products/polo-shirts" onClick={handleLinkClick}>
                Polo Shirts
              </Link>
              <Link to="/products/t-shirts" onClick={handleLinkClick}>
                T-Shirts
              </Link>
              <Link to="/products/trousers" onClick={handleLinkClick}>
                Trousers
              </Link>
              <Link to="/products/shorts" onClick={handleLinkClick}>
                Shorts
              </Link>
              <Link to="/products/jackets" onClick={handleLinkClick}>
                Jackets
              </Link>
              <Link to="/products/custom-label" onClick={handleLinkClick}>
                Galvani Custom Label
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Login & Signup */}
        <div className="mobile-auth">
          <Link to="/login" onClick={handleLinkClick}>
            Login
          </Link>
          <Link to="/signup" onClick={handleLinkClick}>
            Signup
          </Link>
        </div>
      </div>

      {/* ✅ Center: Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/navlogo.png" alt="Logo" />
        </Link>
      </div>

      {/* ✅ Right: Actions */}
      <div className="navbar-actions">
        <Link to="/cart" className="cart">
          <FiShoppingCart />
        </Link>
        <Link to="/login" className="desktop-only">
          Login
        </Link>
        <Link to="/signup" className="desktop-only">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
