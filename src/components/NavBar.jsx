"use client";

import { useState, useEffect } from 'react';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (clicked) return; // Skip scroll behavior if clicked

      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Determine the active section
      const sections = document.querySelectorAll("section");
      let newActiveSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (currentScrollPos >= sectionTop - 50 && currentScrollPos < sectionTop + sectionHeight - 50) {
          newActiveSection = section.id;
        }
      });
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, clicked]);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500); // Duration should match the transition time
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg p-4 bg-white text-black border border-gray-200 shadow-md transition-transform duration-500 mt-5 ${
        visible && !clicked ? 'translate-y-0' : '-translate-y-[110%]'
      } z-50 rounded-full`}
    >
      <div className="flex justify-evenly py-2">
        <ul className="flex space-x-12">
          <li>
            <a
              href="#home"
              className={`text-base font-normal hover:font-bold hover:underline ${activeSection === "home" ? "font-bold" : ""}`}
              onClick={handleClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`text-base font-normal hover:font-bold hover:underline ${activeSection === "about" ? "font-bold" : ""}`}
              onClick={handleClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`text-base font-normal hover:font-bold hover:underline ${activeSection === "projects" ? "font-bold" : ""}`}
              onClick={handleClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className={`text-base font-normal hover:font-bold hover:underline ${activeSection === "certifications" ? "font-bold" : ""}`}
              onClick={handleClick}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`text-base font-normal hover:font-bold hover:underline ${activeSection === "contact" ? "font-bold" : ""}`}
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
