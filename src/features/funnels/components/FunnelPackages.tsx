import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import { Check, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FunnelPackage {
  name: string;
  subtitle: string;
  implementationFee: string;
  monthlyPrice: string;
  includes: string[];
  features: string[];
  support: string[];
  highlight?: boolean;
}

const packages: FunnelPackage[] = [
  {
    name: 'Concierge Start',
    subtitle: 'Funnel Support',
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
    features: [],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ]
  },
  {
    name: 'Concierge Plus',
    subtitle: 'Funnel Support',
    implementationFee: '$3,500',
    monthlyPrice: '$3,000',
    includes: [
      'Everything in Start, plus:',
      'Management of 2 funnel systems*',
      'Consulting to develop the overall strategy + funnel map',
      'Expanded email automation + segmentation support',
      'Priority execution'
    ],
    features: [],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ],
    highlight: true
  },
  {
    name: 'Concierge Pro',
    subtitle: 'Funnel Support',
    implementationFee: '$5,000',
    monthlyPrice: '$5,000',
    includes: [
      'Everything in Plus, plus:',
      'Management of up to 3 funnel systems*',
      'Full page set management (landing + thank-you + checkout)',
      'Advanced automation improvements (triggers, tagging, routing)',
      'Ad optimization + testing support'
    ],
    features: [],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ]
  },
  {
    name: 'Concierge Elite',
    subtitle: 'Full-Service Growth',
    implementationFee: '$10,000',
    monthlyPrice: '$8,000',
    includes: [
      'Everything in Pro, plus:',
      'Management of up to 5 funnel systems*',
      'Monthly creative support for:',
      'Social media design assets',
      'Blog/article formatting + publishing support',
      'Email marketing design assets',
      'Deeper reporting + growth planning'
    ],
    features: [],
    support: [
      'Dedicated marketing manager',
      'Client portal + project tracking',
      'Email + chat support'
    ]
  }
];

export function FunnelPackages() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Concierge Package
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From single-funnel management to full-service growth support, we have a package that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.highlight ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-600">{pkg.subtitle}</p>
                  </div>

                  <div className="mb-8 pb-8 border-b border-slate-200">
                    <div className="mb-4">
                      <div className="text-sm text-slate-600 mb-1">Implementation Fee (One-Time)</div>
                      <div className="text-3xl font-bold text-slate-900">{pkg.implementationFee}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Monthly Retainer</div>
                      <div className="text-4xl font-bold text-blue-600">
                        {pkg.monthlyPrice}
                        <span className="text-lg text-slate-500">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4">Includes:</h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4">Support:</h4>
                    <ul className="space-y-3">
                      {pkg.support.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link to="/funnels/apply">
                      <Button
                        variant="secondary"
                        className={`w-full ${
                          pkg.highlight
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-slate-900 mb-2">* What is a "Funnel System"?</h3>
            <p className="text-slate-700">
              A funnel system includes: landing page, thank-you page, email automation sequence, and basic tracking setup.
              Additional pages, advanced automation, or campaign management may count as separate systems depending on complexity.
              We'll discuss your specific needs during onboarding to determine the best package fit.
            </p>
          </div>

          <div className="text-center">
            <Link to="/funnel-support">
              <Button
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold"
              >
                View Full Package Details & Visuals
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
