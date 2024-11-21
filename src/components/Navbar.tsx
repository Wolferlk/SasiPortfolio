import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses & Certificates' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/artistic-career', label: 'Artistic Career' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleDownloadCV = () => {
    // Replace with your actual CV file URL
   // const cvUrl = 'https://drive.google.com/file/d/1mGEdM9LA7D1eAYHT6LMPQiFdh_rUYNAc/view?usp=sharing';
    const cvUrl = 'src/media/SasinduDiluragaCv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'SasinduDiluranga-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Sasindu Diluranga
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-purple-500 transition-colors ${
                  location.pathname === link.path ? 'text-purple-500' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 hover:text-purple-500 transition-colors ${
                  location.pathname === link.path ? 'text-purple-500' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all w-full justify-center"
            >
              <Download size={18} />
              Download CV
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;