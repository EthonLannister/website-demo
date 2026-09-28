import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { LogoMarquee } from '@/components/marquee/LogoMarquee';
import { SwissGrid } from '@/components/editorial/SwissGrid';
import { HubMatrix } from '@/components/editorial/HubMatrix';
import { StickyStackDeck } from '@/components/experiences/StickyStackDeck';
import { ModularAgenda } from '@/components/curriculum/ModularAgenda';
import { PricingSection } from '@/components/commercial/PricingSection';
import { FaqSection } from '@/components/faq/FaqSection';
import { LeadCaptureForm } from '@/components/conversion/LeadCaptureForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Asymmetric Telemetry Card & Pill Capsule Heading */}
      <HeroSection />

      {/* 2. Partner & Unicorns Continuous Marquee */}
      <LogoMarquee />

      {/* 3. Swiss 12-Column Hairline Grid Context & Value Props */}
      <SwissGrid />

      {/* 4. Innovation Hub Matrix (6 Specialized Cities) */}
      <HubMatrix />

      {/* 5. Signature Experiences Stacking Deck with Documentary Duotone Filter */}
      <StickyStackDeck />

      {/* 6. Modular 7-Day Curriculum Timeline */}
      <ModularAgenda />

      {/* 7. Commercial Engagement Models & Inclusions */}
      <PricingSection />

      {/* 8. Native HTML5 Exclusive Details FAQ */}
      <FaqSection />

      {/* 9. Direct Executive Scoping & Lead Generation Form */}
      <LeadCaptureForm />
    </div>
  );
}
