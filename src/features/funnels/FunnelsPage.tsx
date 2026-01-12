import { Hero } from './components/Hero';
import { WhatAreFunnels } from './components/WhatAreFunnels';
import { FunnelPackages } from './components/FunnelPackages';
import { FaqSection } from './components/FaqSection';

export default function FunnelsPage() {
  return (
    <div>
      <Hero />
      <WhatAreFunnels />
      <FunnelPackages />
      <FaqSection />
    </div>
  );
}
