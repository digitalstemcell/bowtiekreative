import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { CheckCircle } from 'lucide-react';

export function FinalCta() {
  const benefits = [
    'Battle-tested strategies from 96M+ impressions',
    'Autism-enhanced pattern recognition insights',
    'Platform-agnostic viral tactics',
    'No fluff, just actionable tactics'
  ];

  return (
    <div className="bg-slate-900 text-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Crack the Code on Viral Content?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the raw, uncensored truth about what makes content go viral
          </p>

          <div className="bg-slate-800/50 border-2 border-rose-500/30 rounded-xl p-8 mb-8">
            <div className="text-5xl font-bold text-white mb-2">$9.99</div>
            <p className="text-slate-400 mb-6">Digital book. Instant access.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold"
            >
              Get Social Media Uncensored Now
            </Button>
          </div>

          <p className="text-slate-400 text-sm">
            Join 300K+ followers who trust Ryan's viral strategies
          </p>
        </div>
      </Container>
    </div>
  );
}
