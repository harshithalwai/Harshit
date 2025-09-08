import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import MatterBackground from "./Components/MatterBackground.jsx";

const App = () => {
  return (
    <>
      <div className="bg-slate-900 text-white font-sans overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          <MatterBackground />
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;
