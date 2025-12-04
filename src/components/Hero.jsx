import React from "react";

const Hero = () => {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <h1>
          Shape the future at <span className="accent">BEC</span>
        </h1>
        <p className="lead">
          World-class engineering education, strong placements, industry
          collaboration, and research-driven learning.
        </p>

        <div className="hero-ctas">
          <a className="btn btn-primary" href="#programs">Explore Programs</a>
          <a className="btn btn-outline" href="#admissions">Admissions & Fees</a>
        </div>
      </div>

      <div className="stats-card">
        <div className="stat"><p>NAAC</p><h3>A++</h3></div>
        <div className="stat"><p>NIRF</p><h3>Top 100</h3></div>
        <div className="stat"><p>Programs</p><h3>45+</h3></div>
        <div className="stat"><p>Recruiters</p><h3>500+</h3></div>
      </div>
    </section>
  );
};

export default Hero;
