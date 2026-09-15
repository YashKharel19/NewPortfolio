import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sliders, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  BarChart,
  BrainCircuit
} from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export const ExecutiveSimulator = () => {
  const [businessType, setBusinessType] = useState<'startup' | 'academy' | 'retail' | 'enterprise'>('startup');
  const [teamSize, setTeamSize] = useState<number>(18);
  const [bottleneck, setBottleneck] = useState<'autopilot' | 'gtm' | 'crm' | 'cross-functional'>('autopilot');

  const businessTypes = [
    { id: 'startup', label: 'Startup / Growth Venture', icon: '🚀' },
    { id: 'academy', label: 'Tech Academy / EdTech', icon: '🎓' },
    { id: 'retail', label: 'Retail & Distribution', icon: '📦' },
    { id: 'enterprise', label: 'Programs & Corporate', icon: '🏛️' }
  ];

  const bottlenecks = [
    {
      id: 'autopilot',
      title: 'Founder Trapped in Daily Ops',
      summary: 'Need standardized SOPs, automated workflows, and self-sustaining management.',
      yashExperience: 'Proven at Bagisha: Transitioned 100% of commercial operations to autopilot.'
    },
    {
      id: 'gtm',
      title: 'Stagnant Retail or B2B Pipeline',
      summary: 'Need multi-channel GTM campaigns, distributor contracts, and sales acceleration.',
      yashExperience: 'Proven at Lumasha: Scaled retail distribution channels and cross-platform app rollout.'
    },
    {
      id: 'crm',
      title: 'No Real-time Visibility & CRM',
      summary: 'Customer data trapped in silos; lack of automated tracking and conversion metrics.',
      yashExperience: 'Proven at Dlytica Inc: Overhauled CRM reporting, dashboards and lifecycle tracking.'
    },
    {
      id: 'cross-functional',
      title: 'Tech vs. Commercial Communication Gap',
      summary: 'Engineers and sales talk past each other; product features misaligned with pricing.',
      yashExperience: 'MBA + CS Advantage: Speaks both developer code and executive P&L fluency.'
    }
  ];

  // Calculated operational impact metrics
  const estimatedHoursSaved = Math.round(teamSize * 3.8 + (bottleneck === 'autopilot' ? 45 : 25));
  const estimatedPipelineLift = bottleneck === 'gtm' ? '35% - 55%' : '25% - 40%';

  return (
    <section id="simulator" className="py-24 bg-slate-50 border-b border-teal-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-100/60 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-100/60 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Operational Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Operator Impact Simulator
          </h2>
          <p className="text-slate-600 text-base mt-2 leading-relaxed">
            Configure your organization&apos;s current dynamics to model the measurable yield of an MBA + Computer Science operator on your team.
          </p>
        </div>

        {/* Simulator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Input Controls */}
          <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border-2 border-teal-200/80 shadow-xl shadow-teal-900/5">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-teal-600" />
              <span>Configure Your Organization</span>
            </h3>

            {/* Business Archetype Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Organization Domain
              </label>
              <div className="grid grid-cols-2 gap-2">
                {businessTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setBusinessType(type.id as any);
                      playClickSound();
                    }}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all flex items-center gap-2 ${
                      businessType === type.id
                        ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-sm ring-1 ring-teal-400'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    <span className="text-base">{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase tracking-wider">
                <span>2. Current Team Size</span>
                <span className="text-teal-700 text-sm font-extrabold">{teamSize} team members</span>
              </div>
              <input
                type="range"
                min="3"
                max="80"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>3 (Early Stage)</span>
                <span>40 (Mid Scale)</span>
                <span>80+ (High Velocity)</span>
              </div>
            </div>

            {/* Operational Bottleneck Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                3. Primary Operational Challenge
              </label>
              <div className="space-y-2">
                {bottlenecks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setBottleneck(item.id as any);
                      playClickSound();
                    }}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                      bottleneck === item.id
                        ? 'bg-teal-50/70 border-teal-500 text-slate-900 shadow-sm ring-1 ring-teal-400'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{item.summary}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Yield & Comparison */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Projected Impact Output Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-teal-200 shadow-2xl shadow-teal-900/5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-teal-600" />
                  <h4 className="text-base font-extrabold text-slate-900">Projected Strategic ROI</h4>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-200">
                  MBA + CS Multiplier
                </span>
              </div>

              {/* Real-time KPI Yield Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-orange-700 tracking-wider">Hours Saved / Mo</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">~{estimatedHoursSaved} hrs</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Automated workflows</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Pipeline Lift</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{estimatedPipelineLift}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">GTM execution velocity</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Tech-Biz Friction</div>
                  <div className="text-2xl font-extrabold text-emerald-700 mt-1">0%</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Dual fluency alignment</div>
                </div>
              </div>

              {/* Tactical Validation */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-1">
                <div className="font-bold text-emerald-900">Demonstrated Track Record:</div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {bottlenecks.find((b) => b.id === bottleneck)?.yashExperience}
                </p>
              </div>

              {/* Triple Threat Comparison Bars */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Operator Benchmark Comparison
                </div>

                {/* Pure Business MBA */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-600 font-medium">
                    <span>Traditional Business / MBA Profile</span>
                    <span>High Commercial, Low Tech (55%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full w-[55%]"></div>
                  </div>
                </div>

                {/* Pure Software Dev */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-600 font-medium">
                    <span>Pure Software Engineer</span>
                    <span>High Tech, Low GTM/P&amp;L (50%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full w-[50%]"></div>
                  </div>
                </div>

                {/* Yash Kharel Hybrid */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-xs font-extrabold text-emerald-800">
                    <span>Yash Kharel (MBA Edinburgh + B.Sc. Computer Science)</span>
                    <span className="text-emerald-700">Complete Operator (98%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[98%] shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Ready to explore synergies?</span>
                <a
                  href="#contact"
                  onClick={playClickSound}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <span>Connect with Yash</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
