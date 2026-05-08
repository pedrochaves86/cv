import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUp, ArrowRight } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '@/src/constants';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white py-24 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <span className="section-label">{t('contact_label')}</span>
            <h2 className="section-title text-slate-900 mb-8">
                {t('contact_title_1')} <br />
                <span className="text-accent">{t('contact_title_2')}</span>
            </h2>
            <p className="hero-description max-w-md text-justify">
              {t('contact_desc')}
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="mailto:pedrochaves86@gmail.com" 
              className="group flex flex-col sm:flex-row items-center sm:justify-between p-6 sm:p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-accent hover:shadow-xl hover:shadow-indigo-50 transition-all gap-4 sm:gap-6 cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-indigo-100 shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 text-slate-400">{t('contact_direct_email')}</span>
                  <span className="text-base sm:text-xl font-bold text-slate-900 block truncate">pedrochaves86@gmail.com</span>
                </div>
              </div>
              <ArrowRight className="text-slate-300 group-hover:text-accent transition-colors hidden sm:block shrink-0" />
            </a>

            <div className="grid grid-cols-2 gap-4">
                <a 
                    href={LINKEDIN_URL} 
                    target="_blank" 
                    rel="referrer"
                    className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-accent group transition-all cursor-pointer"
                >
                    <Linkedin size={20} className="text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900">LinkedIn</span>
                </a>
                <a 
                    href={GITHUB_URL} 
                    target="_blank" 
                    rel="referrer"
                    className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-accent group transition-all cursor-pointer"
                >
                    <Github size={20} className="text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900">GitHub</span>
                </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-100 gap-8">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">
            &copy; {new Date().getFullYear()} PEDRO CHAVES &bull; AZORES
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 cursor-pointer"
          >
            {t('contact_back_top')}
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-accent">
                <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
