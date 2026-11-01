import React from "react";
import { achievements } from "../../constants";
import { FaTrophy, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const getIcon = (type) => {
  switch (type) {
    case "cert":
      return <SiHackerrank className="text-emerald-400" size={28} />;
    case "code":
      return <SiLeetcode className="text-[#FFA116]" size={28} />;
    case "award":
      return <FaTrophy className="text-amber-400" size={28} />;
    default:
      return <FaAward className="text-purple-400" size={28} />;
  }
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaTrophy size={13} />
          <span>Honors &amp; Recognition</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Certifications &amp; Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          Recognitions highlighting engineering capability, competitive algorithmic problem solving, hackathon excellence, and academic distinction.
        </p>
      </div>

      {/* ACHIEVEMENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {achievements.map((item) => (
          <Tilt
            key={item.id}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.01}
            transitionSpeed={600}
            className="h-full"
          >
            <div className="h-full flex flex-col justify-between bg-[#0e0c26]/85 hover:bg-[#120f33]/95 border border-purple-500/20 hover:border-purple-400/50 rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_35px_rgba(130,69,236,0.25)] transition-all duration-300 backdrop-blur-md">
              <div>
                {/* Top Bar: Icon + Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex-shrink-0 shadow-inner">
                    {getIcon(item.type)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-500/30">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-purple-300 mt-1">
                  {item.subtitle}
                </h4>

                {/* Issuer & Date */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mt-2 pb-3 border-b border-purple-500/15">
                  <span className="font-medium text-gray-300">{item.issuer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Link CTA if applicable */}
              {item.link && (
                <div className="mt-5 pt-3 border-t border-purple-500/15">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View Profile &amp; Verification</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              )}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

