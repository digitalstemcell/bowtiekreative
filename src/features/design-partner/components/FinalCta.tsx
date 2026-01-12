import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FinalCtaProps {
  setupFee: string;
  monthlyPrice: string;
}

export function FinalCta({ setupFee, monthlyPrice }: FinalCtaProps) {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full mb-6">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-red-300 font-semibold text-sm">Limited Time: 3 Spots Remaining This Month</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Don't Miss Your Chance
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join businesses that trust us with their design needs. No contracts, cancel anytime.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">12/15</div>
              <div className="text-xs text-slate-400">Spots Filled</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">5 Days</div>
              <div className="text-xs text-slate-400">Until Deadline</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <ArrowRight className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">48-72h</div>
              <div className="text-xs text-slate-400">First Delivery</div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border-2 border-blue-500/30 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 transform rotate-12 translate-x-8 -translate-y-1">
              LAST CHANCE
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-sm text-slate-400 mb-2">One-Time Setup Fee</div>
                <div className="text-4xl font-bold text-white">{setupFee}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-2">Monthly Retainer</div>
                <div className="text-4xl font-bold text-blue-400">{monthlyPrice}<span className="text-xl text-slate-400">/mo</span></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
              <Link to="/design-partner/apply">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold"
                >
                  Claim Your Spot Now
                </Button>
              </Link>
              <Link
                to="/simple-websites"
                className="w-full sm:w-auto px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-700 rounded-lg font-semibold transition-colors text-center"
              >
                No Thanks, Show Me Simple Websites
              </Link>
            </div>
            <p className="text-sm text-slate-400 mb-2">
              No contracts. Cancel anytime. No questions asked.
            </p>
            <p className="text-xs text-amber-400 font-semibold">
              ⚡ Applications reviewed within 24 hours
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Once we reach capacity, new applicants will be added to our waitlist for next month's intake.
          </p>
        </div>
      </Container>
    </div>
  );
}
