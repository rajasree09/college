import React from "react";

const Programs = () => {
  return (
    <section id="programs" className="container section">
      <h2>Programs & Courses</h2>

      <div className="grid-5">
        <div className="program-card"><h3>CSE</h3><p>AI, ML, Cybersecurity, DS, Cloud.</p></div>
        <div className="program-card"><h3>ECE</h3><p>Embedded, VLSI, Circuits, Signals.</p></div>
        <div className="program-card"><h3>Mechanical Engineering</h3><p>CAD/CAM, Manufacturing, Thermo.</p></div>
        <div className="program-card"><h3>EEE</h3><p>Power Systems, Machines, Control.</p></div>
        <div className="program-card"><h3>AIML</h3><p>Deep Learning, NLP, Vision.</p></div>
      </div>
    </section>
  );
};

export default Programs;
