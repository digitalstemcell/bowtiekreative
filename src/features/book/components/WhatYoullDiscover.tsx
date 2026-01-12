import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function WhatYoullDiscover() {
  const discoveries = [
    'Why hashtags are dying - and what\'s replacing them',
    'How to turn controversy into cash - without destroying your brand',
    'The hidden patterns behind viral content that platforms don\'t want you to know',
    'Step-by-step tactics to dominate Instagram, TikTok, X, and beyond',
    'Autism-enhanced insights - unique pattern recognition that reveals what others miss',
    'No fluff, no theory - just proven strategies that generated 96 million impressions'
  ];

  return (
    <div className="bg-slate-900 text-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            What You'll Discover
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {discoveries.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-100">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-bold text-yellow-400">
            Stop guessing. Start winning. Get the uncensored truth today.
          </p>
        </div>
      </Container>
    </div>
  );
}
