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
      question: 'Who is this for?',
      answer: 'Growth-stage owners and teams who want a website that performs: leads, credibility, tracking, automation.'
    },
    {
      question: 'What if I\'m not technical?',
      answer: 'That\'s fine. The audit is written to be understood by non-technical owners, and can be handed directly to a designer/developer.'
    },
    {
      question: 'Should I choose $47 or $297?',
      answer: 'Choose $47 if you just want the plan. Choose $297 if you want help prioritizing, sequencing, and confirming what will move revenue fastest.'
    },
    {
      question: 'Is the audit a "website critique"?',
      answer: 'No. It\'s a decision system + prioritized plan, focused on revenue and leakage—not opinions.'
    },
    {
      question: 'Do you guarantee results?',
      answer: 'The audit guarantees clarity and prioritization. Results depend on implementation quality and traffic/offer fundamentals.'
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
