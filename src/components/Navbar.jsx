import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    setLight(!light);
    document.body.classList.toggle("theme-light");
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (open && !e.target.closest(".nav-links") && !e.target.closest("#burger")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="nav-left">
          <img src="/logo192.png" className="nav-logo" alt="BEC logo" />
          <div className="nav-brand">
            <strong>Best Engineering College</strong>
            <small>BEC</small>
          </div>
        </div>

        <button id="burger" className="burger" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#departments">Departments</a>
          <a href="#placements">Placements</a>
          <a href="#research">Research</a>
          <a href="#events">Events</a>
          <a href="#faculty">Faculty</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact">Contact</a>
          <button id="themeToggle" onClick={toggleTheme}>
            🌗
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
