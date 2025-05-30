import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Pesan berhasil dikirim! Saya akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am enthusiastic about collaborating on projects and committed to
            turning your digital concepts into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let’s Collaborate
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I am always open to new projects and exciting collaboration
                opportunities. Please feel free to contact me if you have ideas
                you want to bring to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">
                    <a href="mailto:rosyid123.ren@gmail.com">
                      rosyid123.ren@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telepon</p>
                  <p className="text-white">+62 859-7278-9853</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Bekasi, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Topic of your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
