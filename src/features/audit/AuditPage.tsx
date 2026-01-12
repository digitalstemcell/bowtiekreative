import { Hero } from './components/Hero';
import { TierOptions } from './components/TierOptions';
import { WhatWeLookFor } from './components/WhatWeLookFor';
import { Deliverables } from './components/Deliverables';
import { FaqSection } from './components/FaqSection';
import { auditData } from './data/auditData';

export function AuditPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        headline={auditData.hero.headline}
        subheadline={auditData.hero.subheadline}
      />
      <TierOptions />
      <WhatWeLookFor />
      <Deliverables />
      <FaqSection />
    </div>
  );
}
