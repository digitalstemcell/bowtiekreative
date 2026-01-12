import { Hero } from './components/Hero';
import { WhatsIncluded } from './components/WhatsIncluded';
import { FinalCta } from './components/FinalCta';
import { designPartnerData } from './data/designPartnerData';

export default function DesignPartnerPage() {
  return (
    <div>
      <Hero {...designPartnerData.hero} />
      <WhatsIncluded
        setup={designPartnerData.setup}
        monthly={designPartnerData.monthly}
      />
      <FinalCta
        setupFee={designPartnerData.hero.setupFee}
        monthlyPrice={designPartnerData.hero.monthlyPrice}
      />
    </div>
  );
}
