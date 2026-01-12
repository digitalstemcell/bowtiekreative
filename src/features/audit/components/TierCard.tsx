import { Button } from '../../../shared/components/Button';
import { Check } from 'lucide-react';

interface TierCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

export function TierCard({ name, price, description, features, buttonText, featured }: TierCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${featured ? 'ring-4 ring-emerald-600 transform scale-105' : ''}`}>
      <div className="space-y-6">
        {featured && (
          <div className="text-center">
            <span className="inline-block bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </span>
          </div>
        )}

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
          <div className="mt-4">
            <span className="text-5xl font-bold text-slate-900">{price}</span>
          </div>
          <p className="mt-4 text-slate-600">{description}</p>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button variant={featured ? 'secondary' : 'primary'} className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
