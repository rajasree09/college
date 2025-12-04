import React from "react";

const Research = () => {
  return (
    <section id="research" className="container section">
      <h2>Research & Centers of Excellence</h2>

      <div className="research-grid">
        <div className="research-card"><h3>AI & Data Science Lab</h3><p>Deep learning, NLP, CV.</p></div>
        <div className="research-card"><h3>Aerospace Lab</h3><p>UAV, propulsion research.</p></div>
        <div className="research-card"><h3>Robotics Lab</h3><p>Automation, Industry 4.0.</p></div>
        <div className="research-card"><h3>VLSI Lab</h3><p>Chip design & IoT systems.</p></div>
      </div>
    </section>
  );
};

export default Research;
