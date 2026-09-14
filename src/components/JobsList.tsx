import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Download, 
  Check, 
  Filter, 
  Columns3, 
  GitCommit, 
  Search 
} from 'lucide-react';
import { siteContent, JobItem } from '../content';
import { playClickSound, playMilestoneSound, playAchievementSound } from '../utils/soundEffects';
import { downloadResumePdf } from '../utils/generatePdfResume';

interface JobsListProps {
  onOpenResume: () => void;
}

export const JobsList = ({ onOpenResume }: JobsListProps) => {
  const { jobs } = siteContent;
  
  // Selected Job for the Dual-Panel Timeline (Left: Title, Right: Role)
  const [selectedJobId, setSelectedJobId] = useState<string>(jobs[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pdfDownloaded, setPdfDownloaded] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'split' | 'stream'>('split');

  // Categories list
  const categories = ['All', 'Leadership & Founding', 'Software Engineering', 'Enterprise Systems'];

  // Filtered jobs list
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory = 
        selectedCategory === 'All' || job.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        job.company.toLowerCase().includes(query) ||
        job.role.toLowerCase().includes(query) ||
        job.tags.some((t) => t.toLowerCase().includes(query)) ||
        job.bulletPoints.some((b) => b.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [jobs, selectedCategory, searchQuery]);

  // Keep active job valid if filtered
  const activeJob: JobItem = filteredJobs.find((j) => j.id === selectedJobId) || filteredJobs[0] || jobs[0];

  const handleSelectJob = (jobId: string) => {
    playClickSound();
    setSelectedJobId(jobId);
  };

  const handleDirectDownloadPdf = () => {
    playAchievementSound();
    const success = downloadResumePdf();
    if (success) {
      setPdfDownloaded(true);
      setTimeout(() => setPdfDownloaded(false), 3000);
    }
  };

  return (
    <section 
      id="jobs" 
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-orange-50/20 to-slate-50 relative overflow-hidden border-b border-orange-100"
    >
      {/* Background Subtle Gradient Blobs in Orange, Green, and Bluish */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-950 border border-orange-200 text-xs font-bold mb-3 shadow-xs">
            <GitCommit className="w-3.5 h-3.5 text-orange-600" />
            <span>Chronological Career Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Jobs &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-emerald-600 to-blue-600">
              What I Have Done
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto">
            Interactive timeline with titles in the left panel and detailed roles with what I have done in the right panel.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7 max-w-3xl mx-auto">
            <div className="p-3 rounded-2xl bg-white border border-orange-200/80 shadow-xs text-center">
              <div className="text-lg sm:text-xl font-black text-orange-600">8+ Years</div>
              <div className="text-[11px] font-semibold text-slate-500">Timeline Scope</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-blue-200/80 shadow-xs text-center">
              <div className="text-lg sm:text-xl font-black text-blue-600">100% Autopilot</div>
              <div className="text-[11px] font-semibold text-slate-500">Bagisha Venture</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-emerald-200/80 shadow-xs text-center">
              <div className="text-lg sm:text-xl font-black text-emerald-600">Live Apps</div>
              <div className="text-[11px] font-semibold text-slate-500">Lumasha Ecosystem</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-orange-200/80 shadow-xs text-center">
              <div className="text-lg sm:text-xl font-black text-orange-800">7 Milestones</div>
              <div className="text-[11px] font-semibold text-slate-500">Key Organizations</div>
            </div>
          </div>

          {/* Controls Bar: Category Filter, View Switcher & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-8 pt-4 border-t border-orange-100 max-w-5xl mx-auto">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 justify-center">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      playClickSound();
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-emerald-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-orange-50 border border-slate-200 hover:border-orange-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Layout Mode Toggle & Search */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              {/* Layout Switcher */}
              <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-xl p-0.5 shadow-xs">
                <button
                  onClick={() => {
                    playClickSound();
                    setViewMode('split');
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'split'
                      ? 'bg-orange-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Timeline split layout: Left Panel Title & Right Panel Role"
                >
                  <Columns3 className="w-3.5 h-3.5" />
                  <span>Split Timeline</span>
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setViewMode('stream');
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'stream'
                      ? 'bg-orange-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Continuous timeline stream"
                >
                  <GitCommit className="w-3.5 h-3.5" />
                  <span>Timeline Stream</span>
                </button>
              </div>

              {/* Search */}
              <div className="relative flex-1 md:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter timeline..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 text-slate-800 placeholder-slate-400"
                />
              </div>

              {/* Download PDF button */}
              <button
                onClick={handleDirectDownloadPdf}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-950 border border-orange-200 text-xs font-extrabold transition-all shadow-xs cursor-pointer shrink-0"
                title="Download official PDF resume"
              >
                {pdfDownloaded ? <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" /> : <Download className="w-3.5 h-3.5 text-orange-600" />}
                <span className="hidden sm:inline">{pdfDownloaded ? 'Saved!' : 'PDF CV'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MODE 1: TIMELINE WITH LEFT PANEL: TITLE & RIGHT PANEL: ROLE         */}
        {/* ==================================================================== */}
        {viewMode === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
            
            {/* ------------------------------------------------------------- */}
            {/* LEFT PANEL: TIMELINE TITLES & COMPANIES                       */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-orange-200/80 p-4 sm:p-5 shadow-lg shadow-orange-900/5">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-orange-950">
                    Left Panel &bull; Titles Timeline
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-500">
                  {filteredJobs.length} Positions
                </span>
              </div>

              {/* Connected Timeline Rail in Orange, Green, and Bluish */}
              <div className="relative pl-6 space-y-3">
                {/* Vertical spine */}
                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-emerald-500 to-blue-600" />

                {filteredJobs.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-500">
                    No timeline milestones matching filters.
                  </div>
                ) : (
                  filteredJobs.map((job) => {
                    const isSelected = activeJob.id === job.id;
                    return (
                      <div key={job.id} className="relative">
                        {/* Timeline Node Ring */}
                        <div 
                          className={`absolute -left-[19px] top-3.5 w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                            isSelected 
                              ? 'bg-orange-500 border-white ring-4 ring-orange-200 scale-125' 
                              : 'bg-white border-orange-400 group-hover:border-orange-600'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-orange-500'}`} />
                        </div>

                        {/* Title Card Button */}
                        <button
                          onClick={() => handleSelectJob(job.id)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-orange-50 to-blue-50/40 border-orange-400 shadow-sm ring-1 ring-orange-400/50'
                              : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-orange-200'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              {/* Period */}
                              <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-700">
                                <Calendar className="w-3 h-3 text-orange-600" />
                                <span>{job.period}</span>
                              </div>

                              {/* Title / Company */}
                              <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 leading-snug">
                                {job.company}
                              </div>

                              {/* Location */}
                              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium mt-0.5">
                                <MapPin className="w-3 h-3 text-slate-400" />
                                <span>{job.location}</span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-1 shrink-0">
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-orange-500 to-emerald-600 text-white' 
                                  : 'bg-slate-100 text-slate-700'
                              }`}>
                                {job.badge}
                              </span>
                              <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-orange-700 translate-x-0.5' : 'text-slate-300'}`} />
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between px-1">
                <span>Select any title to inspect role details</span>
                <span className="font-semibold text-orange-700">Click to preview &rarr;</span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* RIGHT PANEL: ROLE & DETAILS OF WHAT I HAVE DONE              */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-orange-200/80 p-6 sm:p-8 shadow-lg shadow-orange-900/5 min-h-[550px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJob.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Right Panel Header: Role Title & Meta */}
                  <div className="pb-5 border-b border-slate-100">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-950 border border-orange-200">
                        Right Panel &bull; Role Focus
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                        {activeJob.category}
                      </span>
                      {activeJob.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-950 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Active Role
                        </span>
                      )}
                    </div>

                    {/* The Primary Role Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {activeJob.role}
                    </h3>

                    {/* Company and Period Subline */}
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-orange-700 mt-1.5">
                      <span className="text-slate-900 font-extrabold flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-orange-600" />
                        {activeJob.company}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-slate-600 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {activeJob.location}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-orange-800 font-bold flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        {activeJob.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <div className="bg-gradient-to-r from-orange-50/60 to-blue-50/40 p-4 sm:p-5 rounded-2xl border border-orange-100">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-orange-950 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                      <span>Role Mandate &amp; Executive Focus</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-normal">
                      {activeJob.summary}
                    </p>
                  </div>

                  {/* DETAILS OF WHAT I HAVE DONE */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Details of What I Have Done:</span>
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {activeJob.bulletPoints.length} Key Deliverables
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {activeJob.bulletPoints.map((point, pIdx) => (
                        <li 
                          key={pIdx}
                          className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-orange-200 transition-colors"
                        >
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-extrabold">
                            {pIdx + 1}
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quantifiable Impact Metrics */}
                  {activeJob.keyMetrics && activeJob.keyMetrics.length > 0 && (
                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-500 mb-2">Quantifiable Milestones:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeJob.keyMetrics.map((metric, mIdx) => (
                          <div 
                            key={mIdx}
                            className="p-3 rounded-xl bg-gradient-to-r from-orange-50/80 to-blue-50/80 border border-orange-200/80 flex items-center justify-between"
                          >
                            <span className="text-xs text-slate-600 font-medium">{metric.label}</span>
                            <span className="text-sm font-black text-orange-950">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Applied Competencies Tags */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-500 mr-1">Applied Stacks:</span>
                      {activeJob.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Quick Navigation between Timeline Entries */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => {
                    const currentIndex = filteredJobs.findIndex((j) => j.id === activeJob.id);
                    if (currentIndex > 0) {
                      handleSelectJob(filteredJobs[currentIndex - 1].id);
                    }
                  }}
                  disabled={filteredJobs.findIndex((j) => j.id === activeJob.id) <= 0}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
                >
                  &larr; Previous Title
                </button>

                <span className="text-slate-400 font-medium text-[11px]">
                  Showing {filteredJobs.findIndex((j) => j.id === activeJob.id) + 1} of {filteredJobs.length}
                </span>

                <button
                  onClick={() => {
                    const currentIndex = filteredJobs.findIndex((j) => j.id === activeJob.id);
                    if (currentIndex < filteredJobs.length - 1) {
                      handleSelectJob(filteredJobs[currentIndex + 1].id);
                    }
                  }}
                  disabled={filteredJobs.findIndex((j) => j.id === activeJob.id) >= filteredJobs.length - 1}
                  className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 hover:bg-orange-100 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
                >
                  Next Title &rarr;
                </button>
              </div>

            </div>

          </div>
        )}

        {/* ==================================================================== */}
        {/* MODE 2: CONTINUOUS TIMELINE STREAM (EACH ROW HAS LEFT TITLE & RIGHT ROLE) */}
        {/* ==================================================================== */}
        {viewMode === 'stream' && (
          <div className="max-w-5xl mx-auto relative pl-4 sm:pl-0">
            {/* Central Timeline Spine on Desktop */}
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-emerald-500 to-blue-600" />
            
            {/* Mobile Spine */}
            <div className="sm:hidden absolute left-4 top-4 bottom-4 w-0.5 bg-orange-400" />

            <div className="space-y-8">
              {filteredJobs.map((job, idx) => {
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="relative sm:grid sm:grid-cols-12 sm:gap-8 items-start"
                  >
                    {/* LEFT PANEL: TITLE & COMPANY */}
                    <div className="sm:col-span-5 sm:text-right mb-3 sm:mb-0 pl-8 sm:pl-0">
                      <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-orange-200/80 shadow-sm inline-block w-full">
                        <div className="flex flex-wrap sm:justify-end items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-orange-100 text-orange-950 border border-orange-200">
                            {job.badge}
                          </span>
                          <span className="text-xs font-bold text-orange-700 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {job.period}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {job.company}
                        </h3>
                        <div className="text-xs text-slate-500 font-medium flex items-center sm:justify-end gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* CENTER TIMELINE NODE */}
                    <div className="hidden sm:flex sm:col-span-2 justify-center pt-5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-emerald-600 text-white border-4 border-white shadow-md flex items-center justify-center text-xs font-bold z-10">
                        {idx + 1}
                      </div>
                    </div>

                    {/* RIGHT PANEL: ROLE & WHAT I HAVE DONE */}
                    <div className="sm:col-span-5 pl-8 sm:pl-0">
                      <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-orange-200/80 shadow-md space-y-4">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-700 block">
                            Role Title
                          </span>
                          <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                            {job.role}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {job.summary}
                          </p>
                        </div>

                        {/* What I Have Done List */}
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                            What I Have Done:
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {job.bulletPoints.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metrics */}
                        {job.keyMetrics && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                            {job.keyMetrics.map((m, mIdx) => (
                              <span key={mIdx} className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-950">
                                {m.label}: {m.value}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Banner: Download CV (PDF) */}
        <div className="mt-14 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-orange-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Curriculum Vitae Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Need the Full Print-Ready PDF Resume?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Includes complete academic credentials, ventures, technology stacks, and references in an ATS-friendly format.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleDirectDownloadPdf}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-600 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              {pdfDownloaded ? <Check className="w-4 h-4 text-white stroke-[3]" /> : <Download className="w-4 h-4 text-white" />}
              <span>{pdfDownloaded ? 'Downloaded!' : 'Download CV (PDF)'}</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>View Online Reader</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
