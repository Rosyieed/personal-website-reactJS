import React from "react";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a fresh graduate web developer, enthusiastic about building
              efficient and user-friendly digital solutions. During a one-year
              internship in the manufacturing industry, I was directly involved
              in developing web-based systems that supported the company’s
              internal business processes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My skills include both front-end and back-end development, with a
              strong focus on application performance, accessibility, and
              delivering an optimal user experience.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-400">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Clean Code</h3>
              </div>
              <p className="text-gray-400">
                Writing clean, maintainable code that follows best practices.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Palette className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  UI/UX Design
                </h3>
              </div>
              <p className="text-gray-400">
                Creating intuitive interfaces and enjoyable user experiences.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Performance
                </h3>
              </div>
              <p className="text-gray-400">
                Optimizing application performance for fast and responsive user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
