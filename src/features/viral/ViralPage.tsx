import { Hero } from './components/Hero';
import { WhatYouGet } from './components/WhatYouGet';
import { ModuleBreakdown } from './components/ModuleBreakdown';
import { WhatYoullLearn } from './components/WhatYoullLearn';
import { AuthorSection } from './components/AuthorSection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { viralData } from './data/viralData';

export function ViralPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        headline={viralData.hero.headline}
        subheadline={viralData.hero.subheadline}
        price={viralData.hero.price}
      />
      <WhatYouGet />
      <ModuleBreakdown />
      <WhatYoullLearn />
      <AuthorSection />
      <CtaSection price={viralData.cta.price} />
      <FaqSection />
    </div>
  );
}
