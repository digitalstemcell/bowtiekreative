import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { WhatsIncluded } from './components/WhatsIncluded';
import { MiniPlaybooks } from './components/MiniPlaybooks';
import { LifetimeAccess } from './components/LifetimeAccess';
import { FinalCta } from './components/FinalCta';
import { FaqSection } from './components/FaqSection';
import { vaultData } from './data/vaultData';

export function VaultPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero price={vaultData.hero.price} />
      <CountdownTimer />
      <WhatsIncluded />
      <MiniPlaybooks />
      <LifetimeAccess />
      <FinalCta price={vaultData.cta.price} />
      <FaqSection />
    </div>
  );
}
