import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import designPartnerImage from '../../../assets/1767447846_ikmyzctd copy.png';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  setupFee: string;
  monthlyPrice: string;
}

export function Hero({ title, subtitle, description, tagline, setupFee, monthlyPrice }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 flex items-center justify-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-300 text-center font-semibold">
              <span className="text-red-400">Only 3 spots available</span> this month — Applications close in 5 days
            </p>
            <Clock className="w-5 h-5 text-red-400 flex-shrink-0 animate-pulse" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                <span className="text-blue-400 font-semibold">Monthly Subscription</span>
                <span className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded">Limited Availability</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-slate-400 mb-6">
                {description}
              </p>
              <p className="text-base text-slate-400 italic mb-4">
                {tagline}
              </p>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-200">
                  <span className="font-semibold">Starting February 1st:</span> We're capping our client roster at 15 active partners to maintain quality. Current openings: 3
                </p>
              </div>
            </div>
            <div>
              <img
                src={designPartnerImage}
                alt="Unlimited Design Partner"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border-2 border-blue-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 transform rotate-12 translate-x-8 -translate-y-1">
              FILLING FAST
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="text-sm text-slate-400 mb-2">One-Time Setup Fee</div>
                <div className="text-4xl font-bold text-white mb-2">{setupFee}</div>
                <div className="text-sm text-slate-400">Includes account onboarding and brand asset integration</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-sm text-slate-400 mb-2">Monthly Retainer</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{monthlyPrice}<span className="text-xl text-slate-400">/mo</span></div>
                <div className="text-sm text-slate-400">Unlimited requests, cancel anytime</div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
                <Link to="/design-partner/apply">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold"
                  >
                    Secure Your Spot Now
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
                No contracts. Cancel anytime.
              </p>
              <p className="text-xs text-amber-400 font-semibold">
                ⚡ Next intake: 3 spots remaining
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
