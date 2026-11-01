import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../../constants";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-purple-500/20 bg-[#040311] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand */}
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          <span className="text-purple-400">&lt;</span>
          <span>Saksham</span>
          <span className="text-purple-400">/</span>
          <span className="text-purple-300">Agarwal</span>
          <span className="text-purple-400">&gt;</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-md mb-6">
          Software Developer specializing in scalable full-stack architectures, Docker containerization, and enterprise backend engineering.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-xs sm:text-sm text-gray-300">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Achievements", id: "achievements" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 transition-colors py-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center space-x-4 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-3 rounded-full bg-white/5 hover:bg-purple-600/20 text-gray-300 hover:text-white border border-purple-500/20 hover:border-purple-400 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-3 rounded-full bg-white/5 hover:bg-[#0077b5]/20 text-gray-300 hover:text-[#0077b5] border border-purple-500/20 hover:border-[#0077b5]/50 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode (300+ Solved)"
            className="p-3 rounded-full bg-white/5 hover:bg-[#FFA116]/20 text-gray-300 hover:text-[#FFA116] border border-purple-500/20 hover:border-[#FFA116]/50 transition-all"
          >
            <SiLeetcode size={18} />
          </a>
          <a
            href="https://www.instagram.com/saksham0607?igsh=YWx6Nzhoeml1cjA2"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="p-3 rounded-full bg-white/5 hover:bg-pink-600/20 text-gray-300 hover:text-pink-400 border border-purple-500/20 hover:border-pink-500/50 transition-all"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            title="Email"
            className="p-3 rounded-full bg-white/5 hover:bg-purple-600/20 text-gray-300 hover:text-purple-300 border border-purple-500/20 hover:border-purple-400 transition-all"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 flex items-center gap-1">
          © 2026 {personalInfo.name}. Built with <FaHeart className="text-pink-500 inline" size={11} /> using React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
