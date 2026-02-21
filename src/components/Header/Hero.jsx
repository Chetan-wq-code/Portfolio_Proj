import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-900 text-white relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
      
      <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Chetan
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8">
        Full-Stack Developer | MERN Specialist
      </h2>
      <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed">
        Passionate about building scalable web applications, exploring new technologies, 
        and mastering the art of UI/UX design. Currently interning at Kodbud.
      </p>
      
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-900/40" onClick={() => window.location.href = "#projects"}>
          View Projects
        </button>
        <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition-all" onClick={() => window.location.href = "#contact"}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;