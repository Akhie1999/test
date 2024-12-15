import React, { useEffect } from "react";
import "./App.css";
import Hotjar from "@hotjar/browser";

const App = () => {
  const siteId = 5241159;
  const hotjarVersion = 6;

  useEffect(() => {
    console.log("Initializing Hotjar...");
    try {
      Hotjar.init(siteId, hotjarVersion);
      if (Hotjar.isInitialized()) {
        console.log("Hotjar initialized successfully.");
        Hotjar.event("app_loaded"); // Example: Log an event
      } else {
        console.error("Hotjar failed to initialize.");
      }
    } catch (error) {
      console.error("Error initializing Hotjar:", error);
    }
  }, []);

  return (
    <div className="App">
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
