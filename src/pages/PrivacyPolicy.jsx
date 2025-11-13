import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>

        <section className="privacy-section">
          <p>
            At <strong>Maison Galvani</strong>, we respect your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you visit our website or make a purchase.
          </p>
        </section>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, shipping address, phone number, and payment details when
            you place an order or sign up for updates. Additionally, non-personal
            information like browser type and device data may be collected
            automatically to improve user experience.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul className="privacy-list">
            <li>Process and fulfill your orders.</li>
            <li>Provide customer support and order updates.</li>
            <li>Improve our website, services, and experience.</li>
            <li>
              Send promotional offers or product announcements (only if you opt in).
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Information Security</h2>
          <p>
            We adopt strict data handling practices to protect against
            unauthorized access, alteration, disclosure, or destruction of your
            personal information, username, password, and transaction data.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing of Personal Information</h2>
          <p>
            We do not sell, trade, or rent users’ personal identification
            information to others. We may share limited information with trusted
            third-party service providers (such as payment gateways or shipping
            partners) — but only to the extent necessary to operate our
            services.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies</h2>
          <p>
            Our website may use “cookies” to enhance the user experience. You
            may choose to set your browser to refuse cookies, but some parts of
            the website may not function properly as a result.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion
            of your personal data. To exercise these rights, please contact us
            using the details below.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Policy Updates</h2>
          <p>
            <strong>Maison Galvani</strong> reserves the right to update or
            modify this Privacy Policy at any time. Any changes will be posted
            on this page, and the updated date will be revised accordingly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
          <ul className="contact-list">
            <li>
              <a href="mailto:contact@maisongalvani.com">
                contact@maisongalvani.com
              </a>
            </li>
            <li>
              <a href="mailto:ordersupport@maisongalvani.com">
                ordersupport@maisongalvani.com
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/919110612393"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 91106 12393
              </a>
            </li>
          </ul>
          <p>
            We value your trust and are committed to handling your information
            responsibly and securely.
          </p>
        </section>

        <p className="last-text">
          © {new Date().getFullYear()} Maison Galvani. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
