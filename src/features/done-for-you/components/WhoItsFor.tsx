import { Container } from '../../../shared/components/Container';
import { Building2, TrendingUp, Users, Target } from 'lucide-react';

export function WhoItsFor() {
  const criteria = [
    {
      icon: Building2,
      title: 'Growth-Stage Businesses',
      description: 'You have a proven offer and existing traffic, but conversions are leaving money on the table'
    },
    {
      icon: TrendingUp,
      title: 'Revenue-Focused',
      description: 'You want more qualified leads, higher conversions, and measurable ROI—not just a pretty redesign'
    },
    {
      icon: Users,
      title: 'Ready to Scale',
      description: 'You need a website that performs like an asset and scales with your business growth'
    },
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'You want tracking you can trust and systems that keep improving based on real performance data'
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Who This Is For
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            This isn't for everyone. It's for businesses that are ready to treat their website as a revenue system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Not a Good Fit?</h3>
          <p className="text-slate-300 leading-relaxed">
            If you're just starting out, need basic web development, or want a cheap redesign,
            this program isn't right for you. We work with established businesses that need strategic
            revenue optimization—not brochure websites.
          </p>
        </div>
      </Container>
    </div>
  );
}
