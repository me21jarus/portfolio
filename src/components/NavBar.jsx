"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for menu and close button

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

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
        if (
          currentScrollPos >= sectionTop - 50 &&
          currentScrollPos < sectionTop + sectionHeight - 50
        ) {
          newActiveSection = section.id;
        }
      });
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, clicked]);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500); // Duration should match the transition time
  };

  // Toggle menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 flex justify-around left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg p-4 bg-white text-black border border-gray-200 shadow-md transition-transform duration-500 mt-5 ${
          visible && !clicked ? "translate-y-0" : "-translate-y-[110%]"
        } z-50 rounded-full hidden md:flex`}
      >
        <div className="flex justify-evenly py-2">
          <ul className="flex space-x-12">
            {["home", "about", "projects", "certifications", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`text-base font-normal hover:font-bold hover:underline ${
                      activeSection === section ? "font-bold" : ""
                    }`}
                    onClick={handleClick}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar - Hamburger */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button onClick={toggleMenu} className="text-white bg-black p-2 rounded-lg">
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white p-2"
          >
            <X size={30} />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col space-y-6 text-white text-lg">
            {["home", "about", "projects", "certifications", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="hover:underline"
                    onClick={() => {
                      handleClick();
                      setIsOpen(false); // Close menu on selection
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
