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
          Projects showcasing my experience in MERN stack development,
          AI integration, Docker containerization, REST APIs,
          authentication systems, and scalable web applications.
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
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/90 p-5">

          <div className="bg-[#111] max-w-4xl w-full rounded-3xl overflow-hidden relative border border-purple-500/20">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-6 text-white text-4xl hover:text-purple-500"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">

              <h2 className="text-4xl font-bold text-white mb-6">
                {selectedProject.title}
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300"
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