import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';

export function FinalCta() {
  return (
    <div className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Stop Managing and Start Growing?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a call with our team to discuss your goals and find the perfect package for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10"
            >
              Request a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-10"
            >
              View Pricing Details
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <p className="text-blue-100 text-sm leading-relaxed">
              All packages are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.
              Implementation fees are non-refundable but there are no cancellation penalties.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
