import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>About BEC</h4>
          <p>Best Engineering College with strong placements.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#programs">Programs</a>
          <a href="#departments">Departments</a>
          <a href="#events">Events</a>
        </div>

        <div>
          <h4>Admissions</h4>
          <p>+91 9963015780</p>
          <p>makamrajasree@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Best Engineering College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
