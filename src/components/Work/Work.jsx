import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaCheckCircle, FaStar } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaCode size={13} />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          Full-stack cloud-native applications featuring Docker containerization, AI model integration, WebSockets, high-performance database indexing, and enterprise security.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between bg-[#0e0c26]/85 hover:bg-[#120f33]/95 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(130,69,236,0.3)] hover:-translate-y-1.5 backdrop-blur-md"
          >
            {/* Top Image & Badge */}
            <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c26] via-transparent to-transparent opacity-80"></div>

              {/* Metric Tag Badge */}
              {project.metric && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#050414]/85 text-purple-300 border border-purple-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{project.metric}</span>
                </div>
              )}

              {project.featured && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
                  <FaStar size={11} />
                  <span>Featured</span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-purple-400/90 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-950/60 text-purple-300 border border-purple-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  View Details &amp; Architecture →
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-purple-900/30 hover:bg-purple-800/40 border border-purple-500/30 text-gray-200 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                    >
                      <FaGithub size={14} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Demo"
                      className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all flex items-center gap-1.5 text-xs font-semibold shadow-md"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0e0c26] w-full max-w-2xl rounded-2xl overflow-hidden border border-purple-500/40 shadow-[0_0_50px_rgba(130,69,236,0.4)] max-h-[90vh] flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-60 overflow-hidden flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c26] via-[#0e0c26]/40 to-transparent"></div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:text-purple-400 hover:bg-black/90 transition-all border border-white/20"
              >
                <FaTimes size={16} />
              </button>

              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  {selectedProject.metric}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-4">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Bulleted Architecture Highlights */}
              {selectedProject.bullets && selectedProject.bullets.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2.5">
                    Architectural &amp; Engineering Highlights:
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={13} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="pt-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-950/60 text-purple-300 border border-purple-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 bg-[#08061a] border-t border-purple-500/20 flex flex-wrap items-center justify-end gap-3 flex-shrink-0">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <FaGithub size={16} />
                  <span>View Repository</span>
                </a>
              )}

              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
                >
                  <FaExternalLinkAlt size={14} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
