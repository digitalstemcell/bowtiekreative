import { Container } from '../../../shared/components/Container';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What\'s the difference between this and hiring an agency?',
    answer: 'Traditional agencies charge project fees for builds, then separate retainers for management—often totaling $10k-$25k+ per month. Our concierge model combines strategy, build, and management into one predictable monthly fee. You get dedicated support without the enterprise price tag.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most funnel implementations take 3-6 weeks depending on complexity and content readiness. Your dedicated marketing manager will provide a detailed timeline during onboarding. Simple funnels (Start package) typically launch faster, while multi-funnel Elite packages may take longer.'
  },
  {
    question: 'What platforms do you work with?',
    answer: 'We\'re platform agnostic and work with most major tools: ClickFunnels, Kajabi, GoHighLevel, WordPress, Shopify, ActiveCampaign, ConvertKit, Mailchimp, and more. We\'ll recommend the best stack for your needs or work within your existing ecosystem.'
  },
  {
    question: 'Can I upgrade or downgrade my package?',
    answer: 'Yes! You can upgrade anytime to access more funnel systems and features. Downgrades are processed at your next billing cycle. If you downgrade, we\'ll work with you to prioritize which funnels to continue managing.'
  },
  {
    question: 'What if I want to cancel?',
    answer: 'All packages are month-to-month with no long-term contracts. Cancel with 30 days notice. The implementation fee is non-refundable, but there are no cancellation penalties. We\'ll provide export/handoff documentation if needed.'
  },
  {
    question: 'Do you write copy and create designs?',
    answer: 'Concierge Start through Pro include strategic guidance and template-based designs. Elite includes monthly creative support for custom assets. If you need full copywriting or advanced design, we can add that as an additional service or refer you to specialists.'
  },
  {
    question: 'How do monthly performance reviews work?',
    answer: 'Each month, your marketing manager analyzes funnel performance: conversion rates, email open/click rates, ad performance, and revenue generated. You\'ll receive a report with insights and an optimization plan for the next 30 days.'
  },
  {
    question: 'What results can I expect?',
    answer: 'Results vary by industry, offer, and traffic quality. Most clients see improved conversion rates within 60-90 days as we optimize. Our goal is to make your funnel a profitable revenue channel—but success requires quality traffic, a compelling offer, and time for testing.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about our Concierge Funnel Support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
