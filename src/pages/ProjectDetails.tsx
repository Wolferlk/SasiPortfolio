import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectData from '../pages/ProjectData'; // Import your project data

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL parameters

  // Find the project matching the ID
  const project = ProjectData.find((proj) => proj.id === parseInt(id || '0', 10));

  // If no project is found, display a message
  if (!project) {
    return (
      <div className="py-10 text-center sm:py-12">
        <h1 className="text-3xl font-bold text-gray-300 sm:text-4xl">
          Project Not Found
        </h1>
        <Link
          to="/projects"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white/5 px-4 text-gray-300 transition-colors hover:text-purple-500"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto w-full max-w-4xl"
      >
        <Link
          to="/projects"
          className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white/5 px-4 text-sm text-gray-300 transition-colors hover:bg-purple-500/20 hover:text-purple-200 sm:mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <h1 className="mb-4 break-words text-3xl font-bold leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent sm:text-4xl">
          {project.title}
        </h1>

        <div className="glass-card mb-8 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="mb-5 h-52 w-full rounded-lg object-cover sm:mb-6 sm:h-72 md:h-[400px]"
          />
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-purple-500/20 px-4 text-sm font-semibold text-purple-200 transition-colors hover:bg-purple-500/30"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-purple-500/20 px-4 text-sm font-semibold text-purple-200 transition-colors hover:bg-purple-500/30"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
          <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
            {project.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-purple-500/20 px-2.5 py-1 text-xs text-purple-300 sm:px-3 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Key Features</h2>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300 sm:text-base">
            {project.features.map((feature, index) => (
              <li key={index}>
                {feature}
              </li>
            ))}
          </ul>
          {project.challenges && (
            <>
              <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Challenges & Solutions</h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                {project.challenges}
              </p>
            </>
          )}
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Screenshots</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full rounded-lg object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
