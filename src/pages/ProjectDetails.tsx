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
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-300">
          Project Not Found
        </h1>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors mt-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {project.title}
        </h1>

        <div className="glass-card mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
          <div className="flex gap-4 mb-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
            >
              <Github size={18} />
              View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
          <p className="text-gray-300 mb-6">{project.challenges}</p>
          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
