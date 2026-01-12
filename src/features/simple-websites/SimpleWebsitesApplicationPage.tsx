import { useState, FormEvent } from 'react';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../shared/utils/supabase';

export function SimpleWebsitesApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    business_name: '',
    industry: '',
    website_purpose: '',
    selected_package: '',
    pages_needed: '',
    features_needed: '',
    content_ready: '',
    timeline: '',
    budget_ready: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('simple_website_applications')
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Application Received!</h1>
            <p className="text-xl text-slate-300 mb-8">
              Thank you for your interest in our website packages. We'll review your application and send you next steps within 24 hours.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">What Happens Next?</h2>
              <ol className="text-left space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>Our team will review your project requirements and selected package</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>We'll send you an onboarding form to gather content and brand assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>Once onboarded, we'll begin building your custom website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>Your website will be delivered within the turnaround time for your package</span>
                </li>
              </ol>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 text-white"
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link to="/simple-websites" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Website Packages
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Website Package Application
            </h1>
            <p className="text-xl text-slate-300">
              Get your professional website built with monthly pricing
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-semibold mb-4">Available Packages:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-bold mb-1">Bow Tie Lite</div>
                <div className="text-slate-400">$19/mo + $500 setup</div>
                <div className="text-xs text-slate-400 mt-2">1-3 pages</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-bold mb-1">Classic Knot</div>
                <div className="text-slate-400">$79/mo + $1,500 setup</div>
                <div className="text-xs text-slate-400 mt-2">Up to 5 pages</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-blue-500/30">
                <div className="font-bold mb-1">Windsor Growth</div>
                <div className="text-slate-400">$199/mo + $3,000 setup</div>
                <div className="text-xs text-slate-400 mt-2">Up to 10 pages</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-bold mb-1">Black Label Studio</div>
                <div className="text-slate-400">$399/mo + $6,000 setup</div>
                <div className="text-xs text-slate-400 mt-2">Up to 15 pages + eCommerce</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Business & Website Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name *</label>
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Industry *</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="E.g., Retail, Services, Healthcare, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What's the main purpose of your website? *</label>
                  <textarea
                    name="website_purpose"
                    value={formData.website_purpose}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="E.g., Generate leads, sell products, showcase portfolio, book appointments..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Which package are you interested in? *</label>
                  <select
                    name="selected_package"
                    value={formData.selected_package}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white"
                  >
                    <option value="">Select package...</option>
                    <option value="bow-tie-lite">Bow Tie Lite ($19/mo + $500 setup)</option>
                    <option value="classic-knot">Classic Knot ($79/mo + $1,500 setup)</option>
                    <option value="windsor-growth">Windsor Growth ($199/mo + $3,000 setup)</option>
                    <option value="black-label-studio">Black Label Studio ($399/mo + $6,000 setup)</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How many pages do you need? *</label>
                  <select
                    name="pages_needed"
                    value={formData.pages_needed}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="1-3">1-3 pages</option>
                    <option value="4-5">4-5 pages</option>
                    <option value="6-10">6-10 pages</option>
                    <option value="11-15">11-15 pages</option>
                    <option value="15+">More than 15 pages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What features do you need?
                  </label>
                  <textarea
                    name="features_needed"
                    value={formData.features_needed}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white placeholder-slate-400"
                    placeholder="E.g., Contact forms, booking calendar, eCommerce, blog, member login..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Do you have content ready? *</label>
                  <select
                    name="content_ready"
                    value={formData.content_ready}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="yes-all-ready">Yes, all content is ready</option>
                    <option value="mostly-ready">Mostly ready, need some help</option>
                    <option value="some-ready">Some content ready</option>
                    <option value="need-help">Need help creating content</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Timeline & Investment</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">When do you need your website? *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP - Within 2-3 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are you ready to move forward with the setup fee and monthly subscription? *
                  </label>
                  <select
                    name="budget_ready"
                    value={formData.budget_ready}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="yes-ready">Yes, ready to start immediately</option>
                    <option value="ready-soon">Yes, within next 2 weeks</option>
                    <option value="needs-approval">Budget available, needs approval</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
              <p className="text-sm text-slate-400 text-center mt-4">
                We'll review your application and send onboarding details within 24 hours
              </p>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
