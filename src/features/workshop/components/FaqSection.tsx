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
      question: 'How long does the workshop series take?',
      answer: 'The 6-session series typically spans 8-10 weeks. Each session is 2-3 hours, scheduled weekly or bi-weekly based on team availability. This pacing allows time for reflection, internal discussions, and preparatory work between sessions.'
    },
    {
      question: 'Who should attend from our team?',
      answer: 'We recommend involving key leadership stakeholders including founders, C-suite executives, and heads of marketing or product. Typically 3-6 participants per session ensures productive discussion while maintaining focus. All attendees should have decision-making authority.'
    },
    {
      question: 'Are the sessions virtual or in-person?',
      answer: 'Sessions are conducted virtually via video conference, making them accessible for distributed teams. We can accommodate in-person sessions for an additional fee if your team is located in a major metro area.'
    },
    {
      question: 'What happens before the first session?',
      answer: 'Before Session 1, we conduct a comprehensive brand audit, competitive analysis, and preliminary research. You will receive this research package for review, and we will use it as the foundation for our strategic discussions.'
    },
    {
      question: 'Can we customize the workshop focus areas?',
      answer: 'Yes. While the 6-session framework covers essential brand strategy components, we tailor content and emphasis based on your specific challenges, industry context, and strategic priorities identified during kickoff.'
    },
    {
      question: 'What if we need to reschedule a session?',
      answer: 'We understand business priorities shift. Sessions can be rescheduled with 48-hour notice. The workshop timeline may extend accordingly, but all 6 sessions will be completed within 6 months of the start date.'
    },
    {
      question: 'Do you help with implementation after the workshop?',
      answer: 'The workshop includes 30 days of email support and a detailed implementation roadmap. For hands-on implementation support, we offer additional services including brand identity design, website development, and ongoing brand advisory retainers.'
    },
    {
      question: 'How quickly can we start?',
      answer: 'We accept only 2 workshop clients per quarter to ensure quality attention. Current availability is limited. Reserve your spot now to secure placement in the next available quarter.'
    }
  ];

  return (
    <div className="bg-white py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Workshop Questions
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
