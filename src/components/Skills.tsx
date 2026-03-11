import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = {
    "Front-end": [
      { name: "HTML/CSS", color: "from-orange-500 to-blue-500" },
      { name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
      { name: "Bootstrap", color: "from-purple-600 to-indigo-700" },
      { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500" },
      { name: "React", color: "from-sky-400 to-blue-500" },
    ],
    "Back-end": [
      { name: "PHP", color: "from-indigo-400 to-slate-500" },
      { name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
      { name: "C#", color: "from-green-500 to-emerald-700" },
      { name: "Java", color: "from-blue-500 to-yellow-500" },
      { name: "Python", color: "from-blue-500 to-yellow-500" },
      { name: "Laravel", color: "from-red-500 to-orange-600" },
      { name: "Express", color: "from-gray-700 to-slate-900" },
      { name: "Node.js", color: "from-green-500 to-emerald-700" },
      { name: ".NET", color: "from-cyan-400 to-sky-500" },
    ],
    Database: [
      { name: "MySQL", color: "from-blue-500 to-orange-400" },
      { name: "SQL Server", color: "from-red-600 to-gray-500" },
      { name: "PostgreSQL", color: "from-blue-700 to-indigo-900" },
      { name: "MongoDB", color: "from-green-500 to-lime-600" },
    ],
  };

  const tools = ["VS Code", "Git", "GitHub", "Figma", "Postman", "Prettier"];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I am proficient with in modern development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {Object.entries(skillCategories).map(
                ([category, items], catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-lg font-medium text-blue-400 mb-4">
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {items.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group relative overflow-hidden"
                        >
                          <div
                            className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${skill.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                          ></div>
                          <span className="text-gray-300 font-medium relative z-10 text-center">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="text-gray-300 font-medium">{tool}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-6">
                Certifications
              </h4>
              <div className="space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <h5 className="text-white font-medium">
                    Junior Web Developer
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Badan Nasional Sertifikasi Profesi
                  </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <h5 className="text-white font-medium">
                    Full Stack Web Developer - Independent Study
                  </h5>
                  <p className="text-gray-400 text-sm">PT GITS Indonesia</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <h5 className="text-white font-medium">
                    Web Development - Laboratory Assistant Certificate
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Laboratorium Komputer Fasilkom UNSIKA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
