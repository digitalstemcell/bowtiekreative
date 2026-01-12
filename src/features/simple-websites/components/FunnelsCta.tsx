import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FunnelsCta() {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 font-semibold text-sm">Not Just Websites</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Looking for Something More Strategic?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              A website is just a digital brochure. A funnel is a conversion machine that turns visitors into customers on autopilot.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-bold">Traditional Website</h3>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li>• Visitors find you, browse, and leave</li>
                  <li>• No clear path to purchase</li>
                  <li>• Manual follow-up required</li>
                  <li>• Relies on you to close sales</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold">Conversion Funnel</h3>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li>• Guides visitors step-by-step</li>
                  <li>• Automated email sequences</li>
                  <li>• Built-in conversion optimization</li>
                  <li>• Works 24/7 to generate revenue</li>
                </ul>
              </div>
            </div>

            <div className="text-center border-t border-white/10 pt-8">
              <p className="text-lg text-blue-100 mb-6">
                If you're serious about growing your business and want a system that actively sells for you, our Concierge Funnel Support might be exactly what you need.
              </p>
              <Link to="/funnels">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
                >
                  Learn About Funnel Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
