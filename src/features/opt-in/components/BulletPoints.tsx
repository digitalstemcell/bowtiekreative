import { Check } from 'lucide-react';

interface BulletPointsProps {
  points: string[];
}

export function BulletPoints({ points }: BulletPointsProps) {
  return (
    <div className="space-y-4">
      {points.map((point, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1">
            <Check className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-lg text-slate-700">{point}</p>
        </div>
      ))}
    </div>
  );
}
