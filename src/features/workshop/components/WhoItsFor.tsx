import { Container } from '../../../shared/components/Container';
import { Building2, Rocket, TrendingUp, Target } from 'lucide-react';

export function WhoItsFor() {
  const audiences = [
    {
      icon: Building2,
      title: 'Established Companies',
      description: 'Organizations ready to elevate their market presence with a comprehensive brand refresh or repositioning'
    },
    {
      icon: Rocket,
      title: 'Funded Startups',
      description: 'Venture-backed companies launching with purpose and needing a strong brand foundation from day one'
    },
    {
      icon: TrendingUp,
      title: 'Growing Businesses',
      description: 'Companies experiencing growth but lacking clear brand differentiation in competitive markets'
    },
    {
      icon: Target,
      title: 'Leadership Teams',
      description: 'Executive teams committed to strategic brand development and willing to invest time in the process'
    }
  ];

  return (
    <Container className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Who This Workshop Is For
          </h2>
          <p className="text-xl text-slate-600">
            Perfect for organizations ready to invest in strategic brand development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-8 shadow-md border-2 border-emerald-100"
            >
              <div className="p-3 bg-emerald-600 rounded-lg inline-block mb-4">
                <audience.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            A Strategic Investment in Your Brand
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            This is not a quick fix. This is a comprehensive brand transformation process that requires
            leadership commitment, collaborative participation, and strategic thinking. If you are ready
            to do the deep work that creates lasting brand value, this workshop is for you.
          </p>
        </div>
      </div>
    </Container>
  );
}
