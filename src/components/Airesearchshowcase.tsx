import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ChevronRight,
  FileText,
  Microscope,
  Layers,
  GitBranch,
  Activity
} from 'lucide-react';

const AIResearchShowcase = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'technologies' | 'workflow'>('overview');

  const technologies = [
    {
      icon: <Network className="w-6 h-6" />,
      name: 'Convolutional Neural Networks',
      shortName: 'CNN',
      description: 'Error classification through visual pattern recognition',
      color: 'from-blue-500 to-cyan-500',
      stats: 'Deep Learning'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      name: 'Natural Language Processing',
      shortName: 'NLP',
      description: 'Semantic analysis and text understanding',
      color: 'from-purple-500 to-pink-500',
      stats: 'AI Processing'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      name: 'Optical Character Recognition',
      shortName: 'OCR',
      description: 'Screenshot to machine-readable text conversion',
      color: 'from-green-500 to-emerald-500',
      stats: 'Text Extraction'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: 'Generative AI',
      shortName: 'GenAI',
      description: 'Dynamic troubleshooting guidance generation',
      color: 'from-orange-500 to-red-500',
      stats: 'AI Generation'
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: 'Knowledge-Based Systems',
      shortName: 'KBS',
      description: 'Solution mapping and technical knowledge retrieval',
      color: 'from-indigo-500 to-purple-500',
      stats: 'Data Systems'
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: 'Python & TensorFlow',
      shortName: 'Python',
      description: 'AI model development and system integration',
      color: 'from-yellow-500 to-orange-500',
      stats: 'Development'
    }
  ];

  const researchWorkflow = [
    {
      step: '01',
      title: 'Error Capture',
      description: 'System screenshots captured with error messages',
      icon: <Eye className="w-5 h-5" />
    },
    {
      step: '02',
      title: 'OCR Processing',
      description: 'Text extraction from screenshots using OCR',
      icon: <FileText className="w-5 h-5" />
    },
    {
      step: '03',
      title: 'CNN Classification',
      description: 'Deep learning model classifies error patterns',
      icon: <Network className="w-5 h-5" />
    },
    {
      step: '04',
      title: 'NLP Analysis',
      description: 'Semantic understanding of error context',
      icon: <Brain className="w-5 h-5" />
    },
    {
      step: '05',
      title: 'AI Solution Generation',
      description: 'Generative AI creates step-by-step fixes',
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      {/* Floating Neural Network Visualization - Top Right */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Neural network nodes */}
          <circle cx="50" cy="50" r="8" fill="url(#grad1)" className="animate-pulse" />
          <circle cx="100" cy="30" r="8" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="150" cy="50" r="8" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <circle cx="50" cy="100" r="8" fill="url(#grad2)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          <circle cx="100" cy="100" r="10" fill="url(#grad2)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          <circle cx="150" cy="100" r="8" fill="url(#grad2)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="50" cy="150" r="8" fill="url(#grad3)" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="100" cy="170" r="8" fill="url(#grad3)" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
          <circle cx="150" cy="150" r="8" fill="url(#grad3)" className="animate-pulse" style={{ animationDelay: '1.6s' }} />
          
          {/* Connections */}
          <line x1="50" y1="50" x2="100" y2="100" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
          <line x1="100" y1="30" x2="100" y2="100" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
          <line x1="150" y1="50" x2="100" y2="100" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
          <line x1="50" y1="100" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.4" />
          <line x1="150" y1="100" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.4" />
          <line x1="100" y1="100" x2="50" y2="150" stroke="url(#grad3)" strokeWidth="2" opacity="0.4" />
          <line x1="100" y1="100" x2="100" y2="170" stroke="url(#grad3)" strokeWidth="2" opacity="0.4" />
          <line x1="100" y1="100" x2="150" y2="150" stroke="url(#grad3)" strokeWidth="2" opacity="0.4" />
          
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* CNN Architecture Visualization - Left Side */}
      <motion.div
        className="absolute top-40 left-10 w-48 h-48 opacity-15"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* CNN Layers */}
          <rect x="20" y="50" width="30" height="100" fill="url(#cnnGrad1)" opacity="0.6" rx="4" />
          <rect x="60" y="40" width="30" height="120" fill="url(#cnnGrad2)" opacity="0.6" rx="4" />
          <rect x="100" y="35" width="30" height="130" fill="url(#cnnGrad3)" opacity="0.6" rx="4" />
          <rect x="140" y="60" width="30" height="80" fill="url(#cnnGrad4)" opacity="0.6" rx="4" />
          
          {/* Connection lines */}
          <path d="M 50 100 Q 75 100 60 90" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M 90 100 Q 115 100 100 92" stroke="#a855f7" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M 130 100 Q 155 100 140 100" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.3" />
          
          <defs>
            <linearGradient id="cnnGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="cnnGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
            <linearGradient id="cnnGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="cnnGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Data Flow Diagram - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-56 opacity-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="url(#flowGrad1)" strokeWidth="3" fill="none" strokeDasharray="5,5" />
          <circle cx="100" cy="100" r="60" stroke="url(#flowGrad2)" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="40" stroke="url(#flowGrad3)" strokeWidth="2" fill="none" strokeDasharray="2,2" />
          <circle cx="100" cy="100" r="15" fill="url(#flowGrad4)" opacity="0.8" />
          
          {/* Data points */}
          <circle cx="100" cy="20" r="6" fill="#3b82f6" opacity="0.8" />
          <circle cx="180" cy="100" r="6" fill="#a855f7" opacity="0.8" />
          <circle cx="100" cy="180" r="6" fill="#ec4899" opacity="0.8" />
          <circle cx="20" cy="100" r="6" fill="#10b981" opacity="0.8" />
          
          <defs>
            <linearGradient id="flowGrad1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="flowGrad2">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="flowGrad3">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="flowGrad4">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
              <Microscope className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">University Research Project</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
              <br />
              <span className="text-gray-200">Research Specialist</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering automated system error diagnosis using Deep Learning, CNN, and NLP
            </p>

            {/* Abstract visual element behind title */}
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-5 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 200 200">
                <polygon points="100,10 190,90 160,190 40,190 10,90" fill="url(#polyGrad)" />
                <defs>
                  <linearGradient id="polyGrad">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Main Research Card */}
          <motion.div variants={itemVariants} className="mb-12 relative">
            {/* Background Research Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
              <svg viewBox="0 0 800 600" className="w-full h-full">
                {/* Abstract circuit board pattern */}
                <path d="M 100 100 L 200 100 L 200 200 L 300 200" stroke="#3b82f6" strokeWidth="4" fill="none" />
                <path d="M 300 100 L 400 100 L 400 250 L 500 250" stroke="#a855f7" strokeWidth="4" fill="none" />
                <path d="M 500 150 L 600 150 L 600 300 L 700 300" stroke="#ec4899" strokeWidth="4" fill="none" />
                <circle cx="200" cy="100" r="10" fill="#3b82f6" />
                <circle cx="300" cy="200" r="10" fill="#a855f7" />
                <circle cx="400" cy="100" r="10" fill="#ec4899" />
                <circle cx="500" cy="250" r="10" fill="#10b981" />
                <rect x="180" y="180" width="40" height="40" fill="#3b82f6" opacity="0.3" />
                <rect x="380" y="230" width="40" height="40" fill="#a855f7" opacity="0.3" />
                <rect x="580" y="130" width="40" height="40" fill="#ec4899" opacity="0.3" />
              </svg>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <Brain className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-100">
                      AI-Powered Automated System Error Diagnosis & Fixing
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      An intelligent system that combines <span className="text-blue-400 font-semibold">Deep Learning</span>, 
                      <span className="text-purple-400 font-semibold"> Convolutional Neural Networks (CNN)</span>, and 
                      <span className="text-pink-400 font-semibold"> Natural Language Processing (NLP)</span> to automatically 
                      identify and resolve system-level issues with human-like understanding.
                    </p>
                  </div>
                </div>

                {/* Visual System Architecture Diagram */}
                <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
                        <Eye className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Screenshot</span>
                    </motion.div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                    
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                        <FileText className="w-6 h-6 text-green-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">OCR</span>
                    </motion.div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                    
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                        <Layers className="w-6 h-6 text-purple-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">CNN</span>
                    </motion.div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                    
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-3 rounded-lg bg-pink-500/20 border border-pink-500/30">
                        <Brain className="w-6 h-6 text-pink-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">NLP</span>
                    </motion.div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                    
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
                        <Sparkles className="w-6 h-6 text-orange-400" />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">GenAI</span>
                    </motion.div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  {[
                    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
                    { id: 'technologies', label: 'Technologies', icon: <Cpu className="w-4 h-4" /> },
                    { id: 'workflow', label: 'Workflow', icon: <Zap className="w-4 h-4" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[300px]">
                  {activeTab === 'overview' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 relative overflow-hidden group">
                          {/* Mini CNN visualization */}
                          <div className="absolute top-2 right-2 w-16 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
                            <svg viewBox="0 0 60 60">
                              <rect x="5" y="15" width="8" height="30" fill="#3b82f6" opacity="0.6" rx="1" />
                              <rect x="18" y="12" width="8" height="36" fill="#8b5cf6" opacity="0.6" rx="1" />
                              <rect x="31" y="10" width="8" height="40" fill="#a855f7" opacity="0.6" rx="1" />
                              <rect x="44" y="18" width="8" height="24" fill="#ec4899" opacity="0.6" rx="1" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold mb-3 text-blue-300 flex items-center gap-2">
                            <Network className="w-5 h-5" />
                            Classification System
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            CNN-based classifier analyzes visual patterns and textual structures from screenshots, 
                            learning from labeled datasets to accurately classify error types with high precision.
                          </p>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 relative overflow-hidden group">
                          {/* Mini NLP flow */}
                          <div className="absolute top-2 right-2 w-16 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
                            <svg viewBox="0 0 60 60">
                              <circle cx="15" cy="30" r="6" fill="#a855f7" opacity="0.6" />
                              <circle cx="30" cy="30" r="6" fill="#ec4899" opacity="0.6" />
                              <circle cx="45" cy="30" r="6" fill="#f472b6" opacity="0.6" />
                              <path d="M 21 30 L 24 30" stroke="#a855f7" strokeWidth="2" />
                              <path d="M 36 30 L 39 30" stroke="#ec4899" strokeWidth="2" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold mb-3 text-purple-300 flex items-center gap-2">
                            <Brain className="w-5 h-5" />
                            NLP Processing
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Advanced NLP techniques including tokenization, normalization, and semantic similarity 
                            analysis to understand error context and extract meaningful insights.
                          </p>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 relative overflow-hidden group">
                          {/* Mini OCR icon */}
                          <div className="absolute top-2 right-2 w-16 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
                            <svg viewBox="0 0 60 60">
                              <rect x="10" y="15" width="40" height="30" fill="none" stroke="#10b981" strokeWidth="2" rx="2" />
                              <line x1="18" y1="25" x2="32" y2="25" stroke="#10b981" strokeWidth="2" />
                              <line x1="18" y1="32" x2="42" y2="32" stroke="#10b981" strokeWidth="2" />
                              <line x1="18" y1="39" x2="38" y2="39" stroke="#10b981" strokeWidth="2" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold mb-3 text-green-300 flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            OCR Integration
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Converts screenshots into machine-readable text, extracting error codes, system messages, 
                            and contextual information for comprehensive analysis.
                          </p>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 relative overflow-hidden group">
                          {/* Mini generative AI sparkle */}
                          <div className="absolute top-2 right-2 w-16 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
                            <svg viewBox="0 0 60 60">
                              <path d="M 30 10 L 32 25 L 40 20 L 32 30 L 45 35 L 30 35 L 30 50 L 28 35 L 15 40 L 25 30 L 15 25 L 30 25 Z" fill="#ec4899" opacity="0.6" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold mb-3 text-pink-300 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Generative AI Solutions
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Dynamically generates clear, step-by-step fixing instructions using advanced AI models 
                            instead of relying on static, pre-defined solutions.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'technologies' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {technologies.map((tech, index) => (
                          <motion.div
                            key={tech.shortName}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                            
                            <div className="relative z-10">
                              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} bg-opacity-20 mb-4`}>
                                {tech.icon}
                              </div>
                              
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-bold text-gray-100">{tech.shortName}</h4>
                                <span className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-400">
                                  {tech.stats}
                                </span>
                              </div>
                              
                              <p className="text-sm text-gray-400 mb-3">{tech.name}</p>
                              <p className="text-xs text-gray-500 leading-relaxed">{tech.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'workflow' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        {researchWorkflow.map((item, index) => (
                          <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">
                                {item.step}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                                  {item.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-100">{item.title}</h4>
                              </div>
                              <p className="text-gray-400">{item.description}</p>
                            </div>
                            
                            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Highlights with Background Images */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group">
                {/* Background illustration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 100 100">
                    <rect x="20" y="50" width="15" height="40" fill="#3b82f6" rx="2" />
                    <rect x="40" y="35" width="15" height="55" fill="#8b5cf6" rx="2" />
                    <rect x="60" y="20" width="15" height="70" fill="#a855f7" rx="2" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">Deep Learning</h3>
                </div>
                <p className="text-gray-300 text-sm relative z-10">
                  Advanced pattern recognition and model training for intelligent error classification
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group">
                {/* Background neural network */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 100 100">
                    <circle cx="30" cy="30" r="5" fill="#a855f7" />
                    <circle cx="70" cy="30" r="5" fill="#ec4899" />
                    <circle cx="50" cy="70" r="5" fill="#f472b6" />
                    <line x1="30" y1="30" x2="50" y2="70" stroke="#a855f7" strokeWidth="2" />
                    <line x1="70" y1="30" x2="50" y2="70" stroke="#ec4899" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-3 rounded-lg bg-purple-500/20">
                    <Network className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">CNN Architecture</h3>
                </div>
                <p className="text-gray-300 text-sm relative z-10">
                  Convolutional networks trained on labeled datasets for precise error categorization
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 via-orange-500/10 to-transparent border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 relative overflow-hidden group">
                {/* Background automation gears */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 100 100">
                    <circle cx="40" cy="50" r="20" fill="none" stroke="#ec4899" strokeWidth="3" />
                    <circle cx="65" cy="50" r="15" fill="none" stroke="#f472b6" strokeWidth="3" />
                    <path d="M 30 50 L 25 45 L 30 40 L 35 45 Z" fill="#ec4899" />
                    <path d="M 55 50 L 52 47 L 55 44 L 58 47 Z" fill="#f472b6" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-3 rounded-lg bg-pink-500/20">
                    <Sparkles className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">AI Automation</h3>
                </div>
                <p className="text-gray-300 text-sm relative z-10">
                  Real-world application of AI for automated problem-solving and troubleshooting
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <pattern id="ctaPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="#a855f7" />
                    </pattern>
                  </defs>
                  <rect width="400" height="200" fill="url(#ctaPattern)" />
                </svg>
              </div>
              
              <p className="text-gray-300 max-w-2xl relative z-10">
                This research demonstrates the ability to combine cutting-edge AI technologies 
                to build intelligent, automated systems for real-world applications
              </p>
              <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative z-10">
                <span>Explore More Research</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIResearchShowcase;