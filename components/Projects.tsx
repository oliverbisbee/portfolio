'use client';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  github: string;
  screenshot?: string;
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Song Similarity Checker',
      description: 'Network analysis of song similarities using Spotify API',
      fullDescription: 'A data visualization tool that analyzes song similarities using Spotify\'s API and creates interactive network graphs showing relationships between tracks. Built with Python, NetworkX for graph analysis, and Plotly for interactive visualizations. Features include: search any song, visualize similarity networks, and explore interactive graphs.',
      tech: ['Python', 'NetworkX', 'Plotly', 'Spotify API'],
      github: 'https://github.com/oliverbisbee/MelodyMap',
      screenshot: '/images/melodymap-screenshot.png'
    },
    {
      title: 'Study Spots Toronto',
      description: 'Interactive map app helping University of Toronto students find the ideal study space on the St. George campus.',
      fullDescription: 'StudySpots TO is a full stack web application designed to help UofT students quickly discover and compare study locations across campus. The app features an interactive Google Map centered on the St. George campus with 20+ curated locations including libraries, cafés, academic buildings, and outdoor spaces. Users can filter by location type or T-Card access requirements and click on color coded markers to open a detailed slide out panel with operating hours, floor count, noise level, seating arrangements, and WiFi quality. The project was built with Next.js 16 using the App Router and TypeScript for type safety, Tailwind CSS for a clean responsive UI, and the Google Maps JavaScript API for dynamic map rendering. Key challenges included managing client and server components correctly in Next.js, structuring reusable typed location data, handling environment variables securely for the Maps API, and building a smooth state driven side panel experience. The result is a polished, fast, and intuitive tool tailored specifically to UofT students.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Maps JavaScript API', '@googlemaps/react-wrapper', 'Vercel'],
      github: 'https://github.com/oliverbisbee/studyspots',
      screenshot: '/images/Project2StudySpotsScreenshot.png'
    },
    {
      title: 'Project 3',
      description: 'Description of your third project',
      fullDescription: 'Detailed description of project 3 goes here. This would include the problem you solved, technologies used, challenges faced, and outcomes achieved.',
      tech: ['Tech', 'Stack', 'Here'],
      github: '#',
      screenshot: '/images/project3.png'
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-white" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-primary">My Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer border-2 border-transparent hover:border-accent"
                >
                  {/* Card View */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {project.screenshot ? (
                      <img 
                        src={project.screenshot} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view details
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                    <p className="text-text text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal View */}
              <div className="relative h-64 bg-gray-200">
                {selectedProject.screenshot ? (
                  <img 
                    src={selectedProject.screenshot} 
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <p className="text-text mb-6 leading-relaxed">{selectedProject.fullDescription}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-secondary text-white py-3 rounded text-center transition-colors font-medium"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
