import { useState, type FormEvent } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  Linkedin, 
  Globe, 
  MessageSquare, 
  Sparkles, 
  Code2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, playAchievementSound } from '../utils/soundEffects';

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryType, setInquiryType] = useState('Full-Time Role');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyEmail = () => {
    playAchievementSound();
    navigator.clipboard.writeText(portfolioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    playAchievementSound();
    navigator.clipboard.writeText(portfolioData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    playClickSound();
    const subject = encodeURIComponent(`[${inquiryType}] Inquiring from Portfolio - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Yash,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany/Org: ${formData.company || 'N/A'}\nInquiry Type: ${inquiryType}\n\nMessage:\n${formData.message}\n\nSent via kharelyash portfolio revamp`
    );

    window.open(`mailto:${portfolioData.email}?subject=${subject}&body=${body}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-950 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-orange-600" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build{' '}
            <span className="text-emerald-700">
              High-Yield Ventures
            </span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto mt-2 leading-relaxed">
            Open to operations leadership, technical product management, venture growth, and cross-functional technology roles in Canada or globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-orange-200/90 shadow-xl shadow-orange-950/5 space-y-6">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Direct Line
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Yash Kharel
                </h3>
                <p className="text-xs font-bold text-orange-700 mt-0.5">
                  Co-Founder | Business Development | Senior Software Engineer | Ideator
                </p>
                <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                  MBA (Queen Margaret University, BSC computer science Kathmandu Univeristy)
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3">
                {/* Email (Orange Accent) */}
                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-orange-800 uppercase tracking-wider">Email Address</div>
                      <a 
                        href={`mailto:${portfolioData.email}`} 
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-orange-700 hover:underline"
                      >
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white hover:bg-orange-100 text-slate-600 hover:text-orange-900 border border-orange-200 transition-colors shadow-sm cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone (Green Accent) */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Direct Telephone</div>
                      <a 
                        href={`tel:${portfolioData.phone}`} 
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 hover:underline"
                      >
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-lg bg-white hover:bg-emerald-100 text-slate-600 hover:text-emerald-900 border border-emerald-200 transition-colors shadow-sm cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location (Blue Accent) */}
                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Current Base</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">{portfolioData.location}</div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Fast response guaranteed: within 24 hours on business days.</span>
              </div>

              {/* External Profile Links in Tri-Color */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={portfolioData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/yash048"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-slate-800 hover:text-orange-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-900" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.originalSiteUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-800 hover:text-emerald-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-orange-200/90 shadow-xl shadow-orange-950/5">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the brief form below to initiate an email directly to Yash.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inquiry Type Radio / Pill selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Topic of Discussion
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Full-Time Role', 'App & Tech Venture', 'Operations Audit', 'Coffee Chat'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          setInquiryType(type);
                          playClickSound();
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                          inquiryType === type
                            ? 'bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-orange-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-400 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-400 shadow-sm"
                    />
                  </div>
                </div>

                {/* Company / Organization */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Company or Organization (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Venture Studio, Scaleup, or Retail Corp"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-400 shadow-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Message / Opportunity Summary *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the team, role, or venture synergy..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-400 shadow-sm resize-none"
                  />
                </div>

                {/* Submit button in solid emerald */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:translate-y-[-1px] cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold text-center">
                    ✓ Email draft opened! Thank you for reaching out.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
