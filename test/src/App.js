import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Free syria</h1>
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
