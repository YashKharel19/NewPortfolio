import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';
import {
  SiAngular,
  SiReact,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { siteContent, TechIconItem } from '../content';
import { playClickSound, playAchievementSound } from '../utils/soundEffects';

export const AnimatedTechStack = () => {
  const { techStackIcons } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [animationMode, setAnimationMode] = useState<'float' | 'pulse'>('float');
  const [hoveredTech, setHoveredTech] = useState<TechIconItem | null>(null);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(techStackIcons.map((t) => t.category)))];

  const filteredIcons = activeCategory === 'All'
    ? techStackIcons
    : techStackIcons.filter((t) => t.category === activeCategory);

  // Helper to render the tech's original brand logo
  const renderIcon = (iconName: string, color: string) => {
    const props = { className: 'w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300', style: { color } };
    switch (iconName) {
      case 'Java':
        return <DiJava {...props} />;
      case 'Angular':
        return <SiAngular {...props} />;
      case 'React':
        return <SiReact {...props} />;
      case 'TypeScript':
        return <SiTypescript {...props} />;
      case 'Python':
        return <SiPython {...props} />;
      case 'PostgreSQL':
        return <SiPostgresql {...props} />;
      case 'Tailwind':
        return <SiTailwindcss {...props} />;
      case 'Docker':
        return <SiDocker {...props} />;
      case 'Git':
        return <SiGit {...props} />;
      default:
        return <SiReact {...props} />;
    }
  };

  const handleTechClick = (tech: TechIconItem) => {
    playAchievementSound();
    setHoveredTech(tech);
  };

  return (
    <section id="tech-stack" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimal & Punchy */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-950 border border-orange-200 text-xs font-bold mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-orange-600" />
            <span>Engineering Stacks</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering &amp;{' '}
            <span className="text-emerald-700">
              Technology Matrix
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Selected engineering toolkits and languages leveraged across high-throughput production services.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => {
              const isSelected = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClickSound();
                    setActiveCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Animated Icon Grid: ONLY ICONS! */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence>
            {filteredIcons.map((tech, index) => {
              // Alternate float delays for staggered organic wave motion
              const floatDelay = (index % 4) * 0.4;
              
              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{ animationDelay: `${floatDelay}s` }}
                  className={`group relative ${
                    animationMode === 'float' ? 'animate-float' : 'animate-pulse-glow'
                  }`}
                  onMouseEnter={() => setHoveredTech(tech)}
                  onClick={() => handleTechClick(tech)}
                >
                  {/* Glowing halo behind icon on hover */}
                  <div
                    className="absolute -inset-1.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500 pointer-events-none"
                    style={{ backgroundColor: tech.color, opacity: 0.2 }}
                  />

                  {/* Tactile Icon Card */}
                  <div className="relative bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-100 group-hover:border-orange-400 shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group-hover:-translate-y-2">
                    
                    {/* Floating Icon Frame with dynamic background tint */}
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: tech.bgGlow }}
                    >
                      {renderIcon(tech.iconName, tech.color)}
                    </div>

                    {/* Tech Name Label */}
                    <div className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-orange-600 transition-colors">
                      {tech.name}
                    </div>

                    {/* Category Sub-badge */}
                    <span className="text-[10px] font-bold text-slate-600 mt-1 px-2 py-0.5 rounded-md bg-slate-100 group-hover:bg-orange-50 group-hover:text-orange-800 transition-colors">
                      {tech.category}
                    </span>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Selected / Hovered Icon Status Ribbon in Orange & Emerald */}
        {hoveredTech && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-md mx-auto p-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-orange-200 shadow-sm text-center flex items-center justify-center gap-3 text-xs"
          >
            <div 
              className="w-3 h-3 rounded-full shrink-0" 
              style={{ backgroundColor: hoveredTech.color }} 
            />
            <span className="font-extrabold text-slate-900">{hoveredTech.name}</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold">{hoveredTech.category} Ecosystem</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-700 font-medium">Production Ready</span>
          </motion.div>
        )}

      </div>
    </section>
  );
};
