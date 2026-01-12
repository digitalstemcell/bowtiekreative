import { Container } from '../../../shared/components/Container';
import { FileText, BookOpen, Mail, Map, Video, Users } from 'lucide-react';

export function Deliverables() {
  const deliverables = [
    {
      icon: FileText,
      title: 'Comprehensive Brand Strategy Document',
      description: '50+ page detailed brand strategy covering all workshop findings, frameworks, and strategic recommendations'
    },
    {
      icon: BookOpen,
      title: 'Brand Messaging Playbook',
      description: 'Complete messaging architecture, voice guidelines, and communication frameworks for consistent brand expression'
    },
    {
      icon: Video,
      title: 'Workshop Recordings & Materials',
      description: 'Full recordings of all 6 sessions plus presentation decks, worksheets, and collaborative outputs'
    },
    {
      icon: Map,
      title: 'Implementation Roadmap',
      description: 'Prioritized action plan with timeline, milestones, and next steps for bringing your brand strategy to life'
    },
    {
      icon: Users,
      title: 'Pre-Workshop Research Package',
      description: 'Brand audit, competitive analysis, and market research to inform strategic discussions'
    },
    {
      icon: Mail,
      title: '30-Day Post-Workshop Support',
      description: 'Email support for questions during implementation and refinement of workshop deliverables'
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What You Will Receive
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to transform and implement your brand strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-2 border-slate-100 hover:border-emerald-300 transition-colors"
            >
              <div className="p-3 bg-emerald-100 rounded-lg inline-block mb-4">
                <deliverable.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {deliverable.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
