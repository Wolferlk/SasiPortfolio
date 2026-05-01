import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code2, Gamepad2, Music2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import AIResearchShowcase from '../components/Airesearchshowcase';


const Home = () => {
  const highlights = [
    { label: 'MERN Stack', icon: <Code2 className="w-5 h-5" /> },
    { label: 'AI Systems', icon: <Sparkles className="w-5 h-5" /> },
    { label: 'Audio Engineering', icon: <Music2 className="w-5 h-5" /> },
    { label: 'Game Development Goal', icon: <Gamepad2 className="w-5 h-5" /> },
  ];

  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full min-h-screen object-cover opacity-10 z-0"
      >
        <source src="https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="min-h-[calc(100vh-5rem)] flex items-center relative z-10 py-16">
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
                    src="https://i.ibb.co/NHgXgZk/Lums.jpg"
                    alt="Sasindu Diluranga"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-gray-200 backdrop-blur-md"
                  >
                    <div className="text-purple-300 mb-2">{highlight.icon}</div>
                    <p>{highlight.label}</p>
                  </div>
                ))}
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
              <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Software Engineering Undergraduate | Full-Stack Developer
              </h3>

              <div className="glass-card p-6 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I am Sasindu Diluranga, a passionate Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). I specialize in full-stack web development using the MERN stack and have hands-on experience leading development teams and delivering real-world applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  In addition to my technical background, I am also a professional music producer and audio engineer, which enhances my creativity and problem-solving abilities. I have worked on multiple projects, including AI-based systems, web platforms, and mobile applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My career goal is to become a highly skilled Software Engineer and eventually transition into Game Development, combining my passion for technology and creativity to build impactful digital experiences.
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
                <Link
                  to="/career-development-plan"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-lg font-medium"
                >
                  Career Plan
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?id=1gkeZk1eZF5aq4ITud6dPo1FlhDKvj7w0&export=download'; // https://drive.google.com/file/d/1gkeZk1eZF5aq4ITud6dPo1FlhDKvj7w0/view?usp=sharing
                  link.download = 'Sasindu_Diluranga_0778231121.pdf'; // Optional: Name the file
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-black/30 hover:bg-white/10 transition-all text-lg font-medium"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>


              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <FeaturedProjects />
      <AIResearchShowcase />
   
    </div>
    
  );
};

export default Home;
