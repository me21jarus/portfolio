import NavBar from "../components/NavBar";
import Content from "../components/Content";
import { TracingBeam } from "../components/TracingBeam";

export default function Base() {
  return (
    <>
      <nav className="bg-gray-700">
        <NavBar />
      </nav>

      <div className="relative flex min-h-screen bg-gray-800">
        {/* Left-side tracing beam
        <div className="fixed top-20 left-15 w-[5%] h-full z-10">
          <TracingBeam />
        </div> */}

        {/* Content section in the middle, offset from left for the beam */}
        <main className="flex-grow m-[5%] w-[90%] min-h-screen flex flex-col items-center justify-center pt-5">
          <Content />
        </main>
      </div>
    </>
  );
}
