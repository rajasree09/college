import React from "react";

const Faculty = () => {
  return (
    <section id="faculty" className="container section">
      <h2>Faculty</h2>

      <div className="grid-5 faculty-grid">
        <div className="faculty-card"><h4>Dr. Arjun Rao</h4><p>Professor — CSE</p><p>AI & ML</p></div>
        <div className="faculty-card"><h4>Dr. Meera Nair</h4><p>Associate Professor — ECE</p><p>VLSI</p></div>
        <div className="faculty-card"><h4>Dr. Rohit Sharma</h4><p>Assistant Professor — Mech</p><p>Robotics</p></div>
        <div className="faculty-card"><h4>Dr. Priya Menon</h4><p>Professor — EEE</p><p>Power Systems</p></div>
        <div className="faculty-card"><h4>Dr. Sneha Gupta</h4><p>Assistant Professor — AIML</p><p>Deep Learning</p></div>
      </div>
    </section>
  );
};

export default Faculty;
