import { useState, useRef, useEffect } from 'react';
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isPlayingAudioChime, setIsPlayingAudioChime] = useState<boolean>(false);

  const activeProduct: ProductItem = products.find((p) => p.id === selectedProductId) || products[0];


  const handleSelectProduct = (productId: string) => {
   playClickSound();
   if (videoRef.current) {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
   }
   setIsVideoPlaying(false);
   setVideoProgress(0);
   setSelectedProductId(productId);
 };
 const handleToggleVideo = async () => {
  playClickSound();

  const video = videoRef.current;

  if (!video) return;

  try {
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  } catch (error) {
    console.error('Unable to play video:', error);
  }
};
const handleVideoTimeUpdate = () => {
  const video = videoRef.current;

  if (!video || !video.duration) return;

  setVideoProgress((video.currentTime / video.duration) * 100);
};

const handleVideoPlay = () => {
  setIsVideoPlaying(true);
};

const handleVideoPause = () => {
  setIsVideoPlaying(false);
};

const handleVideoEnded = () => {
  setIsVideoPlaying(false);
  setVideoProgress(100);
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
          {/* Right Column: Real Product Video */}
<motion.div
  key={`video-${activeProduct.id}`}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
  className="lg:col-span-6 space-y-4"
>
  <div className="bg-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-2xl border border-slate-800 relative overflow-hidden">

    {/* Video Header */}
    <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
        </div>

        <span className="text-xs text-slate-400 font-mono ml-2 truncate">
          {activeProduct.video?.title || `${activeProduct.title} — Video Demo`}
        </span>
      </div>

      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold shrink-0">
        <Play className="w-3 h-3" />
        <span>VIDEO</span>
      </div>
    </div>

    {/* Actual Video / Placeholder */}
    <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden relative aspect-video">

      {activeProduct.video?.src ? (
        <>
          <video
            ref={videoRef}
            key={activeProduct.video.src}
            src={activeProduct.video.src}
            poster={activeProduct.video.poster || activeProduct.photo}
            className="w-full h-full object-contain bg-black"
            playsInline
            preload="metadata"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={handleVideoEnded}
          />

          {/* Video Overlay Play Button */}
          {!isVideoPlaying && (
            <button
              onClick={handleToggleVideo}
              className="absolute inset-0 flex items-center justify-center bg-slate-950/20 hover:bg-slate-950/30 transition-all cursor-pointer"
              aria-label="Play video"
            >
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-orange-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-orange-500/30 hover:scale-110 transition-transform">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </span>
            </button>
          )}
        </>
      ) : (
        /* Video Placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-emerald-500/20 border border-slate-700 flex items-center justify-center mb-4">
            <Play className="w-7 h-7 text-orange-400" />
          </div>

          <h4 className="text-base sm:text-lg font-bold text-white">
            Video Placeholder
          </h4>

          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mt-2 leading-relaxed">
            {activeProduct.video?.description ||
              'A product walkthrough video will be added here.'}
          </p>

          <span className="mt-4 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Coming Soon
          </span>
        </div>
      )}
    </div>

    {/* Video Description */}
    {activeProduct.video?.description && (
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
        {activeProduct.video.description}
      </p>
    )}

    {/* Video Controls */}
    {activeProduct.video?.src && (
      <div className="mt-4 pt-3 border-t border-slate-800">

        <div className="flex items-center gap-3">

          {/* Play / Pause */}
          <button
            onClick={handleToggleVideo}
            className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-400 hover:to-emerald-400 text-slate-950 transition-all shadow-sm cursor-pointer active:scale-95"
            title={isVideoPlaying ? 'Pause video' : 'Play video'}
            aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
          >
            {isVideoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>

          {/* Progress */}
          <div className="flex-1">
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 via-emerald-400 to-blue-400 rounded-full transition-all duration-150"
                style={{ width: `${videoProgress}%` }}
              />
            </div>
          </div>

          {/* Status */}
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider min-w-[45px] text-right">
            {isVideoPlaying ? 'Playing' : 'Paused'}
          </span>
        </div>

      </div>
    )}

  </div>
</motion.div>

        </div>

      </div>
    </section>
  );
};
