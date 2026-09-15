import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  ExternalLink, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  CheckCircle2, 
  Layers, 
  ShoppingBag, 
  Laptop, 
  ShieldCheck,
  Languages,
  Maximize2
} from 'lucide-react';
import { siteContent, ProductItem } from '../content';
import { playClickSound, playMilestoneSound, playAchievementSound } from '../utils/soundEffects';

export const ProductShowcase = () => {
  const { products } = siteContent;
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlayingRecording, setIsPlayingRecording] = useState<boolean>(true);
  const [recordingProgress, setRecordingProgress] = useState<number>(35);
  const [isPlayingAudioChime, setIsPlayingAudioChime] = useState<boolean>(false);

  const activeProduct: ProductItem = products.find((p) => p.id === selectedProductId) || products[0];

  // Auto-advance simulated recording steps when playing
  useEffect(() => {
    if (!isPlayingRecording) return;
    const interval = setInterval(() => {
      setRecordingProgress((prev) => {
        if (prev >= 100) {
          setActiveStepIndex((stepPrev) => (stepPrev + 1) % activeProduct.recording.steps.length);
          return 0;
        }
        return prev + 5;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isPlayingRecording, activeProduct.recording.steps.length]);

  const handleSelectProduct = (productId: string) => {
    playClickSound();
    setSelectedProductId(productId);
    setActiveStepIndex(0);
    setRecordingProgress(0);
  };

  const handleTogglePlay = () => {
    playClickSound();
    setIsPlayingRecording(!isPlayingRecording);
  };

  const handleStepClick = (idx: number) => {
    playClickSound();
    setActiveStepIndex(idx);
    setRecordingProgress(0);
  };

  const handlePlayAudio = () => {
    playAchievementSound();
    setIsPlayingAudioChime(true);
    setTimeout(() => setIsPlayingAudioChime(false), 2000);
  };

  const currentStep = activeProduct.recording.steps[activeStepIndex] || activeProduct.recording.steps[0];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden border-b border-orange-100">
      {/* Background Animated Blobs in Orange, Green, and Bluish */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-950 border border-orange-200 text-xs font-bold mb-3 shadow-xs">
            <Smartphone className="w-3.5 h-3.5 text-orange-600" />
            <span>Products, Apps &amp; Screen Recordings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Products &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-emerald-600 to-blue-600">
              Interactive Demos
            </span>
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Inspect live products, browse store releases, and watch interactive screen walkthroughs.
          </p>

          {/* Product Switcher Tabs with Custom Colors for Bagisha & Lumasha */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {products.map((p) => {
              const isSelected = p.id === selectedProductId;
              const isBagisha = p.id.toLowerCase().includes('bagisha');
              const isLumasha = p.id.toLowerCase().includes('lumasha');

              let buttonClass = '';
              let dotClass = '';

              if (isBagisha) {
                buttonClass = isSelected
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/30 border-orange-500 ring-2 ring-orange-400/40'
                  : 'bg-orange-50/90 text-orange-950 border border-orange-200 hover:bg-orange-100 hover:border-orange-300';
                dotClass = isSelected ? 'bg-white' : 'bg-orange-500';
              } else if (isLumasha) {
                buttonClass = isSelected
                  ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white shadow-lg shadow-emerald-600/30 border-emerald-600 ring-2 ring-emerald-400/40'
                  : 'bg-emerald-50/90 text-emerald-950 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300';
                dotClass = isSelected ? 'bg-white' : 'bg-emerald-600';
              } else {
                buttonClass = isSelected
                  ? 'bg-blue-900 text-white shadow-md border-blue-900'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200';
                dotClass = isSelected ? 'bg-white' : 'bg-blue-600';
              }

              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectProduct(p.id)}
                  className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer active:scale-95 ${buttonClass}`}
                >
                  <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                  <span>{p.title}</span>
                  {p.playStoreUrl && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                      isSelected 
                        ? 'bg-white/20 text-white border-white/30' 
                        : 'bg-emerald-500/20 text-emerald-900 border-emerald-500/30'
                    }`}>
                      Live App
                    </span>
                  )}
                  {isBagisha && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                      isSelected 
                        ? 'bg-white/20 text-white border-white/30' 
                        : 'bg-orange-500/20 text-orange-950 border-orange-500/30'
                    }`}>
                      Autopilot
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Information & Photo */}
          <motion.div 
            key={activeProduct.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Product Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200/90 shadow-xl shadow-orange-950/5 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200">
                  {activeProduct.badge}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {activeProduct.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeProduct.title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                {activeProduct.tagline}
              </p>

              {/* Product Photo Showcase */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-orange-200 shadow-sm relative group">
                <img
                  src={activeProduct.photo}
                  alt={activeProduct.title}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <Sparkles className="w-4 h-4 text-orange-300" />
                    <span>Verified Production Release</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-xs font-semibold">
                    Interactive
                  </span>
                </div>
              </div>

              {/* Key Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
                {activeProduct.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-gradient-to-b from-orange-50/70 to-blue-50/50 border border-orange-100 text-center">
                    <span className="text-[10px] font-bold text-orange-700 uppercase tracking-wider block">
                      {m.label}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 block truncate" title={m.value}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight Bullets */}
              <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {activeProduct.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Direct Store & External Action Buttons for Bagisha and Lumasha */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-2">
                {activeProduct.playStoreUrl && (
                  <a
                    href={activeProduct.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Google Play Store</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
                  </a>
                )}

                {activeProduct.appStoreUrl && (
                  <a
                    href={activeProduct.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Apple App Store</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                  </a>
                )}

                {activeProduct.websiteUrl && (
                  <a
                    href={activeProduct.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 active:scale-95 cursor-pointer"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                )}
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Video / Screen Recording Simulator */}
          <motion.div
            key={`recording-${activeProduct.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Screen Recording Device Window */}
            <div className="bg-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
              
              {/* Window Header with Video Recording Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono ml-2 truncate">
                    {activeProduct.recording.title}
                  </span>
                </div>

                {/* Blinking Recording Beacon */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-recording-dot" />
                  <span>SCREEN DEMO</span>
                </div>
              </div>

              {/* Active Screen Walkthrough Viewport */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800/80 min-h-[290px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Visual Type 1: Flashcards & Audio (Lumasha) */}
                {currentStep.visualType === 'flashcards' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-orange-400 font-bold bg-orange-950/60 px-2.5 py-1 rounded-md border border-orange-800">
                        {currentStep.badgeText}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Screen {activeStepIndex + 1} of {activeProduct.recording.steps.length}
                      </span>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 via-orange-950/30 to-blue-950/30 p-5 rounded-2xl border border-orange-700/40 text-center relative group">
                      <div className="text-3xl sm:text-4xl font-black text-orange-300">
                        नमस्ते (Namaste)
                      </div>
                      <div className="text-sm font-mono text-emerald-200 mt-1">
                        &ldquo;I honor the light in you&rdquo;
                      </div>
                      <div className="text-xs text-slate-400 mt-2">
                        Heritage Module &bull; Nepali &bull; Audio Waveform Active
                      </div>

                      {/* Interactive Audio Button */}
                      <button
                        onClick={handlePlayAudio}
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-400 hover:to-emerald-400 text-slate-950 font-bold text-xs transition-transform active:scale-95 shadow-md shadow-orange-500/20"
                      >
                        <Volume2 className={`w-4 h-4 ${isPlayingAudioChime ? 'animate-bounce' : ''}`} />
                        <span>{isPlayingAudioChime ? 'Playing Audio...' : 'Play Audio Pronunciation'}</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>
                )}

                {/* Visual Type 2: Seat Matrix (Bagisha) */}
                {currentStep.visualType === 'seat-matrix' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-800">
                        {currentStep.badgeText}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Autopilot Engine Live
                      </span>
                    </div>

                    {/* Interactive Seat Matrix Visualization */}
                    <div className="bg-slate-900/90 p-4 rounded-2xl border border-blue-800/40">
                      <div className="text-xs font-bold text-blue-300 mb-2 flex items-center justify-between">
                        <span>Sanctuary Desk Capacity</span>
                        <span className="text-emerald-400">92% Occupancy</span>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${
                              i % 5 === 0
                                ? 'bg-emerald-500 text-slate-950'
                                : 'bg-slate-800 text-cyan-200 border border-slate-700'
                            }`}
                          >
                            D{i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>
                )}

                {/* Visual Type 3: Web Browser (Websites) */}
                {currentStep.visualType === 'web-browser' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800">
                        {currentStep.badgeText}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        kharelyash.com.np
                      </span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-2xl border border-emerald-700/40 space-y-2">
                      <div className="text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                        https://kharelyash.com.np/portfolio
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200">
                        ⚡ Sub-second load speed &bull; Responsive CSS animations &bull; Direct recruiter pipeline
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>
                )}

                {/* Step Headline in Viewport */}
                <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">{currentStep.title}</span>
                  <span>{activeProduct.recording.duration}</span>
                </div>
              </div>

              {/* Video Player Control Bar with Orange-Green-Bluish Scrubber */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-400 hover:to-emerald-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
                  title={isPlayingRecording ? 'Pause recording' : 'Play recording'}
                >
                  {isPlayingRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Progress Scrubber in Tri-Color */}
                <div className="flex-1">
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 via-emerald-400 to-blue-400 rounded-full transition-all duration-300"
                      style={{ width: `${recordingProgress}%` }}
                    />
                  </div>
                </div>

                {/* Step Indicators */}
                <div className="flex gap-1.5">
                  {activeProduct.recording.steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleStepClick(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === activeStepIndex ? 'bg-orange-400 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      title={`Step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

            

          </motion.div>

        </div>

      </div>
    </section>
  );
};
