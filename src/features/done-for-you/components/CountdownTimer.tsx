import { Container } from '../../../shared/components/Container';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-slate-900 rounded-lg p-4 sm:p-6 min-w-[80px] sm:min-w-[100px]">
      <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-semibold uppercase tracking-wide">
                Application Deadline
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Limited Spots Available This Quarter
            </h2>
            <p className="text-slate-400">
              We only take on 3 implementation clients per quarter to ensure quality delivery
            </p>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4">
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-300 font-medium">
              Applications close in {timeLeft.days} days. Apply before spots are filled.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
