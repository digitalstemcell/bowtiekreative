import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function WhoItsFor() {
  const audiences = [
    'Content creators tired of shouting into the void',
    'Business owners who need real ROI from social media',
    'Marketers looking for cutting-edge strategies',
    'Anyone who wants to understand what really makes content go viral',
    'Entrepreneurs ready to dominate their niche'
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Who This Book is For
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-4">
              {audiences.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
