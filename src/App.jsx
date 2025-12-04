import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import Programs from "./components/Programs";
import Departments from "./components/Departments";
import Placements from "./components/Placements";
import Research from "./components/Research";
import Events from "./components/Events";
import Faculty from "./components/Faculty";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickLinks />
      <Programs />
      <Departments />
      <Placements />
      <Research />
      <Events />
      <Faculty />
      <Admissions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
