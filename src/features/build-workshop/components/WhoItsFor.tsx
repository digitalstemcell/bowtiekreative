import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function WhoItsFor() {
  const audiences = [
    'Service businesses, creators, coaches, local businesses',
    'People who have an offer but no site (or an outdated one)',
    'Anyone who needs a simple, conversion-ready site fast'
  ];

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
          Who It's For
        </h2>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Perfect for business owners who need a professional website launched quickly
        </p>
        <div className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-xl p-8 border-2 border-orange-200">
          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
