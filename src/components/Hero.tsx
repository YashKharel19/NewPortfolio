import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Maximize2, 
  X, 
  Award, 
  Linkedin, 
  Globe, 
  Briefcase, 
  Check, 
  Code2 
} from 'lucide-react';
import { siteContent } from '../content';
import { playClickSound, playAchievementSound } from '../utils/soundEffects';
import { downloadResumePdf } from '../utils/generatePdfResume';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  const { profile } = siteContent;
  const [edmontonTime, setEdmontonTime] = useState<string>('');
  const [isPhotoZoomed, setIsPhotoZoomed] = useState<boolean>(false);
  const [photoError, setPhotoError] = useState<boolean>(false);
  const [pdfDownloaded, setPdfDownloaded] = useState<boolean>(false);

  // Live Edmonton, AB clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'America/Edmonton',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setEdmontonTime(timeStr);
      } catch (e) {
        setEdmontonTime('');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePhotoClick = () => {
    playAchievementSound();
    setIsPhotoZoomed(true);
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
      id="overview"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50/70 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Clear, uncluttered copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Status Pill with Live Clock in Orange & Green */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-300 text-xs text-slate-800 shadow-xs">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="font-bold text-slate-900">{profile.location}</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-bold">{profile.availability}</span>
              </div>

              {edmontonTime && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-orange-950 border border-orange-200 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-orange-600" />
                  <span>Edmonton Time: <strong className="font-bold">{edmontonTime}</strong></span>
                </div>
              )}
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-800 bg-orange-100 px-3 py-1 rounded-lg border border-orange-200">
                  {profile.name} &mdash; Official Portfolio
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {profile.headline.split('|').map((part, pIdx) => {
                  const colors = ['text-orange-600', 'text-emerald-700', 'text-slate-900'];
                  return (
                    <span key={pIdx} className="inline-block mr-2">
                      <span className={colors[pIdx % colors.length]}>{part.trim()}</span>
                      {pIdx < profile.headline.split('|').length - 1 && (
                        <span className="text-slate-300 mx-2 font-light">|</span>
                      )}
                    </span>
                  );
                })}
              </h1>
              
              {/* Academic Credentials Banner in Solid Emerald & Orange Accent */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{profile.academicCredentials}</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900">
                  Verified
                </span>
              </div>
            </div>

            {/* Uncluttered Bio */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {profile.subheadline}
            </p>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClickSound}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-950 border border-slate-200 text-xs font-bold transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* GitHub */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClickSound}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-950 border border-slate-200 text-xs font-bold transition-all shadow-xs"
              >
                <Code2 className="w-4 h-4 text-slate-900" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* Website */}
              <a
                href={profile.websiteUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClickSound}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-950 border border-slate-200 hover:border-emerald-300 text-xs font-bold transition-all shadow-xs"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>kharelyash.com.np</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Action Buttons for Bagisha and Lumasha in Solid Vibrant Colors */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Bagisha Button - Solid Warm Orange */}
              <a
                href="https://www.bagishareadingroom.com/"
                target="_blank"
                rel="noreferrer"
                onClick={playClickSound}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <span>Bagisha</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Lumasha Button - Solid Vibrant Emerald Green */}
              <a
                href="https://lumasha.com/"
                target="_blank"
                rel="noreferrer"
                onClick={playClickSound}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <span>Lumasha</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct PDF Download Button */}
              <button
                id="hero-download-cv-btn"
                onClick={handleDirectDownloadPdf}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 cursor-pointer active:scale-95 border border-slate-700"
                title="Directly download official PDF resume"
              >
                {pdfDownloaded ? <Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> : <Download className="w-4 h-4 text-orange-400" />}
                <span>{pdfDownloaded ? 'PDF CV Downloaded!' : 'Download CV (PDF)'}</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                <span>Read Online</span>
              </button>

              <a
                href="#jobs"
                onClick={playClickSound}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 text-xs font-bold transition-all"
              >
                <Briefcase className="w-4 h-4 text-emerald-700" />
                <span>Jobs &amp; Roles</span>
              </a>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600 border-t border-slate-200">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-orange-700 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-orange-600" />
                <span>{profile.email}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Interactive Profile Card with Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg">
                {/* User Portrait with Hover Zoom Interaction */}
                <div 
                  className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-slate-100 border border-slate-200 shadow-sm group cursor-pointer"
                  onClick={handlePhotoClick}
                  title="Click to view full photo"
                >
                  {!photoError ? (
                    <img
                      src={profile.photo}
                      alt={profile.photoAlt}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-emerald-800 text-white">
                      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-black mb-3">
                        {profile.initials}
                      </div>
                      <div className="font-extrabold text-lg">{profile.name}</div>
                      <div className="text-xs text-emerald-100 mt-1">{profile.location}</div>
                    </div>
                  )}

                  {/* Glass Overlay Tag on Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black tracking-tight">{profile.name}</div>
                      <div className="text-[10px] text-emerald-300 font-medium">Co-Founder &amp; Senior Engineer</div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-emerald-600 text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Buttons for Bagisha & Lumasha Under Photo */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <a 
                    href="#projects"
                    onClick={playClickSound}
                    className="p-3 rounded-2xl bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-all hover:-translate-y-0.5 block cursor-pointer group shadow-xs"
                    title="View Bagisha Operations"
                  >
                    <div className="text-xs text-orange-700 font-bold flex items-center justify-between">
                      <span>Bagisha</span>
                      <span className="text-[10px] text-orange-700 font-black group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </div>
                    <div className="text-sm font-black text-orange-950 mt-0.5">100% Autopilot</div>
                    <div className="text-[10px] text-orange-700 font-semibold">Self-Sustaining</div>
                  </a>
                  
                  <a 
                    href="#projects"
                    onClick={playClickSound}
                    className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hover:-translate-y-0.5 block cursor-pointer group shadow-xs"
                    title="View Lumasha App"
                  >
                    <div className="text-xs text-emerald-700 font-bold flex items-center justify-between">
                      <span>Lumasha App</span>
                      <span className="text-[10px] text-emerald-800 font-black group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </div>
                    <div className="text-sm font-black text-emerald-950 mt-0.5">iOS &amp; Android</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">Live in Stores</div>
                  </a>
                </div>

                {/* Academic Tag Bar */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Education:</span>
                  <span className="font-bold text-emerald-800">
                    MBA &bull; B.Sc. CS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Zoom for Photo */}
      <AnimatePresence>
        {isPhotoZoomed && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPhotoZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl p-5 border border-slate-200 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <div className="font-extrabold text-slate-900 text-sm">{profile.name}</div>
                <button
                  onClick={() => setIsPhotoZoomed(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-square border border-slate-200">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-200 text-center">
                <div className="text-xs font-bold text-slate-900">{profile.headline}</div>
                <div className="text-[11px] text-orange-800 font-medium mt-0.5">{profile.location}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
