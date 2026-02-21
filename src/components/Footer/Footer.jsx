import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#080d17] border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-lg font-black text-white mb-2 uppercase tracking-tighter">
            Chetan
          </div>
          <p className="text-slate-500 text-sm">
            Building the future of the web, one component at a time.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Chetan-wq-code/" className="text-slate-400 hover:text-blue-500 transition-colors font-bold text-sm uppercase tracking-widest">GitHub</a>
          <a href="https://www.linkedin.com/in/chetan-devalatkar-728213254/" className="text-slate-400 hover:text-blue-500 transition-colors font-bold text-sm uppercase tracking-widest">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-bold text-sm uppercase tracking-widest">Twitter</a>
        </div>

        <div className="text-slate-600 text-xs">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;