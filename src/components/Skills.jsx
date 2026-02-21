import React from 'react';
import skillCategories from '../SkillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0f172a] px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-black text-white mb-16 text-center">Technical Arsenal</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;