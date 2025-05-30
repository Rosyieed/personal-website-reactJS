import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
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

  return (
    <footer className="py-12 px-6 border-t border-slate-700/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Rosyid Eko Nugroho
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mengembangkan solusi web yang inovatif dan berkualitas tinggi
              untuk membantu bisnis Anda berkembang di era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "#home")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleSmoothScroll(e, "#skills")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Rosyieed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rosyid-eko-nugroho/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rosyid123.ren@gmail.com"
                className="w-10 h-10 bg-slate-700 hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Mari terhubung dan berkolaborasi untuk proyek yang menginspirasi!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Rosyid Eko Nugroho. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
            <span>in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
