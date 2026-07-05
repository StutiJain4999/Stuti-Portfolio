"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin, Award, Code2 } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "data-analytics",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "data-analytics", message: "" });
    }, 1500);
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/stuti-jain-02a55b322/", icon: LinkedinIcon, color: "hover:text-blue-400 hover:border-blue-400/40" },
    { name: "GitHub", href: "https://github.com/StutiJain4999", icon: GithubIcon, color: "hover:text-purple-400 hover:border-purple-400/40" },
    { name: "LeetCode", href: "https://leetcode.com/u/12408204/", icon: Code2, color: "hover:text-amber-400 hover:border-amber-400/40" },
    { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/stutijanzm9", icon: Award, color: "hover:text-emerald-400 hover:border-emerald-400/40" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-950/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Clean Contact Card */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border border-white/5 relative bg-[#07060d]/80 flex flex-col justify-between flex-1"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2 block">
                  CONNECT WITH ME
                </span>
                <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-1 text-glow-cyan font-display">
                  Stuti Jain
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-6">
                  Computer Science Student & Data Analyst
                </span>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-400 text-sm font-light">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Punjab, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400 text-sm font-light">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href="mailto:Stuti.12408204@lpu.in" className="hover:text-white transition-colors">
                      Stuti.12408204@lpu.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-3">
                  Connect
                </span>
                <div className="flex flex-col gap-4">

                  {/* Social links row */}
                  <div className="flex gap-2">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 flex-1 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-all duration-300 ${link.color}`}
                          aria-label={link.name}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative h-full flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Satoshi Nakamoto"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl font-light text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-950/50 border-glow-cyan transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="name@agency.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl font-light text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-950/50 border-glow-cyan transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Subject/Topic */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Subject / Topic
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-5 py-4 bg-[#050507] border border-white/5 rounded-xl font-light text-zinc-300 focus:outline-none focus:bg-zinc-950/50 border-glow-cyan transition-all duration-300 text-sm appearance-none cursor-pointer"
                        >
                          <option value="data-analytics">Data Science & Analytics</option>
                          <option value="software-dev">Software Development</option>
                          <option value="internship-recruitment">Internship & Recruitment</option>
                          <option value="other">Other Collaboration</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Describe your message or details..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl font-light text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-950/50 border-glow-cyan transition-all duration-300 text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all duration-300 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>SENDING...</>
                      ) : (
                        <>
                          SEND MESSAGE
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center space-y-6 py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-cyan-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                        Message Sent Successfully
                      </h3>
                      <p className="text-zinc-400 text-sm font-light mt-3 max-w-sm">
                        Thank you for reaching out! Your message has been received. Stuti will respond to your email address shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 border border-white/10 rounded-full text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-white hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
