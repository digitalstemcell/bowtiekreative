import { Container } from '../../../shared/components/Container';
import { Check } from 'lucide-react';

export function ModuleBreakdown() {
  const modules = [
    'Rethinking the Value of Followers',
    'Content as Products',
    'The Key to Understanding Content Performance',
    'Themed Content Strategy',
    'Leveraging Human Curiosity',
    'Friends vs. Fans',
    'Navigating the Lifecycle of Social Media Accounts and Competitors',
    'A Guide to Mirroring and Market Research',
    'Leveraging Community and Timing',
    'The Power of Call-to-Action (CTA)',
    'Timing, Storytelling, and Trolls',
    'Navigating Biases for Viral Content'
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Module 1 — How To Go Viral On Any Platform
          </h2>
          <p className="text-xl text-slate-600">12 Comprehensive Lessons</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-slate-900 font-medium leading-relaxed">
                    {module}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
