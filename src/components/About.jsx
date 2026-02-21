import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: The Story */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-4">
              <span className="text-blue-500">01.</span> About Me
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Chetan</span>, 
                a Computer Science student based in <span className="text-white">Belagavi</span>. 
                My journey into development started with a curiosity for how things work on the web, 
                which quickly evolved into a passion for the <span className="text-blue-400">MERN stack</span>.
              </p>
              <p>
                Currently, I’m sharpening my skills as a <span className="text-emerald-400">ReactJS Development Intern at Kodbud</span>, 
                where I build data-driven applications and focus on creating seamless user experiences.
              </p>
              <p>
               When I'm not coding, you'll find me diving deep into <span className="text-white font-semibold">Data Structures and Algorithms (DSA)</span>, 
                refining my <span className="text-white">UI/UX designs</span>, or exploring cloud scalability with <span className="text-white font-semibold">AWS</span>. 
                I love the challenge of mastering both the underlying logic and the modern infrastructure that powers the web today.
              </p>
            </div>
          </div>

          {/* Right Side:  Info Cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 transition-colors">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-white font-bold mb-2">Education</h3>
              <p className="text-slate-400 text-sm">Computer Science Engineering Student At Jain College Of Engineering, Belagavi</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/30 transition-colors">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-white font-bold mb-2">Current Role</h3>
              <p className="text-slate-400 text-sm">ReactJS Intern @ Kodbud</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/30 transition-colors">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-white font-bold mb-2">Interests</h3>
              <p className="text-slate-400 text-sm">DSA & UI/UX</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/30 transition-colors">
              <div className="text-3xl mb-4">🇯🇵</div>
              <h3 className="text-white font-bold mb-2">Languages</h3>
              <p className="text-slate-400 text-sm">English, Hindi, Kannada, & Marathi</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;