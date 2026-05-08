import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-10 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-16">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left">

          <p className="text-purple-400 text-lg mb-3 font-semibold tracking-wider">
            FULL STACK MERN DEVELOPER
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm
          </h1>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mt-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Saksham Agarwal
          </h2>

          {/* TYPING EFFECT */}
          <div className="mt-6 text-2xl sm:text-3xl font-bold">
            <span className="text-white">I Build </span>

            <ReactTypingEffect
              text={[
                "MERN Stack Applications",
                "AI Powered Platforms",
                "Secure Backend Systems",
                "Cloud IDE Solutions",
                "Responsive Web Apps",
                "REST APIs",
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              className="text-purple-400"
              cursorRenderer={(cursor) => (
                <span className="text-purple-500">{cursor}</span>
              )}
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl">
            Full-Stack MERN Developer experienced in building scalable web
            applications, secure authentication systems, AI-powered developer
            tools, and cloud-based platforms. Skilled in React.js, Node.js,
            Express.js, MongoDB, Docker, REST APIs, and modern UI development.
            Strong foundation in Data Structures & Algorithms and backend
            optimization.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 justify-center md:justify-start mt-10">

            <a
              href="https://drive.google.com/file/d/1J25hYB_e5guHurBfpQNqECv7EQasUZ7e/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #8245ec 0%, #a855f7 100%)",
                boxShadow:
                  "0 0 20px rgba(130,69,236,0.6)",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Saksham706"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-purple-500 text-purple-400 font-bold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              GitHub
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center">

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="rounded-full"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-30"></div>

              <img
                src={profileImage}
                alt="Saksham Agarwal"
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full object-cover border-4 border-purple-600 shadow-[0_0_60px_rgba(130,69,236,0.6)]"
              />

            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
