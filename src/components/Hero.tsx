import React, { useState } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [selectedCv, setSelectedCv] = useState("/cv-indonesia.pdf");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleDropdown = () => setDropdownOpen((open) => !open);

  const selectCv = (cvPath: string) => {
    setSelectedCv(cvPath);
    setDropdownOpen(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <img
                src="/foto-formal.png"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Full Stack Developer
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Providing solutions that are{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            modern
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            innovative
          </span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I am an experienced full stack developer specializing in building
          responsive and user-friendly applications using modern technologies.
        </motion.p>

        {/* Dropdown Download CV + Hubungi Saya */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 relative"
        >
          {/* Dropdown tombol */}
          <a
            href="/assets/cv/CV - ROSYID EKO NUGROHO.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <Download size={20} />
            Download CV
          </a>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/Rosyieed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rosyid-eko-nugroho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:rosyid123.ren@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
