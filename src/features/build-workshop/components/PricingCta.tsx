import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingCta() {
  const includes = [
    '3 private sessions',
    'Real-time screen-share builds',
    'Priority troubleshooting',
    'Same deliverables, faster execution',
    'Live website at the end',
    'Post-launch support'
  ];

  return (
    <div className="bg-slate-900 text-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full mb-6">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-semibold uppercase tracking-wide text-sm">
              Limited Availability
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Build Your Site in 3 Days
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Work directly with us to build, launch, and optimize your website in just three focused sessions
          </p>

          <div className="bg-slate-800/50 border-2 border-orange-500/30 rounded-xl p-8 mb-8">
            <div className="text-5xl font-bold text-white mb-2">$1,997</div>
            <p className="text-slate-400 mb-8">Complete 3-day workshop with live build sessions</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              {includes.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/workshop/apply" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold"
                >
                  Reserve Your Workshop Spot
                </Button>
              </Link>
              <Link to="/design-partner" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  No Thanks, Show Me Unlimited Design
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-slate-400 text-sm">
            Go from no website to fully launched in just 3 days with expert guidance every step of the way
          </p>
        </div>
      </Container>
    </div>
  );
}
