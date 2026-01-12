import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';

interface HeroProps {
  headline: string;
  subheadline: string;
  price: string;
}

export function Hero({ headline, subheadline, price }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-16 sm:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {headline}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Lifetime Access — {price}
              </Button>
            </div>
            <p className="text-sm text-slate-400">
              Both courses + all future updates. One-time payment.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/src/assets/1767428238_resized_image.png"
              alt="How To Go Viral Course Package"
              className="w-full max-w-lg rounded-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
