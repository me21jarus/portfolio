import Image from "next/image";

const Home = () => {
  return (
      <div id="home" className="relative min-h-screen pt-48 mt-10">
      {/* Background image with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 rounded-3xl" style={{ backgroundImage: 'url("/bgimage.jpg")' }}>
        <div className="absolute inset-0  opacity-50"></div> 
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center ml-2">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-white text-4xl font-bold mb-2">Hello, I'm</h1>
          <h2 className="text-white text-6xl font-bold mb-4">Suraj E M</h2>
          <p className="text-gray-400 text-xl mb-4">
            I'm a Software Engineer based in Bengaluru, and I'm very passionate and dedicated to my work.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#contact" className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold">Hire Me</a>
            <a href="#projects" className="bg-transparent border border-white text-white py-2 px-6 rounded-full font-semibold">See My Work</a>
          </div>
        </div>
        <div className="relative md:w-1/2 flex justify-center">
          <div className="w-72 h-120 overflow-hidden rounded-full flex items-center justify-center">
            <Image src="/me.png" alt="Your image" width={576} height={576} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
