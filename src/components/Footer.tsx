import { Globe, ArrowUp, Mail, Phone, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playAchievementSound } from '../utils/soundEffects';
import { downloadResumePdf } from '../utils/generatePdfResume';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer = ({ onOpenResume }: FooterProps) => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCv = () => {
    playAchievementSound();
    downloadResumePdf();
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Monogram & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 via-emerald-500 to-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
              YK
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">Yash Kharel</div>
              <div className="text-xs text-slate-400 font-medium">Business Operations, Venture Building &amp; Engineering</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold">
            <a href="#overview" onClick={playClickSound} className="hover:text-orange-400 transition-colors">Overview</a>
            <a href="#projects" onClick={playClickSound} className="text-orange-400 hover:text-orange-300 font-bold transition-colors">Products</a>
            <a href="#tech-stack" onClick={playClickSound} className="hover:text-emerald-400 transition-colors">Tech Stack</a>
            <a href="#jobs" onClick={playClickSound} className="hover:text-blue-400 transition-colors">Jobs Timeline</a>
            <a href="#education" onClick={playClickSound} className="hover:text-orange-400 transition-colors">Education</a>
            <button 
              onClick={handleDownloadCv} 
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-bold text-emerald-400 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <a href="#contact" onClick={playClickSound} className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400">
          <div>
            <span>&copy; {new Date().getFullYear()} Yash Kharel. Revamped in React</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.originalSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-orange-400 transition-colors font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Original Domain: kharelyash.com.np</span>
            </a>
            <span>&bull;</span>
            <span>Edmonton, AB, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
