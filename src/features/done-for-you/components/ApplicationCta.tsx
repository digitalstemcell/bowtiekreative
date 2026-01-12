import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ApplicationCtaProps {
  price: string;
}

export function ApplicationCta({ price }: ApplicationCtaProps) {
  const included = [
    'Revenue Leak Audit + ROI Roadmap',
    '90-Day Done-For-You Implementation',
    'Emergency Healing (Weeks 1-4)',
    'Regeneration Foundation (Weeks 5-8)',
    'Nervous System Install (Weeks 9-12)',
    'Launch + Proof Report',
    'Post-Launch Optimization Recommendations',
    'Ongoing Support During Implementation'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Stop Losing Money?
            </h2>
            <p className="text-xl text-slate-300">
              Apply now to secure your spot for this quarter's implementation
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border-2 border-amber-500/30 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full mb-4">
                <span className="text-amber-400 font-semibold">Investment</span>
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                {price}
              </div>
              <p className="text-slate-400 text-lg">
                90-Day Complete Implementation
              </p>
            </div>

            <div className="space-y-3 mb-8 max-w-2xl mx-auto">
              {included.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <Link to="/done-for-you/apply">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg px-12"
                  >
                    Submit Application
                  </Button>
                </Link>
                <Link to="/build-workshop">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    No Thanks, Show Me 3-Day Workshop
                  </Button>
                </Link>
              </div>
              <p className="text-slate-400">
                Applications reviewed within 48 hours
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              Limited to 3 clients per quarter. We review each application to ensure we're a good fit.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
