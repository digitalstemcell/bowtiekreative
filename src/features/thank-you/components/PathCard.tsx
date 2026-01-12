import { Button } from '../../../shared/components/Button';
import { LucideIcon } from 'lucide-react';

interface PathCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

export function PathCard({ icon: Icon, title, description, buttonText, onClick }: PathCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-slate-100 hover:border-emerald-300">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-emerald-100 rounded-lg">
            <Icon className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>

        <p className="text-slate-700 leading-relaxed">{description}</p>

        <Button onClick={onClick} variant="primary" className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
