import React from "react";

const Admissions = () => {
  return (
    <section id="admissions" className="container section light">
      <h2>Admissions & Fees</h2>

      <div className="two-col">
        <div className="left">
          <div className="contact-card">
            <form>
              <label>Name</label>
              <input placeholder="Full Name" />

              <label>Email</label>
              <input type="email" placeholder="Email" />

              <label>Program</label>
              <select>
                <option>CSE</option>
                <option>AIML</option>
                <option>ECE</option>
                <option>Mechanical</option>
                <option>EEE</option>
              </select>

              <label>Message</label>
              <textarea placeholder="Write your query"></textarea>

              <button className="btn btn-primary">Request Brochure</button>
            </form>
          </div>
        </div>

        <div className="right">
          <div className="info-card">
            <h3>Eligibility & How to Apply</h3>
            <p><strong>B.Tech:</strong> 10+2 with PCM, 50% minimum.</p>
            <p><strong>M.Tech:</strong> Bachelor's degree + GATE/MAT.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
