import { Container } from '../../shared/components/Container';
import { Confirmation } from './components/Confirmation';
import { SegmentationCards } from './components/SegmentationCards';
import { thankYouData } from './data/thankYouData';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Confirmation
        headline={thankYouData.confirmation.headline}
        subheadline={thankYouData.confirmation.subheadline}
      />

      <Container className="py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              {thankYouData.question.headline}
            </h2>
            <p className="text-slate-600">{thankYouData.question.microcopy}</p>
          </div>

          <SegmentationCards />
        </div>
      </Container>
    </div>
  );
}
