import { Hero } from './components/Hero';
import { NotYourAverage } from './components/NotYourAverage';
import { WhatYoullDiscover } from './components/WhatYoullDiscover';
import { WhyDifferent } from './components/WhyDifferent';
import { WhoItsFor } from './components/WhoItsFor';
import { AboutAuthor } from './components/AboutAuthor';
import { Testimonials } from './components/Testimonials';
import { FinalCta } from './components/FinalCta';

export function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <NotYourAverage />
      <WhatYoullDiscover />
      <WhyDifferent />
      <WhoItsFor />
      <AboutAuthor />
      <Testimonials />
      <FinalCta />
    </div>
  );
}
