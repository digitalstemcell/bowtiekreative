import { Container } from '../../../shared/components/Container';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'What does "lifetime access" actually mean?',
      answer: 'You pay once and get access forever. No subscriptions, no renewals, no expiration dates. Your account stays active as long as the platform exists, and you automatically receive all future courses and updates at no additional cost.'
    },
    {
      question: 'How many courses are included right now?',
      answer: 'The Vault currently includes 200+ full courses and mini playbooks across design, automation, programming, sales, psychology, content, and business systems. We add new content regularly, and everything is automatically included in your lifetime access.'
    },
    {
      question: 'Will I have to pay for future courses?',
      answer: 'No. Every course, mini-course, and playbook we ever add to The Vault is automatically included in your lifetime membership at no extra charge. When we add new content, you get it.'
    },
    {
      question: 'Can I cancel my membership?',
      answer: 'There is nothing to cancel. This is a one-time payment for lifetime access, not a subscription. Your access never expires and you never pay again.'
    },
    {
      question: 'Is there a community included?',
      answer: 'Yes. Lifetime access includes entry to our private community where you can connect with other builders, share insights, and get feedback on your work.'
    },
    {
      question: 'Why is there no refund policy?',
      answer: 'Because you get immediate access to 200+ courses and all digital content the moment you join. We cannot revoke knowledge. This protects the integrity of the lifetime access model and ensures we can continue creating valuable content for serious learners.'
    },
    {
      question: 'Is this a subscription that renews?',
      answer: 'No. This is a one-time payment. There are no recurring charges, no renewals, and no monthly fees. You pay once and have access forever.'
    },
    {
      question: 'Will the price increase?',
      answer: 'Yes. The price will increase as we add more content to The Vault. By joining now, you lock in lifetime access at today rate and you will never pay the difference when prices go up.'
    }
  ];

  return (
    <div className="bg-white py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
