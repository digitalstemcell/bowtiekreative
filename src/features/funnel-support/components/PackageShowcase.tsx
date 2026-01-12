import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Check } from 'lucide-react';
import startImage from '../../../assets/1767439327_resized_image.png';
import plusImage from '../../../assets/1767439514_resized_image.png';
import proImage from '../../../assets/1767439668_resized_image.png';
import eliteImage from '../../../assets/1767439845_resized_image.png';

interface Package {
  name: string;
  subtitle: string;
  image: string;
  implementationFee: string;
  monthlyPrice: string;
  includes: string[];
  support: string[];
  badge?: string;
  badgeColor?: string;
}

const packages: Package[] = [
  {
    name: 'Concierge Start',
    subtitle: 'Starter Package',
    image: startImage,
    implementationFee: '$2,500',
    monthlyPrice: '$1,500',
    includes: [
      'Management of 1 funnel system*',
      'Offer + checkout setup (product/pricing)',
      'Calendar/booking setup',
      '1 ad campaign management',
      'Email automation + sequence management',
      'Monthly performance review + optimization plan'
    ],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ]
  },
  {
    name: 'Concierge Plus',
    subtitle: 'Basic Package',
    image: plusImage,
    implementationFee: '$3,500',
    monthlyPrice: '$3,000',
    includes: [
      'Everything in Start, plus:',
      'Management of 2 funnel systems*',
      'Consulting to develop the overall strategy + funnel map',
      'Expanded email automation + segmentation support',
      'Priority execution'
    ],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ],
    badge: 'MOST POPULAR',
    badgeColor: 'blue'
  },
  {
    name: 'Concierge Pro',
    subtitle: 'Professional Tier',
    image: proImage,
    implementationFee: '$5,000',
    monthlyPrice: '$5,000',
    includes: [
      'Everything in Plus, plus:',
      'Management of up to 3 funnel systems*',
      'Full page set management (landing + thank-you + checkout)',
      'Advanced automation improvements (triggers, tagging, routing)',
      'Ad optimization + testing support'
    ],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ]
  },
  {
    name: 'Concierge Elite',
    subtitle: 'Enterprise Package',
    image: eliteImage,
    implementationFee: '$10,000',
    monthlyPrice: '$8,000',
    includes: [
      'Everything in Pro, plus:',
      'Management of up to 5 funnel systems*',
      'Monthly creative support for:',
      '→ Social media design assets',
      '→ Blog/article formatting + publishing support',
      '→ Email marketing design assets',
      'Deeper reporting + growth planning'
    ],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ],
    badge: 'PREMIUM',
    badgeColor: 'amber'
  }
];

export function PackageShowcase() {
  return (
    <div className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Choose Your Service Level
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From single-funnel management to full-scale growth operations, we have the right level of support for your business.
            </p>
          </div>

          <div className="space-y-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${
                  pkg.badge ? 'ring-4 ring-blue-500/50' : ''
                }`}
              >
                {pkg.badge && (
                  <div
                    className={`${
                      pkg.badgeColor === 'amber'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    } text-white text-center py-3 font-bold text-sm tracking-wide`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="order-2 lg:order-1">
                    <div className="mb-8">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-lg text-slate-600">{pkg.subtitle}</p>
                    </div>

                    <div className="mb-10 pb-8 border-b-2 border-slate-200">
                      <div className="mb-6">
                        <div className="text-sm text-slate-600 mb-2 font-semibold">
                          Implementation Fee (One-Time)
                        </div>
                        <div className="text-4xl font-bold text-slate-900">
                          {pkg.implementationFee}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 mb-2 font-semibold">
                          Monthly Retainer
                        </div>
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                          {pkg.monthlyPrice}
                          <span className="text-2xl text-slate-500">/mo</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-500" />
                        What You'll Get:
                      </h4>
                      <ul className="space-y-3">
                        {pkg.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5 text-blue-500" />
                        Support:
                      </h4>
                      <ul className="space-y-3">
                        {pkg.support.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold"
                      >
                        Request a Call
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold"
                      >
                        Chat Live
                      </Button>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/20 rounded-2xl blur-3xl"></div>
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="relative w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-8">
            <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">*</span> What is a "Funnel System"?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A funnel system includes: landing page, thank-you page, email automation sequence, and basic tracking setup.
              Additional pages, advanced automation, or campaign management may count as separate systems depending on complexity.
              We'll discuss your specific needs during onboarding to determine the best package fit.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
