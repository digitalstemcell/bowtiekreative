import { Container } from '../../../shared/components/Container';
import { Check } from 'lucide-react';

interface SetupItem {
  title: string;
  items: string[];
}

interface MonthlyItem {
  title: string;
  items: string[];
}

interface WhatsIncludedProps {
  setup: SetupItem;
  monthly: MonthlyItem;
}

export function WhatsIncluded({ setup, monthly }: WhatsIncludedProps) {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-4">
            What You Get
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Everything you need for consistent, professional design support
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {setup.title}
              </h3>
              <ul className="space-y-4">
                {setup.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {monthly.title}
              </h3>
              <ul className="space-y-4">
                {monthly.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
