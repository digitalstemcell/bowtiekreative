import { Container } from '../../../shared/components/Container';
import { Target, TrendingUp, Users, Brain, Zap, BarChart } from 'lucide-react';

export function WhatYoullLearn() {
  const outcomes = [
    {
      icon: Target,
      title: 'Stop Guessing, Start Building',
      description: 'Learn how to build repeatable content systems that perform—no more "post and pray"'
    },
    {
      icon: Brain,
      title: 'Understand Platform Psychology',
      description: 'Master the real mechanics behind algorithms, attention, and behavior'
    },
    {
      icon: TrendingUp,
      title: 'Predict What Will Hit',
      description: 'Use curiosity triggers and performance signals to forecast success before posting'
    },
    {
      icon: Users,
      title: 'Build Real Community',
      description: 'Turn viewers into engaged fans and followers into customers'
    },
    {
      icon: Zap,
      title: 'Create Viral-Ready Content',
      description: 'Design posts that spark curiosity, conversation, and shares naturally'
    },
    {
      icon: BarChart,
      title: 'Read the Data Correctly',
      description: 'Interpret performance metrics and use them to improve systematically'
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What You'll Be Able To Do
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          By the end, you'll have a complete system for creating content that performs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-slate-100 hover:border-emerald-300"
          >
            <div className="p-3 bg-emerald-100 rounded-lg inline-block mb-4">
              <outcome.icon className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {outcome.title}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {outcome.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
