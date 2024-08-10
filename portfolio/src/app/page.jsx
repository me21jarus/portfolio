import Image from "next/image";
import NavBar from "../components/NavBar.jsx"

import Content from "../components/Content.jsx";

export default function Base() {
  return (
    <>
  <nav className=" bg-gray-700">
  <NavBar />
  </nav>
    <main className="flex min-h-screen flex-col items-center justify-center pt-20  bg-gray-800">
      <Content/>
    </main>
    </> 
  );
}