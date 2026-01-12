import { Container } from '../../shared/components/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Refund Policy</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-2">No Refunds Policy</h3>
                  <p className="text-red-800">
                    All sales are final. We do not offer refunds for any services, products, or setup fees once payment has been processed.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Due to the nature of our custom design and digital services, all payments are non-refundable once work has begun or access has been granted. This policy applies to all services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>One-time setup fees</li>
                <li>Monthly retainer payments</li>
                <li>Workshop fees</li>
                <li>Course purchases</li>
                <li>Digital products</li>
                <li>Consulting services</li>
                <li>Custom design work</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why No Refunds?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our services involve custom work, intellectual property, and immediate access to resources. Once payment is made:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Work begins immediately or access is granted</li>
                <li>Resources and team time are allocated to your project</li>
                <li>Custom deliverables are created specifically for you</li>
                <li>Digital products and course content are immediately accessible</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Monthly Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For monthly subscription services:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>You may cancel at any time to avoid future charges</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>No refunds will be issued for the current billing period</li>
                <li>Setup fees are non-refundable under all circumstances</li>
                <li>You retain access to services through the end of your paid period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Workshops and Events</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Workshop and event fees are non-refundable once registered. We reserve limited spots and cannot resell your seat on short notice. If you cannot attend, you may:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Transfer your registration to another person (subject to approval)</li>
                <li>Receive recordings if available (where applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Digital Products</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All digital products, including ebooks, courses, templates, and resources, are non-refundable once accessed or downloaded. By purchasing, you acknowledge that you have reviewed the product description and understand what is included.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Exceptional Circumstances</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In rare cases where we are unable to deliver services due to circumstances within our control, we will work with you to find a suitable solution. This may include rescheduling, alternative services, or in exceptional cases, a credit toward future services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions or Concerns</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We stand behind the quality of our work. If you have concerns about your service or purchase, please contact us immediately. While we cannot offer refunds, we are committed to ensuring your satisfaction within the scope of our services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By making a purchase, you acknowledge that you have read, understood, and agree to this No Refunds Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Refund Policy, please contact us through our website before making a purchase.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
