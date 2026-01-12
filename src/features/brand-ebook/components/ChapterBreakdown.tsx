import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function ChapterBreakdown() {
  const chapters = [
    {
      title: 'Chapter 1: Brand Foundation',
      topics: [
        'Defining your brand purpose and mission',
        'Identifying core values and beliefs',
        'Establishing your brand personality'
      ]
    },
    {
      title: 'Chapter 2: Strategic Positioning',
      topics: [
        'Market analysis and competitive landscape',
        'Unique value proposition development',
        'Target audience deep dive'
      ]
    },
    {
      title: 'Chapter 3: Visual Identity',
      topics: [
        'Logo design principles and best practices',
        'Color psychology and palette selection',
        'Typography and visual system creation'
      ]
    },
    {
      title: 'Chapter 4: Brand Voice & Messaging',
      topics: [
        'Developing your brand voice and tone',
        'Crafting compelling brand stories',
        'Messaging frameworks and key messages'
      ]
    },
    {
      title: 'Chapter 5: Brand Experience',
      topics: [
        'Creating consistent touchpoints',
        'Customer journey mapping',
        'Building emotional connections'
      ]
    },
    {
      title: 'Chapter 6: Implementation & Growth',
      topics: [
        'Brand guidelines and asset management',
        'Measuring brand performance',
        'Scaling your brand identity'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            Complete Chapter Breakdown
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center">
            Six comprehensive chapters covering every aspect of brand identity creation
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {chapter.title}
                </h3>
                <ul className="space-y-2">
                  {chapter.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
