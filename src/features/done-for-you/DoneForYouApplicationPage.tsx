import { useState, FormEvent } from 'react';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../shared/utils/supabase';

export function DoneForYouApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    website_url: '',
    monthly_traffic: '',
    current_revenue: '',
    conversion_rate: '',
    biggest_pain_point: '',
    tried_before: '',
    budget_ready: '',
    timeline: '',
    success_metric: '',
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
        .from('done_for_you_applications')
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
              Thank you for your interest in our 90-Day Implementation Package. We'll review your application and get back to you within 48 hours.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">What Happens Next?</h2>
              <ol className="text-left space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>Our team will review your application and assess if we're a good fit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>We'll schedule a discovery call to audit your current revenue leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>If it's a match, we'll send you the Revenue Leak Audit + ROI Roadmap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>Upon approval, we'll begin your 90-day implementation immediately</span>
                </li>
              </ol>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900"
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
          <Link to="/done-for-you" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Package Details
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              90-Day Implementation Application
            </h1>
            <p className="text-xl text-slate-300">
              Stop losing money to a broken website — Apply for our done-for-you implementation package
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 rounded-lg p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment: $19,997</h3>
                <p className="text-slate-300 text-sm mb-3">
                  This 90-day done-for-you package is designed for businesses ready to transform their website into a revenue system.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Revenue Leak Audit + ROI Roadmap</li>
                  <li>• 90-Day complete implementation (Emergency Healing → Regeneration → Nervous System Install)</li>
                  <li>• Launch + Proof Report with metrics</li>
                  <li>• Ongoing support during implementation</li>
                </ul>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Business & Website Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Website URL *</label>
                  <input
                    type="url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Website Traffic *</label>
                  <select
                    name="monthly_traffic"
                    value={formData.monthly_traffic}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="0-1k">0 - 1,000 visitors/month</option>
                    <option value="1k-5k">1,000 - 5,000 visitors/month</option>
                    <option value="5k-10k">5,000 - 10,000 visitors/month</option>
                    <option value="10k-25k">10,000 - 25,000 visitors/month</option>
                    <option value="25k-50k">25,000 - 50,000 visitors/month</option>
                    <option value="50k+">50,000+ visitors/month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Monthly Revenue from Website *</label>
                  <select
                    name="current_revenue"
                    value={formData.current_revenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="0-5k">$0 - $5,000/month</option>
                    <option value="5k-10k">$5,000 - $10,000/month</option>
                    <option value="10k-25k">$10,000 - $25,000/month</option>
                    <option value="25k-50k">$25,000 - $50,000/month</option>
                    <option value="50k-100k">$50,000 - $100,000/month</option>
                    <option value="100k+">$100,000+/month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Do you know your conversion rate?</label>
                  <input
                    type="text"
                    name="conversion_rate"
                    value={formData.conversion_rate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="E.g., 2.5% or 'not tracking'"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Revenue Challenges</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What is your biggest revenue pain point right now? *
                  </label>
                  <textarea
                    name="biggest_pain_point"
                    value={formData.biggest_pain_point}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="E.g., Traffic comes but doesn't convert, unclear offer, slow site, no tracking..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What have you tried before to fix this? *
                  </label>
                  <textarea
                    name="tried_before"
                    value={formData.tried_before}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="E.g., Hired a developer, ran ads, tried different platforms..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What would success look like 90 days from now? *
                  </label>
                  <textarea
                    name="success_metric"
                    value={formData.success_metric}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="E.g., 30% more conversions, $10k more monthly revenue, clear ROI from traffic..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Why are you interested in working with us specifically?
                  </label>
                  <textarea
                    name="why_interested"
                    value={formData.why_interested}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="What attracted you to this package?"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Investment Readiness</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are you ready to invest $19,997 in a 90-day done-for-you implementation? *
                  </label>
                  <select
                    name="budget_ready"
                    value={formData.budget_ready}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="yes">Yes, budget is approved and ready</option>
                    <option value="needs-approval">Budget available, needs final approval</option>
                    <option value="within-30">Within 30 days</option>
                    <option value="within-60">Within 60 days</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">When would you like to start? *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediately">Immediately (next available slot)</option>
                    <option value="this-month">This month</option>
                    <option value="next-month">Next month</option>
                    <option value="this-quarter">This quarter</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
              <p className="text-sm text-slate-400 text-center mt-4">
                We'll review your application and respond within 48 hours to discuss fit and next steps
              </p>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
