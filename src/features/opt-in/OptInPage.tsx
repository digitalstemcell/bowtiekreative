import { Container } from '../../shared/components/Container';
import { Hero } from './components/Hero';
import { BulletPoints } from './components/BulletPoints';
import { CtaSection } from './components/CtaSection';
import { CredibilitySection } from './components/CredibilitySection';
import { BookImage } from './components/BookImage';
import { optInData } from './data/optInData';

export function OptInPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero
        headline={optInData.hero.headline}
        subheadline={optInData.hero.subheadline}
      />

      <Container className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <BookImage />
          </div>

          <div className="space-y-8">
            <BulletPoints points={optInData.bulletPoints} />
            <CtaSection
              buttonText={optInData.cta.buttonText}
              microcopy={optInData.cta.microcopy}
            />
            <CredibilitySection text={optInData.credibility.text} />
          </div>
        </div>
      </Container>
    </div>
  );
}
