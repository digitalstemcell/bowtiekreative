import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function Deliverables() {
  const deliverables = [
    'What to fix first (highest ROI)',
    'What can wait (lowest ROI)',
    'What level of rebuild fits your stage (not your ego)',
    'What to track so improvements compound'
  ];

  return (
    <Container className="py-16">
      <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            You'll know exactly what to do next
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
