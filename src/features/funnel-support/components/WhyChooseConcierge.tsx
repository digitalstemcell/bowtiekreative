import { Container } from '../../../shared/components/Container';
import { Users, BarChart3, Zap, Shield, Headphones, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Dedicated Marketing Manager',
    description: 'Your own expert who knows your business, your goals, and your customers. No ticket systems, no generic support - just personal, strategic guidance.'
  },
  {
    icon: BarChart3,
    title: 'Monthly Performance Reviews',
    description: 'Detailed reporting on what is working, what is not, and exactly what we are doing to improve results. Full transparency, every month.'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'No waiting weeks for revisions. Our concierge model means your updates and optimizations are prioritized and executed quickly.'
  },
  {
    icon: Shield,
    title: 'Predictable Pricing',
    description: 'One monthly fee covers strategy, execution, and optimization. No surprise invoices, no hidden project fees, no hourly billing.'
  },
  {
    icon: Headphones,
    title: 'Direct Communication',
    description: 'Email and chat support with your dedicated manager. Ask questions, request changes, and get strategic advice whenever you need it.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'We do not just build and walk away. Every month, we test, tweak, and improve your funnels to maximize conversions and revenue.'
  }
];

export function WhyChooseConcierge() {
  return (
    <div className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Concierge Funnel Support?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get the power of a full marketing team without the overhead, management headaches, or enterprise price tag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
