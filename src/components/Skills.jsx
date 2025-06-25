import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker, FaGitAlt, FaFigma, FaJava, FaLinux, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostgresql, SiRedux, SiTypescript, SiKubernetes, SiJest, SiCplusplus, SiTensorflow, SiPytorch, SiOpencv, SiCypress, SiSelenium, SiTailwindcss, SiVuedotjs, SiAngular, SiNextdotjs, SiWordpress, SiFirebase, SiFlutter, SiSwift, SiKeras, SiScikitlearn, SiFastapi, SiExpress, SiGitlab, SiTerraform, SiFramer, SiAdobephotoshop, SiAdobelightroom, SiCanva, SiInvision, SiOpenai } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';

const skillCategories = [
  {
    label: 'Web Development',
    skills: [FaHtml5, FaCss3Alt, FaJs, FaReact, SiRedux, SiTypescript, SiTailwindcss, SiVuedotjs, SiAngular, SiNextdotjs, SiWordpress],
  },
  {
    label: 'UI/UX Design',
    skills: [FaFigma, SiAdobephotoshop, SiAdobelightroom, SiCanva, SiFramer, SiInvision],
  },
  {
    label: 'Mobile Development',
    skills: [SiFlutter, FaReact, SiFirebase, SiSwift],
  },
  {
    label: 'Backend',
    skills: [FaNodeJs, SiExpress, SiMysql, SiMongodb, SiPostgresql, FaPython, FaJava, SiCplusplus, FaPhp, FaLaravel, SiFastapi],
  },
  {
    label: 'DevOps',
    skills: [FaDocker, SiKubernetes, FaAws, SiGitlab, FaGitAlt, SiTerraform, FaLinux],
  },
  {
    label: 'Video Creation',
    skills: [
      { type: 'img', src: 'pp.png', alt: 'Premiere Pro' },
      { type: 'img', src: 'Davinci.png', alt: 'DaVinci Resolve' },
      { type: 'img', src: 'cc.png', alt: 'Cap CutR' },
    ],
  },
  {
    label: 'Databases & BaaS',
    skills: [FaDatabase, SiMysql, SiMongodb, SiPostgresql, SiFirebase],
  },
  {
    label: 'AI & Machine Learning',
    skills: [SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiOpenai],
  },
];

const tabs = ['Skills', 'Awards', 'Experience', 'Credentials'];

const awards = [
  'Runner up Graphic Designing (World Space Week)',
  'Volunteer (Nascon Got Talent, Fast Adventure Society, Takhleeq Society)',
  'Head Team Media (Fast Adventure Society, Takhleeq Society)',
];

export default function Skills({ isDark }) {
  const [activeTab, setActiveTab] = useState('Skills');
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tab bar */}
        <div className="flex gap-8 border-b border-blue-900/30 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-2 text-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === tab ? 'border-blue-400 text-blue-400' : 'border-transparent text-blue-200 hover:text-blue-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Skills grid */}
        {activeTab === 'Skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map(cat => (
              <div key={cat.label}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-blue-100 text-base md:text-lg">{cat.label}</span>
                  <span className="text-blue-400">-</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="text-2xl md:text-3xl text-blue-200 hover:text-blue-400 transition-colors duration-200 hover:scale-125 cursor-pointer drop-shadow-lg"
                      tabIndex={0}
                    >
                      {typeof Icon === 'object' && Icon.type === 'img' ? (
                        <img src={Icon.src} alt={Icon.alt} className="w-8 h-8 md:w-12 md:h-12 object-contain inline" />
                      ) : (
                        <Icon />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Awards tab content */}
        {activeTab === 'Awards' && (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">Honors & Awards</h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-blue-100">
              {awards.map((award, idx) => (
                <li key={idx}>{award}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Placeholder for Experience and Credentials tabs only */}
        {(activeTab === 'Experience' || activeTab === 'Credentials') && (
          <div className="text-blue-200 py-12 text-center text-lg opacity-60">Coming soon...</div>
        )}
      </div>
    </section>
  );
} 
