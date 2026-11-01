import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope, FaTrophy, FaCode, FaBolt, FaDocker } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from "../../assets/me.jpg";
import { personalInfo } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Software Developer • Full-Stack & Cloud-Native</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 min-h-[44px]">
            <span>I architect & build </span>
            <ReactTypingEffect
              text={[
                "Scalable Web Architectures",
                "Enterprise CRM Systems",
                "Cloud-Native Docker Solutions",
                "Real-Time WebSocket Platforms",
                "High-Throughput REST APIs",
                "Full-Stack MERN Platforms",
              ]}
              speed={70}
              eraseSpeed={40}
              eraseDelay={1800}
              typingDelay={400}
              className="text-purple-400 font-bold"
              cursorRenderer={(cursor) => (
                <span className="text-pink-500 font-light">{cursor}</span>
              )}
            />
          </div>

          {/* Professional Summary */}
          <p className="mt-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {personalInfo.summary}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(130,69,236,0.5)] hover:shadow-[0_0_35px_rgba(130,69,236,0.8)] transition-all duration-300 hover:scale-105"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm sm:text-base font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm sm:text-base font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-105"
            >
              <SiLeetcode size={18} />
              <span>LeetCode (300+)</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm sm:text-base font-medium text-purple-300 hover:text-white bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
            >
              <FaEnvelope size={16} />
              <span>Contact</span>
            </a>
          </div>

          {/* Quick Highlight Metrics */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
            <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
                <FaCode size={16} />
                <span className="text-xl sm:text-2xl font-bold text-white">300+</span>
              </div>
              <p className="text-xs text-gray-400">DSA LeetCode</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-1.5 text-pink-400 mb-1">
                <FaTrophy size={16} />
                <span className="text-xl sm:text-2xl font-bold text-white">Top 10</span>
              </div>
              <p className="text-xs text-gray-400">HackKRMU 3.0</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-1.5 text-indigo-400 mb-1">
                <FaDocker size={16} />
                <span className="text-xl sm:text-2xl font-bold text-white">~90%</span>
              </div>
              <p className="text-xs text-gray-400">Setup Slashed</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
                <FaBolt size={16} />
                <span className="text-xl sm:text-2xl font-bold text-white">&lt;100ms</span>
              </div>
              <p className="text-xs text-gray-400">API Latency</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE PROFILE IMAGE */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
            className="relative"
          >
            {/* Ambient Multi-Layer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-60"></div>

            {/* Avatar Frame */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-b from-purple-400 via-indigo-500 to-pink-500 shadow-[0_0_50px_rgba(130,69,236,0.6)]">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-center shadow-inner"
              />
            </div>

            {/* Floating Role Chip */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0a0826]/90 border border-purple-500/50 shadow-lg backdrop-blur-md whitespace-nowrap">
              <span className="text-xs sm:text-sm font-semibold text-purple-300">
                🚀 Full-Stack &amp; Cloud Native
              </span>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
