import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Link } from 'react-router-dom';
import revenueImage from '../../../assets/1767438185_resized_image.png';

interface HeroProps {
  price: string;
}

export function Hero({ price }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <span className="text-amber-400 font-semibold">90-Day Implementation Package</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Stop Losing Money to a Broken Website
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-6">
                Your website can look "professional" and still bleed revenue every month—slow pages,
                unclear offers, leaky CTAs, broken tracking, weak trust signals, and zero follow-up automation.
              </p>
              <p className="text-lg text-slate-400">
                This is a done-for-you 90-day implementation package that turns your site into a revenue system:
                we diagnose where money is leaking, fix the highest-impact issues first, rebuild the pages that
                drive conversions, and install tracking + automation so you can prove what's working and compound
                results over time.
              </p>
            </div>
            <div>
              <img
                src={revenueImage}
                alt="Website Revenue Regeneration - 90-Day Implementation Package"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl font-bold mb-2">{price}</div>
              <p className="text-slate-400">90-Day Done-For-You Implementation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/done-for-you/apply">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
                >
                  Apply Now
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
            <p className="text-sm text-slate-400 mt-4">
              Limited availability. Application review required.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
