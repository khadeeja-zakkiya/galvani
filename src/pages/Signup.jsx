import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="logo-container">
          <img src="/redlogo.png" alt="Logo" />
        </div>

        <h2>Sign Up</h2>
        <p className="signup-subtext">Create your account to get started.</p>

        <form className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
