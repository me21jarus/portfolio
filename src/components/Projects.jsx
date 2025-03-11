import { MultiCardDemo } from "./MultiCardDemo";

const Projects = () => {
  return (
    <div className="ml-6 sm:ml-0"> {/* Shift right on mobile */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg mt-10 mb-10">
        <h1 className="text-green-500 text-5xl font-bold mb-2 relative group flex justify-center">
          Projects
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </h1>
        <MultiCardDemo />
      </div>
    </div>
  );
};

export default Projects;
