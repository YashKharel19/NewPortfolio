import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { AnimatedTechStack } from './components/AnimatedTechStack';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Executive Header Navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Yash's interactive photo card & quick actions */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. Featured Products & Apps: Lumasha, Bagisha, Websites (Photos & Interactive Screen Recordings) */}
        <ProductShowcase />

        {/* 3. Engineering Stacks: ONLY ICONS with rich CSS hover animations */}
        <AnimatedTechStack />

        {/* 4. Career & Venture Highlights: Minimal, interactive milestones */}
        <InteractiveTimeline onOpenResume={handleOpenResume} />

        {/* 5. Academic Credentials (MBA Edinburgh Napier + B.Sc. Computer Science) */}
        <EducationSection />

        {/* 6. Direct Contact & Quick Message Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Printable & Downloadable ATS Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
