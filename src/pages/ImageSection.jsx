import React from "react";
import "./ImageSection.css";
import linenImg1 from "../assets/bg1.jpeg"; 
import linenImg2 from "../assets/bg2.jpeg"; 

const ImageSection = () => {
  return (
    <div className="linen-gallery">
      <div className="linen-image-container">
        <img src={linenImg1} alt="Linen Fabric 1" className="linen-image" />
      </div>
      <div className="linen-image-container">
        <img src={linenImg2} alt="Linen Fabric 2" className="linen-image" />
      </div>
    </div>
  );
};

export default ImageSection;
