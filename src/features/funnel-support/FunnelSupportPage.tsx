import { Hero } from './components/Hero';
import { PackageShowcase } from './components/PackageShowcase';
import { WhyChooseConcierge } from './components/WhyChooseConcierge';
import { FinalCta } from './components/FinalCta';

export default function FunnelSupportPage() {
  return (
    <div>
      <Hero />
      <PackageShowcase />
      <WhyChooseConcierge />
      <FinalCta />
    </div>
  );
}
