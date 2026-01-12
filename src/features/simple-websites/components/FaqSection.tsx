import { Container } from '../../../shared/components/Container';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What happens after the setup fee?',
    answer: 'Your setup fee covers the initial custom website build. After launch, you only pay the monthly subscription fee, which includes hosting, SSL, security updates, backups, and ongoing revisions based on your plan.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! All our packages are month-to-month with no long-term contracts. Cancel anytime with 30 days notice. Your setup fee is non-refundable, but there are no penalties for canceling.'
  },
  {
    question: 'What if I need more pages than my package includes?',
    answer: 'You can either upgrade to a higher tier package or add additional pages for a one-time fee of $200-$400 per page (depending on complexity). We\'ll discuss the best option for your needs.'
  },
  {
    question: 'Do I own my website?',
    answer: 'You own all the content and designs we create for you. However, the website is hosted and maintained on our infrastructure as part of your monthly subscription. If you cancel, we can export your content or provide migration assistance for an additional fee.'
  },
  {
    question: 'How do revisions work?',
    answer: 'Each package includes a set number of revision requests per month (or unlimited for Windsor Growth and Black Label Studio). A revision can include updates to copy, images, layout adjustments, or new content. Larger changes may count as multiple revisions.'
  },
  {
    question: 'What\'s included in hosting?',
    answer: 'All packages include professional hosting with 99.9% uptime, SSL certificate (secure HTTPS), automatic backups, security monitoring, and software updates. You never have to worry about technical maintenance.'
  },
  {
    question: 'Can you help me write content for my site?',
    answer: 'We provide guidance and suggestions for content structure, but you\'re responsible for providing the actual text and images. If you need copywriting services, we can recommend partners or add that as an additional service.'
  },
  {
    question: 'What if I need an eCommerce store?',
    answer: 'Windsor Growth includes an eCommerce add-on for $99/month (up to 25 products), and Black Label Studio includes full eCommerce (up to 100 products). Both include product setup, shopping cart, and payment processing integration.'
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
              Everything you need to know about our simple website packages.
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
