import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-20 bg-black font-sans"
    >
      {/* HEADING */}
      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Technical Skills
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          Technologies and tools I use to build scalable full-stack
          applications, secure backend systems, AI-powered platforms,
          and responsive user experiences.
        </p>
      </div>

      {/* SKILL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
          >

            <div className="bg-[#111] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300 shadow-xl">

              <h3 className="text-3xl font-bold text-purple-400 text-center mb-10">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 border border-gray-700 rounded-2xl p-3 hover:border-purple-500 hover:scale-105 transition-all duration-300"
                  >

                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />

                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>

                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;