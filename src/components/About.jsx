import React from 'react';

export default function About({ isDark }) {
  return (
    <section id="about" className={`py-16 ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>About Me</h2>
        <div className={`${isDark ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-800'} rounded-xl shadow-lg p-6 md:p-10`}>
          <p className="text-lg mb-2">
            Highly motivated final-year Computer Science student at <b>FAST NUCES</b> with a strong background in software development, data structures, and algorithms.
          </p>
          <p className="mb-2">
            Proficient in <b>Python, Java, and C++</b>, with experience in both front-end and back-end development. Seeking to leverage technical expertise and academic knowledge to contribute to innovative software solutions in a dynamic environment.
          </p>
          <p className={`text-sm ${isDark ? 'text-blue-200' : 'text-gray-500'}`}>Islamabad, 47080 | +923030603432 | of.mzain@gmail.com</p>
          <p className={`text-sm mt-2 font-bold ${isDark ? 'text-blue-200' : 'text-gray-500'}`}>Muhammad Zain</p>
        </div>
      </div>
    </section>
  );
} 