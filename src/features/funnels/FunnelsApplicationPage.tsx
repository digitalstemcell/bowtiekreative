import { useState, FormEvent } from 'react';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../shared/utils/supabase';

export function FunnelsApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    website_url: '',
    industry: '',
    selected_package: '',
    funnel_goal: '',
    current_traffic: '',
    current_conversion: '',
    marketing_channels: '',
    timeline: '',
    budget_ready: '',
    why_interested: ''
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
        .from('funnel_applications')
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Application Received!</h1>
            <p className="text-xl text-slate-300 mb-8">
              Thank you for your interest in our Concierge Funnel Support packages. We'll review your application and get back to you within 24 hours.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">What Happens Next?</h2>
              <ol className="text-left space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>Our team will review your funnel goals and current marketing setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>We'll schedule a strategy call to discuss your funnel needs and package fit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>Once approved, we'll begin implementation and assign your dedicated manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>Your funnel system will be live and optimized for conversions</span>
                </li>
              </ol>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link to="/funnels" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Funnel Packages
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Concierge Funnel Support Application
            </h1>
            <p className="text-xl text-slate-300">
              Fully managed funnel systems that convert on autopilot
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-semibold mb-4">Available Packages:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-bold mb-1">Concierge Start</div>
                <div className="text-slate-400">$1,500/mo + $2,500 setup</div>
                <div className="text-xs text-slate-400 mt-2">1 funnel system</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-blue-500/30">
                <div className="font-bold mb-1">Concierge Plus</div>
                <div className="text-slate-400">$3,000/mo + $3,500 setup</div>
                <div className="text-xs text-slate-400 mt-2">2 funnel systems</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-bold mb-1">Concierge Pro</div>
                <div className="text-slate-400">$5,000/mo + $5,000 setup</div>
                <div className="text-xs text-slate-400 mt-2">Up to 3 funnel systems</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="font-bold mb-1">Concierge Elite</div>
                <div className="text-slate-400">$8,000/mo + $10,000 setup</div>
                <div className="text-xs text-slate-400 mt-2">Up to 5 funnels + creative</div>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Business Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <input
                    type="url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="https://yourwebsite.com"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="E.g., Coaching, E-commerce, SaaS, etc."
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Funnel & Marketing Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Which package are you interested in? *</label>
                  <select
                    name="selected_package"
                    value={formData.selected_package}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select package...</option>
                    <option value="concierge-start">Concierge Start ($1,500/mo)</option>
                    <option value="concierge-plus">Concierge Plus ($3,000/mo)</option>
                    <option value="concierge-pro">Concierge Pro ($5,000/mo)</option>
                    <option value="concierge-elite">Concierge Elite ($8,000/mo)</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What's your primary goal for the funnel? *
                  </label>
                  <textarea
                    name="funnel_goal"
                    value={formData.funnel_goal}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="E.g., Generate leads, sell a course, book calls, sell products..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Monthly Traffic *</label>
                  <select
                    name="current_traffic"
                    value={formData.current_traffic}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="0-1k">0 - 1,000 visitors/month</option>
                    <option value="1k-5k">1,000 - 5,000 visitors/month</option>
                    <option value="5k-10k">5,000 - 10,000 visitors/month</option>
                    <option value="10k-25k">10,000 - 25,000 visitors/month</option>
                    <option value="25k+">25,000+ visitors/month</option>
                    <option value="starting-from-scratch">Starting from scratch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Conversion Rate (if known)</label>
                  <input
                    type="text"
                    name="current_conversion"
                    value={formData.current_conversion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="E.g., 2.5% or 'not tracking'"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What marketing channels are you currently using? *
                  </label>
                  <textarea
                    name="marketing_channels"
                    value={formData.marketing_channels}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="E.g., Facebook Ads, Google Ads, Email, Social Media, SEO..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Why are you interested in concierge funnel support?
                  </label>
                  <textarea
                    name="why_interested"
                    value={formData.why_interested}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="What attracted you to this service?"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Timeline & Investment</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">When do you want to start? *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediately">Immediately (next available slot)</option>
                    <option value="this-month">This month</option>
                    <option value="next-month">Next month</option>
                    <option value="this-quarter">This quarter</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are you ready to invest in funnel management? *
                  </label>
                  <select
                    name="budget_ready"
                    value={formData.budget_ready}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
              <p className="text-sm text-slate-400 text-center mt-4">
                We'll review your application and schedule a strategy call within 24 hours
              </p>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
