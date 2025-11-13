import React from "react";
import { Routes, Route } from "react-router-dom"; // no Router here

// Context
import { CartProvider } from "./context/CartContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Pages
import ProductGrid from "./pages/ProductGrid";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQ from "./pages/FAQ";
import ShippingReturnPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ImageSection from "./pages/ImageSection";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        {/* ✅ Home Page (ImageSection now only here) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <ProductGrid />
              <ImageSection /> {/* Only shows on home page */}
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/return-shipping-policy" element={<ShippingReturnPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Products */}
        <Route path="/product/1" element={<ProductPage />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
