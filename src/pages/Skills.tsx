import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Terminal, Cloud, Music } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'SASS'],
    },
    {
      title: 'Backend Development',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Python', 'Java', 'Django', 'Flask', 'Spring Boot'],
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'SQLite', 'Firebase'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'Azure', 'CI/CD Pipelines', 'Terraform'],
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva'],
    },
    {
      title: 'Tools & Utilities',
      icon: <Code className="w-6 h-6" />,
      skills: ['Git', 'VS Code', 'JIRA', 'Postman', 'Webpack', 'Babel'],
    },
    {
      title: 'Mobile Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['React Native', 'Flutter', 'Kotlin', 'Swift'],
    },
    {
      title: 'Data Science & AI',
      icon: <Database className="w-6 h-6" />,
      skills: ['Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Matplotlib'],
    },
    {
      title: 'Audio & Visual Experience',
      icon: <Music className="w-6 h-6" />,
      skills: ['Cubase','FL Studio','Adobe Audition', 'Premiere Pro', 'After Effects', 'Final Cut Pro', 'Logic Pro', 'Pro Tools'],
    },
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-500">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
