import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-[7vw] lg:px-[12vw] bg-black font-sans"
    >
      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-white">
          Featured Projects
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
          Projects showcasing my experience in MERN stack development, AI
          integration, Docker containerization, REST APIs, authentication
          systems, and scalable web applications.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-[#111] rounded-3xl overflow-hidden border border-purple-500/10 hover:border-purple-500 transition-all duration-300 cursor-pointer hover:-translate-y-3"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 p-4">
          <div className="bg-[#111] w-full max-w-2xl rounded-2xl overflow-y-auto max-h-[90vh] relative border border-purple-500/20">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-white text-3xl hover:text-purple-500 z-10"
            >
              ×
            </button>

            {/* IMAGE */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[220px] object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-8">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
