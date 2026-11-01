import React from "react";
import { experiences } from "../../constants";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaBriefcase size={13} />
          <span>Work History</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          Production engineering experience building enterprise CRMs, high-throughput microservices, real-time monitoring dashboards, and secure backend systems.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Center/Left Glow Line */}
        <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-800 opacity-60"></div>

        <div className="space-y-10 sm:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-10 sm:pl-16">
              {/* Timeline Node Dot */}
              <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#050414] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
              </div>

              {/* Experience Card */}
              <div className="bg-[#0e0c26]/85 hover:bg-[#120f33]/95 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_35px_rgba(130,69,236,0.25)] transition-all duration-300 backdrop-blur-md">
                {/* Header: Company + Role + Badges */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-purple-500/20">
                  <div className="flex items-center gap-4">
                    {/* Logo / Monogram */}
                    {exp.img ? (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white p-1 flex-shrink-0 border border-purple-400/40 shadow-md">
                        <img
                          src={exp.img}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md border border-purple-400/30 flex-shrink-0">
                        {exp.initials}
                      </div>
                    )}

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-purple-300 mt-0.5">
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs sm:text-sm text-gray-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 text-purple-200 border border-purple-500/30 font-medium">
                      <FaCalendarAlt size={12} className="text-purple-400" />
                      {exp.date}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-gray-400 font-medium text-xs mt-1">
                        <FaMapMarkerAlt size={11} className="text-indigo-400" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets List */}
                <div className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={13} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="mt-5 pt-4 border-t border-purple-500/10">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                    Key Technologies &amp; Architecture:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-950/60 text-purple-300 border border-purple-500/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
