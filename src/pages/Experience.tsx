import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
   
    {
      title: 'Team LEAD - Software Engineer [Intern]',
      company: 'Gamage Recruiters',
      period: '2025 march - 2025 September',
      description: 'Led a team of 15 intern software engineers to design and develop web and mobile applications. Planned and managed project timelines, assigned tasks, and ensured timely delivery of multiple projects. Successfully delivered 4 major projects within 6 months using MERN stack and React Native. Collaborated with team members to solve technical challenges and improve overall system performance. ',
      technologies: ['MERN Stack (MongoDB, Express, React, Node.js)', 'React Native', 'SQL', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'REST APIs', 'Git'],
    },
    {
      title: 'Freelance Software Engineer',
      company: 'Self-Employed',
      period: '2022 - Present',
      description: 'Developed responsive and high-performance websites for various clients including clothing brands, studios, and educational institutes. Worked with modern technologies such as React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB. Focused on user-friendly UI/UX design and optimized application performance.',
      technologies: ['MERN Stack (MongoDB, Express, React, Node.js)', 'React Native', 'SQL', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'REST APIs', 'Git'],
    },{
      title: 'Music Composer & Producer',
      company: 'Wolfer SD MUSIC Records',
      period: '2019 - Present',
      description: 'Composed and produced music tracks, collaborating with artists to create engaging audio experiences.',
      technologies: [ 'FL Studio', 'Pro Tools'],
    },
    {
      title: 'Audio Engineer & Assistant',
      company: 'Pearlbay Studio & Institute',
      period: '2020 - 2022',
      description: 'Engineered recording sessions and provided instruction in audio production techniques at a leading recording studio and educational institute.',
      technologies: ['Audient 8024 Console', 'Pro Tools', 'Analog Audio Devices'],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;