import { useState } from 'react';
import { Button } from '../../../shared/components/Button';
import { useNavigate } from 'react-router-dom';

interface CtaSectionProps {
  buttonText: string;
  microcopy: string;
}

export function CtaSection({ buttonText, microcopy }: CtaSectionProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    navigate('/thank-you', { state: { firstName, email } });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full px-6 py-4 text-lg border-2 border-slate-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-6 py-4 text-lg border-2 border-slate-300 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? 'Processing...' : buttonText}
        </Button>
        <p className="text-sm text-slate-600 text-center">{microcopy}</p>
      </form>
    </div>
  );
}
