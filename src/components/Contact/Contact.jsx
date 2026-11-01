import React, { useState } from "react";
import { personalInfo } from "../../constants";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheck, FaCopy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaEnvelope size={12} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          Open to full-stack engineering opportunities, high-impact software developer roles, and technical collaborations. Feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 max-w-5xl mx-auto">
        {/* LEFT COLUMN: CONTACT CARDS & DETAILS */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {/* Status Card */}
          <div className="p-5 rounded-2xl bg-[#0e0c26]/90 border border-purple-500/30 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Opportunities</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Actively seeking software developer positions, full-stack engineering, and cloud-native architecture roles.
            </p>
          </div>

          {/* Email Card with Copy button */}
          <div className="p-5 rounded-2xl bg-[#0e0c26]/85 border border-purple-500/20 hover:border-purple-400/50 transition-all flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 flex-shrink-0">
                <FaEnvelope size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Direct Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 truncate block transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              title="Copy Email"
              className="p-2.5 rounded-xl bg-purple-900/30 hover:bg-purple-800/50 text-purple-300 hover:text-white transition-all border border-purple-500/30 flex-shrink-0"
            >
              {copiedEmail ? <FaCheck size={14} className="text-emerald-400" /> : <FaCopy size={14} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-[#0e0c26]/85 border border-purple-500/20 hover:border-purple-400/50 transition-all flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-purple-950/60 text-emerald-400 border border-purple-500/30 flex-shrink-0">
              <FaPhoneAlt size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone / WhatsApp</p>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-[#0e0c26]/85 border border-purple-500/20 flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-purple-950/60 text-indigo-400 border border-purple-500/30 flex-shrink-0">
              <FaMapMarkerAlt size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</p>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Social Platforms Row */}
          <div className="p-5 rounded-2xl bg-[#0e0c26]/85 border border-purple-500/20">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">
              Developer Profiles
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-[#00a0dc] hover:text-white text-xs font-semibold transition-all"
              >
                <FaLinkedin size={15} /> LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200 hover:text-white text-xs font-semibold transition-all"
              >
                <FaGithub size={15} /> GitHub
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFA116]/15 hover:bg-[#FFA116]/30 border border-[#FFA116]/40 text-[#FFA116] hover:text-white text-xs font-semibold transition-all"
              >
                <SiLeetcode size={15} /> LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: QUICK MESSAGE FORM */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-[#0e0c26]/90 border border-purple-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Fill in your details below to launch a pre-composed direct email to my inbox.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050414] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050414] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Software Engineer Opportunity / Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#050414] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hi Saksham, I reviewed your work on VocodeAI and CRM architectures..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#050414] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(130,69,236,0.4)] hover:shadow-[0_0_30px_rgba(130,69,236,0.7)] transition-all duration-300"
            >
              <FaPaperPlane size={15} />
              <span>{submitted ? "Opening Mail Client..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

