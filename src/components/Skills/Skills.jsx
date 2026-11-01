import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaLaptopCode size={13} />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          Technologies, architectures, and tools I leverage to build scalable full-stack applications, enterprise CRMs, secure authentication, and cloud-native solutions.
        </p>
      </div>

      {/* SKILL CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.01}
            transitionSpeed={600}
            className="h-full"
          >
            <div className="h-full flex flex-col justify-between bg-[#0e0c26]/80 hover:bg-[#120f33]/90 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(130,69,236,0.25)] backdrop-blur-md">
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-500/20">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30 font-medium">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills Chips / Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/40 hover:bg-purple-800/40 border border-purple-500/20 hover:border-purple-400 text-gray-200 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium"
                    >
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-5 h-5 object-contain transition-transform group-hover:scale-110"
                        />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
