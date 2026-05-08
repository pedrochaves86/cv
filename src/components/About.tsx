import { motion } from 'motion/react';
import { Target, Zap, Heart, Database, Briefcase } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function About() {
  const { t } = useLanguage();

  const skills = [
    { icon: <Zap size={18} />, title: 'Frontend', desc: 'Angular 15+, TypeScript, RxJS' },
    { icon: <Database size={18} />, title: 'Backend', desc: 'Java 17, PHP 8.2, SQL' },
    { icon: <Target size={18} />, title: 'Arch', desc: 'GCP, CI/CD, System Design' },
    { icon: <Heart size={18} />, title: 'UX', desc: 'Design Systems, UI Alignment' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Content */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">{t('exp_label')}</span>
            <h2 className="section-title text-slate-900 mb-8">
                {t('exp_title_main')} <br />
                <span className="text-accent underline decoration-indigo-200 underline-offset-4">{t('exp_title_accent')}</span>
            </h2>
            
            <div className="space-y-6 body-text max-w-2xl text-justify">
              <p>
                {t('exp_p1')}
              </p>
              <p>
                {t('exp_p2')}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                    <motion.div 
                        key={skill.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-5 bg-white border border-slate-200 rounded-xl"
                    >
                        <div className="text-accent mb-3">{skill.icon}</div>
                        <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-900 mb-1">{skill.title}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase leading-none">{skill.desc}</p>
                    </motion.div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Experience Timeline */}
        <div className="lg:col-span-5">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-8 md:p-10"
            >
                <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">{t('exp_timeline_title')}</h3>
                    <Briefcase size={16} className="text-slate-300" />
                </div>
                
                <div className="space-y-10">
                    <div className="relative pl-8 border-l-2 border-accent">
                        <div className="absolute top-0 left-[-6px] w-[10px] h-[10px] rounded-full bg-accent ring-4 ring-indigo-50" />
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1 block">{t('exp_sep')} 2021 &mdash; {t('exp_present')}</span>
                        <h4 className="font-bold text-slate-900 text-sm">EDP</h4>
                        <p className="text-xs text-slate-400 font-medium mb-3 italic leading-none">{t('role_tech_lead')}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium mb-2">{t('desc_edp')}</p>
                        <div className="flex flex-wrap gap-1">
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-bold uppercase">Angular 15+</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-bold uppercase">Java 17</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-bold uppercase">PHP 8.2</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-bold uppercase">GCP</span>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-200">
                        <div className="absolute top-0 left-[-6px] w-[10px] h-[10px] rounded-full bg-slate-200" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">{t('exp_jul')} 2020 &mdash; {t('exp_aug')} 2021</span>
                        <h4 className="font-bold text-slate-900 text-sm">Natixis in Portugal</h4>
                        <p className="text-xs text-slate-400 font-medium mb-3 italic leading-none">{t('role_angular_dev')}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium mb-2">{t('desc_natixis')}</p>
                        <div className="flex flex-wrap gap-1">
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-400 font-bold uppercase">Angular 10+</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-400 font-bold uppercase">TypeScript</span>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-100">
                        <div className="absolute top-0 left-[-6px] w-[10px] h-[10px] rounded-full bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1 block">{t('exp_jun')} 2017 &mdash; {t('exp_jul')} 2020</span>
                        <h4 className="font-bold text-slate-900 text-sm">PMAçores</h4>
                        <p className="text-xs text-slate-400 font-medium mb-3 italic leading-none">{t('role_angular_dev')}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium mb-2">{t('desc_pmacores')}</p>
                        <div className="flex flex-wrap gap-1">
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-300 font-bold uppercase">Angular 7+</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-300 font-bold uppercase">TypeScript</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-300 font-bold uppercase">SQL</span>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-50">
                        <div className="absolute top-0 left-[-6px] w-[10px] h-[10px] rounded-full bg-slate-50" />
                        <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest mb-1 block">{t('exp_apr')} 2014 &mdash; {t('exp_may')} 2017</span>
                        <h4 className="font-bold text-slate-900 text-sm">NOS Açores</h4>
                        <p className="text-xs text-slate-400 font-medium mb-3 italic leading-none">{t('role_laravel_it')}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium mb-2">{t('desc_nos')}</p>
                        <div className="flex flex-wrap gap-1">
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-200 font-bold uppercase">Laravel 5</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-200 font-bold uppercase">PHP</span>
                            <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-200 font-bold uppercase">SQL</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
