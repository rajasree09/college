import React from "react";

const Departments = () => {
  return (
    <section id="departments" className="container section light">
      <h2>Departments</h2>

      <div className="grid-5">
        <div className="dept-card"><h4>CSE</h4><p>AI/ML, DS & Cybersecurity labs.</p></div>
        <div className="dept-card"><h4>ECE</h4><p>VLSI, Embedded & Communication.</p></div>
        <div className="dept-card"><h4>Mechanical</h4><p>Automation, Robotics, CAD/CAM.</p></div>
        <div className="dept-card"><h4>EEE</h4><p>Power Engineering, Smart Grids.</p></div>
        <div className="dept-card"><h4>AIML</h4><p>Deep Learning, CV, NLP labs.</p></div>
      </div>
    </section>
  );
};

export default Departments;
