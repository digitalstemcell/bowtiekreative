import { useState, FormEvent } from 'react';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../shared/utils/supabase';

export function DesignPartnerApplicationPage() {
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
    design_needs: '',
    current_solution: '',
    monthly_volume: '',
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
        .from('design_partner_applications')
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
              Thank you for your interest in our Unlimited Design Partner program. We'll review your application and get back to you within 24 hours.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">What Happens Next?</h2>
              <ol className="text-left space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>Our team will review your application and design needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>We'll schedule a quick call to discuss your design requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>If it's a good fit, we'll onboard you and start delivering designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>Your first design request delivered within 48-72 hours</span>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link to="/design-partner" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Design Partner Details
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Unlimited Design Partner Application
            </h1>
            <p className="text-xl text-slate-300">
              Unlimited design requests for a flat monthly fee
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 rounded-lg p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment: $1,500 setup + $2,000/month</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Unlimited design requests with fast turnaround. Cancel anytime, no contracts.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Unlimited design requests</li>
                  <li>• 48-72 hour first drafts</li>
                  <li>• Unlimited revisions</li>
                  <li>• Dedicated design manager</li>
                  <li>• Cancel anytime</li>
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
                    placeholder="E.g., E-commerce, SaaS, Coaching, etc."
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Design Needs</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What type of design work do you need most? *
                  </label>
                  <textarea
                    name="design_needs"
                    value={formData.design_needs}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="E.g., Landing pages, social media graphics, email templates, ads, presentations..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    How are you currently handling design? *
                  </label>
                  <select
                    name="current_solution"
                    value={formData.current_solution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="in-house">In-house designer</option>
                    <option value="freelancers">Hiring freelancers</option>
                    <option value="agency">Working with an agency</option>
                    <option value="diy">Doing it myself</option>
                    <option value="none">Not doing much design work</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    How many design requests do you typically need per month? *
                  </label>
                  <select
                    name="monthly_volume"
                    value={formData.monthly_volume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="1-5">1-5 requests</option>
                    <option value="5-10">5-10 requests</option>
                    <option value="10-20">10-20 requests</option>
                    <option value="20+">20+ requests</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Why are you interested in an unlimited design partnership?
                  </label>
                  <textarea
                    name="why_interested"
                    value={formData.why_interested}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="What attracted you to this model?"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Investment Readiness</h2>

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
                    <option value="immediately">Immediately (next available spot)</option>
                    <option value="this-week">This week</option>
                    <option value="within-2-weeks">Within 2 weeks</option>
                    <option value="this-month">This month</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are you ready to invest $1,500 setup + $2,000/month? *
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
                    <option value="yes-soon">Yes, within next week</option>
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
                We'll review your application and respond within 24 hours
              </p>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
