import React from "react";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import ContactForm from "../components/ContactForm";
import About from "../components/About";

const Content = () => {
  return (
    <div className="full">
      <div className="Content bg-gray-800">
        <div id="home" className="home bg-gray-800">
          <Home />
        </div>
        <div id="about" className="about bg-gray-800">
          <About />
        </div>
        <div id="projects" className="projects bg-gray-800">
          <Projects />
        </div>
        <div id="certifications" className="certifications bg-gray-800">
          <Certifications />
        </div>
        <div id="contact" className="contact bg-gray-800">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Content;
