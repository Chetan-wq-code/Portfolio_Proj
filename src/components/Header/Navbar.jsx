import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-black text-white tracking-tighter">
          CHETAN<span className="text-blue-500">.dev</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 font-bold uppercase tracking-widest text-sm"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white text-center py-3 rounded-xl font-bold">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;