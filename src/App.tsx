import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import ArtisticCareer from './pages/ArtisticCareer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-loop-animation-8891-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/artistic-career" element={<ArtisticCareer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;