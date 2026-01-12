import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Link } from 'react-router-dom';
import workshopImage from '../../../assets/1767443050_resized_image.png';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full mb-6">
                <span className="text-orange-400 font-semibold uppercase tracking-wide text-sm">
                  Hands-On Workshop
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Build Your Website in 3 Days
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                A hands-on workshop where you build your website live, step-by-step, with guidance, templates, and real-time fixes—so you leave with a launched site, not "homework."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/build-workshop/apply">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold"
                  >
                    Reserve Your Workshop Spot
                  </Button>
                </Link>
                <Link to="/design-partner">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    No Thanks, Show Me Unlimited Design
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src={workshopImage}
                alt="Build Your Website in 3 Days Workshop"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
