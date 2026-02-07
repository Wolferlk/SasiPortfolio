import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Eye, 
  Cpu, 
  Zap, 
  Code, 
  Database,
  Sparkles,
  ArrowRight,
  Activity,
  Award,
  TrendingUp
} from 'lucide-react';

const AIResearchShowcasePremium = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: 'Model Accuracy', value: '94.7%', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Processing Speed', value: '< 2s', icon: <Zap className="w-5 h-5" /> },
    { label: 'Error Types', value: '50+', icon: <Database className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    {
      category: 'Deep Learning',
      items: ['TensorFlow', 'PyTorch', 'Keras', 'Neural Networks'],
      color: 'from-blue-500 to-cyan-500',
      icon: <Brain className="w-8 h-8" />
    },
    {
      category: 'Computer Vision',
      items: ['CNN', 'Image Processing', 'OCR', 'Pattern Recognition'],
      color: 'from-purple-500 to-pink-500',
      icon: <Eye className="w-8 h-8" />
    },
    {
      category: 'NLP & AI',
      items: ['BERT', 'Transformers', 'Semantic Analysis', 'GenAI'],
      color: 'from-green-500 to-emerald-500',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      category: 'Development',
      items: ['Python', 'scikit-learn', 'NumPy', 'Pandas'],
      color: 'from-orange-500 to-red-500',
      icon: <Code className="w-8 h-8" />
    }
  ];

  const researchImpact = [
    {
      title: 'Automated Diagnosis',
      description: 'AI-powered system identifies errors without human intervention',
      stat: '95%',
      label: 'Automation Rate'
    },
    {
      title: 'Smart Solutions',
      description: 'Generative AI creates context-aware fixing instructions',
      stat: '10x',
      label: 'Faster Resolution'
    },
    {
      title: 'Learning System',
      description: 'Continuous improvement through deep learning models',
      stat: '50+',
      label: 'Error Categories'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgb(139, 92, 246)" opacity="0.5">
                <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="1.5" fill="rgb(236, 72, 153)" opacity="0.3" />
              <circle cx="100" cy="0" r="1.5" fill="rgb(59, 130, 246)" opacity="0.3" />
              <circle cx="0" cy="100" r="1.5" fill="rgb(16, 185, 129)" opacity="0.3" />
              <circle cx="100" cy="100" r="1.5" fill="rgb(251, 146, 60)" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              University Research Contribution
            </span>
            <Activity className="w-5 h-5 text-green-400 animate-pulse" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Machine Learning
            </motion.span>
            <span className="block text-gray-200">AI Research Specialist</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building intelligent systems that learn, adapt, and solve complex problems autonomously
          </p>
        </motion.div>

        {/* Live Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-card p-6">
            <div className="grid grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  animate={{
                    scale: activeMetric === index ? 1.1 : 1,
                    opacity: activeMetric === index ? 1 : 0.6
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${
                    activeMetric === index 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                      : 'bg-white/5'
                  }`}>
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Research Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Research Project</h3>
                  <p className="text-sm text-gray-400">AI-Powered System Diagnosis</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4 text-gray-200">
                Automated Error Diagnosis & Intelligent Fixing Module
              </h4>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Developed an advanced AI system that combines <strong className="text-blue-400">Deep Learning</strong>, 
                  <strong className="text-purple-400"> Convolutional Neural Networks</strong>, and 
                  <strong className="text-pink-400"> Natural Language Processing</strong> to revolutionize 
                  system error diagnosis and resolution.
                </p>

                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <p className="text-sm">
                    <strong className="text-blue-300">Key Innovation:</strong> Instead of static solutions, 
                    the system uses Generative AI to create dynamic, context-aware troubleshooting 
                    instructions tailored to each unique error scenario.
                  </p>
                </div>

                <p>
                  The system processes error screenshots through OCR, classifies them using CNN, 
                  analyzes context with NLP, and generates intelligent solutions—all automatically.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 h-full flex flex-col">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  onHoverStart={() => setHoveredTech(index)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="glass-card p-6 flex-1 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stack.color}`}>
                      {stack.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-100">{stack.category}</h4>
                  </div>
                  
                  <AnimatePresence>
                    {hoveredTech === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-wrap gap-2"
                      >
                        {stack.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                          >
                            {item}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Research Impact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Research Impact & Innovation
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {researchImpact.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 text-center group"
              >
                <div className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {impact.stat}
                </div>
                <div className="text-sm text-gray-400 mb-3">{impact.label}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-100">{impact.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{impact.description}</p>
                
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-100">AI Processing Pipeline</h3>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            {[
              { icon: <Eye />, label: 'Screenshot\nCapture', color: 'from-blue-500 to-cyan-500' },
              { icon: <Activity />, label: 'OCR\nExtraction', color: 'from-purple-500 to-pink-500' },
              { icon: <Network />, label: 'CNN\nClassification', color: 'from-green-500 to-emerald-500' },
              { icon: <Brain />, label: 'NLP\nAnalysis', color: 'from-orange-500 to-red-500' },
              { icon: <Sparkles />, label: 'AI Solution\nGeneration', color: 'from-pink-500 to-purple-500' }
            ].map((step, index) => (
              <React.Fragment key={step.label}>
                <motion.div
                  className="flex flex-col items-center gap-3"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    {React.cloneElement(step.icon, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <span className="text-xs text-center text-gray-400 whitespace-pre-line font-medium">
                    {step.label}
                  </span>
                </motion.div>
                
                {index < 4 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-purple-500 opacity-50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block glass-card p-8 max-w-3xl">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Combining AI Technologies for Real-World Impact
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This research demonstrates expertise in integrating cutting-edge AI, ML, and DL technologies 
              to build intelligent, production-ready systems that solve complex real-world problems.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-2xl shadow-purple-500/50"
            >
              <span>View Research Documentation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIResearchShowcasePremium;