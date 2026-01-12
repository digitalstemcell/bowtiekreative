import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { CheckCircle } from 'lucide-react';

interface CtaSectionProps {
  price: string;
}

export function CtaSection({ price }: CtaSectionProps) {
  const included = [
    'How To Go Viral On Any Platform (12 modules)',
    'Social Media Uncensored (complete framework)',
    'All future course updates',
    'Lifetime access',
    'Platform-agnostic strategies',
    'Downloadable resources'
  ];

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 sm:p-12 border-2 border-emerald-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ready to Master Viral Content?
            </h2>
            <p className="text-xl text-slate-700">
              Get both courses + lifetime access with one payment
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-slate-900 mb-2">
                {price}
              </div>
              <p className="text-slate-600">One-time payment. No subscriptions.</p>
            </div>

            <div className="space-y-3 mb-8">
              {included.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Get Lifetime Access Now
            </Button>
            <a
              href="/book"
              className="block w-full text-center py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              No thanks, just the book ($9.99)
            </a>
          </div>

          <p className="text-center text-slate-600">
            Stop chasing trends. Start building systems that work.
          </p>
        </div>
      </div>
    </Container>
  );
}
