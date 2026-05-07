import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { GITHUB_USERNAME } from '../constants';
import { useLanguage } from '../i18n';

export default function Hero() {
  const { t, language } = useLanguage();

  const handleDownloadCV = async () => {
    const element = document.getElementById('cv-content');
    if (!element) return;

    // We can't import type here as it's a dynamic import
    const html2pdf = (await import('html2pdf.js')).default;
    
    const opt = {
      margin: 10,
      filename: `Pedro_Chaves_CV_${language.toUpperCase()}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        onclone: (doc: Document) => {
          const style = doc.createElement('style');
          style.innerHTML = `
            :root {
              /* Comprehensive hex fallbacks for Tailwind 4's default palette */
              --color-slate-50: #f8fafc !important;
              --color-slate-100: #f1f5f9 !important;
              --color-slate-200: #e2e8f0 !important;
              --color-slate-300: #cbd5e1 !important;
              --color-slate-400: #94a3b8 !important;
              --color-slate-500: #64748b !important;
              --color-slate-600: #475569 !important;
              --color-slate-700: #334155 !important;
              --color-slate-800: #1e293b !important;
              --color-slate-900: #0f172a !important;
              --color-slate-950: #020617 !important;
              
              --color-indigo-50: #eef2ff !important;
              --color-indigo-100: #e0e7ff !important;
              --color-indigo-200: #c7d2fe !important;
              --color-indigo-300: #a5b4fc !important;
              --color-indigo-400: #818cf8 !important;
              --color-indigo-500: #6366f1 !important;
              --color-indigo-600: #4f46e5 !important;
              --color-indigo-700: #4338ca !important;
              --color-indigo-800: #3730a3 !important;
              --color-indigo-900: #312e81 !important;
              --color-indigo-950: #1e1b4b !important;

              --color-accent: #4f46e5 !important;
              --color-paper: #f8fafc !important;
              --color-ink: #1e293b !important;
              --color-surface: #ffffff !important;
              
              /* Force fallback for modern color functions */
              --tw-ring-color: #c7d2fe !important;
              --tw-shadow-color: rgba(0,0,0,0.1) !important;
            }
            body {
              background-color: #f8fafc !important;
              color: #1e293b !important;
            }
            /* Hide problematic animations that might use oklch/oklab in keyframes */
            * {
              animation: none !important;
              transition: none !important;
            }
          `;
          doc.head.appendChild(style);

          // Remove oklch/oklab from any style attributes on elements
          const all = doc.querySelectorAll('*');
          all.forEach((el) => {
            const htmlEl = el as HTMLElement;
            if (htmlEl.style) {
              if (htmlEl.style.color && (htmlEl.style.color.includes('oklch') || htmlEl.style.color.includes('oklab'))) {
                htmlEl.style.color = '';
              }
              if (htmlEl.style.backgroundColor && (htmlEl.style.backgroundColor.includes('oklch') || htmlEl.style.backgroundColor.includes('oklab'))) {
                htmlEl.style.backgroundColor = '';
              }
              if (htmlEl.style.borderColor && (htmlEl.style.borderColor.includes('oklch') || htmlEl.style.borderColor.includes('oklab'))) {
                htmlEl.style.borderColor = '';
              }
            }
          });
        }
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
      pagebreak: { mode: ['avoid-all' as const, 'css' as const, 'legacy' as const] }
    };

    // To prevent the "View Portfolio" and "Download CV" buttons from appearing in the PDF,
    // we can temporarily hide them or just accept that they are part of the "site PDF"
    // However, the user asked for a "PDF version of the site", so we'll keep them but maybe simplify.
    
    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

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
            <motion.button 
              onClick={handleDownloadCV}
              whileHover={{ y: -2 }}
              className="px-8 py-3.5 border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download size={18} />
              {t('hero_cta_cv')}
            </motion.button>
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
