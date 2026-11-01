import React from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaGraduationCap size={14} />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          Academic foundation in Computer Science &amp; Engineering, software paradigms, algorithms, and STEM sciences.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Left Line */}
        <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-800 opacity-60"></div>

        <div className="space-y-8 sm:space-y-10">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-10 sm:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-2 w-5 h-5 rounded-full bg-[#050414] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.8)] z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              </div>

              {/* Education Card */}
              <div className="bg-[#0e0c26]/85 hover:bg-[#120f33]/95 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_35px_rgba(130,69,236,0.25)] transition-all duration-300 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-purple-500/20">
                  <div className="flex items-center gap-4">
                    {/* Institution Logo */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white p-1 flex-shrink-0 border border-purple-400/30 shadow-md">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-semibold text-purple-300 mt-0.5">
                        {edu.school}
                      </h4>
                      {edu.highlights && (
                        <p className="text-xs text-indigo-300 font-medium mt-1 flex items-center gap-1.5">
                          <FaAward size={11} className="text-amber-400" />
                          <span>{edu.highlights}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Grade Badges */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 text-purple-200 border border-purple-500/30 font-medium text-xs">
                      <FaCalendarAlt size={11} className="text-purple-400" />
                      {edu.date}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold text-xs">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
