import React, { useEffect, useState } from "react";
import "./App.css";
import Hotjar from "@hotjar/browser";

const App = () => {
  const siteId = 5241159; // Your Hotjar Site ID
  const hotjarVersion = 6; // Hotjar Version

  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("hotjarConsent") === "accepted") {
      // If user has already accepted, initialize Hotjar
      Hotjar.init(siteId, hotjarVersion);
      console.log("Hotjar initialized.");
    }
  }, []);

  const handleAccept = () => {
    // Save user consent in localStorage
    localStorage.setItem("hotjarConsent", "accepted");

    // Initialize Hotjar
    Hotjar.init(siteId, hotjarVersion);
    console.log("Hotjar initialized after acceptance.");
    setIsBannerVisible(false);
  };

  const handleDecline = () => {
    // Save user decision in localStorage
    localStorage.setItem("hotjarConsent", "declined");
    setIsBannerVisible(false);
  };

  return (
    <div className="App">
      {isBannerVisible && (
        <div className="cookie-banner">
          <p>
            We use cookies to analyze user behavior and improve your experience.
            By accepting, you consent to Hotjar tracking.{" "}
            <a href="/privacy-policy">Learn more</a>.
          </p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      )}

      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <nav className="App-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="App-section">
        <h2>Home</h2>
        <p>This is the home section of the website.</p>
      </section>

      <section id="about" className="App-section">
        <h2>About</h2>
        <p>Learn more about us in this section.</p>
      </section>

      <section id="services" className="App-section">
        <h2>Services</h2>
        <p>Here are the services we offer.</p>
      </section>

      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <p>Get in touch with us!</p>
      </section>

      <footer className="App-footer">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
