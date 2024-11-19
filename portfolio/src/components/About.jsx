const About = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
      <h1 className="text-green-500 text-5xl font-bold mb-2 relative group flex justify-center">About<span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span></h1>
      <h3 className="text-orange-600 text-2xl font-bold underline flex justify-center mt-5 p-6">Contact</h3>
        <div className="info flex justify-evenly text-pretty text-teal-400 mb-5 text-xl">
            <span><span className="text-violet-500 underline">Location:</span> Bengaluru</span>
            <span><span className="text-violet-500 underline">Contact No:</span> 9900102534</span>
            <span><span className="text-violet-500 underline">Mail:</span> surajem217@gmail.com</span>
        </div>
      <h3 className="text-orange-600 text-2xl underline flex justify-center mt-5 p-6">Education</h3>
        <div className="info text-pretty text-teal-400 mb-5 text-xl ml-14 p-2">
            <div><span className="text-violet-500 underline">School:</span></div> <span className="ml-10"><span className="text-white">*</span>Kendriya Vidyalaya Davanagere - 2019</span>
            <div><span className="text-violet-500 underline">College:</span></div> <span className="ml-10"><span className="text-white">*</span>SIR Mv Pu College - 2021</span>
            <div><span className="text-violet-500 underline">Under Graduation:</span></div> <span className="ml-10"><span className="text-white">*</span>M S Ramaiah Institution of Technology - 2021-2025</span>
            
        </div>
        
        <h3 className="text-orange-600 text-2xl font-bold mb-5 underline mt-5 flex justify-center">Skills</h3>
        <div className="skill-info text-pretty text-teal-400 mb-5 text-xl ml-14 p-2">
            <div><span className="text-violet-500 underline">Programing:</span></div><span className="ml-10"><span className="text-white">*</span>C++,Python</span>
            <div><span className="text-violet-500 underline">Web Developmet</span></div><span className="ml-10"><span className="text-white">*</span>Html,CSS,JavaScript,React.js,Next.js,Node.js</span>
            <div><span className="text-violet-500 underline">AI-Machine Learning</span></div>
            <span className="ml-10"><span className="text-white">*</span>Supervised and Unsupervised</span>
        </div>
        <div className="flex justify-center mt-8">
          <a href="/Surajresume.pdf" download className="bg-green-500 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-600">Download Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About;