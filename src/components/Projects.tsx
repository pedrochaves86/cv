import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star, Folder } from 'lucide-react';
import { Repo } from '@/src/types';
import { GITHUB_USERNAME } from '@/src/constants';
import { useLanguage } from '../i18n';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-indigo-400',
  Java: 'bg-red-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-indigo-500',
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) return (
    <div className="py-24 text-center section-label text-slate-300">
      {t('portfolio_fetching')}
    </div>
  );

  return (
    <section id="projects" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 border-b border-slate-200 pb-8 gap-4">
          <div>
            <span className="section-label mb-4 block">{t('portfolio_label')}</span>
            <h2 className="section-title text-slate-900 tracking-tight">{t('portfolio_title')}</h2>
          </div>
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`} 
            target="_blank" 
            rel="referrer"
            className="text-xs text-accent font-bold hover:underline mb-1 cursor-pointer"
          >
            github.com/{GITHUB_USERNAME}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="referrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card p-6 flex flex-col group cursor-pointer"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Folder size={18} className="text-slate-400 group-hover:text-accent transition-colors shrink-0" />
                    <h4 className="font-bold text-slate-900 group-hover:text-accent transition-colors truncate">
                        {repo.name.split('-').join(' ')}
                    </h4>
                </div>
                
                <p className="text-xs text-slate-500 mb-6 line-clamp-3 min-h-[3.75rem] leading-relaxed font-medium text-justify">
                    {repo.description || t('portfolio_default_desc')}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${LANGUAGE_COLORS[repo.language || ''] || 'bg-slate-300'}`} />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                {repo.language || t('portfolio_mixed')}
                            </span>
                        </div>
                        {repo.stargazers_count > 0 && (
                            <div className="flex items-center gap-1 text-slate-400">
                                <Star size={12} className="fill-current" />
                                <span className="text-[10px] font-bold">{repo.stargazers_count}</span>
                            </div>
                        )}
                    </div>
                    <ExternalLink size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
