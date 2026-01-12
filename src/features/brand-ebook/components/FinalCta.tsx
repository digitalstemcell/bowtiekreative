import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { CheckCircle } from 'lucide-react';

export function FinalCta() {
  const benefits = [
    'Complete strategic framework',
    '6 comprehensive chapters',
    'Actionable templates and worksheets',
    'Industry-proven methodologies',
    'Instant digital download',
    'Lifetime access'
  ];

  return (
    <div className="bg-slate-900 text-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Build a Brand That Lasts
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the complete framework for creating memorable brand identities
          </p>

          <div className="bg-slate-800/50 border-2 border-amber-500/30 rounded-xl p-8 mb-8">
            <div className="text-5xl font-bold text-white mb-2">$27</div>
            <p className="text-slate-400 mb-6">Digital eBook. Instant access.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold"
            >
              Get Creating a Memorable Brand Identity
            </Button>
          </div>

          <p className="text-slate-400 text-sm">
            Transform your brand strategy with proven frameworks and actionable insights
          </p>
        </div>
      </Container>
    </div>
  );
}
