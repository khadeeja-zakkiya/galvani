import React, { useState, useEffect } from "react";
import "./FAQ.css";

const faqData = {
  Product: [
    { question: "WHAT IS MY RIGHT SIZE?", answer: "Your right size depends on our sizing chart. Please refer to it before purchase." },
    { question: "WHAT ARE THE CARE INSTRUCTIONS ON THE T-SHIRTS?", answer: "Wash cold, hang dry, and avoid bleach for best results." },
    { question: "HOW DO OUR NEW DROPS WORK?", answer: "New drops are released weekly. Subscribe to notifications to stay updated." },
    { question: "WHAT IS A PRE-ORDER?", answer: "Pre-orders allow you to reserve items before the official release." }
  ],
  Delivery: [
    { question: "HOW LONG DOES DELIVERY TAKE?", answer: "Standard delivery takes 3-5 business days." },
    { question: "CAN I TRACK MY ORDER?", answer: "Yes, you will receive a tracking link after shipping." }
  ],
  Order: [
    { question: "HOW DO I CANCEL AN ORDER?", answer: "Contact our support team within 24 hours to cancel." },
    { question: "CAN I CHANGE MY ORDER?", answer: "Modifications are possible before the order ships." }
  ],
  "Order Received": [
    { question: "WHAT IF I RECEIVE THE WRONG ITEM?", answer: "Contact support immediately for an exchange." },
    { question: "CAN I RETURN AN ITEM?", answer: "Returns are accepted within 14 days of receipt." }
  ],
  Exchanges: [
    { question: "HOW DO I EXCHANGE AN ITEM?", answer: "Fill the exchange form and ship back the original item." },
    { question: "ARE EXCHANGES FREE?", answer: "Yes, exchanges are free of charge." }
  ],
  "General FAQs": [
    { question: "DO YOU SHIP INTERNATIONALLY?", answer: "Yes, we ship worldwide. Charges may vary." },
    { question: "HOW CAN I CONTACT SUPPORT?", answer: "Email us at support@company.com or use the contact form." }
  ]
};

const FAQ = () => {
  const sections = Object.keys(faqData);
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      <div className="faq-tabs">
        {sections.map((section) => (
          <button
            key={section}
            className={`faq-tab ${activeSection === section ? "active" : ""}`}
            onClick={() => {
              setActiveSection(section);
              setOpenQuestionIndex(null);
              // Scroll to top when switching sections
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {section.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="faq-content">
        {faqData[activeSection].map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className="faq-toggle">{openQuestionIndex === index ? "-" : "+"}</span>
            </div>
            {openQuestionIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
