import { Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi! I'm Rosyid, a passionate web developer dedicated to
              transforming complex ideas into functional digital solutions.
              Through my professional experience in the manufacturing and
              distribution industries, I have successfully developed various
              enterprise level systems designed to optimize and streamline
              internal business processes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience in modern stacks like Laravel, .NET, Express, and
              React, I focus on writing clean, maintainable code and optimizing
              application performance, always striving to deliver a positive
              impact through technological innovation and a strong attention to
              detail.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-400">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
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

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
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

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
