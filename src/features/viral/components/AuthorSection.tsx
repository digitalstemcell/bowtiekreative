import { Container } from '../../../shared/components/Container';
import { Users, TrendingUp, Eye } from 'lucide-react';

export function AuthorSection() {
  const stats = [
    { icon: Users, value: '300K+', label: 'Followers' },
    { icon: Eye, value: '96M', label: 'Impressions' },
    { icon: TrendingUp, value: 'Multiple', label: 'Viral Posts' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Taught by Ryan Perez
            </h2>
            <p className="text-xl text-slate-300">
              Pattern recognition specialist with proven viral success
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 sm:p-12 mb-8">
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Ryan Perez harnesses his autistic strength for pattern recognition to decode
              what actually makes content go viral. His frameworks are backed by real results:
              a 300K+ follower audience and 96 million impressions across platforms.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              Instead of theory, you get battle-tested systems from someone who has cracked
              the code on Instagram, TikTok, X, and more. This isn't motivation—it's mechanics.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
