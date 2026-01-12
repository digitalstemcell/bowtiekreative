import { Container } from '../../../shared/components/Container';
import { BookOpen, Target, Palette, Users, TrendingUp, Award } from 'lucide-react';

export function WhatYouGet() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Framework',
      description: 'Step-by-step methodology for building a brand from the ground up'
    },
    {
      icon: Target,
      title: 'Strategic Positioning',
      description: 'Define your unique value proposition and market position'
    },
    {
      icon: Palette,
      title: 'Visual Identity Design',
      description: 'Create cohesive visual systems that communicate your brand essence'
    },
    {
      icon: Users,
      title: 'Audience Connection',
      description: 'Build authentic relationships with your target customers'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Translate brand strategy into measurable business results'
    },
    {
      icon: Award,
      title: 'Industry Proven',
      description: 'Tactics used by leading brands and successful startups'
    }
  ];

  return (
    <Container className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
          What You'll Get
        </h2>
        <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
          A complete roadmap for creating a brand identity that stands out, resonates with your audience, and drives lasting business value.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-amber-300 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
