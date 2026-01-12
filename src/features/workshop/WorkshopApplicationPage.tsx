import { useState, FormEvent } from 'react';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../shared/utils/supabase';

export function WorkshopApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    company_stage: '',
    current_revenue: '',
    team_size: '',
    leadership_involved: '',
    budget_ready: '',
    investment_timeline: '',
    biggest_challenge: '',
    brand_goals: '',
    current_brand_state: '',
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
        .from('workshop_applications')
        .insert([{
          ...formData,
          budget_ready: formData.budget_ready === 'yes'
        }]);

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
            <h1 className="text-4xl font-bold mb-4">Workshop Application Received!</h1>
            <p className="text-xl text-slate-300 mb-8">
              Thank you for your interest in our Brand Strategy Workshop. We'll review your application and get back to you within 48 hours.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">What Happens Next?</h2>
              <ol className="text-left space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>Our team will review your application and assess strategic fit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>We'll schedule a discovery call to discuss your brand challenges and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>If it's a good fit, we'll reserve your spot for the next available quarter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>We'll begin pre-workshop research and schedule your 6-session series</span>
                </li>
              </ol>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
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
          <Link to="/workshop" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Workshop Details
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Brand Workshop Application
            </h1>
            <p className="text-xl text-slate-300">
              Transform Your Brand in 6 Strategic Sessions — A comprehensive brand strategy workshop series
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-600/20 rounded-lg p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment: $9,997</h3>
                <p className="text-slate-300 text-sm mb-3">
                  This comprehensive 6-session workshop series is designed for organizations ready to invest in strategic brand development.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• 6 immersive sessions with senior brand strategists (2-3 hours each)</li>
                  <li>• 50+ page brand strategy document and messaging playbook</li>
                  <li>• Pre-workshop research, recordings, and implementation roadmap</li>
                  <li>• 30 days of post-workshop support</li>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Business Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Stage *</label>
                  <select
                    name="company_stage"
                    value={formData.company_stage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="">Select stage...</option>
                    <option value="pre-launch">Pre-launch / Idea Stage</option>
                    <option value="startup">Startup (0-2 years)</option>
                    <option value="growth">Growth Stage (2-5 years)</option>
                    <option value="established">Established (5+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Annual Revenue *</label>
                  <select
                    name="current_revenue"
                    value={formData.current_revenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="0-100k">$0 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m-5m">$1,000,000 - $5,000,000</option>
                    <option value="5m+">$5,000,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Team Size *</label>
                  <select
                    name="team_size"
                    value={formData.team_size}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="">Select team size...</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-10">6-10 employees</option>
                    <option value="11-25">11-25 employees</option>
                    <option value="26-50">26-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Will company leadership participate in the workshop sessions? *
                  </label>
                  <select
                    name="leadership_involved"
                    value={formData.leadership_involved}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="ceo-founder">Yes, CEO/Founder will attend all sessions</option>
                    <option value="leadership-team">Yes, leadership team will attend</option>
                    <option value="some-sessions">Yes, for some key sessions</option>
                    <option value="delegate">No, we'll delegate to marketing team</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Investment Readiness</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are you ready to invest $9,997 in a comprehensive 6-session brand strategy workshop? *
                  </label>
                  <select
                    name="budget_ready"
                    value={formData.budget_ready}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="yes">Yes, budget is approved and ready</option>
                    <option value="needs-approval">Budget available, needs final approval</option>
                    <option value="this-quarter">Within this quarter</option>
                    <option value="next-quarter">Next quarter</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">When would you like to start the workshop series? *</label>
                  <select
                    name="investment_timeline"
                    value={formData.investment_timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediately">Immediately (next available quarter)</option>
                    <option value="this-quarter">This quarter</option>
                    <option value="next-quarter">Next quarter</option>
                    <option value="2-3-months">Within 2-3 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Brand Strategy Needs</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What is your biggest brand challenge right now? *
                  </label>
                  <textarea
                    name="biggest_challenge"
                    value={formData.biggest_challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
                    placeholder="E.g., Lack of clear differentiation, inconsistent messaging, unclear positioning..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What are your primary goals for this brand workshop? *
                  </label>
                  <textarea
                    name="brand_goals"
                    value={formData.brand_goals}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
                    placeholder="E.g., Reposition for new market, build brand foundation, refresh outdated brand..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Describe your current brand state *
                  </label>
                  <textarea
                    name="current_brand_state"
                    value={formData.current_brand_state}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
                    placeholder="E.g., We have visual identity but no strategy, starting from scratch, have outdated positioning..."
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
                    placeholder="What attracted you to this workshop?"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
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
