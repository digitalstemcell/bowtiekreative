import { Container } from '../../../shared/components/Container';
import { Palette, Zap, Code, TrendingUp, Brain, Megaphone, DollarSign, Users } from 'lucide-react';

export function WhatsIncluded() {
  const categories = [
    {
      icon: Palette,
      title: 'Design + UI Systems',
      description: 'Make your work look premium and feel intentional',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Automation & A.I. + Prompt Library',
      description: 'Speed up thinking and production',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Programming + Technical Implementation',
      description: 'Build systems that scale and perform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Sales + Funnels + Personas',
      description: 'Build offers and experiences that convert',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Psychology Profiles + Logical Fallacies',
      description: 'Understand behavior, sharpen persuasion',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Megaphone,
      title: 'Content + Social + Platforms + Virality',
      description: 'Generate ideas and build distribution',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: DollarSign,
      title: 'Marketing, Money + Time Systems',
      description: 'Better decisions, better execution',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Users,
      title: 'Private Community Access',
      description: 'Connect with other builders and share insights',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What's Inside The Vault
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A growing collection across design, automation, programming, sales, strategy, psychology,
          and content—plus practical resources you can apply immediately.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-slate-100"
          >
            <div className={`h-2 bg-gradient-to-r ${category.color}`} />
            <div className="p-6">
              <div className="p-3 bg-slate-100 rounded-lg inline-block mb-4">
                <category.icon className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {category.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 sm:p-12 border-2 border-blue-200">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
          200+ Courses and Counting
        </h3>
        <p className="text-lg text-slate-700 leading-relaxed text-center">
          Every course, mini-course, and playbook ever added to the platform—automatically included
          in your lifetime access. No additional fees. No upsells. Just continuous learning.
        </p>
      </div>
    </Container>
  );
}
