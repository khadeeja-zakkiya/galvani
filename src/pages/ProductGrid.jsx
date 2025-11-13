import React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

import tshirt01 from "../assets/tshirt01.jpg";
import tshirt2 from "../assets/tshirt2.jpg";
import tshirt3 from "../assets/tshirt3.jpg";
import tshirt4 from "../assets/tshirt4.jpg";
import tshirt5 from "../assets/tshirt5.jpg";
import tshirt6 from "../assets/tshirt6.jpg";
import tshirt7 from "../assets/tshirt7.jpg";
import tshirt8 from "../assets/tshirt8.jpg";

const products = [
  { id: 1, name: "Black Fine Dine T-Shirt", price: 4700, image: tshirt01, path: "/product/1" },
  { id: 2, name: "Red Fine Dine T-Shirt", price: 4700, image: tshirt2, path: "/product/2" },
  { id: 3, name: "Breakfast Table T-Shirt", price: 5200, image: tshirt3, path: "/product/3" },
  { id: 4, name: "Bird of Paradise Full Sleeve", price: 7200, image: tshirt4, path: "/product/4" },
  { id: 5, name: "Classic Navy Tee", price: 3900, image: tshirt5, path: "/product/5" },
  { id: 6, name: "Streetwear Hoodie", price: 6000, image: tshirt6, path: "/product/6" },
  { id: 7, name: "Luxury Polo Shirt", price: 5500, image: tshirt7, path: "/product/7" },
  { id: 8, name: "Minimalist White Tee", price: 2800, image: tshirt8, path: "/product/8" },
];

const ProductGrid = () => {
  return (
    <section className="product-section">
      <h2 className="product-title">Our Latest Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={product.path}
            className="product-card"
            style={{ textDecoration: "none" }}
          >
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
              <h3>{product.name}</h3>
              <p>Rs. {product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
