import { Container } from '../../../shared/components/Container';
import { AlertCircle, MousePointer, ShieldAlert, BarChart3, DollarSign, TrendingDown } from 'lucide-react';

export function WhatWeLookFor() {
  const items = [
    {
      icon: TrendingDown,
      title: 'Conversion leaks',
      description: 'Where people drop'
    },
    {
      icon: MousePointer,
      title: 'Bounce triggers',
      description: 'What makes people leave fast'
    },
    {
      icon: AlertCircle,
      title: 'Friction points',
      description: 'What adds hesitation'
    },
    {
      icon: ShieldAlert,
      title: 'Trust gaps',
      description: 'Credibility blockers'
    },
    {
      icon: BarChart3,
      title: 'Tracking issues',
      description: 'You can\'t improve what you can\'t measure'
    },
    {
      icon: DollarSign,
      title: 'Cost of waiting',
      description: 'What the delay is actually costing'
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What this audit finds
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <item.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
