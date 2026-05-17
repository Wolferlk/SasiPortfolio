import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/artistic-career', label: 'Artistic' },
    { path: '/reflective-journal', label: 'Journal' },
    { path: '/career-development-plan', label: 'Career Plan' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?id=1ON4JNhp1G5xBiCFZ53XKJpcsIaHE6-j1&export=download';
    link.download = 'Sasindu_Diluranga_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
        }
        .nav-logo-text {
          font-family: 'Syne', sans-serif;
        }
        .nav-link-indicator {
          transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-glass {
          background: rgba(8, 8, 16, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(139, 92, 246, 0.12);
          transition: background 0.4s, box-shadow 0.4s;
        }
        .nav-glass.scrolled {
          background: rgba(8, 8, 16, 0.92);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(139,92,246,0.15);
        }
        .cv-btn {
          background: linear-gradient(135deg, #7c3aed, #a855f7, #ec4899);
          background-size: 200% 200%;
          animation: gradShift 4s ease infinite;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cv-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(139, 92, 246, 0.45);
        }
        .cv-btn:active { transform: translateY(0); }
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .mobile-drawer {
          background: rgba(8, 8, 16, 0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(139,92,246,0.15);
        }
        .mobile-link {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.2s, padding-left 0.2s;
        }
        .mobile-link:hover {
          background: rgba(139,92,246,0.07);
          padding-left: 1.5rem;
        }
        .mobile-link.active-mobile {
          background: rgba(139,92,246,0.12);
          border-left: 2px solid #a855f7;
        }
      `}</style>

      <nav className={`nav-root fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="nav-logo-text text-base font-bold text-white tracking-tight">
                Sasindu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">.</span>
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden xl:flex items-center gap-0.5">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setActiveHover(link.path)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="relative px-3 py-2 rounded-lg text-[13px] font-medium transition-colors group"
                  style={{
                    color: isActive(link.path) ? '#c4b5fd' : activeHover === link.path ? '#e9d5ff' : '#9ca3af',
                  }}
                >
                  {/* Hover bg */}
                  {activeHover === link.path && !isActive(link.path) && (
                    <motion.div
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 rounded-lg bg-white/5"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Active pill */}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* ── CV button + hamburger ── */}
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleDownloadCV}
                className="cv-btn hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-white"
              >
                <Download className="w-3.5 h-3.5" />
                CV
              </motion.button>

              <button
                className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="mobile-drawer xl:hidden overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-5 pt-2 pb-5">
                {/* Section label */}
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 px-4 pt-2">
                  Navigation
                </p>

                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-link block px-4 py-3 text-sm font-medium rounded-lg mb-0.5 ${
                        isActive(link.path)
                          ? 'active-mobile text-violet-300'
                          : 'text-gray-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.04 }}
                  onClick={handleDownloadCV}
                  className="cv-btn w-full flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;