import { motion } from 'motion/react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LINKEDIN_URL, GITHUB_URL } from '@/src/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Me', href: '#about-me' },
    { name: 'Experience', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-lg shadow-indigo-100 uppercase tracking-tighter">
            PC
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">PEDRO CHAVES</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 text-sm font-medium text-slate-500">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-accent transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3 pl-8 border-l border-slate-200">
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="referrer" 
              className="px-4 py-1.5 border border-slate-200 rounded-full text-[11px] font-bold hover:bg-slate-50 cursor-pointer transition-colors flex items-center gap-2"
            >
              <Github size={14} />
              GitHub
            </a>
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="referrer" 
              className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-[11px] font-bold cursor-pointer flex items-center gap-2 shadow-lg shadow-slate-200 hover:bg-slate-800 transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-slate-600 hover:text-accent transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <a href={GITHUB_URL} target="_blank" rel="referrer" className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <Github size={18} /> GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="referrer" className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <Linkedin size={18} /> LinkedIn
                </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
