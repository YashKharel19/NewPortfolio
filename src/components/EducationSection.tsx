import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-950 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp;{' '}
            <span className="text-emerald-700">
              Core Disciplines
            </span>
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            The dual foundation that anchors strategic executive decisions with rigorous technical problem-solving.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((item, idx) => {
            const isMba = item.id === 'mba';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className={`rounded-3xl bg-white border-2 p-6 sm:p-8 flex flex-col justify-between transition-all shadow-xl ${
                  isMba 
                    ? 'border-orange-200/90 hover:border-orange-400 shadow-orange-950/5' 
                    : 'border-emerald-200/90 hover:border-emerald-400 shadow-emerald-950/5'
                }`}
              >
                <div>
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-start gap-3.5">
                      <div className={`p-3.5 rounded-2xl border shrink-0 mt-0.5 shadow-sm ${
                        isMba 
                          ? 'bg-orange-50 border-orange-200 text-orange-600' 
                          : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      }`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wider ${
                          isMba 
                            ? 'bg-orange-100 text-orange-950 border-orange-200' 
                            : 'bg-emerald-100 text-emerald-950 border-emerald-200'
                        }`}>
                          {item.id === 'mba' ? 'Postgraduate Executive Degree' : 'Undergraduate Engineering Degree'}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1.5 leading-snug">
                          {item.degree}
                        </h3>
                        <p className={`text-sm font-bold mt-1 ${isMba ? 'text-orange-700' : 'text-emerald-700'}`}>
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 py-4 font-medium border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <MapPin className={`w-3.5 h-3.5 ${isMba ? 'text-orange-600' : 'text-emerald-600'}`} />
                      <span>{item.location}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className={`w-3.5 h-3.5 ${isMba ? 'text-orange-600' : 'text-emerald-600'}`} />
                      <span>{item.period}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <Award className={`w-3.5 h-3.5 ${isMba ? 'text-orange-600' : 'text-emerald-600'}`} />
                      <span className="font-bold text-slate-900">{item.credentials}</span>
                    </div>
                  </div>

                  {/* Narrative Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4">
                    {item.summary}
                  </p>

                  {/* Focus Areas & Coursework */}
                  <div className="mt-4 pt-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                      <BookOpen className={`w-3.5 h-3.5 ${isMba ? 'text-orange-600' : 'text-blue-600'}`} />
                      <span>Key Focus Areas:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.courseworkAndFocus.map((focus, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isMba ? 'text-orange-600' : 'text-emerald-600'}`} />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
