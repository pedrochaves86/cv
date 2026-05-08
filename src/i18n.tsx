import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en-us' | 'pt-pt';

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

const translations: Translations = {
  // Header
  nav_about: { 'en-us': 'About Me', 'pt-pt': 'Sobre Mim' },
  nav_experience: { 'en-us': 'Experience', 'pt-pt': 'Experiência' },
  nav_portfolio: { 'en-us': 'Portfolio', 'pt-pt': 'Portfólio' },
  nav_contact: { 'en-us': 'Contact', 'pt-pt': 'Contacto' },
  status_available: { 'en-us': 'Available for tech leadership & strategic roles', 'pt-pt': 'Disponível para liderança técnica e funções estratégicas' },
  
  // Hero
  hero_title_main: { 'en-us': 'Pedro Chaves', 'pt-pt': 'Pedro Chaves' },
  hero_title_accent: { 'en-us': 'Technical Lead', 'pt-pt': 'Technical Lead' },
  hero_desc: { 'en-us': 'Leading engineering teams and architecture for business-critical applications. Specialized in Angular, Java, PHP & Cloud (GCP) with a focus on software quality and technical sustainability.', 'pt-pt': 'Liderança de equipas de engenharia e arquitetura para aplicações críticas de negócio. Especialista em Angular, Java, PHP e Cloud (GCP) com foco na qualidade de software e sustentabilidade técnica.' },
  hero_cta_portfolio: { 'en-us': 'View Portfolio', 'pt-pt': 'Ver Portfólio' },
  hero_cta_cv: { 'en-us': 'Download CV', 'pt-pt': 'Download CV' },
  hero_location: { 'en-us': 'Ponta Delgada, Portugal', 'pt-pt': 'Ponta Delgada, Portugal' },
  hero_collaborations: { 'en-us': 'Collaborations', 'pt-pt': 'Colaborações' },
  hero_projects_count: { 'en-us': '+12 Projects', 'pt-pt': '+12 Projetos' },

  // About Me
  about_me_label: { 'en-us': '01. About Me', 'pt-pt': '01. Sobre Mim' },
  about_me_title: { 'en-us': 'Beyond the', 'pt-pt': 'Para além da' },
  about_me_stack: { 'en-us': 'Technical Stack.', 'pt-pt': 'Stack Técnica.' },
  about_me_quote: { 'en-us': '"I genuinely enjoy building systems that are clean, scalable, and built to last. I value clarity, ownership, and a positive working environment."', 'pt-pt': '"Gosto genuinamente de construir sistemas limpos, escaláveis e feitos para durar. Valorizo clareza, responsabilidade e um ambiente de trabalho positivo."' },
  about_me_p1: { 
    'en-us': 'Hi, I’m Pedro — a tech lead who enjoys turning complex problems into simple, well-structured solutions. I work mostly with Angular, Java, PHP, and cloud technologies, and I genuinely enjoy building systems that are clean, scalable, and built to last.', 
    'pt-pt': 'Olá, sou o Pedro — um Technical Lead que gosta de transformar problemas complexos em soluções simples e bem estruturadas. Trabalho maioritariamente com Angular, Java, PHP e tecnologias cloud, e gosto genuinamente de construir sistemas limpos, escaláveis e feitos para durar.' 
  },
  about_me_p2: { 
    'en-us': 'I like to combine technical depth with a practical mindset. For me, good software isn’t just about writing code — it’s about making thoughtful decisions, supporting the team, and creating solutions that make sense in the real world. I value clarity, ownership, and a positive working environment where people can grow and collaborate.', 
    'pt-pt': 'Gosto de combinar profundidade técnica com uma mentalidade prática. Para mim, bom software não é apenas escrever código — trata-se de tomar decisões ponderadas, apoiar a equipa e criar soluções que façam sentido no mundo real. Valorizo a clareza, o compromisso e um ambiente de trabalho positivo onde as pessoas possam crescer e colaborar.' 
  },
  about_me_p3: { 
    'en-us': 'I’m based in the Azores, which probably explains why I enjoy being outdoors as much as being behind a screen. In my free time, you’ll usually find me hiking scenic trails, taking part in trail running events, or training at the gym. I like challenges — whether they involve elevation gain or a production deployment.', 
    'pt-pt': 'Estou sediado nos Açores, o que provavelmente explica porque gosto tanto de estar ao ar livre como em frente a um ecrã. No meu tempo livre, costumo fazer caminhadas por trilhos panorâmicos, participar em eventos de trail running ou treinar no ginásio. Gosto de desafios — quer envolvam desnível positivo ou uma implementação em produção.' 
  },
  about_me_p4: { 
    'en-us': 'Curious by nature and optimistic by default, I’m always looking for ways to improve, learn something new, and build things that matter.', 
    'pt-pt': 'Curioso por natureza e otimista por defeito, estou sempre à procura de formas de melhorar, aprender algo novo e construir coisas que importam.' 
  },
  about_me_p5: { 
    'en-us': 'If you’re into clean architecture, continuous improvement, and working with someone who brings both focus and good energy to the table — we’ll get along just fine.', 
    'pt-pt': 'Se gosta de arquitetura limpa, melhoria contínua e de trabalhar com alguém que traz foco e boa energia — vamos dar-nos muito bem.' 
  },

  // Experience
  exp_label: { 'en-us': '02. Experience', 'pt-pt': '02. Experiência' },
  exp_title_main: { 'en-us': 'Engineering', 'pt-pt': 'Engenharia de' },
  exp_title_accent: { 'en-us': 'Mission-Critical Systems.', 'pt-pt': 'Sistemas Críticos.' },
  exp_p1: { 
    'en-us': 'As a Technical Lead at EDP, I specialize in transforming complex business requirements into efficient, scalable, and reliable engineering solutions.', 
    'pt-pt': 'Como Technical Lead na EDP, especializei-me em transformar requisitos de negócio complexos em soluções de engenharia eficientes, escaláveis e fiáveis.' 
  },
  exp_p2: { 
    'en-us': 'My background spans the full application lifecycle—from architectural design and CI/CD implementation to platform governance and performance optimization. I act as a bridge between development teams and business stakeholders to ensure technical excellence.', 
    'pt-pt': 'O meu percurso abrange todo o ciclo de vida da aplicação — desde o design arquitectural e implementação de CI/CD até à governança da plataforma e optimização de performance. Actuo como uma ponte entre as equipas de desenvolvimento e os stakeholders do negócio para garantir a excelência técnica.' 
  },
  exp_timeline_title: { 'en-us': 'Experience', 'pt-pt': 'Experiência' },
  exp_present: { 'en-us': 'Present', 'pt-pt': 'Presente' },
  exp_sep: { 'en-us': 'Sep', 'pt-pt': 'Set' },
  exp_aug: { 'en-us': 'Aug', 'pt-pt': 'Ago' },
  exp_jul: { 'en-us': 'Jul', 'pt-pt': 'Jul' },
  exp_jun: { 'en-us': 'Jun', 'pt-pt': 'Jun' },
  exp_apr: { 'en-us': 'Apr', 'pt-pt': 'Abr' },
  exp_may: { 'en-us': 'May', 'pt-pt': 'Mai' },

  // Roles
  role_tech_lead: { 'en-us': 'Technical Lead', 'pt-pt': 'Technical Lead' },
  role_angular_dev: { 'en-us': 'Angular Developer', 'pt-pt': 'Developer Angular' },
  role_laravel_it: { 'en-us': 'Laravel Developer | IT Manager', 'pt-pt': 'Developer Laravel | IT Manager' },

  // Role descriptions
  desc_edp: { 'en-us': 'Technical leadership of critical applications, ensuring performance, security and architectural integrity.', 'pt-pt': 'Liderança técnica de aplicações críticas, garantindo performance, segurança e integridade arquitectural.' },
  desc_natixis: { 'en-us': 'Developed reusable Angular components and supported UX/UI alignment for global engineering teams.', 'pt-pt': 'Desenvolvimento de componentes Angular reutilizáveis e suporte no alinhamento de UX/UI para equipas de engenharia globais.' },
  desc_pmacores: { 'en-us': 'Developed a new ERP system replacing legacy applications and introduced frontend engineering best practices.', 'pt-pt': 'Desenvolvimento de um novo sistema ERP em substituição de aplicações legadas e introdução de boas práticas de engenharia de frontend.' },
  desc_nos: { 'en-us': 'Built internal platforms for documentation and reporting using Laravel and PHP.', 'pt-pt': 'Construção de plataformas internas para documentação e reporting utilizando Laravel e PHP.' },

  // Portfolio
  portfolio_label: { 'en-us': '03. Portfolio', 'pt-pt': '03. Portfólio' },
  portfolio_title: { 'en-us': 'GitHub Repositories', 'pt-pt': 'Repositórios GitHub' },
  portfolio_fetching: { 'en-us': 'Fetching Repositories...', 'pt-pt': 'A carregar repositórios...' },
  portfolio_mixed: { 'en-us': 'Mixed', 'pt-pt': 'Misto' },
  portfolio_default_desc: { 'en-us': 'Modern tool built for high performance and clean architecture.', 'pt-pt': 'Ferramenta moderna construída para alta performance e arquitectura limpa.' },

  // Contact
  contact_label: { 'en-us': '04. Contact', 'pt-pt': '04. Contacto' },
  contact_title_1: { 'en-us': "Let's Build", 'pt-pt': 'Vamos Construir' },
  contact_title_2: { 'en-us': 'Something Great.', 'pt-pt': 'Algo Fantástico.' },
  contact_desc: { 'en-us': 'Always open to discussing new architectural challenges, creative ideas or strategic opportunities.', 'pt-pt': 'Sempre aberto a discutir novos desafios arquitecturais, ideias criativas ou oportunidades estratégicas.' },
  contact_direct_email: { 'en-us': 'Direct Email', 'pt-pt': 'Email Directo' },
  contact_back_top: { 'en-us': 'Back to top', 'pt-pt': 'Voltar ao topo' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en-us');

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
