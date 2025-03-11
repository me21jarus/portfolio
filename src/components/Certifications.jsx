"use client";

import React from "react";

const certifications = [
  "/images/c10.jpg",
  "/images/c1.jpg",
];

const Certifications = () => {
  return (
    <div className="p-5 bg-gray-900 rounded-xl shadow-lg mt-10 mb-10 ml-4 sm:ml-0">
      <h1 className="text-green-500 text-5xl font-bold mb-2 relative group flex justify-center">
        Certification
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        {certifications.map((image, index) => (
          <div key={index} className="w-full h-80">
            <img
              src={image}
              alt={`Certification ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
