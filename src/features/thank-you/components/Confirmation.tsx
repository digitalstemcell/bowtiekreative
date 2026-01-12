import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

interface ConfirmationProps {
  headline: string;
  subheadline: string;
}

export function Confirmation({ headline, subheadline }: ConfirmationProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-slate-50 py-12">
      <Container>
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            {headline}
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            {subheadline}
          </p>
        </div>
      </Container>
    </div>
  );
}
