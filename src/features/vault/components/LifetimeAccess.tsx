import { Container } from '../../../shared/components/Container';
import { Infinity, Lock, TrendingUp, Gift } from 'lucide-react';

export function LifetimeAccess() {
  const benefits = [
    {
      icon: Infinity,
      title: 'Pay Once, Access Forever',
      description: 'One payment gets you lifetime access. No subscriptions, no renewals, no surprise charges.'
    },
    {
      icon: Gift,
      title: 'All Future Content Included',
      description: 'Every course, mini-course, and playbook we add to The Vault is automatically yours at no extra cost.'
    },
    {
      icon: Lock,
      title: 'Your Access Never Expires',
      description: 'Learn at your own pace. Come back anytime. Your account stays active forever.'
    },
    {
      icon: TrendingUp,
      title: 'Price Increases Do Not Affect You',
      description: 'Lock in today rate. When prices go up, your access remains without paying a cent more.'
    }
  ];

  return (
    <Container className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Infinity className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What "Lifetime" Actually Means
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unlike subscription models that charge you month after month, this is a one-time investment
            that keeps paying off.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-md border-2 border-blue-100"
            >
              <div className="p-3 bg-blue-600 rounded-lg inline-block mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            No Subscription Fatigue
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Most platforms charge monthly or yearly. That adds up fast. With The Vault, you pay once
            and never worry about renewals again. This is the last learning investment you'll need to make.
          </p>
        </div>
      </div>
    </Container>
  );
}
