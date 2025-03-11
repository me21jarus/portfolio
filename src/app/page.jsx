"use client";

import { useState, useEffect } from "react";
import TracingBeam from "../components/ui/tracing-beam";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import { FiMenu, FiX } from "react-icons/fi";

export default function Base() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="bg-gray-700 p-4 md:p-0 fixed w-full top-0 z-50">
        <div className="flex justify-between items-center md:hidden">
          <div className="w-full flex justify-end">
            {/* Hamburger Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl fixed top-2 right-5 z-50"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        {/* Fullscreen Menu Overlay */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center text-white text-2xl space-y-6 z-40">
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 text-3xl"
            >
              <FiX />
            </button>
            <a href="#home" className="hover:text-gray-400" onClick={closeMenu}>Home</a>
            <a href="#about" className="hover:text-gray-400" onClick={closeMenu}>About</a>
            <a href="#projects" className="hover:text-gray-400" onClick={closeMenu}>Projects</a>
            <a href="#certificates" className="hover:text-gray-400" onClick={closeMenu}>Certificates</a>
            <a href="#contact" className="hover:text-gray-400" onClick={closeMenu}>Contact Me</a>
          </div>
        )}
        {/* Standard Nav Menu (for larger screens) */}
        <div className="hidden md:block">
          <NavBar />
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="relative flex min-h-screen bg-gray-800 pt-0">
        <main className="flex-grow mx-4 md:mx-[5%] mt-10 min-h-screen flex flex-col items-center justify-center pt-5">
          {/* Left Beam */}
          <TracingBeam className="absolute left-2 md:left-10 top-0" />
          
          <Content />
          
          {/* Right Beam */}
          <TracingBeam className="absolute right-1 md:right-10 top-0" />
        </main>
      </div>
    </>
  );
}