import { Container } from '../../../shared/components/Container';
import { Crown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-400/40 rounded-full mb-8">
            <Crown className="w-5 h-5 text-amber-300" />
            <span className="text-amber-200 font-semibold">Premium Concierge Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent">
            Full-Service Funnel Management
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Stop managing marketing tasks. Start watching revenue grow.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            From strategy to execution to optimization—we handle every detail of your funnel systems so you can focus on what you do best.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300">Dedicated Marketing Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300">Monthly Performance Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-slate-300">Continuous Optimization</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
