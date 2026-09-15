import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Sliders, 
  BarChart3, 
  Users, 
  Layers, 
  Terminal,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap: Record<string, any> = {
    TrendingUp,
    Sliders,
    BarChart3,
    Users,
    Layers,
    Terminal
  };

  const displayedCategories =
    activeCategory === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-400/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
            Core Competencies &amp; Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Strategic Pillars &amp; Functional Expertise
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            A comprehensive matrix of executive business development, operational scaling frameworks, performance marketing, and technical systems leadership.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-teal-400 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              All Competencies
            </button>
            {portfolioData.skills.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-teal-400 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Briefcase;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed min-h-[36px]">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900/90 text-slate-200 border border-slate-800/80 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
                      >
                        <CheckCircle className="w-3 h-3 text-teal-400/80 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Executive Applied Toolkit</span>
                  <span className="text-teal-400 font-semibold">{category.skills.length} Competencies</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Callout: Why The MBA + CS Intersection Matters */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Strategic Synergy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Technical Background Supercharges Business Development
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Many business development professionals lack insight into software constraints, while engineering teams often struggle with commercial pricing models and client discovery. Having an <strong>MBA from Queen Margaret University</strong> and a <strong>B.Sc. in Computer Science</strong> allows Yash to speak the native language of both product developers and C-level buyers, translating complex technical capability into high-margin revenue agreements.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 justify-center p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-semibold text-slate-200">Key Execution Strengths:</div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Zero translation friction with dev teams</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Real-time data modeling &amp; KPI analytics</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Automated CRM pipelines &amp; booking engines</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
