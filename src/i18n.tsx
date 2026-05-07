import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

const translations: Translations = {
  // Header
  nav_about: { en: 'About Me', pt: 'Sobre Mim' },
  nav_experience: { en: 'Experience', pt: 'Experiência' },
  nav_portfolio: { en: 'Portfolio', pt: 'Portfólio' },
  nav_contact: { en: 'Contact', pt: 'Contacto' },
  status_available: { en: 'Available for tech leadership & strategic roles', pt: 'Disponível para liderança técnica e funções estratégicas' },
  
  // Hero
  hero_title_main: { en: '', pt: '' },
  hero_title_accent: { en: 'Technical Lead', pt: 'Technical Lead' },
  hero_desc: { en: 'Leading engineering teams and architecture for business-critical applications. Specialized in Angular, Java, PHP & Cloud (GCP) with a focus on software quality and technical sustainability.', pt: 'Liderança de equipas de engenharia e arquitetura para aplicações críticas de negócio. Especialista em Angular, Java, PHP e Cloud (GCP) com foco na qualidade de software e sustentabilidade técnica.' },
  hero_cta_portfolio: { en: 'View Portfolio', pt: 'Ver Portfólio' },
  hero_cta_cv: { en: 'Download CV', pt: 'Download CV' },
  hero_location: { en: 'Ponta Delgada, Portugal', pt: 'Ponta Delgada, Portugal' },
  hero_collaborations: { en: 'Collaborations', pt: 'Colaborações' },
  hero_projects_count: { en: '+12 Projects', pt: '+12 Projetos' },

  // About Me
  about_me_label: { en: '01. About Me', pt: '01. Sobre Mim' },
  about_me_title: { en: 'Beyond the', pt: 'Para além da' },
  about_me_stack: { en: 'Technical Stack.', pt: 'Stack Técnica.' },
  about_me_quote: { en: '"I genuinely enjoy building systems that are clean, scalable, and built to last. I value clarity, ownership, and a positive working environment."', pt: '"Gosto genuinamente de construir sistemas limpos, escaláveis e feitos para durar. Valorizo clareza, responsabilidade e um ambiente de trabalho positivo."' },
  about_me_p1: { 
    en: 'Hi, I’m Pedro — a tech lead who enjoys turning complex problems into simple, well-structured solutions. I work mostly with Angular, Java, PHP, and cloud technologies, and I genuinely enjoy building systems that are clean, scalable, and built to last.', 
    pt: 'Olá, sou o Pedro — um Technical Lead que gosta de transformar problemas complexos em soluções simples e bem estruturadas. Trabalho maioritariamente com Angular, Java, PHP e tecnologias cloud, e gosto genuinamente de construir sistemas limpos, escaláveis e feitos para durar.' 
  },
  about_me_p2: { 
    en: 'I like to combine technical depth with a practical mindset. For me, good software isn’t just about writing code — it’s about making thoughtful decisions, supporting the team, and creating solutions that make sense in the real world. I value clarity, ownership, and a positive working environment where people can grow and collaborate.', 
    pt: 'Gosto de combinar profundidade técnica com uma mentalidade prática. Para mim, bom software não é apenas escrever código — trata-se de tomar decisões ponderadas, apoiar a equipa e criar soluções que façam sentido no mundo real. Valorizo a clareza, o compromisso e um ambiente de trabalho positivo onde as pessoas possam crescer e colaborar.' 
  },
  about_me_p3: { 
    en: 'I’m based in the Azores, which probably explains why I enjoy being outdoors as much as being behind a screen. In my free time, you’ll usually find me hiking scenic trails, taking part in trail running events, or training at the gym. I like challenges — whether they involve elevation gain or a production deployment.', 
    pt: 'Estou sediado nos Açores, o que provavelmente explica porque gosto tanto de estar ao ar livre como em frente a um ecrã. No meu tempo livre, costumo fazer caminhadas por trilhos panorâmicos, participar em eventos de trail running ou treinar no ginásio. Gosto de desafios — quer envolvam desnível positivo ou uma implementação em produção.' 
  },
  about_me_p4: { 
    en: 'Curious by nature and optimistic by default, I’m always looking for ways to improve, learn something new, and build things that matter.', 
    pt: 'Curioso por natureza e otimista por defeito, estou sempre à procura de formas de melhorar, aprender algo novo e construir coisas que importam.' 
  },
  about_me_p5: { 
    en: 'If you’re into clean architecture, continuous improvement, and working with someone who brings both focus and good energy to the table — we’ll get along just fine.', 
    pt: 'Se gosta de arquitetura limpa, melhoria contínua e de trabalhar com alguém que traz foco e boa energia — vamos dar-nos muito bem.' 
  },

  // Experience
  exp_label: { en: '02. Experience', pt: '02. Experiência' },
  exp_title_main: { en: 'Engineering', pt: 'Engenharia de' },
  exp_title_accent: { en: 'Mission-Critical Systems.', pt: 'Sistemas Críticos.' },
  exp_p1: { 
    en: 'As a Technical Lead at EDP, I specialize in transforming complex business requirements into efficient, scalable, and reliable engineering solutions.', 
    pt: 'Como Technical Lead na EDP, especializei-me em transformar requisitos de negócio complexos em soluções de engenharia eficientes, escaláveis e fiáveis.' 
  },
  exp_p2: { 
    en: 'My background spans the full application lifecycle—from architectural design and CI/CD implementation to platform governance and performance optimization. I act as a bridge between development teams and business stakeholders to ensure technical excellence.', 
    pt: 'O meu percurso abrange todo o ciclo de vida da aplicação — desde o design arquitectural e implementação de CI/CD até à governança da plataforma e optimização de performance. Actuo como uma ponte entre as equipas de desenvolvimento e os stakeholders do negócio para garantir a excelência técnica.' 
  },
  exp_timeline_title: { en: 'Experience', pt: 'Experiência' },
  exp_present: { en: 'Present', pt: 'Presente' },
  exp_sep: { en: 'Sep', pt: 'Set' },
  exp_aug: { en: 'Aug', pt: 'Ago' },
  exp_jul: { en: 'Jul', pt: 'Jul' },
  exp_jun: { en: 'Jun', pt: 'Jun' },
  exp_apr: { en: 'Apr', pt: 'Abr' },
  exp_may: { en: 'May', pt: 'Mai' },

  // Roles
  role_tech_lead: { en: 'Technical Lead', pt: 'Technical Lead' },
  role_angular_dev: { en: 'Angular Developer', pt: 'Developer Angular' },
  role_laravel_it: { en: 'Laravel Developer | IT Manager', pt: 'Developer Laravel | IT Manager' },

  // Role descriptions
  desc_edp: { en: 'Technical leadership of critical applications, ensuring performance, security and architectural integrity.', pt: 'Liderança técnica de aplicações críticas, garantindo performance, segurança e integridade arquitectural.' },
  desc_natixis: { en: 'Developed reusable Angular components and supported UX/UI alignment for global engineering teams.', pt: 'Desenvolvimento de componentes Angular reutilizáveis e suporte no alinhamento de UX/UI para equipas de engenharia globais.' },
  desc_pmacores: { en: 'Developed a new ERP system replacing legacy applications and introduced frontend engineering best practices.', pt: 'Desenvolvimento de um novo sistema ERP em substituição de aplicações legadas e introdução de boas práticas de engenharia de frontend.' },
  desc_nos: { en: 'Built internal platforms for documentation and reporting using Laravel and PHP.', pt: 'Construção de plataformas internas para documentação e reporting utilizando Laravel e PHP.' },

  // Portfolio
  portfolio_label: { en: '03. Portfolio', pt: '03. Portfólio' },
  portfolio_title: { en: 'GitHub Repositories', pt: 'Repositórios GitHub' },
  portfolio_fetching: { en: 'Fetching Repositories...', pt: 'A carregar repositórios...' },
  portfolio_mixed: { en: 'Mixed', pt: 'Misto' },
  portfolio_default_desc: { en: 'Modern tool built for high performance and clean architecture.', pt: 'Ferramenta moderna construída para alta performance e arquitectura limpa.' },

  // Contact
  contact_label: { en: '04. Contact', pt: '04. Contacto' },
  contact_title_1: { en: "Let's Build", pt: 'Vamos Construir' },
  contact_title_2: { en: 'Something Great.', pt: 'Algo Fantástico.' },
  contact_desc: { en: 'Always open to discussing new architectural challenges, creative ideas or strategic opportunities.', pt: 'Sempre aberto a discutir novos desafios arquitecturais, ideias criativas ou oportunidades estratégicas.' },
  contact_direct_email: { en: 'Direct Email', pt: 'Email Directo' },
  contact_back_top: { en: 'Back to top', pt: 'Voltar ao topo' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
