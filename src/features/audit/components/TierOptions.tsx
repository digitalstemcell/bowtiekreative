import { Container } from '../../../shared/components/Container';
import { TierCard } from './TierCard';

export function TierOptions() {
  const tiers = [
    {
      name: 'Marketing Audit',
      price: '$47',
      description: 'Best if you want the roadmap and you (or your team) will implement.',
      features: [
        'Prioritized list of leaks + fixes',
        'Right-sized investment guidance',
        'Implementable next-step plan',
        'Written for non-technical owners',
        'Delivered within 3-5 business days'
      ],
      buttonText: 'Get the $47 Audit',
      featured: false
    },
    {
      name: 'Audit + Strategy Call',
      price: '$297',
      description: 'Best if you want the roadmap plus help confirming priorities and sequencing.',
      features: [
        'Everything in Marketing Audit',
        '60-minute strategy call',
        'Priority sequencing guidance',
        'Live Q&A and clarification',
        'Recording of the session'
      ],
      buttonText: 'Get the $297 Audit + Call',
      featured: true
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Choose Your Level
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, index) => (
          <TierCard key={index} {...tier} />
        ))}
      </div>
    </Container>
  );
}
