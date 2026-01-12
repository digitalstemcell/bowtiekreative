import { Container } from '../../../shared/components/Container';
import { DayCard } from './DayCard';

export function ThreeDayPlan() {
  const sessions = [
    {
      day: 'Session 1',
      title: 'Brand Foundation & Discovery',
      duration: '2-3 hours',
      activities: [
        'Pre-workshop brand audit presentation',
        'Competitive analysis review',
        'Mission, vision, and values definition workshop',
        'Brand purpose and promise identification',
        'Stakeholder alignment exercise'
      ]
    },
    {
      day: 'Session 2',
      title: 'Audience & Market Research',
      duration: '2-3 hours',
      activities: [
        'Target audience research findings',
        'Customer persona development workshop',
        'Behavioral insights and pain points mapping',
        'Customer journey analysis',
        'Market positioning opportunities'
      ]
    },
    {
      day: 'Session 3',
      title: 'Brand Positioning Strategy',
      duration: '2-3 hours',
      activities: [
        'Competitive differentiation framework',
        'Unique value proposition development',
        'Brand positioning statement creation',
        'Strategic brand pillars definition',
        'Category design and market positioning'
      ]
    },
    {
      day: 'Session 4',
      title: 'Messaging & Voice Architecture',
      duration: '2-3 hours',
      activities: [
        'Brand messaging hierarchy development',
        'Core messaging platform creation',
        'Brand voice and tone guidelines',
        'Key message testing and refinement',
        'Communications playbook structure'
      ]
    },
    {
      day: 'Session 5',
      title: 'Visual Direction & Identity',
      duration: '2-3 hours',
      activities: [
        'Visual brand attributes workshop',
        'Mood boarding and visual exploration',
        'Design direction recommendations',
        'Brand expression frameworks',
        'Visual consistency guidelines'
      ]
    },
    {
      day: 'Session 6',
      title: 'Implementation & Roadmap',
      duration: '2-3 hours',
      activities: [
        'Comprehensive brand strategy review',
        'Implementation prioritization',
        'Launch roadmap development',
        'Internal rollout strategy',
        'Success metrics and measurement plan'
      ]
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          6-Session Workshop Series
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A comprehensive journey from brand foundation to implementation roadmap
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {sessions.map((session, index) => (
          <DayCard
            key={index}
            day={session.day}
            title={session.title}
            duration={session.duration}
            activities={session.activities}
          />
        ))}
      </div>
    </Container>
  );
}
