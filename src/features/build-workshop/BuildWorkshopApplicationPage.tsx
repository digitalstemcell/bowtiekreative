import { useState, FormEvent } from 'react';
import { Container } from '../../shared/components/Container';
import { Button } from '../../shared/components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../shared/utils/supabase';

export function BuildWorkshopApplicationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    business_type: '',
    current_website: '',
    biggest_challenge: '',
    timeline: '',
    budget_ready: '',
    technical_comfort: '',
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
        .from('build_workshop_applications')
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
            <h1 className="text-4xl font-bold mb-4">Workshop Spot Reserved!</h1>
            <p className="text-xl text-slate-300 mb-8">
              Thank you for reserving your spot in the Build Your Website in 3 Days workshop. We'll send you the workshop details and next steps within 24 hours.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">What Happens Next?</h2>
              <ol className="text-left space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span>You'll receive a confirmation email with workshop schedule and preparation checklist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span>We'll send you access to templates and resources before Day 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span>Join us for 3 intensive days of hands-on website building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span>Launch your website live at the end of Day 3</span>
                </li>
              </ol>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
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
          <Link to="/build-workshop" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Workshop Details
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Build Your Website in 3 Days
            </h1>
            <p className="text-xl text-slate-300">
              Reserve your spot in our hands-on workshop
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-600/20 rounded-lg p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investment: $1,997</h3>
                <p className="text-slate-300 text-sm mb-3">
                  3-day intensive workshop where you build and launch your website with expert guidance at every step.
                </p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• 3 private hands-on sessions</li>
                  <li>• Real-time screen-share builds</li>
                  <li>• Templates and resources included</li>
                  <li>• Live website at the end</li>
                  <li>• Post-launch support</li>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">About Your Project</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Business or Project Type *</label>
                  <input
                    type="text"
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                    placeholder="E.g., Coaching, E-commerce, Portfolio, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Do you currently have a website? *</label>
                  <select
                    name="current_website"
                    value={formData.current_website}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="no-website">No, starting from scratch</option>
                    <option value="outdated">Yes, but it's outdated</option>
                    <option value="rebuilding">Yes, but I want to rebuild</option>
                    <option value="updating">Yes, just need updates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What's your biggest challenge with building a website? *
                  </label>
                  <textarea
                    name="biggest_challenge"
                    value={formData.biggest_challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                    placeholder="E.g., Don't know where to start, confused by tech, no time..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Technical Comfort Level *</label>
                  <select
                    name="technical_comfort"
                    value={formData.technical_comfort}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="">Select level...</option>
                    <option value="beginner">Beginner - Never built a website before</option>
                    <option value="some-experience">Some Experience - Used website builders</option>
                    <option value="comfortable">Comfortable - Can handle most tech tasks</option>
                    <option value="advanced">Advanced - Technical background</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold mb-6">Workshop Readiness</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">When do you need your website live? *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP - Within next 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are you ready to invest $1,997 in building your website? *
                  </label>
                  <select
                    name="budget_ready"
                    value={formData.budget_ready}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="">Select answer...</option>
                    <option value="yes-ready">Yes, ready to start immediately</option>
                    <option value="ready-soon">Yes, within next 2 weeks</option>
                    <option value="needs-approval">Budget available, needs approval</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Why are you interested in this hands-on workshop format?
                  </label>
                  <textarea
                    name="why_interested"
                    value={formData.why_interested}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
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
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Reserving Your Spot...' : 'Reserve My Workshop Spot'}
              </Button>
              <p className="text-sm text-slate-400 text-center mt-4">
                We'll confirm your spot and send workshop details within 24 hours
              </p>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
