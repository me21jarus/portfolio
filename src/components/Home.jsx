import Image from "next/image";

const Home = () => {
  return (
    <div id="home" className="relative min-h-screen pt-48 mt-10">
      {/* Background image with responsive size */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 rounded-3xl md:h-full sm:h-[80vh]"
        style={{
          backgroundImage: 'url("/bgimage.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Image comes first on mobile */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="w-32 sm:w-40 md:w-72 h-auto overflow-hidden rounded-full flex items-center justify-center">
            <Image
              src="/me.png"
              alt="Your image"
              width={576}
              height={576}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left w-full md:w-1/2 px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 break-words">
            Hello, I'm
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 break-words">
            Suraj E M
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 break-words">
            I'm a Software Engineer based in Bengaluru, and I'm very passionate
            and dedicated to my work.
          </p>

          {/* Buttons - Stack vertically on mobile */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold text-center w-full sm:w-auto"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-white text-white py-2 px-6 rounded-full font-semibold text-center w-full sm:w-auto"
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
