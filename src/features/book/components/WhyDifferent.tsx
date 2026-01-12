import { Container } from '../../../shared/components/Container';
import { Users, Eye, Target } from 'lucide-react';

export function WhyDifferent() {
  const stats = [
    { icon: Users, value: '300K+', label: 'Followers' },
    { icon: Eye, value: '96M', label: 'Impressions' },
    { icon: Target, value: '100%', label: 'Battle-Tested' }
  ];

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
          Why This Book is Different
        </h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-12">
          <p>
            Unlike generic social media guides written by marketers who've never gone viral, Social
            Media Uncensored comes from someone who's done it—repeatedly, across multiple platforms,
            with millions of impressions to prove it.
          </p>
          <p>
            Ryan's neurodivergent perspective gives him a unique advantage: the ability to see
            patterns that others miss. This book doesn't just tell you what to do—it shows you why
            it works and how to replicate it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-rose-50 to-yellow-50 rounded-xl border-2 border-rose-200"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-rose-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
