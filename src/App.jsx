import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark(d => !d);
  return (
    <div className={
      `min-h-screen flex flex-col transition-colors duration-300 ` +
      (isDark ? 'bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white' : 'bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900')
    }>
      <Navbar />
      <main className="flex-1">
        <Hero isDark={isDark} toggleDark={toggleDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Education isDark={isDark} />
        <Certifications isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2024 Muhammad Zain. All rights reserved.
      </footer>
    </div>
  );
} 