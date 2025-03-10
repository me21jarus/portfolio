"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const TracingBeam = ({ className }) => {
  const beamRef = useRef(null);

  // Track page scroll progress
  const { scrollYProgress } = useScroll();
  const [pageHeight, setPageHeight] = useState(1000);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Animate the beam height and position as user scrolls
  const beamHeight = useSpring(useTransform(scrollYProgress, [0, 1], [50, pageHeight]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <div ref={beamRef} className={`absolute top-0 ${className}`}>
      {/* Starting Point */}
      <motion.div
        className="h-4 w-4 rounded-full border border-gray-300 shadow-sm flex items-center justify-center"
      >
        <motion.div className="h-2 w-2 rounded-full border border-gray-400 bg-white" />
      </motion.div>

      {/* Tracing Beam Line */}
      <motion.div
        className="w-[2px] m-1 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500"
        style={{
          height: beamHeight, // Dynamic height based on scroll
        }}
      />
    </div>
  );
};

export default TracingBeam;
