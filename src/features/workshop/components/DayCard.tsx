import { CheckCircle, Clock } from 'lucide-react';

interface DayCardProps {
  day: string;
  title: string;
  duration: string;
  activities: string[];
}

export function DayCard({ day, title, duration, activities }: DayCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-slate-100 hover:border-emerald-300 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
        <div>
          <div className="text-emerald-600 font-bold text-sm uppercase tracking-wide mb-2">
            {day}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        </div>
        <div className="flex items-center space-x-2 text-slate-600 mt-2 sm:mt-0">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{duration}</span>
        </div>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">{activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
