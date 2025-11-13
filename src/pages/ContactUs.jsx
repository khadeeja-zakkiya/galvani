import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="contact-subtext">
          Have a question? Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..."></textarea>
          </div>

          <div className="form-consent">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              I agree to the <a href="#">terms and conditions</a>.
            </label>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
