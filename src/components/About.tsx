import React from "react";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Saya adalah seorang web developer fresh graduate yang antusias
              dalam membangun solusi digital yang efisien dan mudah digunakan.
              Selama menjalani program magang selama 1 tahun di industri
              manufaktur, saya terlibat langsung dalam pengembangan sistem
              berbasis web yang mendukung proses bisnis internal perusahaan.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Keahlian saya mencakup pengembangan front-end dan back-end dengan
              fokus pada kinerja aplikasi, kemudahan akses, serta pengalaman
              pengguna yang optimal.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-400">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <div className="text-gray-400">Tahun Pengalaman</div>
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
                Menulis kode yang bersih, maintainable, dan mengikuti best
                practices.
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
                Menciptakan interface yang intuitif dan pengalaman pengguna yang
                menyenangkan.
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
                Mengoptimalkan performa aplikasi untuk pengalaman yang cepat dan
                responsif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
