import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { WhatsIncluded } from './components/WhatsIncluded';
import { WhoItsFor } from './components/WhoItsFor';
import { Outcome } from './components/Outcome';
import { ApplicationCta } from './components/ApplicationCta';
import { doneForYouData } from './data/doneForYouData';

export function DoneForYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero price={doneForYouData.hero.price} />
      <CountdownTimer />
      <WhatsIncluded />
      <WhoItsFor />
      <Outcome />
      <ApplicationCta price={doneForYouData.cta.price} />
    </div>
  );
}
