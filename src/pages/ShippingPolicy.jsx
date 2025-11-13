import React, { useEffect } from "react";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-title">Shipping & Return Policy</h1>

        {/* Exchange / Return Section */}
        <section className="policy-section">
          <h2>Exchange / Return</h2>
          <p>
            At <strong>Maison Galvani</strong>, every piece is made to order
            with thoughtful craftsmanship and attention to detail. As each
            garment is created exclusively for you, we do not accept returns or
            exchanges once an order has been placed.
          </p>
          <p>
            However, we understand the importance of a perfect fit. We offer
            complimentary alterations within <strong>7 days</strong> of
            receiving your order.
          </p>
          <p>
            To initiate an alteration request, please reach out to our team at:
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:ordersupport@maisongalvani.com" style={{color:"#000"}}>
                ordersupport@maisongalvani.com
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong> +91 91106 12393
            </li>
          </ul>
          <p>
            Our team will personally guide you through the alteration process
            with care and precision.
          </p>
        </section>

        {/* Shipping Section */}
        <section className="policy-section">
          <h2>Shipping Policy</h2>
          <p>
            At <strong>Maison Galvani</strong>, each garment is crafted to
            order, allowing us to value the time and artistry behind every
            piece. Your order will be shipped within{" "}
            <strong>7 working days</strong> of placement.
          </p>
          <p>
            Once dispatched, delivery typically takes up to{" "}
            <strong>3 working days</strong>, depending on your location and
            courier accessibility. You’ll receive tracking details as soon as
            your order is on its way.
          </p>
          <p>
            Every shipment from the <strong>House of Maison Galvani</strong> is
            carefully packaged to ensure your garment arrives in pristine
            condition — a reflection of the craftsmanship it carries.
          </p>
        </section>

        {/* <p className="last-text">
          Thank you for shopping with Maison Galvani — where timeless elegance
          meets modern craftsmanship.
        </p> */}
      </div>
    </div>
  );
};

export default ShippingPolicy;
