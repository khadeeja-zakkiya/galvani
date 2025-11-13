import React, { useState, useEffect, useRef, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductPage.css";

import Img1 from "../assets/tshirt01.jpg";
import Img2 from "../assets/tshirt2.jpg";
import Img3 from "../assets/tshirt3.jpg";
import Img4 from "../assets/tshirt4.jpg";

import Related1 from "../assets/tshirt5.jpg";
import Related2 from "../assets/tshirt6.jpg";
import Related3 from "../assets/tshirt7.jpg";
import Related4 from "../assets/tshirt8.jpg";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const images = [Img1, Img2, Img3, Img4];
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedLea, setSelectedLea] = useState("");
  const touchStartX = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) next();
    if (touchEndX - touchStartX.current > 50) prev();
  };

  const product = {
    title: "BLUE SHERPA HOODIE",
    price: 8495,
    image: images[index],
    size: selectedSize,
    lea: selectedLea,
  };

  // ✅ Only 4 related products now
  const relatedProducts = [
    { title: "BLACK HOODIE", price: 7999, image: Related1 },
    { title: "GREY OVERSIZED HOODIE", price: 8499, image: Related2 },
    { title: "WHITE PULLOVER", price: 6999, image: Related3 },
    { title: "BEIGE STREET HOODIE", price: 8899, image: Related4 },
  ];

  return (
    <div className="product-page">
      <div className="breadcrumb">
        HOME / PRODUCTS / <span>BLUE SHERPA HOODIE</span>
      </div>

      <div className="product-container">
        {/* LEFT DESCRIPTION */}
        <div className="product-left">
          <h3>About the Product</h3>
          <p>
            The Blue Sherpa Hoodie is designed for premium comfort and bold street style.
            Crafted from 100% cotton fleece, it’s perfect for cool weather while maintaining
            a sharp, structured silhouette.
          </p>
          <p>
            This hoodie embodies minimal design with maximum detail — heavy drawstrings,
            ribbed cuffs, and a kangaroo pocket that blends functionality with fashion.
            Whether you’re lounging or layering for a street-ready look, this piece
            delivers all-day comfort.
          </p>
        </div>

        {/* IMAGE SLIDER */}
        <div
          className="product-image-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="slider-btn left" onClick={prev}>
            &#10094;
          </button>
          <img src={images[index]} alt={`product ${index + 1}`} />
          <button className="slider-btn right" onClick={next}>
            &#10095;
          </button>

          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="product-details">
          <h2 className="product-title">BLUE SHERPA HOODIE</h2>
          <p className="product-price">Rs. 8,495</p>

          {/* SIZE SECTION */}
          <div className="size-chart">
            <div className="size-header">
              <h4>SIZE</h4>
              <button className="size-chart-btn">SIZE CHART</button>
            </div>
            <div className="sizes">
              {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* LEA SECTION */}
          <div className="lea-section">
            <h4>LEA</h4>
            <div className="lea-options">
              {[
                { label: "60 Lea - ₹3499", value: "60 Lea" },
                { label: "80 Lea - ₹3999", value: "80 Lea" },
                { label: "100 Lea - ₹4499", value: "100 Lea" },
              ].map((lea) => (
                <button
                  key={lea.value}
                  className={`lea-btn ${selectedLea === lea.value ? "active" : ""}`}
                  onClick={() => setSelectedLea(lea.value)}
                >
                  {lea.label}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="cart-buttons">
            <button className="buy-now">BUY NOW</button>
            <button className="add-cart" onClick={() => addToCart(product)}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* ✅ RELATED PRODUCTS SECTION */}
      <div className="related-section">
        <h3>You may also like</h3>
        <div className="related-grid">
          {relatedProducts.map((item, i) => (
            <div className="related-card" key={i}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>Rs. {item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
