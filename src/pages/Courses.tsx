import React from 'react';
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    {
      title: 'Full Stack Development',
      provider: 'Coursera',
      date: '2023',
      certificate: 'https://coursera.org/certificate/xxx',
    },
    {
      title: 'Advanced React & Redux',
      provider: 'Udemy',
      date: '2023',
      certificate: 'https://udemy.com/certificate/xxx',
    },
    // Add your actual courses here
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Courses & Certificates
        </h1>

        <div className="grid gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300 mb-2">{course.provider}</p>
              <p className="text-sm text-gray-400">{course.date}</p>
              <a
                href={course.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-purple-500 hover:text-purple-400 transition-colors"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Courses;