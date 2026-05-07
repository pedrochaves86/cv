import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { GITHUB_USERNAME } from '../constants';
import { useLanguage } from '../i18n';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 px-6 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge mb-4">{t('status_available')}</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {t('hero_title_main')}<br />
              <span className="text-accent underline decoration-indigo-200 underline-offset-8">{t('hero_title_accent')}</span>.
            </h1>
          </motion.div>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            {t('hero_desc')}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ y: -2 }}
              className="px-8 py-3.5 bg-accent text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
            >
              {t('hero_cta_portfolio')}
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ y: -2 }}
              className="px-8 py-3.5 border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Download size={18} />
              {t('hero_cta_cv')}
            </motion.a>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={16} />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{t('hero_location')}</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative lg:w-[320px]"
        >
          <div className="aspect-square bg-slate-100 rounded-full overflow-hidden ring-8 ring-slate-50/50 shadow-2xl">
            <img 
              src={`https://github.com/${GITHUB_USERNAME}.png`} 
              alt="Pedro Chaves" 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -right-2 p-3.5 bg-white rounded-2xl shadow-2xl border border-slate-100 hidden sm:block hover:border-accent/20 transition-all"
          >
            <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                           <div className="w-full h-full bg-slate-200" />
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">{t('hero_collaborations')}</p>
                    <p className="text-xs font-black text-slate-900 leading-none">{t('hero_projects_count')}</p>
                </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
