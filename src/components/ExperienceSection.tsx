import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Tag, 
  ChevronDown, 
  ChevronUp,
  Search,
  SlidersHorizontal,
  Briefcase,
  Download,
  FileText,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import { playClickSound } from '../utils/soundEffects';

interface ExperienceSectionProps {
  onOpenResume?: () => void;
}

export const ExperienceSection = ({ onOpenResume }: ExperienceSectionProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    lumasha: true,
    dlytica: true,
    bagisha: true
  });

  const toggleExpand = (id: string) => {
    playClickSound();
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    playClickSound();
    const allExpanded: Record<string, boolean> = {};
    portfolioData.experiences.forEach((exp) => {
      allExpanded[exp.id] = true;
    });
    setExpandedRoles(allExpanded);
  };

  const collapseAll = () => {
    playClickSound();
    setExpandedRoles({});
  };

  // Filter experiences
  const filteredExperiences = portfolioData.experiences.filter((exp) => {
    const matchesFilter = selectedFilter === 'all' || exp.category === selectedFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      exp.bulletPoints.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const filterTabs = [
    { id: 'all', label: 'All Roles', count: portfolioData.experiences.length },
    { id: 'business-development', label: 'Business Development', count: portfolioData.experiences.filter(e => e.category === 'business-development').length },
    { id: 'operations', label: 'Operations Scaling', count: portfolioData.experiences.filter(e => e.category === 'operations').length },
    { id: 'entrepreneurship', label: 'Ventures & Autopilot', count: portfolioData.experiences.filter(e => e.category === 'entrepreneurship').length },
    { id: 'leadership', label: 'Programs & Delivery', count: portfolioData.experiences.filter(e => e.category === 'leadership').length }
  ];

  return (
    <section id="experience" className="py-24 bg-white border-b border-teal-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CV Download Banner Callout (Addresses User's Explicit Request: "not whole cv just experience one can download cv seperately") */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">
                Looking for Yash&apos;s Comprehensive Official CV?
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Download the complete, printable document with detailed references, transcripts &amp; corporate achievements.
              </div>
            </div>
          </div>

          {onOpenResume && (
            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md shrink-0 hover:translate-y-[-1px]"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Download Official CV (PDF)</span>
            </button>
          )}
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-teal-600" />
              <span>Leadership Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive Career Highlights
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-2 leading-relaxed">
              Focused summary of 8+ years driving revenue, scaling autopilot systems, managing cross-functional teams, and expanding retail partnerships across Canada.
            </p>
          </div>

          {/* Quick controls */}
          <div className="flex items-center gap-3 text-xs font-bold">
            <button
              onClick={expandAll}
              className="text-teal-700 hover:text-teal-900 underline underline-offset-4"
            >
              Expand All
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={collapseAll}
              className="text-teal-700 hover:text-teal-900 underline underline-offset-4"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedFilter(tab.id);
                  playClickSound();
                }}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                  selectedFilter === tab.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  selectedFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, companies..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-400 shadow-sm"
            />
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {filteredExperiences.length === 0 ? (
            <div className="text-center py-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 text-sm">
              No positions matching &ldquo;{searchQuery}&rdquo;. Try clearing your search query.
            </div>
          ) : (
            filteredExperiences.map((exp) => {
              const isExpanded = !!expandedRoles[exp.id];

              return (
                <div
                  key={exp.id}
                  className={`rounded-3xl border-2 transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-white border-teal-300 shadow-xl shadow-teal-900/5'
                      : 'bg-slate-50/70 border-slate-200 hover:border-teal-200'
                  }`}
                >
                  {/* Card Header (clickable) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-teal-50/20 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                          {exp.period}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                            Current Role
                          </span>
                        )}
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {exp.category.replace('-', ' ')}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-teal-700 font-bold">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4 text-teal-600" />
                          <span>{exp.company}</span>
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1 text-slate-600 font-medium">
                          <MapPin className="w-4 h-4 text-teal-600" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      {/* Metric highlights preview */}
                      {exp.keyMetrics && exp.keyMetrics.length > 0 && (
                        <div className="hidden lg:flex items-center gap-2">
                          {exp.keyMetrics.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx} className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-center">
                              <div className="text-xs font-extrabold text-teal-900">{m.value}</div>
                              <div className="text-[10px] text-teal-700 font-semibold">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-800 flex items-center justify-center transition-colors"
                        aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-100 px-6 sm:px-7 pb-6 pt-5 bg-white"
                      >
                        {exp.summary && (
                          <p className="text-sm text-slate-700 leading-relaxed mb-5 font-normal bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            {exp.summary}
                          </p>
                        )}

                        {/* Bullet Points */}
                        <div className="space-y-3 mb-6">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                            Demonstrated Impact &amp; Deliverables:
                          </div>
                          {exp.bulletPoints.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{bullet}</span>
                            </div>
                          ))}
                        </div>

                        {/* Key Metrics row on mobile */}
                        {exp.keyMetrics && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                            {exp.keyMetrics.map((m, mIdx) => (
                              <div key={mIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="text-[10px] uppercase font-bold text-emerald-700">{m.label}</div>
                                <div className="text-sm font-extrabold text-slate-900 mt-0.5">{m.value}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                          <span className="text-[11px] font-bold text-slate-400 mr-1">Skills &amp; Stacks:</span>
                          {exp.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
