import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container section">
      <h2>Contact</h2>

      <div className="two-col">
        <div className="left">
          <div className="contact-card">
            <form>
              <label>Name</label>
              <input placeholder="Full Name" />

              <label>Phone</label>
              <input placeholder="Phone Number" />

              <label>Email</label>
              <input type="email" placeholder="Email Address" />

              <label>Message</label>
              <textarea placeholder="Message"></textarea>

              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="right">
          <div className="info-card">
            <h3>Contact Details</h3>
            <p><strong>Phone:</strong> +91 9963015780</p>
            <p><strong>Email:</strong> makamrajasree@gmail.com</p>
            <p><strong>Address:</strong> BEC Campus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
