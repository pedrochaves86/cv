import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <span className="section-label mb-6">{t('about_me_label')}</span>
              <h2 className="section-title text-slate-900 mb-8">
                {t('about_me_title')} <br />
                <span className="text-accent underline decoration-indigo-100 underline-offset-4 tracking-tight">{t('about_me_stack')}</span>
              </h2>
              
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-200/50 group-hover:text-accent/10 transition-colors" />
                <p className="text-slate-600 italic relative z-10 leading-relaxed text-justify">
                  {t('about_me_quote')}
                </p>
                <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-1 bg-accent rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Pedro Chaves</span>
                </div>
              </div>
            </div>

            {/* Abstract Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl -z-0 opacity-50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-justify body-text">
              <p>
                {t('about_me_p1')}
              </p>
              <p>
                {t('about_me_p2')}
              </p>
              <p>
                {t('about_me_p3')}
              </p>
              <p>
                {t('about_me_p4')}
              </p>
              <p className="font-medium text-slate-900">
                {t('about_me_p5')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
