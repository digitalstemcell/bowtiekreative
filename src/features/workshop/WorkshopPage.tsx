import { Hero } from './components/Hero';
import { ThreeDayPlan } from './components/ThreeDayPlan';
import { Deliverables } from './components/Deliverables';
import { WhoItsFor } from './components/WhoItsFor';
import { FaqSection } from './components/FaqSection';
import { workshopData } from './data/workshopData';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { Clock, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WorkshopPage() {
  const [spotsLeft, setSpotsLeft] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpotsLeft((prev) => (prev > 0 ? prev : 2));
    }, 300000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero price={workshopData.hero.price} />

      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-4">
        <Container>
          <div className="flex items-center justify-center space-x-3 text-white">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-lg">
              Only {spotsLeft} spots available this quarter
            </span>
            <AlertTriangle className="w-5 h-5" />
          </div>
        </Container>
      </div>

      <ThreeDayPlan />
      <Deliverables />
      <WhoItsFor />

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full mb-6">
              <span className="text-red-400 font-semibold uppercase tracking-wide text-sm">
                Limited Availability
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Reserve Your Workshop Spot
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We accept only 2 workshop clients per quarter to ensure each team receives the strategic
              attention and customization they deserve. Current spots are filling quickly.
            </p>
            <div className="bg-slate-800/50 border-2 border-emerald-500/30 rounded-xl p-8 mb-6">
              <div className="text-5xl font-bold text-white mb-2">{workshopData.hero.price}</div>
              <p className="text-slate-400 mb-6">6-session comprehensive brand transformation</p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                onClick={() => window.location.href = '/workshop/apply'}
              >
                Apply for Next Available Quarter
              </Button>
              <a
                href="/brand-ebook"
                className="block w-full text-center py-3 text-slate-400 hover:text-white font-medium transition-colors"
              >
                No thanks, just the ebook ($27)
              </a>
            </div>
            <div className="flex items-start space-x-3 text-left bg-red-900/20 border border-red-500/30 rounded-lg p-4 max-w-2xl mx-auto">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm">
                Once this quarter fills, the next available start date may be 3-4 months out.
                Reserve your spot now to avoid delays in your brand transformation.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <FaqSection />
    </div>
  );
}
