import { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Linkedin, 
  Globe, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playAchievementSound } from '../utils/soundEffects';
import { downloadResumePdf } from '../utils/generatePdfResume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [copied, setCopied] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    playAchievementSound();
    const success = downloadResumePdf();
    if (success) {
      setPdfDownloaded(true);
      setTimeout(() => setPdfDownloaded(false), 3000);
    }
  };

  const handlePrint = () => {
    playClickSound();
    try {
      window.print();
    } catch (e) {
      downloadResumePdf();
    }
  };

  const getResumeText = () => {
    return `
YASH KHAREL
Co-Founder | Business Development | Senior Software Engineer | Ideator
MBA (Queen Margaret University, BSC computer science Kathmandu Univeristy)
Email: ${portfolioData.email} | Phone: ${portfolioData.phone} | Location: ${portfolioData.location}
LinkedIn: ${portfolioData.linkedinUrl} | GitHub: https://github.com/yash048 | Website: ${portfolioData.originalSiteUrl}

=======================================================
EXECUTIVE SUMMARY
=======================================================
${portfolioData.summary}

=======================================================
CORE COMPETENCIES & EXPERTISE
=======================================================
${portfolioData.skills.map((s) => `${s.title}: ${s.skills.join(', ')}`).join('\n')}

=======================================================
FEATURED VENTURES & PRODUCTS
=======================================================
• Lumasha (Educational Language Mobile App):
  - Google Play: https://play.google.com/store/apps/details?id=com.yash048.lumasha&hl=en_CA
  - Apple App Store: https://apps.apple.com/ca/app/lumasha/id6749781997
• Bagisha Reading Room (Founder & Operations): Scaled to 100% operational autopilot.
• Dlytica Inc: CRM, Data Lifecycle & Lead Funnel Optimization.

=======================================================
PROFESSIONAL EXPERIENCE & JOBS
=======================================================
${portfolioData.experiences
  .map(
    (e) => `
${e.role.toUpperCase()} — ${e.company} (${e.period})
Location: ${e.location}
Key Achievements:
${e.bulletPoints.map((b) => `  - ${b}`).join('\n')}
`
  )
  .join('\n')}

=======================================================
EDUCATION & CREDENTIALS
=======================================================
${portfolioData.education
  .map(
    (ed) => `
${ed.degree} — ${ed.institution} (${ed.period})
${ed.credentials} | ${ed.location}
${ed.summary}
`
  )
  .join('\n')}
    `.trim();
  };

  const handleCopyText = () => {
    playAchievementSound();
    navigator.clipboard.writeText(getResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 via-emerald-500 to-blue-600 text-white font-extrabold flex items-center justify-center text-xs shadow-sm">
              YK
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white leading-tight">
                Curriculum Vitae Preview
              </h3>
              <p className="text-[11px] text-slate-400">
                Official CV &bull; ATS-Formatted &amp; Ready to Export
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Download PDF Button */}
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-xl bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-600 hover:to-emerald-600 text-white shadow-md transition-all cursor-pointer active:scale-95"
            >
              {pdfDownloaded ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Download className="w-3.5 h-3.5" />}
              <span>{pdfDownloaded ? 'Downloaded!' : 'Download PDF CV'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body: Clean Document Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8 bg-slate-50/50 print:bg-white text-slate-800 space-y-8">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  YASH KHAREL
                </h1>
                <p className="text-sm font-bold text-orange-600 mt-1">
                  Co-Founder | Business Development | Senior Software Engineer | Ideator
                </p>
                <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                  MBA (Queen Margaret University, BSC computer science Kathmandu Univeristy)
                </p>
              </div>
              <span className="text-xs font-bold text-orange-950 bg-orange-100 border border-orange-200 px-3 py-1 rounded-full w-fit">
                8+ Years &bull; Products, BD &amp; Ventures
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 mt-3.5 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-orange-600" />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-orange-700 hover:underline">
                  {portfolioData.email}
                </a>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`tel:${portfolioData.phone}`} className="hover:text-emerald-700 hover:underline">
                  {portfolioData.phone}
                </a>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                {portfolioData.location}
              </span>
              <span>&bull;</span>
              <a
                href={portfolioData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-700 hover:underline font-bold"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span>&bull;</span>
              <a
                href="https://github.com/yash048"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-orange-700 hover:underline font-bold"
              >
                <span>GitHub (yash048)</span>
              </a>
              <span>&bull;</span>
              <a
                href={portfolioData.originalSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-emerald-700 hover:underline font-bold"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>kharelyash.com.np</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-orange-800">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {portfolioData.summary}
            </p>
          </div>

          {/* Featured Ventures & Product Releases */}
          <div className="space-y-3 bg-gradient-to-r from-orange-50/70 via-emerald-50/40 to-blue-50/40 p-4 sm:p-5 rounded-2xl border border-orange-200">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-orange-950">
              Featured Ventures &amp; Applications
            </h2>
            <div className="space-y-3 text-xs text-slate-800">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <strong className="font-extrabold text-slate-900 text-sm">Lumasha (Mobile Language App):</strong>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    Live on Stores
                  </span>
                </div>
                <p className="text-slate-600 mt-1">
                  Cross-platform React Native app with native audio voice playback, interactive flashcards, and physical kits.
                </p>
                <div className="flex flex-wrap gap-3 mt-1.5 text-xs font-bold text-orange-700">
                  <a href="https://play.google.com/store/apps/details?id=com.yash048.lumasha&hl=en_CA" target="_blank" rel="noreferrer" className="underline hover:text-orange-900">
                    Google Play Store &rarr;
                  </a>
                  <a href="https://apps.apple.com/ca/app/lumasha/id6749781997" target="_blank" rel="noreferrer" className="underline hover:text-orange-900">
                    Apple App Store &rarr;
                  </a>
                  <a href="https://www.etsy.com/shop/Lumasha" target="_blank" rel="noreferrer" className="underline hover:text-orange-900">
                    Etsy Shop &rarr;
                  </a>
                </div>
              </div>

              <div className="border-t border-orange-200/60 pt-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <strong className="font-extrabold text-slate-900 text-sm">Bagisha Reading Room:</strong>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    100% Autopilot
                  </span>
                </div>
                <p className="text-slate-600 mt-1">
                  Founded urban study space; created subscription revenue tiers, real-time seat reservation engine, and automated operations.
                </p>
              </div>

              <div className="border-t border-orange-200/60 pt-2.5">
                <strong className="font-extrabold text-slate-900 text-sm">Dlytica Academy Workforce System:</strong>
                <p className="text-slate-600 mt-1">
                  Multi-program student lifecycle management, centralized CRM pipelines, and corporate hiring partner expansion in Toronto.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience / Jobs List */}
          <div className="space-y-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-orange-800 border-b border-slate-200 pb-1.5">
              Professional Experience &amp; Career History
            </h2>

            {portfolioData.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-bold text-orange-700">
                      {exp.company} &bull; {exp.location}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 border-b border-slate-200 pb-1.5">
              Education &amp; Academic Credentials
            </h2>

            {portfolioData.education.map((ed) => (
              <div key={ed.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {ed.degree}
                    </h3>
                    <span className="text-xs font-bold text-emerald-700">
                      {ed.institution} &bull; {ed.location}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {ed.period}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  {ed.credentials} &bull; {ed.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Core Competencies Matrix */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-800 border-b border-slate-200 pb-1.5">
              Competencies &amp; Technical Stacks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {portfolioData.skills.map((s) => (
                <div key={s.id} className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <span className="font-extrabold text-slate-900 block">{s.title}:</span>
                  <span className="text-slate-600 font-medium">{s.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
