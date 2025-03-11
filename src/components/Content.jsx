import React from "react";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import ContactForm from "../components/ContactForm";
import About from "../components/About";

const Content = () => {
  return (
    <div className="full">
      <div className="Content bg-gray-800 px-2 sm:px-4"> {/* Reduced padding to shift left */}
        <div id="home" className="home bg-gray-800 ml-[-27px] mr-[18px] sm:ml-0">
          <Home />
        </div>
        <div id="about" className="about bg-gray-800 ml-[-70px] mr-[-10px] sm:ml-0"> {/* Shifted slightly left */}
          <About />
        </div>
        <div id="projects" className="projects bg-gray-800 ml-[-55px] mr-[15px] sm:ml-0">
          <Projects />
        </div>
        <div id="certifications" className="certifications bg-gray-800 ml-[-45px] mr-[15px] sm:ml-0">
          <Certifications />
        </div>
        <div id="contact" className="contact bg-gray-800 ml-[-45px] mr-[15px] sm:ml-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Content;
