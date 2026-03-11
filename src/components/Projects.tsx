import React from "react";
import { Github, ExternalLink, X, Lock } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden cursor-crosshair rounded-lg flex justify-center items-center w-full"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className={`max-h-[70vh] w-auto transition-transform duration-200 ease-out object-contain ${
          isZoomed ? "scale-[2]" : "scale-100"
        }`}
        style={
          isZoomed
            ? { transformOrigin: `${position.x}% ${position.y}%` }
            : { transformOrigin: "center center" }
        }
      />
    </div>
  );
};
import { title } from "process";

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);

  const projects = [
    {
      number: 1, // SmartLaundry - Excellent fullstack ASP.NET Core MVC project
      title:
        "SmartLaundry (ASP.NET Core Based Laundry POS & Management System)",
      description:
        "A web-based Point of Sales (POS) and operational management system built with ASP.NET Core to digitalize end-to-end laundry business cycles. The platform features real-time order tracking (from processing to pickup), dynamic service pricing management, and automated audit trails to ensure transaction transparency and operational accountability.",
      image: "/assets/projects/pos/pos_1.png",
      images: [
        "/assets/projects/pos/pos_1.png",
        "/assets/projects/pos/pos_2.png",
        "/assets/projects/pos/pos_3.png",
        "/assets/projects/pos/pos_4.png",
        "/assets/projects/pos/pos_5.png",
        "/assets/projects/pos/pos_6.png",
        "/assets/projects/pos/pos_7.png",
        "/assets/projects/pos/pos_8.png",
        "/assets/projects/pos/pos_9.png",
      ],
      technologies: [
        "ASP.NET Core MVC",
        "Javascript",
        "SQL Server",
        "Bootstrap"
      ],
      githubUrl: "https://github.com/Rosyieed/laundry-management",
    },
    {
      number: 4, // Milenia Audit System - Good Laravel/PHP enterprise project
      title: "Milenia Audit System",
      description:
        "An integrated enterprise portal for digitalizing internal audits, ISO quality standards, and comprehensive HR management—featuring automated scoring, training evaluations, and hierarchical digital signature approvals.",
      image: "/assets/projects/mas/mas_1.png",
      images: [
        "/assets/projects/mas/mas_1.png",
        "/assets/projects/mas/mas_2.png",
        "/assets/projects/mas/mas_3.png",
        "/assets/projects/mas/mas_4.png",
        "/assets/projects/mas/mas_5.png",
        "/assets/projects/mas/mas_6.png",
        "/assets/projects/mas/mas_7.png",
        "/assets/projects/mas/mas_8.png",
        "/assets/projects/mas/mas_9.png",
        "/assets/projects/mas/mas_10.png",
        "/assets/projects/mas/mas_11.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "Chart.js",
        "Bootstrap",
        "Signature Pad",
      ],
      githubUrl: "#projects",
    },
    {
      number: 3, // SDA Management System - Complete operations portal
      title:
        "SDA Management System (Sonax Detailing Academy Operations & Training Portal)",
      description:
        "A specialized web-based platform for automating Sonax Detailing Academy operations, from dynamic training scheduling and participant registration to automated feedback collection. The system integrates a robust logistics module for merchandise inventory tracking and reward distribution to ensure a seamless end-to-end training experience.",
      image: "/assets/projects/sda/sda_1.png",
      images: [
        "/assets/projects/sda/sda_1.png",
        "/assets/projects/sda/sda_2.png",
        "/assets/projects/sda/sda_3.png",
        "/assets/projects/sda/sda_4.png",
        "/assets/projects/sda/sda_5.png",
        "/assets/projects/sda/sda_6.png",
        "/assets/projects/sda/sda_7.png",
        "/assets/projects/sda/sda_8.png",
        "/assets/projects/sda/sda_9.png",
        "/assets/projects/sda/sda_10.png",
        "/assets/projects/sda/sda_11.png",
        "/assets/projects/sda/sda_12.png",
        "/assets/projects/sda/sda_13.png",
        "/assets/projects/sda/sda_14.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "Chart.js",
        "Bootstrap",
        "Signature Pad",
      ],
      githubUrl: "#projects",
    },
    {
      number: 2, // Integrated Sales & Admin - Centralized B2B portal, very strong enterprise use case
      title: "Integrated Sales & Administration Management System",
      description:
        "A Laravel-based enterprise portal designed to centralize B2B sales workflows and administrative operations for Milenia & MAP. It features real-time transaction tracking (SO/DO), multi-level document automation, role-based access control across branches, and an advanced reporting engine for sales performance and audit compliance.",
      image: "/assets/projects/sistem-admin/sistem-admin_1.png",
      images: [
        "/assets/projects/sistem-admin/sistem-admin_1.png",
        "/assets/projects/sistem-admin/sistem-admin_2.png",
        "/assets/projects/sistem-admin/sistem-admin_3.png",
        "/assets/projects/sistem-admin/sistem-admin_4.png",
        "/assets/projects/sistem-admin/sistem-admin_5.png",
        "/assets/projects/sistem-admin/sistem-admin_6.png",
        "/assets/projects/sistem-admin/sistem-admin_7.png",
        "/assets/projects/sistem-admin/sistem-admin_8.png",
        "/assets/projects/sistem-admin/sistem-admin_9.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "SQL Server",
        "Chart.js",
        "Bootstrap",
        "Signature Pad",
      ],
      githubUrl: "#projects",
    },
    {
      number: 5, // Sistem Informasi Manajemen Operasional & Event - Mini ERP
      title: "Sistem Informasi Manajemen Operasional & Event",
      description:
        "A web-based Mini-ERP platform designed to digitalize corporate operations by integrating event management, multi-level memo approval (IOM) workflows, merchandise inventory, business travel expense tracking, and KOL monitoring into a single centralized ecosystem.",
      image: "/assets/projects/sistem-event/sistem-event_1.png",
      images: [
        "/assets/projects/sistem-event/sistem-event_1.png",
        "/assets/projects/sistem-event/sistem-event_2.png",
        "/assets/projects/sistem-event/sistem-event_3.png",
        "/assets/projects/sistem-event/sistem-event_4.png",
        "/assets/projects/sistem-event/sistem-event_5.png",
        "/assets/projects/sistem-event/sistem-event_6.png",
        "/assets/projects/sistem-event/sistem-event_7.png",
        "/assets/projects/sistem-event/sistem-event_8.png",
        "/assets/projects/sistem-event/sistem-event_9.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "Chart.js",
        "Bootstrap",
        "Signature Pad",
      ],
      githubUrl: "#projects",
    },
    {
      number: 6, // HRIS - Classic important business module
      title: "HRIS (Human Resource Information System)",
      description:
        "HRIS is a web-based Human Resource Information System designed to facilitate the management of human resources at PT Milenia Mega Mandiri.",
      image: "/assets/projects/ess/ess_1.png",
      images: [
        "/assets/projects/ess/ess_1.png",
        "/assets/projects/ess/ess_2.png",
        "/assets/projects/ess/ess_3.png",
        "/assets/projects/ess/ess_4.png",
        "/assets/projects/ess/ess_5.png",
        "/assets/projects/ess/ess_6.png",
        "/assets/projects/ess/ess_7.png",
        "/assets/projects/ess/ess_8.png",
      ],
      technologies: [
        "PHP (Native)",
        "Javascript",
        "MySQL",
        "Chart.js",
        "Bootstrap",
        "Signature Pad",
      ],
      githubUrl: "#projects",
    },
    {
      number: 7, // Limbah Connect - Specialized system
      title: "Limbah Connect",
      description:
        "Limbah Connect is a web-based Waste Sales Management System designed to facilitate the management of waste sales at PT Kalbe Morinaga Indonesia.",
      image: "/assets/projects/Limbah Connect/limbah logo.png",
      images: [
        "/assets/projects/Limbah Connect/limbah logo.png",
        "/assets/projects/Limbah Connect/limbah 1.png",
        "/assets/projects/Limbah Connect/limbah 2.png",
        "/assets/projects/Limbah Connect/limbah 3.png",
        "/assets/projects/Limbah Connect/limbah 4.png",
        "/assets/projects/Limbah Connect/limbah 5.png",
        "/assets/projects/Limbah Connect/limbah 6.png",
        "/assets/projects/Limbah Connect/limbah 7.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "Chart.js",
        "Bootstrap",
        "Signature Pad",
      ],
      githubUrl: "#projects",
    },
    {
      number: 9, // KMI Ergonomic System - External API integration
      title: "KMI Ergonomic System Web",
      description:
        "A fullstack web application that displays real-time work posture analysis results from external APIs (RULA, REBA, NIOSH), equipped with an admin panel, data management, and ergonomic reporting modules.",
      image: "/assets/projects/ergonomic/ergonomic logo.png",
      images: [
        "/assets/projects/ergonomic/ergonomic logo.png",
        "/assets/projects/ergonomic/ergonomic 1.png",
        "/assets/projects/ergonomic/ergonomic 2.png",
        "/assets/projects/ergonomic/ergonomic 3.png",
        "/assets/projects/ergonomic/ergonomic 4.png",
        "/assets/projects/ergonomic/ergonomic 5.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "Chart.js",
        "Bootstrap",
      ],
      githubUrl: "#projects",
    },
    {
      number: 8, // FA Library - Finance monitor
      title: "FA Library",
      description:
        "FA Library is an internal web application designed to assist the Finance & Accounting team at PT Kalbe Morinaga Indonesia in monitoring monthly and annual financial reports, as well as operational expenses.",
      image: "/assets/projects/FA Library/falibrary 5.png",
      images: [
        "/assets/projects/FA Library/falibrary 5.png",
        "/assets/projects/FA Library/falibrary 1.png",
        "/assets/projects/FA Library/falibrary 2.png",
        "/assets/projects/FA Library/falibrary 3.png",
        "/assets/projects/FA Library/falibrary 4.png",
        "/assets/projects/FA Library/falibrary 6.png",
        "/assets/projects/FA Library/falibrary 7.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "Chart.js",
        "Bootstrap",
      ],
      githubUrl: "#projects",
    },
    {
      number: 10, // Laundry Management System (PHP) - Older/redundant to SmartLaundry ASP.NET
      title: "Laundry Management System",
      description:
        "Laundry Management System is a web application designed to manage laundry operations, from record-keeping to order status tracking, supporting multiple roles such as admin, ironer, packer, and super admin.",
      image: "/assets/projects/Laundry/laundry 1.png",
      images: [
        "/assets/projects/Laundry/laundry 1.png",
        "/assets/projects/Laundry/laundry 2.png",
        "/assets/projects/Laundry/laundry 3.png",
        "/assets/projects/Laundry/laundry 4.png",
        "/assets/projects/Laundry/laundry 5.png",
        "/assets/projects/Laundry/laundry 6.png",
        "/assets/projects/Laundry/laundry 7.png",
        "/assets/projects/Laundry/laundry 8.png",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Laravel",
        "MySQL",
        "WAblas",
        "Bootstrap",
      ],
      githubUrl: "https://github.com/Rosyieed/Laundry_CMS",
    },
  ];

  const sortedProjects = [...projects].sort((a, b) => a.number - b.number);
  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I have completed using modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger
                asChild
                onClick={() => setSelectedProject(project)}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-slate-800 text-blue-300 text-xs font-medium rounded-md border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-6 mt-auto pt-4 border-t border-slate-800/50">
                      {project.githubUrl === "#projects" ? (
                        <div className="relative group/tooltip flex items-center text-slate-500 font-medium cursor-help">
                          <Lock size={16} className="mr-2" />
                          <span className="text-xs uppercase tracking-wider">
                            Private Repo
                          </span>
                          <div className="absolute bottom-full left-0 mb-2 w-max max-w-xs bg-slate-800 text-gray-200 text-xs px-3 py-2 rounded-md opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none shadow-xl border border-slate-700">
                            This is a private repository for a company/client
                            <div className="absolute top-full left-6 -ml-1 border-4 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={project.githubUrl}
                          className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          <span className="text-xs uppercase tracking-wider">
                            Source Code
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>

              {selectedProject && selectedProject.title === project.title && (
                <DialogContent className="max-w-5xl w-[95vw] bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800 text-blue-300 text-sm font-medium rounded-md border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-950/50 rounded-xl p-2 sm:p-4 border border-slate-800">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedProject.images.map((img, i) => (
                          <CarouselItem
                            key={i}
                            className="w-full flex justify-center items-center"
                          >
                            <ZoomableImage
                              src={img}
                              alt={`Screenshot ${i + 1}`}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="hidden sm:block">
                        <CarouselPrevious className="left-4 bg-slate-800/80 border-slate-700 hover:bg-slate-700 hover:text-white" />
                        <CarouselNext className="right-4 bg-slate-800/80 border-slate-700 hover:bg-slate-700 hover:text-white" />
                      </div>
                    </Carousel>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-transparent border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
