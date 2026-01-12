import { Container } from '../../../shared/components/Container';
import { BookOpen, Video } from 'lucide-react';

export function WhatYouGet() {
  const courses = [
    {
      icon: Video,
      title: 'How To Go Viral On Any Platform',
      description: 'A practical, platform-agnostic course that teaches you how viral content actually works—so you can stop guessing, stop chasing follower counts, and start building repeatable content systems that perform.',
      highlights: [
        'Treat content like a product',
        'Identify what people are already curious about',
        'Package ideas into clear themes',
        'Read performance signals correctly',
        'Ethical research + mirroring techniques',
        'Turn views into real momentum'
      ]
    },
    {
      icon: BookOpen,
      title: 'Social Media Uncensored',
      description: 'Ryan Perez\'s no-fluff guide to cracking virality on platforms like Instagram, TikTok, X, and more. Harnessing his autistic strength for pattern recognition—and backed by a 300K-follower audience and 96M impressions—Perez reveals the real mechanics behind algorithms, engagement, controversial content, and monetization.',
      highlights: [
        'Truth-first framework for how platforms work',
        'Attention and behavior mechanics',
        'Why most creators get stuck',
        'Algorithm insights',
        'Engagement strategies',
        'Monetization paths'
      ]
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What You Get
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Full access to both comprehensive video programs, plus all future updates
        </p>
      </div>

      <div className="space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 sm:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-emerald-600 rounded-lg">
                <course.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {course.title}
              </h3>
            </div>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {course.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {course.highlights.map((highlight, hIndex) => (
                <div key={hIndex} className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span className="text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
