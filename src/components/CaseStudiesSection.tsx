import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  Maximize2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { CaseStudy } from '../types';

export const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState<string>(portfolioData.caseStudies[0].id);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const currentCase = portfolioData.caseStudies.find((c) => c.id === activeTab) || portfolioData.caseStudies[0];

  return (
    <section id="case-studies" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-400/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
              Strategic Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Operational Impact &amp; Venture Growth
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Measurable commercial results, automated operations, and program scaling delivered across Canada and international markets.
            </p>
          </div>

          {/* Navigation Pill Switcher */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800 w-fit">
            {portfolioData.caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === study.id
                    ? 'bg-teal-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {study.organization}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl"
          >
            {/* Top Bar info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-semibold uppercase tracking-wider">
                  {currentCase.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {currentCase.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 mt-1 font-medium">
                  {currentCase.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  <span className="font-semibold text-slate-200">{currentCase.organization}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>{currentCase.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{currentCase.period}</span>
                </div>
              </div>
            </div>

            {/* Metrics Callout Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {currentCase.impactMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </span>
                  <div className="text-2xl font-bold text-teal-300 mt-1">
                    {metric.value}
                  </div>
                  <span className="text-xs text-slate-400 mt-1">
                    {metric.context}
                  </span>
                </div>
              ))}
            </div>

            {/* Deep-Dive Grid: Challenge & Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
              {/* Left: Overview & Challenge */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    <Target className="w-4 h-4 text-teal-400" />
                    <span>The Context &amp; Challenge</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                    {currentCase.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span>Quantified Results</span>
                  </div>
                  <ul className="space-y-2.5">
                    {currentCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Strategy & Execution Steps */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  <TrendingUp className="w-4 h-4 text-teal-400" />
                  <span>Strategic Implementation &amp; Tactics</span>
                </div>

                <div className="space-y-3">
                  {currentCase.strategy.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400 shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6">
                  {currentCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
