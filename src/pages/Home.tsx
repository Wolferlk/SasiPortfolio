import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code2, Gamepad2, Music2, Sparkles, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import AIResearchShowcase from '../components/Airesearchshowcase';

/* ─────────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────────── */
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);
  return [count, () => setStarted(true)];
};

/* ─────────────────────────────────────────────
   Particle canvas background
───────────────────────────────────────────── */
const ParticleField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
        ctx.fill();
      });
      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

/* ─────────────────────────────────────────────
   Typewriter
───────────────────────────────────────────── */
const Typewriter = ({ words }) => {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (sub < word.length) setSub(s => s + 1);
        else setTimeout(() => setDeleting(true), 1400);
      } else {
        if (sub > 0) setSub(s => s - 1);
        else { setDeleting(false); setIdx(i => (i + 1) % words.length); }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [sub, deleting, idx, words]);
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
      {words[idx].substring(0, sub)}<span className="animate-pulse">|</span>
    </span>
  );
};

/* ─────────────────────────────────────────────
   Stat card with animated counter
───────────────────────────────────────────── */
const StatCard = ({ value, label, suffix = '+' }) => {
  const [count, start] = useCounter(value);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white font-mono">{count}{suffix}</div>
      <div className="text-xs text-violet-300 uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Home component
───────────────────────────────────────────── */
const Home = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  const highlights = [
    { label: 'MERN Stack', icon: <Code2 className="w-4 h-4" />, color: 'from-violet-500/20 to-violet-500/5', border: 'border-violet-500/30' },
    { label: 'AI Systems', icon: <Sparkles className="w-4 h-4" />, color: 'from-fuchsia-500/20 to-fuchsia-500/5', border: 'border-fuchsia-500/30' },
    { label: 'Audio Engineering', icon: <Music2 className="w-4 h-4" />, color: 'from-pink-500/20 to-pink-500/5', border: 'border-pink-500/30' },
    { label: 'Game Dev', icon: <Gamepad2 className="w-4 h-4" />, color: 'from-rose-500/20 to-rose-500/5', border: 'border-rose-500/30' },
  ];

  const roles = ['Full-Stack Developer', 'AI Enthusiast', 'Music Producer', 'Game Dev Aspirant'];

  const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'TensorFlow', 'Unity', 'Figma'];

  return (
    <div className="relative bg-[#080810] text-white overflow-x-hidden">

      {/* ── Global font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3 { font-family: 'Syne', sans-serif; }

        .hero-glow {
          background: radial-gradient(ellipse 70% 55% at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 70%);
        }
        .glass-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .tag-chip {
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.25);
          transition: all 0.25s;
        }
        .tag-chip:hover {
          background: rgba(139,92,246,0.22);
          border-color: rgba(139,92,246,0.5);
          transform: translateY(-2px);
        }
        .social-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s;
        }
        .social-btn:hover {
          background: rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.5);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(139,92,246,0.25);
        }
        .cta-primary {
          background: linear-gradient(135deg, #7c3aed, #a855f7, #ec4899);
          background-size: 200% 200%;
          animation: gradShift 4s ease infinite;
          transition: all 0.3s;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 35px rgba(139,92,246,0.4);
        }
        .cta-secondary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.3s;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          33%      { transform: translateY(-10px) rotate(1deg); }
          66%      { transform: translateY(-5px) rotate(-1deg); }
        }
        .avatar-float { animation: float 6s ease-in-out infinite; }

        .scroll-indicator {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); opacity: 0.6; }
          50%      { transform: translateY(8px); opacity: 1; }
        }
        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent);
        }
      `}</style>

      {/* ── Particle background ── */}
      <ParticleField />

      {/* ── Hero glow ── */}
      <div className="absolute inset-0 hero-glow z-0 pointer-events-none" />

      {/* ─────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────── */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 min-h-screen flex flex-col justify-center pt-20"
      >
        {/* Top label */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-violet-300 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* ── Left: Text ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-3 text-center lg:text-left"
            >
              <p className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-5 tracking-tight">
                Sasindu<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-fuchsia-400 to-pink-400">
                  Diluranga
                </span>
              </h1>

              <h2 className="text-lg md:text-xl text-gray-400 font-light mb-8 min-h-[1.8em]">
                <Typewriter words={roles} />
              </h2>

              {/* Bio */}
              <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                Software Engineering undergraduate at <span className="text-violet-300 font-medium">SLIIT</span>, 
                specialising in MERN-stack applications and AI-driven systems. Also a 
                <span className="text-fuchsia-300 font-medium"> professional music producer</span> — 
                proof that engineering and art aren't opposites. My endgame: game development.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                <Link
                  to="/projects"
                  className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/career-development-plan"
                  className="cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-200"
                >
                  Career Plan <ExternalLink className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/uc?id=1gkeZk1eZF5aq4ITud6dPo1FlhDKvj7w0&export=download';
                    link.download = 'Sasindu_Diluranga_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-200"
                >
                  <Download className="w-4 h-4" /> Download CV
                </button>
              </div>

              {/* Socials */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {[
                  { href: 'https://github.com/Wolferlk', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/sasindu-diluranga-187532303/', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { href: 'mailto:sasindu.diluranga@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email' },
                ].map(s => (
                  <motion.a
                    key={s.label}
                    whileTap={{ scale: 0.93 }}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social-btn p-3 rounded-xl"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Photo + cards ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-2 flex flex-col items-center gap-6"
            >
              {/* Avatar */}
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 blur-2xl opacity-25 scale-110" />
                {/* Rotating border */}
                <div className="relative w-56 h-56 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-pink-500 animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-[3px] rounded-full bg-[#080810]" />
                  <div className="absolute inset-[6px] rounded-full overflow-hidden avatar-float">
                    <img
                      src="https://i.ibb.co/NHgXgZk/Lums.jpg"
                      alt="Sasindu Diluranga"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Skill chips */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className={`rounded-xl border ${h.border} bg-gradient-to-br ${h.color} px-4 py-3 flex items-center gap-2 cursor-default tag-chip`}
                  >
                    <span className="text-violet-300">{h.icon}</span>
                    <span className="text-xs text-gray-200 font-medium">{h.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats strip */}
              <div className="w-full max-w-xs glass-card rounded-2xl px-6 py-4 grid grid-cols-3 divide-x divide-white/10">
                <StatCard value={15} label="Projects" />
                <StatCard value={2} label="Years Exp" />
                <StatCard value={5} label="AI Models" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator z-10">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 text-violet-400" />
        </div>
      </motion.section>

      {/* ─────────────────────────────────────────
          TECH STACK MARQUEE
      ───────────────────────────────────────── */}
      <section className="relative z-10 py-16">
        <div className="divider-line mb-12" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[11px] text-gray-500 uppercase tracking-[0.35em] mb-8">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="tag-chip px-4 py-2 rounded-full text-sm text-violet-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="divider-line mt-12" />
      </section>

      {/* ─────────────────────────────────────────
          ABOUT SNAPSHOT
      ───────────────────────────────────────── */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: 'Full-Stack Engineering',
                body: 'Building scalable MERN applications with clean architecture, RESTful APIs, and intuitive user experiences that solve real-world problems.',
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'AI & Research',
                body: 'Designing intelligent systems, exploring machine learning, and contributing to AI-powered tools that push the boundary of what software can do.',
              },
              {
                icon: <Music2 className="w-6 h-6" />,
                title: 'Creative Production',
                body: 'Professional music producer and audio engineer — a creative lens that directly sharpens my approach to product design and problem-solving.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FEATURED PROJECTS + AI RESEARCH
      ───────────────────────────────────────── */}
      <div className="relative z-10">
        <FeaturedProjects />
        <AIResearchShowcase />
      </div>
    </div>
  );
};

export default Home;