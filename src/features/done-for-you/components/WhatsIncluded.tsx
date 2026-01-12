import { Container } from '../../../shared/components/Container';
import { CheckCircle2 } from 'lucide-react';

export function WhatsIncluded() {
  const phases = [
    {
      title: 'Revenue Leak Audit + ROI Roadmap',
      description: 'Clear priorities, cost-of-delay math, and a plan built around your sales process.',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Emergency Healing (Weeks 1–4)',
      description: 'Speed, UX friction removal, conversion path fixes, compliance baseline, reliability.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Regeneration Foundation (Weeks 5–8)',
      description: 'Rebuild key money pages + flows (services/pricing/booking/checkout) with trust + clarity.',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Nervous System Install (Weeks 9–12)',
      description: 'Analytics + event tracking, dashboards, lead routing, and basic nurture automations.',
      color: 'from-yellow-500 to-green-500'
    },
    {
      title: 'Launch + Proof',
      description: 'A measurable before/after baseline and a post-launch optimization report.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What's Included
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A comprehensive 90-day transformation from broken website to revenue system
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-slate-100 overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
            <div className="p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
