import { Container } from '../../../shared/components/Container';
import { TrendingUp, Zap, Target } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 sm:py-28">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 font-semibold text-sm">Concierge Funnel Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Turn Traffic Into Revenue on Autopilot
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A fully managed funnel system that works 24/7 to convert visitors into customers while you focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Strategic Planning</h3>
              <p className="text-blue-100 text-sm">
                We design your funnel strategy, map customer journeys, and optimize every touchpoint for conversions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Full Management</h3>
              <p className="text-blue-100 text-sm">
                From landing pages to email sequences to ad campaigns—we handle everything so you don't have to.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Continuous Optimization</h3>
              <p className="text-blue-100 text-sm">
                Monthly reviews, A/B testing, and performance improvements keep your funnel converting better over time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
