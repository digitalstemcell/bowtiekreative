import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function WhoNeedsThis() {
  const audiences = [
    'Entrepreneurs launching new ventures',
    'Marketing professionals building brand strategies',
    'Design teams creating visual identities',
    'Business owners rebranding or refreshing their identity',
    'Startups establishing their market presence',
    'Consultants advising clients on brand development'
  ];

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
          Who Needs This Guide?
        </h2>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Perfect for anyone responsible for building, managing, or advising on brand identity
        </p>
        <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-xl p-8 border-2 border-amber-200">
          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
