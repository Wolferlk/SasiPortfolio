import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-purple-500/30 p-2">
                <img
                  src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/317357712_2281658012002913_2220495077500760292_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGEqKMwjNGykPWnf9MvyKKi_bo7sr5SGCT9ujuyvlIYJIGAep1cHubtIzLkNeQH9DYOFe3jVRllOQFsmBUSWFNH&_nc_ohc=QX9GMXEoRc4Q7kNvgG01xHq&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AgnQZ_VszcFj_1TcQbZiW7v&oh=00_AYBe4dLFkSq_ebzgceO2gpKHUxMjnfD5oxYl0ONt8ZAnYQ&oe=6744C203"
                  alt="Sasindu Diluranga"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Wolferlk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sasindu-diluranga-187532303/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:sasindu.diluranga@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-2xl text-purple-400 mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sasindu Diluranga
            </h1>
            <h3 className="text-3xl text-gray-300 mb-6">Software Engineer</h3>
            
            <div className="glass-card p-6 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate software engineer with expertise in full-stack development.
                Specializing in creating modern web applications with cutting-edge technologies.
                Committed to writing clean, efficient code and building user-friendly experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all text-lg font-medium"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/path-to-your-cv.pdf';
                  link.download = 'SasinduDiluranga-CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-lg font-medium"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;