import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface FinalCtaProps {
  price: string;
}

export function FinalCta({ price }: FinalCtaProps) {
  const included = [
    '200+ courses across all disciplines',
    'All mini playbooks and implementation guides',
    'Private community access',
    'Prompt library and templates',
    'All future courses automatically included',
    'Lifetime access with no renewals'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Lifetime Access to Everything
            </h2>
            <p className="text-xl text-blue-100">
              One payment. Forever access. All future content included.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border-2 border-blue-500/30 rounded-2xl p-8 sm:p-12 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full mb-4">
                <span className="text-blue-400 font-semibold">Lifetime Access</span>
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                {price}
              </div>
              <p className="text-slate-400 text-lg">
                One-time payment. Never pay again.
              </p>
            </div>

            <div className="space-y-3 mb-8 max-w-2xl mx-auto">
              {included.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 mb-4"
              >
                Unlock The Vault Now
              </Button>
              <p className="text-slate-400 text-sm">
                Instant access. Start learning in the next 60 seconds.
              </p>
            </div>
          </div>

          <div className="bg-red-900/20 border-2 border-red-500/30 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-red-400 font-bold mb-2">
                  No Refund Policy
                </p>
                <p className="text-slate-300">
                  All sales are final. Due to the immediate access to digital content and the lifetime
                  nature of this offer, we cannot provide refunds. Make sure this is right for you
                  before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
