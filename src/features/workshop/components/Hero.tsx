import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Sparkles, Users } from 'lucide-react';
import workshopImage from '../../../assets/1767448121_hbivvsze.png';

interface HeroProps {
  price: string;
}

export function Hero({ price }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-10 h-10 text-emerald-400" />
                <Users className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-6">
                <span className="text-emerald-400 font-semibold uppercase tracking-wide text-sm">
                  Premium Workshop Series
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Brand in 6 Strategic Sessions
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Work directly with senior brand strategists to define your brand essence, clarify your target audience,
                and develop a cohesive strategy that drives business growth.
              </p>

              <div className="bg-slate-800/50 backdrop-blur border border-emerald-500/30 rounded-2xl p-8 mb-6">
                <div className="text-5xl sm:text-6xl font-bold mb-2 text-white">{price}</div>
                <p className="text-slate-400 text-lg mb-6">
                  6 immersive sessions with senior brand strategists
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-6">
                  <span className="px-3 py-1 bg-slate-700/70 text-slate-300 rounded-full">6 Sessions</span>
                  <span className="px-3 py-1 bg-slate-700/70 text-slate-300 rounded-full">Brand Strategy</span>
                  <span className="px-3 py-1 bg-slate-700/70 text-slate-300 rounded-full">Leadership Teams</span>
                  <span className="px-3 py-1 bg-slate-700/70 text-slate-300 rounded-full">50+ Page Document</span>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold mb-3"
                  onClick={() => window.location.href = '/workshop/apply'}
                >
                  Apply for Workshop
                </Button>
                <p className="text-sm text-slate-400 text-center">
                  Limited availability. Only 2 spots per quarter.
                </p>
              </div>
            </div>

            <div>
              <img
                src={workshopImage}
                alt="Brand Transformation Workshop"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
