import React, { useEffect } from "react";
import "./TermsAndConditions.css";

function TermsAndConditions() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title" style={{color:"#000"}}>Terms & Conditions</h1>

        <section className="terms-section">
          <p>
            Welcome to <strong>Maison Galvani</strong>. By accessing or using our website and services, you agree to comply
            with and be bound by the following terms and conditions. Please read them carefully before making a purchase.
          </p>
        </section>

        <section className="terms-section">
          <h2>1. Product & Customization</h2>
          <p>
            Each garment at <strong>Maison Galvani</strong> is made to order with meticulous craftsmanship.  
            Variations in color or texture may occur due to the nature of handcrafting, which adds uniqueness to every piece.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Orders & Payments</h2>
          <p>
            All orders must be placed through our official website.  
            Payments are accepted via secure online gateways listed at checkout.  
            Once an order is confirmed, it cannot be cancelled or modified.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Shipping & Delivery</h2>
          <p>
            We aim to dispatch all orders within <strong>7 working days</strong>.  
            Delivery time may vary based on location and courier service.  
            Maison Galvani is not responsible for delays caused by courier companies or external factors.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Returns & Alterations</h2>
          <p>
            As each garment is specially made for you, we do not offer returns or exchanges.  
            Complimentary alterations are available within <strong>7 days</strong> of receiving your order.
          </p>
        </section>

        <section className="terms-section">   
          <h2>5. Intellectual Property</h2>
          <p>
            All content, images, designs, and logos displayed on this website are the property of <strong>Maison Galvani</strong>.  
            Reproduction or unauthorized use of any material without permission is strictly prohibited.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Privacy Policy</h2>
          <p>
            Your personal information is handled securely and used only to process your orders or enhance your shopping experience.  
            We do not share your data with third parties without consent.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Contact Information</h2>
          <p>
            For any queries, please reach out to us at:
          </p>
          <ul className="contact-list">
            <li> <a href="mailto:ordersupport@maisongalvani.com">ordersupport@maisongalvani.com</a></li>
            <li> WhatsApp: <a href="https://wa.me/919110612393" target="_blank" rel="noopener noreferrer">+91 91106 12393</a></li>
          </ul>
          <p>
            We are here to assist you with any concerns or clarifications regarding your order or our policies.
          </p>
        </section>

        <section className="terms-section">
          <p className="last-text">
            By continuing to browse or purchase from this site, you acknowledge that you have read and agreed
            to these Terms & Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;
