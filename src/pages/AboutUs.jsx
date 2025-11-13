import React from "react";
import "./AboutUs.css";
// import your photo here when ready
// import foundersPhoto from "../assets/founders.jpg";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="text-content">
          <h1>About Us</h1>
          <p>
            Founded in Bangalore by <strong>Hafiz Kandathil</strong> and{" "}
            <strong>Wajid Shawn</strong>, Maison Galvani is born from a shared
            vision and a dedication to craftsmanship.
          </p>
          <p>
            The house represents years of passion, patience, and pursuit. Under
            its Atelier, Maison Galvani expresses bespoke and made-to-measure
            menswear that captures individuality and emotion. Its extension,
            Galvani, brings the same design philosophy to refined everyday
            wear.
          </p>
          <p>
            Together they reflect a single belief: that true creation begins
            with purpose and endures with heart.
          </p>
        </div>
        <div className="image-content">
          <div className="photo-placeholder">
            {/* Replace this div with your photo when ready */}
            {/* <img src={foundersPhoto} alt="Founders" /> */}
            <span>Photo of Hafiz & Wajid</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
