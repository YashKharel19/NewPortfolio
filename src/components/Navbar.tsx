import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Download, 
  Menu, 
  X, 
  Linkedin, 
  Code2, 
  Globe, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { playClickSound, playAchievementSound } from '../utils/soundEffects';
import { downloadResumePdf } from '../utils/generatePdfResume';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar = ({ onOpenResume, onOpenContact }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Dynamic Scroll Spy: highlights the nav link corresponding to the section currently in view
  useEffect(() => {
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    const sectionIds = ['contact', 'education', 'jobs', 'tech-stack', 'projects', 'overview'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Offset accounting for the fixed navbar height + buffer
      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('#overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDirectDownload = () => {
    playAchievementSound();
    const success = downloadResumePdf();
    if (success) {
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }
  };

  const handleNavClick = (href: string) => {
    playClickSound();
    setActiveSection(href);
  };

  const navLinks = [
    { name: 'Products & Videos', href: '#projects' },
    { name: 'Engineering Stack', href: '#tech-stack' },
    { name: 'Jobs & Experience', href: '#jobs' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-orange-100/80 shadow-lg shadow-orange-950/5 py-2.5'
          : 'bg-white/85 backdrop-blur-sm border-b border-orange-100/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with Solid Emerald */}
        <a
          id="nav-logo"
          href="#overview"
          onClick={() => {
            playClickSound();
            setActiveSection('#overview');
          }}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white font-extrabold flex items-center justify-center text-base shadow-sm group-hover:bg-emerald-800 transition-colors">
            YK
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-base tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
              Yash Kharel
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <span className="font-bold text-orange-600">MBA</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-semibold">B.Sc. CS</span>
            </div>
          </div>
        </a>

        {/* Desktop Links with Dynamic Highlight in Solid Orange & Emerald */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/70">
          {navLinks.map((link) => {
            const isSelected = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3.5 py-1.5 text-xs rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                  isSelected
                    ? 'text-emerald-950 bg-white border border-emerald-300 shadow-sm font-extrabold ring-1 ring-emerald-400/40 scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 border border-transparent font-bold'
                }`}
              >
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons & Social Icons */}
        <div id="desktop-actions" className="hidden md:flex items-center gap-2">
          {/* Social Icons */}
          <div className="flex items-center gap-1 mr-1 pr-2 border-r border-slate-200">
            <a
              href="https://www.linkedin.com/in/yashkharel"
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="p-1.5 rounded-lg text-slate-600 hover:text-[#0077b5] hover:bg-blue-50 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/yash048"
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-orange-50 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          {/* Direct PDF Download with Solid Emerald Accent */}
          <button
            id="nav-resume-download-btn"
            onClick={handleDirectDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
            title="Download official PDF resume"
          >
            {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" /> : <Download className="w-3.5 h-3.5 text-emerald-700" />}
            <span>{downloaded ? 'PDF Saved!' : 'Download CV (PDF)'}</span>
          </button>

          {/* Modal trigger */}
          <button
            id="nav-resume-view-btn"
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 hover:bg-emerald-50/60 rounded-xl transition-all cursor-pointer"
            title="Read CV in ATS Modal Reader"
          >
            <span>Read CV</span>
          </button>

          {/* Connect Button in Solid Emerald */}
          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={(e) => {
              playClickSound();
              setActiveSection('#contact');
              if (window.location.hash === '#contact') {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl shadow-xs transition-all hover:translate-y-[-1px] ${
              activeSection === '#contact'
                ? 'bg-emerald-800 text-white ring-2 ring-emerald-500'
                : 'text-white bg-emerald-700 hover:bg-emerald-800'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            onClick={handleDirectDownload}
            className="px-2.5 py-1.5 text-xs font-bold text-orange-950 bg-orange-100 border border-orange-200 rounded-lg flex items-center gap-1"
            aria-label="Download CV"
          >
            {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" /> : <Download className="w-3.5 h-3.5 text-orange-700" />}
            <span>{downloaded ? 'Saved!' : 'PDF'}</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-orange-100 px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-fade-in">
          {navLinks.map((link) => {
            const isSelected = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setActiveSection(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 text-sm rounded-xl transition-all ${
                  isSelected
                    ? 'bg-emerald-50 text-emerald-950 font-extrabold border border-emerald-300 shadow-xs'
                    : 'text-slate-800 hover:bg-slate-100 hover:text-slate-900 font-bold'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  )}
                  <span>{link.name}</span>
                </div>
                {isSelected && (
                  <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-emerald-700 text-white">
                    Active
                  </span>
                )}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                handleDirectDownload();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-extrabold text-emerald-950 bg-emerald-50 border border-emerald-300 rounded-xl"
            >
              <Download className="w-4 h-4 text-emerald-800" />
              <span>Download Official CV (PDF)</span>
            </button>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/yashkharel"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-xs font-bold text-slate-800"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/yash048"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-xs font-bold text-slate-800"
              >
                <Code2 className="w-3.5 h-3.5 text-slate-900" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
