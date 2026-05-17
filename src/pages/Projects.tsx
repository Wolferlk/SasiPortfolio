import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import ProjectData from '../pages/ProjectData'; // Import your project data

const Projects = () => {
  return (
    <div className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto w-full max-w-6xl"
      >
        <h1 className="mb-6 text-3xl font-bold leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent sm:mb-8 sm:text-4xl">
          Projects
        </h1>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {ProjectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-purple-500/20 px-2.5 py-1 text-xs text-purple-300 sm:px-3 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white/5 px-3 text-sm text-gray-200 transition-colors hover:bg-purple-500/20 hover:text-purple-200 sm:min-h-0 sm:justify-start sm:bg-transparent sm:px-0"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white/5 px-3 text-sm text-gray-200 transition-colors hover:bg-purple-500/20 hover:text-purple-200 sm:min-h-0 sm:justify-start sm:bg-transparent sm:px-0"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-purple-500/20 px-4 text-sm font-semibold text-purple-200 transition-colors hover:bg-purple-500/30 sm:ml-auto"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
