import { Container } from '../../../shared/components/Container';
import { Zap, LineChart, CheckCircle, RefreshCw } from 'lucide-react';

export function Outcome() {
  const outcomes = [
    {
      icon: Zap,
      title: 'Faster Performance',
      description: 'Lightning-fast page loads that keep visitors engaged and reduce bounce rates'
    },
    {
      icon: CheckCircle,
      title: 'Conversion-Ready',
      description: 'Clear messaging, trust signals, and friction-free paths that turn visitors into customers'
    },
    {
      icon: LineChart,
      title: 'Tracking You Trust',
      description: 'Complete visibility into what is working with dashboards that show real ROI'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Improvement',
      description: 'Automated systems and optimization frameworks that compound results over time'
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          The Outcome
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A faster, clearer, conversion-ready website with tracking you can trust and
          systems that keep improving—without guessing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 shadow-md border-2 border-slate-100"
          >
            <div className="p-3 bg-slate-900 rounded-lg inline-block mb-4">
              <outcome.icon className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {outcome.title}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {outcome.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 sm:p-12 border-2 border-amber-200">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
          Stop Guessing. Start Measuring.
        </h3>
        <p className="text-lg text-slate-700 leading-relaxed text-center mb-6">
          You'll receive a complete before/after performance report showing exactly where we
          stopped the revenue leaks, what we fixed, and the measurable impact on your bottom line.
          No vanity metrics—just real business outcomes.
        </p>
      </div>
    </Container>
  );
}
