import { Container } from '../../../shared/components/Container';

interface HeroProps {
  headline: string;
  subheadline: string;
}

export function Hero({ headline, subheadline }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50 py-12 sm:py-20">
      <Container>
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            {headline}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </div>
      </Container>
    </div>
  );
}
