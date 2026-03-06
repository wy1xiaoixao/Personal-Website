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
  Languages
} from 'lucide-react';

type Language = 'en' | 'cn';

const translations = {
  en: {
    hero: {
      hi: "Hi, I'm",
      name: "Xiao Xiao",
      subtitle: "A multidisciplinary Product Builder & Operator with a background in Business, Law, and Linguistics.",
      aboutMe: "About Me"
    },
    bento: {
      backgroundLabel: "Multidisciplinary Background",
      backgroundTitle: ["Bridging", "Business", "Law", "Linguistics"],
      quote: "I bridge the gap between complex data and intuitive AI-driven experiences.",
      toolkitLabel: "My Toolkit"
    },
    work: {
      title: "Featured Work",
      subtitle: "Selected projects showcasing product thinking, data-driven growth, and AI operations.",
      projectsCount: "03 PROJECTS",
      labels: {
        challenge: "The Challenge",
        impact: "The Impact",
        conversion: "Conversion Boost"
      },
      projects: [
        {
          role: "Product Manager Intern",
          company: "TAL (学而思)",
          tag: "CRM System 2.0 | Automated Workflows | SQL",
          challenge: "Transforming the CRM system to boost lead conversion during the Double 11 campaign.",
          impact: "Achieved a 15% increase in high-intent customer store visits and boosted overall order conversion to 12%."
        },
        {
          role: "Product Operations (AI Agent)",
          company: "PatSnap (智慧芽)",
          tag: "AI Agent | A/B Testing | User Growth",
          challenge: "Optimizing the onboarding and conversion funnel for an AI Agent product.",
          impact: "Lifted landing page conversion rate by 15% and increased average dwell time by over 15 seconds.",
          stat: "+15%"
        },
        {
          role: "AI Feature Product Design",
          company: "Scanner App (Independent)",
          tag: "OCR + LLM | UX Prototyping (Figma)",
          challenge: "Unifying scattered AI entry points to create a seamless document processing experience.",
          impact: "Designed an AI-powered homepage module that integrates OCR and LLM capabilities for complex document processing."
        }
      ]
    },
    manual: {
      title: ["Beyond", "the Screen"],
      quote: "I believe the best products are built by people who deeply observe life.",
      items: [
        { title: "Capturing stories", desc: "through my camera lens on the road, observing human interaction." },
        { title: "Smashing shuttlecocks", desc: "on the badminton court—a great way to reset my brain and maintain energy." },
        { title: "Experimenting in the kitchen", desc: "where cooking is just another form of product development—mixing for the perfect UX." }
      ]
    },
    footer: {
      title: ["Let's build something", "great together."],
      subtitle: "Currently open for new opportunities in Product Management and Growth Operations.",
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
      subtitle: "跨学科背景的产品构建者，致力于通过商业洞察、法律逻辑与语言学思维驱动产品创新。",
      aboutMe: "查看作品"
    },
    bento: {
      backgroundLabel: "多学科背景",
      backgroundTitle: ["融合", "商业洞察", "法律逻辑", "语言学思维"],
      quote: "我致力于在复杂的数据逻辑与直觉化的 AI 交互体验之间搭建桥梁。",
      toolkitLabel: "专业技能"
    },
    work: {
      title: "精选作品",
      subtitle: "精选项目案例，涵盖产品策略、数据驱动增长及 AI 场景落地。",
      projectsCount: "03 个项目",
      labels: {
        challenge: "核心挑战",
        impact: "项目产出",
        conversion: "增长指标"
      },
      projects: [
        {
          role: "产品经理 (实习)",
          company: "好未来 (学而思)",
          tag: "CRM 系统 2.0 | 自动化工作流 | SQL",
          challenge: "双11大促期间主导 CRM 系统迭代，优化销售线索转化链路。",
          impact: "高意向客户到店率提升 15%，整体订单转化率提升至 12%。"
        },
        {
          role: "产品运营 (AI 智能体)",
          company: "智慧芽 (PatSnap)",
          tag: "AI Agent | A/B 测试 | 用户增长",
          challenge: "负责 AI Agent 产品的用户旅程优化，提升入职转化与留存漏斗。",
          impact: "落地页转化率提升 15%，平均停留时间增加超过 15 秒。",
          stat: "+15%"
        },
        {
          role: "AI 创新产品设计",
          company: "扫描全能王 (个人项目)",
          tag: "OCR + LLM | UX 原型设计 (Figma)",
          challenge: "整合分散的 AI 功能入口，构建一站式智能文档处理体验。",
          impact: "设计了 AI 驱动的智能模块，深度集成 OCR 与 LLM 能力，实现复杂文档的高效处理。"
        }
      ]
    },
    manual: {
      title: ["生活", "切片"],
      quote: "我相信，卓越的产品洞察源于对生活细致入微的观察与热爱。",
      items: [
        { title: "故事捕捉", desc: "通过镜头记录旅途，在光影间观察人与社会的微妙互动。" },
        { title: "能量重启", desc: "在羽毛球场上挥洒汗水——这是我保持精力与专注的独特方式。" },
        { title: "厨房实验室", desc: "烹饪是另一种形式的产品开发——在调味与火候间追求极致体验。" }
      ]
    },
    footer: {
      title: ["期待与您", "共同构建未来。"],
      subtitle: "目前正在寻求产品经理或产品增长相关的职业机会。",
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
          className="text-accent-deep-blue font-serif text-xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {translations[lang].hero.name}
        </motion.div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-accent-deep-blue/70">
            <a href="#work" className="hover:text-accent-deep-blue transition-colors">{t.work}</a>
            <a href="#about" className="hover:text-accent-deep-blue transition-colors">{t.about}</a>
            <a href="#footer" className="hover:text-accent-deep-blue transition-colors">{t.contact}</a>
          </div>
          
          <div className="h-4 w-[1px] bg-accent-deep-blue/10 hidden md:block"></div>
          
          <button
            onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
            className="flex items-center gap-2 text-accent-deep-blue font-bold text-xs uppercase tracking-tighter hover:opacity-70 transition-opacity"
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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-20 pb-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-highlight/5 rounded-full blur-3xl -z-10"
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
            src="/portrait.jpg" 
            alt="Xiao Xiao Portrait" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 border-2 border-dashed border-accent-blue/20 rounded-full"
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
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tight text-accent-deep-blue mb-6"
        >
          {t.hi} <span className="text-accent-highlight inline-block">{t.name}</span>
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-accent-deep-blue font-medium max-w-3xl mx-auto mb-10 opacity-80"
        >
          {t.subtitle}
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#work" 
            className="inline-flex items-center justify-center gap-2 bg-accent-deep-blue text-white px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-xl"
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
    <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]"
      >
        {/* Box 1: Background */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 bg-accent-deep-blue text-white rounded-[40px] p-10 shadow-sm flex flex-col justify-center items-start text-left relative overflow-hidden group"
        >
          <div className="relative z-10">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-bold">{t.backgroundLabel}</p>
            <div className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              {t.backgroundTitle[0]} <span className="text-accent-yellow italic">{t.backgroundTitle[1]}</span>, <br/> 
              <span className="text-accent-orange italic">{t.backgroundTitle[2]}</span> & <span className="text-accent-sage italic">{t.backgroundTitle[3]}</span>
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
          className="bg-accent-yellow rounded-[40px] p-10 shadow-sm flex flex-col justify-center text-text-primary"
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
            {['Figma', 'SQL', 'React', 'Python', 'X-mind', 'CapCut', 'Tableau', 'Notion'].map((tech, i) => (
              <motion.span 
                key={tech} 
                whileHover={{ y: -5, backgroundColor: 'var(--color-accent-blue)', color: 'white', scale: 1.1 }}
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
        scale: 1.02, 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      className="group relative bg-card-light rounded-[50px] p-8 md:p-16 shadow-sm border border-black/5 overflow-hidden transition-all duration-500"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-4 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-xs font-bold uppercase tracking-widest">
            {project.tag.split(' | ')[0]}
          </span>
          <span className="text-text-secondary text-sm font-medium">{project.company}</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-serif font-medium mb-8 text-text-primary leading-tight flex items-center gap-4">
          {project.icon && (
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <project.icon className="text-accent-blue" size={40} />
            </motion.div>
          )}
          {project.role}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">{t.challenge}</h4>
            <p className="text-text-primary/80 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">{t.impact}</h4>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium text-text-primary leading-relaxed">{project.impact}</p>
              {project.stat && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-accent-orange/10 p-4 rounded-2xl border border-accent-orange/20 inline-block"
                >
                  <div className="text-3xl font-bold text-accent-orange">{project.stat}</div>
                  <div className="text-xs text-accent-orange font-bold uppercase tracking-wider">{t.conversion}</div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background element for hover */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl group-hover:bg-accent-blue/10 transition-colors duration-500 -z-0" />
    </motion.div>
  );
};

const FeaturedWork = ({ lang }: any) => {
  const t = translations[lang].work;
  const icons = [Database, Rocket, Layout];
  const projects = t.projects.map((p, i) => ({ ...p, icon: icons[i] }));

  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-32 max-w-7xl mx-auto">
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
    <section className="bg-section-lively py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-serif mb-10 text-accent-deep-blue leading-tight">{t.title[0]} <br/> {t.title[1]}</h2>
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
                  className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center shrink-0 text-accent-blue shadow-sm border border-accent-blue/10 group-hover:bg-accent-blue group-hover:text-white transition-all duration-500"
                >
                  <Icon size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-accent-deep-blue">{item.title}</h3>
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
    <footer className="bg-bg-main py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-text-primary">{t.title[0]} <br/> {t.title[1]}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-xl leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>
        
        <div className="flex gap-8 mb-24">
          {[Linkedin, Mail, Github].map((Icon, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              href="#" 
              className="w-16 h-16 rounded-[24px] bg-white shadow-sm flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-white transition-all duration-300"
            >
              <Icon size={28} />
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
    <div className="bg-bg-main min-h-screen selection:bg-accent-yellow selection:text-text-primary">
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
