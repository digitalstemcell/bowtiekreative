import { Container } from '../../../shared/components/Container';
import { Clock, TrendingUp } from 'lucide-react';
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
    targetDate.setDate(targetDate.getDate() + 3);

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
      <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">
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
              <Clock className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold uppercase tracking-wide">
                Limited Time Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Lifetime Access at Launch Price
            </h2>
            <p className="text-slate-400">
              Lock in lifetime access before the price increases permanently
            </p>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mb-6">
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold mb-2">
                  Price Increase Warning
                </p>
                <p className="text-slate-300">
                  The Vault will increase to regular pricing in {timeLeft.days} days.
                  Join now to lock in lifetime access at the current rate. This price will never be available again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
