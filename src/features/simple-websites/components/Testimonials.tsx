import { Container } from '../../../shared/components/Container';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    business: 'Mindful Wellness Studio',
    text: 'Bow Tie Kreative made launching my wellness business so easy. The website looks professional, and the booking integration has been a game-changer for managing appointments.',
    rating: 5,
    package: 'Classic Knot'
  },
  {
    name: 'Marcus Chen',
    business: 'Chen Legal Services',
    text: 'I needed a professional presence online without the enterprise price tag. The Windsor Growth package was perfect, and the unlimited revisions meant I could fine-tune everything until it was just right.',
    rating: 5,
    package: 'Windsor Growth'
  },
  {
    name: 'Emily Rodriguez',
    business: 'Artisan Coffee Co.',
    text: 'The eCommerce setup in Black Label Studio was exactly what I needed. They handled everything from product uploads to payment processing. My online sales have tripled since launch.',
    rating: 5,
    package: 'Black Label Studio'
  }
];

export function Testimonials() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real businesses who chose simple, affordable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.business}</div>
                  <div className="text-xs text-blue-600 font-semibold mt-2">
                    {testimonial.package} Package
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
