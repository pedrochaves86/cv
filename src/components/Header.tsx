import { motion } from 'motion/react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LINKEDIN_URL, GITHUB_URL } from '@/src/constants';
import { useLanguage } from '../i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav_about'), href: '#about-me' },
    { name: t('nav_experience'), href: '#about' },
    { name: t('nav_portfolio'), href: '#projects' },
    { name: t('nav_contact'), href: '#footer' },
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
          <span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">Pedro Chaves</span>
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
            <div className="flex items-center bg-slate-100 p-1 rounded-full mr-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${
                  language === 'en' ? 'bg-white text-accent shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${
                  language === 'pt' ? 'bg-white text-accent shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                PT
              </button>
            </div>
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
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-slate-600 hover:text-accent transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl w-fit">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  language === 'en' ? 'bg-white text-accent shadow-sm' : 'text-slate-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  language === 'pt' ? 'bg-white text-accent shadow-sm' : 'text-slate-400'
                }`}
              >
                Português
              </button>
            </div>
            <div className="flex flex-col gap-3">
                <a href={GITHUB_URL} target="_blank" rel="referrer" className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <Github size={18} /> GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="referrer" className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <Linkedin size={18} /> LinkedIn
                </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
