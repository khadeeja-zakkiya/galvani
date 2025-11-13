import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      {/* Desktop Video */}
      <video
        className="header-video desktop-video"
        src="/videos/landscape.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Mobile Video */}
      <video
        className="header-video mobile-video"
        src="/videos/portrait.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default Header;
