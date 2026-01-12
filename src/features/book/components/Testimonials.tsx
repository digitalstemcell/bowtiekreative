import { Container } from '../../../shared/components/Container';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'Ryan spoke from the heart about inclusion through an intersectional lens. His passion kept the entire room engaged—no one nodded off in the back row.',
      author: 'Ty McKinney',
      role: 'Community Psychologist'
    },
    {
      text: 'Cross that out—Ryan isn\'t just a voice for neurodivergent people, he\'s a voice for people. His stories land with raw honesty and real hope.',
      author: 'Britton Ledingham',
      role: 'Journalist & Podcast Host'
    },
    {
      text: 'Ryan captivated our Virtual Gurus community twice. His toolkit for neurodivergent entrepreneurs was pure gold—I filled a whole page with actionable notes.',
      author: 'Candace',
      role: 'Community Coordinator, Virtual Gurus'
    },
    {
      text: 'Ryan\'s keynote on neurodiversity in business was eye-opening. His humility, insight and tool demos left us inspired and equipped to serve our clients better.',
      author: 'Kelly Evitt',
      role: 'Community Coordinator, Virtual Gurus'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-rose-50 to-yellow-50 py-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            What Readers & Audiences Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-rose-100"
              >
                <Quote className="w-10 h-10 text-rose-600 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
