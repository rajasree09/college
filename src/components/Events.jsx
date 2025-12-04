import React from "react";

const Events = () => {
  return (
    <section id="events" className="container section light">
      <h2>Events & News</h2>

      <div className="events-grid">
        <div className="event-card"><h4>Tech Symposium 2025</h4><p>Innovation and startup demos.</p></div>
        <div className="event-card"><h4>Placement Workshop</h4><p>Industry mentor training.</p></div>
        <div className="event-card"><h4>Innovation Expo</h4><p>Engineering prototypes.</p></div>
      </div>
    </section>
  );
};

export default Events;
