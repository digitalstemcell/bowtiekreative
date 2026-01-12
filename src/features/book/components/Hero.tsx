import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import bookCover from '../../../assets/1767426344_qsm4xati.jpg';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-yellow-50 py-16 sm:py-24">
      <Container>
        <div className="text-center mb-8">
          <div className="text-sm font-bold text-slate-600 mb-2">
            300K+ Followers | 96M Impressions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Social Media Uncensored
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-6">
            Explore The Naked Truth About Social Media to Help You Go Viral
          </p>
          <p className="text-lg text-slate-600 mb-8">
            By Ryan Perez - Social Media Strategist
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              variant="secondary"
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold"
            >
              Get the Book Now
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="border-2 border-slate-300"
            >
              Learn More About Ryan
            </Button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <img
            src={bookCover}
            alt="Social Media Uncensored book cover by Ryan Perez"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </Container>
    </div>
  );
}
