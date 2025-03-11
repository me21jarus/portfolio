const About = () => {
  return (
    <div className="mt-10 mb-10 px-6 sm:px-6 ml-4 sm:ml-0"> {/* Shift right on mobile */}
      <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
        <h1 className="text-green-500 text-5xl font-bold mb-2 relative group flex justify-center">
          About
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </h1>

        {/* Contact Section */}
        <h3 className="text-orange-600 text-2xl font-bold underline flex justify-center mt-5 p-4">Contact</h3>
        <div className="info flex flex-col sm:flex-row justify-evenly text-pretty text-teal-400 mb-5 text-lg sm:text-xl text-center sm:text-left">
          <span><span className="text-violet-500 underline">Location:</span> Bengaluru</span>
          <span><span className="text-violet-500 underline">Contact No:</span> 9900102534</span>
          <span><span className="text-violet-500 underline">Mail:</span> surajem217@gmail.com</span>
        </div>

        {/* Education Section */}
        <h3 className="text-orange-600 text-2xl underline flex justify-center mt-5 p-4">Education</h3>
        <div className="info text-pretty text-teal-400 mb-5 text-lg sm:text-xl px-2 sm:px-8">
          <div className="mb-2">
            <span className="text-violet-500 underline">School:</span>
            <span className="block sm:inline ml-2"><span className="text-white">*</span> Kendriya Vidyalaya Davanagere - 2019</span>
          </div>
          <div className="mb-2">
            <span className="text-violet-500 underline">College:</span>
            <span className="block sm:inline ml-2"><span className="text-white">*</span> SIR Mv Pu College - 2021</span>
          </div>
          <div className="mb-2">
            <span className="text-violet-500 underline">Under Graduation:</span>
            <span className="block sm:inline ml-2"><span className="text-white">*</span> M S Ramaiah Institution of Technology - 2021-2025</span>
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="text-orange-600 text-2xl font-bold underline mb-5 mt-5 flex justify-center">Skills</h3>
        <div className="skill-info text-pretty text-teal-400 mb-5 text-lg sm:text-xl px-2 sm:px-8">
          <div className="mb-2">
            <span className="text-violet-500 underline">Programming:</span>
            <span className="block sm:inline ml-2"><span className="text-white">*</span> C++, Python</span>
          </div>
          <div className="mb-2">
            <span className="text-violet-500 underline">Web Development:</span>
            <span className="block sm:inline ml-2"><span className="text-white">*</span> HTML, CSS, JavaScript, React.js, Next.js, Node.js</span>
          </div>
          <div className="mb-2">
            <span className="text-violet-500 underline">AI-Machine Learning:</span>
            <span className="block sm:inline ml-2"><span className="text-white">*</span> Supervised and Unsupervised Learning</span>
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/Surajresume.pdf"
            download
            className="bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
