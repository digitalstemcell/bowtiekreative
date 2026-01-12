import { Container } from '../../shared/components/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We provide design, branding, and digital services as described on our website. The specific scope of services will be outlined in your service agreement or purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Payment is required as specified in your service agreement. For monthly services, payment is due at the beginning of each billing cycle. Setup fees, where applicable, are due before work begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Upon full payment, you will own the rights to the final deliverables. We retain the right to display work in our portfolio unless otherwise agreed. You grant us permission to use your company name and logo for promotional purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Revisions and Approval</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Most services include unlimited revisions within the scope of the original project. Significant scope changes may require additional fees. You are responsible for reviewing and approving all work in a timely manner.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cancellation</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For monthly services, you may cancel at any time with notice. Cancellation takes effect at the end of the current billing period. Setup fees and completed work are non-refundable. See our Refund Policy for complete details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid by you for the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms and Conditions on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
