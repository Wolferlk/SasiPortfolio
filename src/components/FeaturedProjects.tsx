import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectData from '../pages/ProjectData';

const getRandomProjects = () => {
  const shuffled = [...ProjectData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState<typeof ProjectData>(() => getRandomProjects());

  useEffect(() => {
    // Change projects every 30 seconds
    const interval = setInterval(() => {
      setFeaturedProjects(getRandomProjects());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-10 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Featured Work</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-lg">
            Explore my recent work showcasing innovative solutions and creative designs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="mb-10 grid gap-5 md:grid-cols-2 md:gap-8 sm:mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden sm:h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Project Number Badge */}
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/20 backdrop-blur-sm sm:right-4 sm:top-4 sm:h-12 sm:w-12">
                    <span className="text-sm font-bold text-purple-300 sm:text-base">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="mb-3 text-xl font-bold leading-snug bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-2xl">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className={`grid gap-3 ${project.live ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2.5 text-purple-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/20"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2.5 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Live</span>
                      </a>
                    )}
                  </div>

                  {/* View Details Link */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="group/link mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white/5 px-4 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-500/20 hover:text-purple-200 sm:justify-start sm:bg-transparent sm:px-0"
                  >
                    View Full Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Decorative gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div variants={itemVariants} className="text-center">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center gap-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 sm:rounded-full sm:px-8 sm:py-4 sm:text-base"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          {/* Project count indicator */}
          <p className="mt-4 text-xs text-gray-400 sm:text-sm">
            Showing 2 of {ProjectData.length} projects • Auto-rotating every 30s
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
