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
      question: 'Is this for beginners or experienced creators?',
      answer: 'Both. If you\'re new, you\'ll learn how platforms work from first principles. If you\'re experienced but stuck, you\'ll finally understand why some content hits and some doesn\'t.'
    },
    {
      question: 'Does this work for my platform?',
      answer: 'Yes. The frameworks are platform-agnostic. Whether you\'re on Instagram, TikTok, X, LinkedIn, or YouTube, the principles of viral content remain the same.'
    },
    {
      question: 'Is this just theory, or will I learn practical steps?',
      answer: 'It\'s deeply practical. You\'ll learn exactly how to research, create, and optimize content using repeatable systems—not vague "be authentic" advice.'
    },
    {
      question: 'Do I need a big following to benefit?',
      answer: 'No. These strategies work regardless of your current follower count. In fact, understanding these mechanics early prevents years of wasted effort.'
    },
    {
      question: 'What if I don\'t want to be controversial?',
      answer: 'The course teaches you the mechanics of attention and engagement. You decide how to apply them ethically within your values and brand.'
    },
    {
      question: 'Is this a subscription or one-time payment?',
      answer: 'One-time payment. You get lifetime access to both courses plus all future updates. No recurring fees.'
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
