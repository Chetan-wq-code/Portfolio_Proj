import React from 'react';
import projects from '../ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">My Projects</h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          A collection of full-stack applications and experimental projects built with the modern web stack.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-500 opacity-20 font-black text-white">
                  {project.title}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                  {project.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                
                <div className="flex items-center gap-6">
                  <a href={project.github} className="text-white hover:text-blue-400 transition-colors font-semibold text-sm">
                    GitHub →
                  </a>
                  <a href={project.live} className="text-white hover:text-blue-400 transition-colors font-semibold text-sm">
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;