import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
    { name: "Bootstrap", level: 90, color: "from-indigo-500 to-purple-500" },
    { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-blue-500" },
    { name: "React", level: 75, color: "from-blue-400 to-blue-600" },
    { name: "PHP", level: 90, color: "from-purple-400 to-purple-600" },
    { name: "Laravel", level: 90, color: "from-red-500 to-pink-500" },
    { name: "Express", level: 80, color: "from-green-400 to-green-600" },
    { name: "MySQL", level: 90, color: "from-orange-400 to-yellow-500" },
    { name: "MongoDB", level: 75, color: "from-green-500 to-emerald-600" },
  ];

  const tools = ["VS Code", "Git", "GitHub", "Figma", "Postman", "Prettier"];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I am proficient with in modern web
            development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 text-center"
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
                <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
                  <h5 className="text-white font-medium">
                    Junior Web Developer
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Badan Nasional Sertifikasi Profesi
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
                  <h5 className="text-white font-medium">
                    Full Stack Web Developer - Independent Study
                  </h5>
                  <p className="text-gray-400 text-sm">PT GITS Indonesia</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
                  <h5 className="text-white font-medium">
                    Web Development - Laboratory Assistant Certificate
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Laboratorium Komputer Fasilkom UNSIKA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
