import { Container } from '../../../shared/components/Container';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Beautiful Websites Without the Hassle
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8">
            Professional, custom websites with affordable monthly pricing. No surprises, no hidden fees.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Whether you're launching your first site or upgrading your online presence, our simple website packages give you everything you need to look professional and convert visitors into customers.
          </p>
        </div>
      </Container>
    </div>
  );
}
