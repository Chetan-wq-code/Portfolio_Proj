import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: '', error: '', details: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, success: '', error: '', details: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || 'Unable to send message. Please try again.')
      }

      setFormData({ name: '', email: '', message: '' })
      setStatus({
        loading: false,
        success: 'Message sent successfully. I will reply soon.',
        error: '',
        details: result?.result?.messageId ? `Message ID: ${result.result.messageId}` : JSON.stringify(result?.result || result),
      })
    } catch (error) {
      setStatus({
        loading: false,
        success: '',
        error: error.message || 'Something went wrong.',
        details: '',
      })
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0b1120] px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
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

          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-800/20 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-400 ml-1">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-900/30 transition-all active:scale-95"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
              {status.success && (
                <div className="md:col-span-2 text-center space-y-2">
                  <p className="text-emerald-400">{status.success}</p>
                </div>
              )}
              {status.error && <p className="md:col-span-2 text-rose-400 text-center">{status.error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
