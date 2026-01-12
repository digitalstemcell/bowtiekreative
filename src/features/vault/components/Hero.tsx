import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Key, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';
import vaultImage from '../../../assets/1767432668_resized_image copy.png';

interface HeroProps {
  price: string;
}

export function Hero({ price }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 sm:py-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Key className="w-10 h-10 text-blue-400" />
                <Infinity className="w-10 h-10 text-blue-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Vault: All-Access, Forever
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-4">
                Your lifetime key to the entire learning library—every course, every mini-course,
                and every future update added to the platform.
              </p>
              <p className="text-lg text-slate-300">
                This is the all-access membership for builders who want to move faster, think clearer,
                and execute with systems instead of guesswork.
              </p>
            </div>
            <div>
              <img
                src={vaultImage}
                alt="The Vault - 200+ Courses & Mini-Courses"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-blue-500/30 rounded-2xl p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Infinity className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 font-semibold uppercase tracking-wide">
                    Lifetime Access
                  </span>
                </div>
                <div className="text-5xl sm:text-6xl font-bold mb-2">{price}</div>
                <p className="text-slate-300 text-lg mb-6">
                  Pay once. Access forever. All future content included.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                  <span className="px-3 py-1 bg-slate-700 rounded-full">200+ Courses</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-full">Mini Playbooks</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-full">Community</span>
                  <span className="px-3 py-1 bg-slate-700 rounded-full">Future Updates</span>
                </div>
              </div>
              <div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mb-4"
                >
                  Get Lifetime Access Now
                </Button>
                <p className="text-sm text-slate-400 text-center mb-3">
                  No subscriptions. No renewals. One payment, forever.
                </p>
                <div className="text-center">
                  <Link
                    to="/viral"
                    className="text-sm text-slate-400 hover:text-slate-200 underline transition-colors"
                  >
                    No thanks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
