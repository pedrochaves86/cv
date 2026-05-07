import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GITHUB_USERNAME } from '../constants';
import { useLanguage } from '../i18n';

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes (e.g. language change)
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default function Hero() {
  const { t, language } = useLanguage();

  const handleDownloadCV = async () => {
    // Helper to convert image URL to base64
    const getBase64FromUrl = async (url: string): Promise<string | null> => {
      try {
        const response = await fetch(url, { mode: 'cors' });
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      } catch (e) {
        console.error('Base64 conversion failed:', e);
        return null;
      }
    };

    const proxyImageUrl = `https://images.weserv.nl/?url=github.com/${GITHUB_USERNAME}.png&w=200&h=200&fit=cover&default=identicon`;
    const base64Image = await getBase64FromUrl(proxyImageUrl);

    const html2pdf = (await import('html2pdf.js')).default;
    
    // Construct a simplified but more polished HTML content for the CV
    const cvHtml = `
      <div style="font-family: 'Helvetica', 'Arial', sans-serif; color: #1e293b; padding: 40px 50px; line-height: 1.5; background: white;">
        <!-- Header with Photo -->
        <div style="display: flex; align-items: center; gap: 24px; border-bottom: 2px solid #6366f1; padding-bottom: 24px; margin-bottom: 32px;">
          ${base64Image ? `<img src="${base64Image}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #eef2ff;" />` : ''}
          <div>
            <h1 style="font-size: 32px; font-weight: 800; color: #0f172a; margin: 0; line-height: 1;">Pedro Chaves</h1>
            <p style="font-size: 18px; font-weight: 600; color: #4f46e5; margin: 6px 0 0 0;">Technical Lead</p>
            <div style="display: flex; gap: 16px; font-size: 12px; color: #64748b; margin-top: 8px;">
              <span>${t('hero_location')}</span>
              <span>•</span>
              <span>pedrochaves86@gmail.com</span>
            </div>
          </div>
        </div>

        <!-- Summary Section -->
        <div style="margin-bottom: 32px;">
          <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 12px;">Summary</h2>
          <p style="font-size: 13px; color: #334155; text-align: justify; margin: 0;">
            ${t('hero_desc')} ${t('about_me_p1')}
          </p>
        </div>

        <!-- Experience Section with Timeline -->
        <div style="margin-bottom: 32px;">
          <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 20px;">Experience</h2>
          
          <div style="position: relative; padding-left: 24px; border-left: 2px solid #f1f5f9;">
            <!-- EDP Role -->
            <div style="position: relative; margin-bottom: 28px;">
              <div style="position: absolute; left: -31px; top: 4px; width: 12px; height: 12px; background: #6366f1; border-radius: 50%; border: 3px solid white;"></div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                <h3 style="font-size: 14px; margin: 0; color: #0f172a; font-weight: 700;">Technical Lead @ EDP</h3>
                <span style="font-size: 11px; color: #64748b; font-weight: 600;">${t('exp_sep')} 2021 - ${t('exp_present')}</span>
              </div>
              <p style="font-size: 13px; color: #475569; margin: 0; line-height: 1.4;">${t('desc_edp')}</p>
              <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                ${['Angular', 'TypeScript', 'Java', 'PHP', 'GCP', 'SonarQube', 'Robot Framework'].map(skill => `
                  <span style="display: inline-block; background: #f8fafc; color: #6366f1; font-size: 10px; font-weight: 700; padding: 0 10px; border-radius: 4px; border: 1px solid #e2e8f0; margin-right: 4px; margin-bottom: 4px; text-align: center; line-height: 22px; height: 22px; vertical-align: middle;">${skill}</span>
                `).join('')}
              </div>
            </div>

            <!-- Natixis Role -->
            <div style="position: relative; margin-bottom: 28px;">
              <div style="position: absolute; left: -31px; top: 4px; width: 12px; height: 12px; background: #cbd5e1; border-radius: 50%; border: 3px solid white;"></div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                <h3 style="font-size: 14px; margin: 0; color: #0f172a; font-weight: 700;">Angular Developer @ Natixis</h3>
                <span style="font-size: 11px; color: #64748b; font-weight: 600;">${t('exp_aug')} 2019 - ${t('exp_jul')} 2021</span>
              </div>
              <p style="font-size: 13px; color: #475569; margin: 0; line-height: 1.4;">${t('desc_natixis')}</p>
              <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                ${['Angular', 'TypeScript', 'SCSS', 'Jasmine', 'SonarQube', 'Bitbucket'].map(skill => `
                  <span style="display: inline-block; background: #f8fafc; color: #6366f1; font-size: 10px; font-weight: 700; padding: 0 10px; border-radius: 4px; border: 1px solid #e2e8f0; margin-right: 4px; margin-bottom: 4px; text-align: center; line-height: 22px; height: 22px; vertical-align: middle;">${skill}</span>
                `).join('')}
              </div>
            </div>

            <!-- PMA Role -->
            <div style="position: relative; margin-bottom: 0;">
              <div style="position: absolute; left: -31px; top: 4px; width: 12px; height: 12px; background: #cbd5e1; border-radius: 50%; border: 3px solid white;"></div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                <h3 style="font-size: 14px; margin: 0; color: #0f172a; font-weight: 700;">Laravel Developer | IT Manager @ PMA</h3>
                <span style="font-size: 11px; color: #64748b; font-weight: 600;">${t('exp_jun')} 2016 - ${t('exp_apr')} 2019</span>
              </div>
              <p style="font-size: 13px; color: #475569; margin: 0; line-height: 1.4;">${t('desc_pmacores')}</p>
              <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
                ${['Laravel', 'PHP', 'MySQL', 'SQL', 'System Administration'].map(skill => `
                  <span style="display: inline-block; background: #f8fafc; color: #6366f1; font-size: 10px; font-weight: 700; padding: 0 10px; border-radius: 4px; border: 1px solid #e2e8f0; margin-right: 4px; margin-bottom: 4px; text-align: center; line-height: 22px; height: 22px; vertical-align: middle;">${skill}</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div style="margin-bottom: 32px;">
          <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 16px;">Core Skills</h2>
          <div style="display: block; margin-right: -4px;">
            ${['Technical Leadership', 'Software Architecture', 'Angular', 'GCP', 'Java', 'PHP', 'Clean Code', 'CI/CD'].map(skill => `
              <div style="display: inline-block; background-color: #f1f5f9; color: #475569; font-size: 11px; font-weight: 700; padding: 0 12px; border-radius: 6px; border: 1px solid #e2e8f0; margin-right: 8px; margin-bottom: 8px; text-align: center; line-height: 26px; height: 26px; vertical-align: middle;">${skill}</div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: auto; padding-top: 40px; text-align: center;">
          <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 8px;">
            <span style="color: #64748b; font-size: 10px; font-weight: 600;">linkedin.com/in/pedrochaves86</span>
            <span style="color: #64748b; font-size: 10px; font-weight: 600;">github.com/pedrochaves86</span>
          </div>
          <p style="color: #94a3b8; font-size: 9px; margin: 0;">${language === 'pt' ? 'Documento gerado digitalmente' : 'Digitally generated document'}</p>
        </div>
      </div>
    `;

    const opt = {
      margin: 0,
      filename: `Pedro_Chaves_CV_${language.toUpperCase()}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };
    
    try {
      await html2pdf().from(cvHtml).set(opt).save();
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
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              <span className="text-accent underline decoration-indigo-200 underline-offset-8">
                <Typewriter text={t('hero_title_accent')} delay={100} />
                <span className="animate-pulse">|</span>
              </span>.
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
              src={`https://images.weserv.nl/?url=github.com/${GITHUB_USERNAME}.png&w=400&h=400&fit=cover&default=identicon`}
              alt="Pedro Chaves" 
              className="w-full h-full object-cover transition-all duration-700"
              crossOrigin="anonymous"
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
