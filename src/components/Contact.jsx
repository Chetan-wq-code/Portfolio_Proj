import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0b1120] px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Contact Info & Socials */}
          <div className="lg:w-1/3 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-800/30 border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    📧
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-slate-200">ckdevalatkar@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-slate-200">Belgaum, Karnataka</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <p className="text-sm text-slate-400 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors">GH</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors">LI</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors">X</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-800/20 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>
              <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-900/30 transition-all active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;