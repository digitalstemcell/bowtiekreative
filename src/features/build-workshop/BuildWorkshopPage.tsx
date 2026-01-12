import { Hero } from './components/Hero';
import { WhoItsFor } from './components/WhoItsFor';
import { WhatYoullLeave } from './components/WhatYoullLeave';
import { ThreeDayPlan } from './components/ThreeDayPlan';
import { PricingCta } from './components/PricingCta';

export function BuildWorkshopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhoItsFor />
      <WhatYoullLeave />
      <ThreeDayPlan />
      <PricingCta />
    </div>
  );
}
