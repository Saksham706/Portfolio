import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "experience", "projects", "achievements", "education", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleMenuItemClick("about")}
          className="group flex items-center gap-1.5 text-base sm:text-lg font-bold tracking-tight focus:outline-none"
        >
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">&lt;</span>
          <span className="text-white group-hover:text-purple-200 transition-colors">Saksham</span>
          <span className="text-purple-400">/</span>
          <span className="text-purple-300">Agarwal</span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">&gt;</span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "text-white bg-purple-600/30 border border-purple-500/40 shadow-[0_0_15px_rgba(130,69,236,0.4)]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Icons & Resume CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 transition-all duration-200"
          >
            <FaGithub size={19} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2 rounded-xl text-gray-300 hover:text-[#0077b5] hover:bg-[#0077b5]/10 border border-transparent hover:border-[#0077b5]/30 transition-all duration-200"
          >
            <FaLinkedin size={19} />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode (300+ Solved)"
            className="p-2 rounded-xl text-gray-300 hover:text-[#FFA116] hover:bg-[#FFA116]/10 border border-transparent hover:border-[#FFA116]/30 transition-all duration-200"
          >
            <SiLeetcode size={19} />
          </a>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(130,69,236,0.4)] hover:shadow-[0_0_25px_rgba(130,69,236,0.7)] transition-all duration-300"
          >
            <FaFileDownload size={12} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3 py-1 rounded-full text-xs font-semibold text-white bg-purple-600/80"
          >
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-600/20 focus:outline-none transition-colors"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#090720]/95 backdrop-blur-2xl border-b border-purple-500/20 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-purple-600/30 text-white border border-purple-500/40"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-purple-500/20 flex items-center justify-around">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#0077b5]"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#FFA116]"
            >
              <SiLeetcode size={18} /> LeetCode
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
