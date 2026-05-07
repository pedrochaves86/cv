import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUp, ArrowRight } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '@/src/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white py-24 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <span className="section-label">04. Contact</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Let's Build <br />
                <span className="text-accent">Something Great.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
              Always open to discussing new architectural challenges, creative ideas or strategic opportunities.
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="mailto:pedrochaves86@gmail.com" 
              className="group flex items-center justify-between p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-accent hover:shadow-xl hover:shadow-indigo-50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-slate-400">Direct Email</span>
                  <span className="text-xl font-bold text-slate-900">pedrochaves86@gmail.com</span>
                </div>
              </div>
              <ArrowRight className="text-slate-300 group-hover:text-accent transition-colors" />
            </a>

            <div className="grid grid-cols-2 gap-4">
                <a 
                    href={LINKEDIN_URL} 
                    target="_blank" 
                    rel="referrer"
                    className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-accent group transition-all"
                >
                    <Linkedin size={20} className="text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900">LinkedIn</span>
                </a>
                <a 
                    href={GITHUB_URL} 
                    target="_blank" 
                    rel="referrer"
                    className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-accent group transition-all"
                >
                    <Github size={20} className="text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900">GitHub</span>
                </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-100 gap-8">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">
            &copy; {new Date().getFullYear()} PEDRO CHAVES &bull; SENIOR DEVELOPER &bull; AZORES
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-accent">
                <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
