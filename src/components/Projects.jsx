import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Theft-Detection',
    description: 'Real-time Video Theft Detection using YOLOv8 and ByteTrack. Detects and tracks people in surveillance videos, identifies suspicious activities, and annotates videos with bounding boxes and alerts.',
    tech: ['YOLOv8', 'ByteTrack', 'Deep Learning', 'Python'],
    link: 'https://github.com/zainkhalid10/Theft-Detection',
  },
  {
    title: 'Body-parts-detector',
    description: 'Real-time Body Part Detector Using MediaPipe. Detects when a user points to a specific body part using their index finger. Built with OpenCV and MediaPipe Pose and Hands modules.',
    tech: ['OpenCV', 'MediaPipe', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'Finger Gesture Calculator',
    description: 'Finger-based gesture calculator using MediaPipe and OpenCV. Perform arithmetic operations using hand gestures in front of a webcam.',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'FingerTracker',
    description: 'Gesture-Based Drawing Using MediaPipe and OpenCV. Draw on a virtual canvas using your left index finger, toggle drawing mode with a right-hand fist gesture.',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'VanishingShirt',
    description: 'Real-Time Shirt Vanishing Effect Using MediaPipe and OpenCV. Parts of a person become invisible and are replaced by a background, toggled by a palm gesture.',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  // Add more from CV if needed
];

const instagramAccounts = [
  {
    username: '@onlyzainss',
    link: 'https://instagram.com/onlyzainss',
  },
  {
    username: '@c.art.___',
    link: 'https://instagram.com/c.art.___',
  },
];

export default function Projects({ isDark }) {
  const [activeTab, setActiveTab] = useState('Projects');
  return (
    <section id="projects" className={`py-16 ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Projects</h2>
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'Projects' ? (isDark ? 'border-blue-400 text-blue-200' : 'border-purple-600 text-purple-700') : (isDark ? 'border-transparent text-blue-200/60' : 'border-transparent text-blue-700/60')}`}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'Instagram' ? (isDark ? 'border-blue-400 text-blue-200' : 'border-purple-600 text-purple-700') : (isDark ? 'border-transparent text-blue-200/60' : 'border-transparent text-blue-700/60')}`}
            onClick={() => setActiveTab('Instagram')}
          >
            Instagram Portfolio
          </button>
        </div>
        {/* Tab content */}
        {activeTab === 'Projects' && (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.03, boxShadow: isDark ? '0 8px 32px #0f172a88' : '0 8px 32px rgba(80,0,200,0.12)' }}
                  className={`block ${isDark ? 'bg-blue-900/40 hover:bg-blue-900/60 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100 text-gray-700'} rounded-xl shadow-lg p-6 transition-all duration-300`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{project.title}</h3>
                  <p className="mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map(t => (
                      <span key={t} className={`${isDark ? 'bg-blue-950/60 text-blue-200' : 'bg-white/80 text-blue-700'} px-2 py-1 rounded text-xs font-semibold shadow-sm`}>{t}</span>
                    ))}
                  </div>
                  <span className={`text-sm underline ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>View on GitHub</span>
                </motion.a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="https://github.com/zainkhalid10" target="_blank" rel="noopener noreferrer" className={`font-semibold underline transition-colors ${isDark ? 'text-blue-300 hover:text-blue-400' : 'text-blue-700 hover:text-purple-600'}`}>See more on GitHub</a>
            </div>
          </>
        )}
        {activeTab === 'Instagram' && (
          <div className="grid md:grid-cols-2 gap-8">
            {instagramAccounts.map((acc, idx) => (
              <a
                key={acc.username}
                href={acc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${isDark ? 'bg-blue-900/40 hover:bg-blue-900/60 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100 text-gray-700'} rounded-xl shadow-lg p-6 transition-all duration-300 text-center`}
              >
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{acc.username}</h3>
                <span className={`text-sm underline ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>View on Instagram</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 