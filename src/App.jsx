import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen text-gray-100 relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Background ambient light blobs */}
      <BlurBlob position={{ top: "15%", left: "15%" }} size={{ width: "35%", height: "35%" }} />
      <BlurBlob position={{ top: "45%", left: "80%" }} size={{ width: "40%", height: "40%" }} />
      <BlurBlob position={{ top: "75%", left: "20%" }} size={{ width: "35%", height: "35%" }} />

      {/* Grid Pattern Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* App Body Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20 sm:pt-24 space-y-12 sm:space-y-16">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
