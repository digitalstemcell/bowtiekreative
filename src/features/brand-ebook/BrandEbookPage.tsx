import { Hero } from './components/Hero';
import { WhatYouGet } from './components/WhatYouGet';
import { ChapterBreakdown } from './components/ChapterBreakdown';
import { WhoNeedsThis } from './components/WhoNeedsThis';
import { FinalCta } from './components/FinalCta';

export function BrandEbookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhatYouGet />
      <ChapterBreakdown />
      <WhoNeedsThis />
      <FinalCta />
    </div>
  );
}
