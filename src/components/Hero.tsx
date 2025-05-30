import React, { useState } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const [selectedCv, setSelectedCv] = useState("/cv-indonesia.pdf");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
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
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <img
                src="/foto-formal.png"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Web Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          Providing web solutions that are{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            modern
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            innovative
          </span>
        </p>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          I am an experienced web developer specializing in building responsive
          and user-friendly web applications using modern technologies.
        </p>

        {/* Dropdown Download CV + Hubungi Saya */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in relative">
          {/* Dropdown tombol */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <Download size={20} />
              {selectedCv === "/assets/cv/CV - IDN"
                ? "Download CV"
                : "Download CV"}
              <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute mt-2 right-0 w-44 rounded-md shadow-lg bg-slate-900 border border-slate-700 ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  <a
                    href="/assets/cv/CV - IDN.pdf"
                    download
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer"
                    onClick={() => selectCv("/CV - IDN")}
                  >
                    Download IDN CV
                  </a>
                  <a
                    href="/assets/cv/CV - ENG.pdf"
                    download
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600 hover:text-white cursor-pointer"
                    onClick={() => selectCv("/CV - ENG.pdf")}
                  >
                    Download ENG CV
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-in">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
