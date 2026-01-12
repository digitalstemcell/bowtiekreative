import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FunnelsCta } from './components/FunnelsCta';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageFeature {
  text: string;
}

interface Package {
  name: string;
  monthlyPrice: string;
  setupFee: string;
  features: PackageFeature[];
  turnaround: {
    build: string;
    revisions: string;
  };
  highlight?: boolean;
  ecommerceAddon?: string;
}

const packages: Package[] = [
  {
    name: 'Bow Tie Lite',
    monthlyPrice: '$19',
    setupFee: '$500',
    features: [
      { text: 'Custom website (1-page scroll site or up to 3 pages)' },
      { text: 'Hosting + SSL + backups + security updates' },
      { text: 'Contact form + basic SEO foundation' },
      { text: '2 revisions/month' }
    ],
    turnaround: {
      build: '7–10 business days after onboarding + content received',
      revisions: '3–5 business days per request'
    }
  },
  {
    name: 'Classic Knot',
    monthlyPrice: '$79',
    setupFee: '$1,500',
    features: [
      { text: 'Everything in Lite, plus:' },
      { text: 'Custom website up to 5 pages' },
      { text: 'Booking/calendar integration (optional)' },
      { text: 'GA4 analytics setup' },
      { text: '2 revisions/month' }
    ],
    turnaround: {
      build: '10–15 business days after onboarding + content received',
      revisions: '2–4 business days per request'
    }
  },
  {
    name: 'Windsor Growth',
    monthlyPrice: '$199',
    setupFee: '$3,000',
    features: [
      { text: 'Everything in Classic Knot, plus:' },
      { text: 'Custom website up to 10 pages' },
      { text: 'Conversion-focused layout + performance baseline tuning' },
      { text: 'Unlimited revisions (see policy below)' },
      { text: 'Hosting + SSL included' }
    ],
    turnaround: {
      build: '15–25 business days after onboarding + content received',
      revisions: '2–4 business days per request'
    },
    ecommerceAddon: 'eCommerce add-on: +$99/mo (store setup + up to 25 products)',
    highlight: true
  },
  {
    name: 'Black Label Studio',
    monthlyPrice: '$399',
    setupFee: '$6,000',
    features: [
      { text: 'Everything in Windsor, plus:' },
      { text: 'Custom website up to 15 pages' },
      { text: 'eCommerce included (store setup + up to 100 products)' },
      { text: 'Priority queue' },
      { text: 'Unlimited revisions' },
      { text: 'Hosting + SSL included' }
    ],
    turnaround: {
      build: '20–35 business days after onboarding + content received',
      revisions: '24–72 hours per request (one active request at a time)'
    }
  }
];

export default function SimpleWebsitesPage() {
  return (
    <div>
      <Hero />

      <div className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Choose Your Package
              </h2>
              <p className="text-lg text-slate-600">
                Simple pricing, powerful results. All packages include professional hosting and support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                    pkg.highlight ? 'ring-2 ring-blue-500 relative' : ''
                  }`}
                >
                  {pkg.highlight && (
                    <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {pkg.name}
                    </h3>

                    <div className="mb-6">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        {pkg.monthlyPrice}
                        <span className="text-lg text-slate-500">/month</span>
                      </div>
                      <div className="text-sm text-slate-600">
                        {pkg.setupFee} setup fee (custom site included)
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {pkg.ecommerceAddon && (
                      <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-xs text-amber-800">{pkg.ecommerceAddon}</p>
                      </div>
                    )}

                    <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="text-xs font-semibold text-slate-700 mb-2">Turnaround</div>
                      <div className="text-xs text-slate-600 space-y-1">
                        <div>
                          <span className="font-medium">New site build:</span> {pkg.turnaround.build}
                        </div>
                        <div>
                          <span className="font-medium">Revisions:</span> {pkg.turnaround.revisions}
                        </div>
                      </div>
                    </div>

                    <Link to="/simple-websites/apply">
                      <Button
                        variant="secondary"
                        className={`w-full ${
                          pkg.highlight
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Unlimited Revisions Policy</h3>
              <p className="text-sm text-slate-600">
                Windsor Growth and Black Label Studio include unlimited revisions. This means you can request changes
                as often as needed within your plan's scope. We process one active request at a time to ensure quality.
                Priority queue on Black Label Studio means faster turnaround times.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Portfolio />
      <Testimonials />
      <FaqSection />
      <FunnelsCta />
    </div>
  );
}
