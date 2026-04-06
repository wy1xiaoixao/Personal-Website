import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  Camera, 
  Activity, 
  Utensils, 
  Scale, 
  TrendingUp, 
  Globe, 
  Lightbulb,
  ArrowUpRight,
  Briefcase,
  Smile,
  Coffee,
  Music,
  Code2,
  Rocket,
  Search,
  Database,
  Layout,
  Languages,
  Leaf
} from 'lucide-react';

type Language = 'en' | 'cn';

const translations = {
  en: {
    hero: {
      hi: "Hi, I'm",
      name: "Xiao Xiao",
      subtitle: "A multidisciplinary Product Builder & Growth Operator bridging Translation, Product, and AI Growth.",
      aboutMe: "View Work"
    },
    bento: {
      backgroundLabel: "Education & Background",
      backgroundTitle: ["Bridging", "Translation", "Product", "AI Growth"],
      education: [
        { school: "Zhongnan Univ. of Econ. & Law", degree: "Master in English Translation", date: "2024.09 - 2026.06", gpa: "GPA: 3.8 (Top 10%)" },
        { school: "Jiangxi Normal University", degree: "Bachelor in Business English", date: "2020.09 - 2024.06", gpa: "GPA: 3.9 (Top 3%)" }
      ],
      quote: "I bridge the gap between linguistic nuance and intuitive AI-driven product growth.",
      toolkitLabel: "My Toolkit"
    },
    work: {
      title: "Featured Work",
      subtitle: "Selected projects showcasing product thinking, data-driven growth, and AI operations.",
      projectsCount: "04 PROJECTS",
      labels: {
        challenge: "The Challenge",
        impact: "The Impact",
        conversion: "Key Result"
      },
      projects: [
        {
          role: "Product Manager Intern",
          company: "TAL (学而思)",
          tag: "Growth Strategy | CRM Optimization | SQL",
          challenge: "Designing group buying growth strategies and optimizing CRM systems for offline-to-online retail scenarios.",
          impact: "Achieved a 60% group order penetration rate and a 12% increase in offline store GMV through tiered subsidy mechanisms and automated lead flows.",
          stat: "+12% GMV"
        },
        {
          role: "AI Product Growth Intern",
          company: "PatSnap (智慧芽)",
          tag: "AI Agent | SEO Growth | A/B Testing",
          challenge: "Optimizing user growth funnels for AI products during the cold start phase.",
          impact: "Boosted landing page conversion by 15% and recovered natural traffic by 6% through SEO content restructuring and progressive form design.",
          stat: "+15% CVR"
        },
        {
          role: "AI Assistant Design",
          company: "Scanner App (Project)",
          tag: "OCR + LLM | UX Design | Monetization",
          challenge: "Reconstructing the document processing workflow by integrating an AI assistant to reduce user friction.",
          impact: "Designed an AI-powered 'Lightweight Understanding' module and monetization hooks like one-click mind map exports, driving core product value.",
          stat: "AI-First"
        },
        {
          role: "Independent Creator",
          company: "Spring Brings All Things to Life",
          tag: "UI/UX | Independent Dev | Emotional Value",
          challenge: "Traditional productivity tools often feel cold and pressuring; creating a more immersive, healing experience.",
          impact: "Integrated task completion with virtual plant growth, creating a 'Task → Growth → Feedback' loop. Gained 10+ active users organically.",
          stat: "10+ Users"
        }
      ]
    },
    manual: {
      title: ["Beyond", "the Screen"],
      quote: "I believe the best products are built by people who deeply observe life and communicate across disciplines.",
      items: [
        { title: "Visual Storytelling", desc: "Capturing the interplay of light and shadow through my lens—observing the subtle interactions between people and society." },
        { title: "Energy Reset", desc: "On the badminton court—a high-intensity way to reset my brain and maintain peak focus." },
        { title: "Culinary Curator", desc: "Viewing cooking as sensory product design—meticulously balancing ingredients and timing to deliver a delightful 'user' experience." }
      ]
    },
    footer: {
      title: ["Let's build something", "great together."],
      subtitle: "",
      copyright: "Designed with intent."
    },
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact"
    }
  },
  cn: {
    hero: {
      hi: "你好，我是",
      name: "小小",
      subtitle: "跨学科背景的产品构建者与增长运营，致力于通过翻译思维、产品逻辑与 AI 场景落地驱动产品创新。",
      aboutMe: "查看作品"
    },
    bento: {
      backgroundLabel: "教育与多学科背景",
      backgroundTitle: ["融合", "翻译思维", "产品逻辑", "AI 增长"],
      education: [
        { school: "中南财经政法大学 (211)", degree: "英语笔译硕士", date: "2024.09 - 2026.06", gpa: "GPA: 3.8 (专业 Top 10%)" },
        { school: "江西师范大学", degree: "商务英语本科", date: "2020.09 - 2024.06", gpa: "GPA: 3.9 (专业 Top 3%)" }
      ],
      quote: "我致力于在语言的微妙差异与直觉化的 AI 增长策略之间搭建桥梁。",
      toolkitLabel: "专业技能"
    },
    work: {
      title: "精选作品",
      subtitle: "精选项目案例，涵盖产品策略、数据驱动增长及 AI 场景落地。",
      projectsCount: "04 个项目",
      labels: {
        challenge: "核心挑战",
        impact: "项目产出",
        conversion: "核心结果"
      },
      projects: [
        {
          role: "产品经理 (实习)",
          company: "好未来 (学而思)",
          tag: "增长策略 | CRM 优化 | SQL",
          challenge: "围绕门店即时零售场景，设计拼团增长策略并推动 CRM 体系协同优化。",
          impact: "通过阶梯补贴机制与自动化线索流转，实现订单渗透率达 60%，带动线下门店 GMV 增长 12%。",
          stat: "+12% GMV"
        },
        {
          role: "AI 产品增长 (实习)",
          company: "智慧芽 (PatSnap)",
          tag: "AI Agent | SEO 增长 | A/B 测试",
          challenge: "负责 AI 产品冷启动阶段的用户增长链路优化，提升核心转化指标。",
          impact: "通过 SEO 内容重构与渐进式表单设计，落地页转化率提升 15%，自然流量回升 6%。",
          stat: "+15% 转化"
        },
        {
          role: "AI 智能助手设计",
          company: "文档扫描类 APP (项目)",
          tag: "OCR + LLM | UX 设计 | 商业化",
          challenge: "主导 AI 助手搭建，重构“识别到导出”的全链路文档处理体验。",
          impact: "确立“轻量化理解”产品定位，打造思维导图一键导出等高价值功能，作为核心付费触点驱动增收。",
          stat: "AI 驱动"
        },
        {
          role: "独立设计与开发",
          company: "「春生万物」待办记录工具",
          tag: "UI/UX | 独立开发 | 情绪价值",
          challenge: "针对传统效率工具重压迫感的痛点，探索治愈系、沉浸式的待办体验。",
          impact: "将任务完成度与虚拟植物成长绑定，构建“任务→成长→可视化反馈”激励闭环，累计获得 10+ 用户好评。",
          stat: "10+ 用户"
        }
      ]
    },
    manual: {
      title: ["生活", "切片"],
      quote: "我相信，卓越的产品洞察源于对生活细致入微的观察与跨学科的沟通热爱。",
      items: [
        { title: "光影捕捉", desc: "通过镜头记录旅途，在光影间观察人与社会的微妙互动。" },
        { title: "能量重启", desc: "在羽毛球场上挥洒汗水——这是我保持精力与专注的独特方式。" },
        { title: "厨房主理人", desc: "将烹饪视为一场感官驱动的产品设计——在食材的排列组合与火候的精准掌控中，构建极致的味蕾体验。" }
      ]
    },
    footer: {
      title: ["期待与你，", "创造更多精彩。"],
      subtitle: "",
      copyright: "用心设计，追求卓越。"
    },
    nav: {
      work: "作品",
      about: "关于",
      contact: "联系"
    }
  }
};

const Navbar = ({ lang, setLang }: any) => {
  const t = translations[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-text-primary font-serif text-xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {translations[lang].hero.name}
        </motion.div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-text-secondary">
            <a href="#work" className="hover:text-accent-olive transition-colors">{t.work}</a>
            <a href="#about" className="hover:text-accent-olive transition-colors">{t.about}</a>
            <a href="#footer" className="hover:text-accent-olive transition-colors">{t.contact}</a>
          </div>
          
          <div className="h-4 w-[1px] bg-text-secondary/10 hidden md:block"></div>
          
          <button
            onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
            className="flex items-center gap-2 text-text-primary font-bold text-xs uppercase tracking-tighter hover:opacity-70 transition-opacity"
          >
            <Languages size={16} />
            {lang === 'en' ? 'CN' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = ({ lang }: any) => {
  const t = translations[lang].hero;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-12 pb-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-accent-sage/10 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-olive/10 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 relative"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10"
        >
          <img 
            src="https://raw.githubusercontent.com/wy1xiaoixao/my-image/d0f58f980449afcaeafa39ff0ad269ab8e1d4a1b/20260306-163018.jpg" 
            alt="Xiao Xiao Portrait" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 border-2 border-dashed border-accent-sage/30 rounded-full"
        ></motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-12 relative z-10"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tight text-text-primary mb-6"
        >
          {t.hi} <span className="text-accent-olive italic inline-block">{t.name}</span>
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-text-secondary font-light max-w-3xl mx-auto mb-10 italic font-serif"
        >
          {t.subtitle}
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#work" 
            className="inline-flex items-center justify-center gap-2 bg-accent-olive text-white px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-xl"
          >
            {t.aboutMe}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const BentoBox = ({ lang }: any) => {
  const t = translations[lang].bento;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]"
      >
        {/* Box 1: Background & Education */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 bg-accent-olive text-white rounded-[40px] p-10 shadow-sm flex flex-col justify-between items-start text-left relative overflow-hidden group"
        >
          <div className="relative z-10 w-full">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-bold">{t.backgroundLabel}</p>
            <div className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-8">
              {t.backgroundTitle[0]} <span className="text-accent-gold italic">{t.backgroundTitle[1]}</span>, <br/> 
              <span className="text-accent-sage italic">{t.backgroundTitle[2]}</span> & <span className="text-accent-sage italic">{t.backgroundTitle[3]}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-6">
              {t.education.map((edu: any, i: number) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-tighter text-white/50 mb-1">{edu.date}</span>
                  <span className="font-bold text-sm leading-tight mb-1">{edu.school}</span>
                  <div className="flex flex-col text-[11px] text-white/70 italic leading-tight">
                    <span>{edu.degree}</span>
                    <span className="text-accent-gold/80 not-italic font-medium mt-1">{edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            animate={{ 
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
          >
            <Globe size={300} className="translate-x-1/4 -translate-y-1/4" />
          </motion.div>
        </motion.div>

        {/* Box 2: Quote */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.03, rotate: -1 }}
          className="bg-accent-gold rounded-[40px] p-10 shadow-sm flex flex-col justify-center text-text-primary"
        >
          <Lightbulb size={32} className="mb-4" />
          <p className="text-xl font-serif italic leading-relaxed">
            "{t.quote}"
          </p>
        </motion.div>

        {/* Box 3: Toolkit */}
        <motion.div 
          variants={item}
          className="md:col-span-3 bg-card-light rounded-[40px] p-10 shadow-sm flex flex-col justify-center border border-black/5"
        >
          <div className="text-sm text-text-secondary uppercase tracking-widest font-bold mb-8">{t.toolkitLabel}</div>
          <div className="flex flex-wrap gap-4 items-center">
            {['SQL', 'Excel', 'Axure', 'Modao', 'Figma', 'Xmind', 'LLM', 'Prompt', 'TEM-8', 'CATTI-2', 'Junior Accountant'].map((tech, i) => (
              <motion.span 
                key={tech} 
                whileHover={{ y: -5, backgroundColor: 'var(--color-accent-sage)', color: 'white', scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-bg-main rounded-full text-text-primary font-bold border border-black/5 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const WorkCard = ({ project, lang, index }: any) => {
  const t = translations[lang].work.labels;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.01, 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
      }}
      className="group relative bg-card-light rounded-[40px] p-8 md:p-12 shadow-sm border border-black/5 overflow-hidden transition-all duration-500"
    >
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="px-4 py-1 bg-accent-sage/20 text-accent-olive rounded-full text-[10px] font-bold uppercase tracking-widest">
            {project.tag.split(' | ')[0]}
          </span>
          <span className="text-text-secondary text-xs font-bold uppercase tracking-widest opacity-60">{project.company}</span>
        </div>
        
        <h3 className="text-2xl md:text-4xl font-serif font-medium mb-10 text-text-primary leading-tight flex items-center gap-4">
          {project.icon && (
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="shrink-0"
            >
              <project.icon className="text-accent-olive" size={32} />
            </motion.div>
          )}
          {project.role}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4 opacity-50">{t.challenge}</h4>
            <p className="text-text-primary/80 leading-relaxed text-sm md:text-base">{project.challenge}</p>
          </div>
          
          <div className="md:col-span-5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4 opacity-50">{t.impact}</h4>
            <p className="text-base md:text-lg font-medium text-text-primary leading-relaxed">{project.impact}</p>
          </div>
          
          <div className="md:col-span-3 flex md:justify-end items-start">
            {project.stat && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-accent-sage/10 p-6 rounded-3xl border border-accent-sage/20 w-full text-center md:text-left"
              >
                <div className="text-3xl font-bold text-accent-olive mb-1 tracking-tight">{project.stat}</div>
                <div className="text-[10px] text-accent-olive font-bold uppercase tracking-widest opacity-60">{t.conversion}</div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Decorative background element for hover */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent-olive/5 rounded-full blur-3xl group-hover:bg-accent-olive/10 transition-colors duration-500 -z-0" />
    </motion.div>
  );
};

const FeaturedWork = ({ lang }: any) => {
  const t = translations[lang].work;
  const icons = [Database, Rocket, Layout, Leaf];
  const projects = t.projects.map((p, i) => ({ ...p, icon: icons[i] }));

  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-text-primary">{t.title}</h2>
          <p className="text-text-secondary text-lg">{t.subtitle}</p>
        </div>
        <div className="text-text-secondary font-mono text-sm">/ {t.projectsCount}</div>
      </motion.div>
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <WorkCard key={index} project={project} lang={lang} index={index} />
        ))}
      </div>
    </section>
  );
};

const ManualOfMe = ({ lang }: any) => {
  const t = translations[lang].manual;
  const icons = [Camera, Smile, Coffee];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-section-lively py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-serif mb-10 text-text-primary leading-tight">{t.title[0]} <br/> {t.title[1]}</h2>
          <p className="text-2xl text-text-secondary leading-relaxed font-serif italic max-w-lg">
            "{t.quote}"
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12"
        >
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-8 items-start group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center shrink-0 text-accent-sage shadow-sm border border-accent-sage/10 group-hover:bg-accent-sage group-hover:text-white transition-all duration-500"
                >
                  <Icon size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: any) => {
  const t = translations[lang].footer;
  return (
    <footer className="bg-bg-main py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-text-primary">{t.title[0]} <br/> {t.title[1]}</h2>
          {t.subtitle && (
            <p className="text-text-secondary max-w-2xl mx-auto text-xl leading-relaxed">
              {t.subtitle}
            </p>
          )}
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {[
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:18279784787@163.com", label: "18279784787@163.com" },
            { Icon: Github, href: "https://github.com/wy1xiaoixao", label: "GitHub" }
          ].map(({ Icon, href, label }, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              href={href}
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-3 px-6 h-16 rounded-[24px] bg-white shadow-sm text-text-primary hover:bg-text-primary hover:text-white transition-all duration-500 overflow-hidden"
            >
              <Icon size={24} className="flex-shrink-0" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-[300px] transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm tracking-tight">
                {label}
              </span>
            </motion.a>
          ))}
        </div>
        
        <div className="w-full pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-secondary font-bold tracking-widest text-xs uppercase">Xiao Xiao / Portfolio 2026</div>
          <div className="text-text-secondary/40 text-xs font-mono">
            © {new Date().getFullYear()} Xiao Xiao. {t.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="bg-bg-main min-h-screen selection:bg-accent-gold selection:text-text-primary">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <div id="about">
        <BentoBox lang={lang} />
      </div>
      <FeaturedWork lang={lang} />
      <ManualOfMe lang={lang} />
      <div id="footer">
        <Footer lang={lang} />
      </div>
    </div>
  );
}
