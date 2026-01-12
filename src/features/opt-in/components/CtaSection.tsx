import { useState } from 'react';
import { Button } from '../../../shared/components/Button';
import { useNavigate } from 'react-router-dom';

interface CtaSectionProps {
  buttonText: string;
  microcopy: string;
}

type ToastType = 'success' | 'error';

export function CtaSection({ buttonText, microcopy }: CtaSectionProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(Error: Here’s your opt-in form updated to post first name and email to the provided webhook, with inline success/error toasts and the existing thank-you redirect after a successful send.

<dyad-write path="src/features/opt-in/components/CtaSection.tsx" description="Add webhook submission with toast feedback to opt-in form">
import { useState } from 'react';
import { Button } from '../../../shared/components/Button';
import { useNavigate } from 'react-router-dom';

interface CtaSectionProps {
  buttonText: string;
  microcopy: string;
}

type ToastType = 'success' | 'error';

export function CtaSection({ buttonText, microcopy }: CtaSectionProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    fetch('https://hook.integrator.boost.space/4qlj7pku3vwo9eworo6uso1kwt15lmwi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, email })
    })
      .then((response) => {
        if (!response.ok) {
          setToast({
            message: 'There was a problem submitting your request. Please try again.',
            type: 'error'
          });
          return;
        }

        setToast({
          message: 'Success! Check your email for your download.',
          type: 'success'
        });
        navigate('/thank-you', { state: { firstName, email } });
      })
      .catch(() => {
        setToast({
          message: 'Network error. Please check your connection and try again.',
          type: 'error'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        {toast && (
          <div
            className={`w-full rounded-lg px-4 py-3 text-sm font-medium ${
              toast.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        )}

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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : buttonText}
        </Button>
        <p className="text-sm text-slate-600 text-center">{microcopy}</p>
      </form>
    </div>
  );
}