import React from "react";
import { Github, ExternalLink, X } from "lucide-react";
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const projects = [
    {
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
    // Tambahkan project lainnya sesuai kebutuhan
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I have completed using modern technologies.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Dialog>
                  <DialogTrigger
                    asChild
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-slate-700 text-blue-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <a
                            href={project.githubUrl}
                            className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                          >
                            <Github size={16} className="mr-1" />
                            <span className="text-sm">Source</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  {selectedProject &&
                    selectedProject.title === project.title && (
                      <DialogContent className="max-w-4xl w-full bg-slate-900 border border-slate-700 p-">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {selectedProject.title}
                        </h3>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {selectedProject.images.map((img, i) => (
                              <CarouselItem
                                key={i}
                                className="w-full flex justify-center items-center"
                              >
                                <img
                                  src={img}
                                  alt={`Project image ${i + 1}`}
                                  className="max-h-[80vh] w-auto rounded-lg object-contain"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </DialogContent>
                    )}
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
