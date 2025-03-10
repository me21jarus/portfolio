import TracingBeam from "../components/ui/tracing-beam";
import NavBar from "../components/NavBar";
import Content from "../components/Content";

export default function Base() {
  return (
    <>
      <nav className="bg-gray-700">
        <NavBar />
      </nav>

      <div className="relative flex min-h-screen bg-gray-800">
        <main className="flex-grow mx-[5%] mt-10 min-h-screen flex flex-col items-center justify-center pt-5">
          {/* Left Beam */}
          <TracingBeam className="fixed left-10 top-0" />
          
          <Content />
          
          {/* Right Beam */}
          <TracingBeam className="fixed right-14 top-0" />
        </main>
      </div>
    </>
  );
}
