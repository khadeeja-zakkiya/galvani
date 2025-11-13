import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <div className="logo-container">
          <img src="/redlogo.png" alt="Logo" />
        </div>

        <h2>Login</h2>
        <p className="login-subtext">Welcome back! Please enter your credentials.</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
