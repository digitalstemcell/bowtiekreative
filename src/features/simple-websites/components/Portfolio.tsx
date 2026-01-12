import { Container } from '../../../shared/components/Container';
import { ExternalLink } from 'lucide-react';
import portfolioImage1 from '../../../assets/1767428238_resized_image.png';
import portfolioImage2 from '../../../assets/1767432668_resized_image.png';
import portfolioImage3 from '../../../assets/1767438185_resized_image.png';

const portfolioItems = [
  {
    title: 'Modern Business Site',
    category: 'Corporate',
    image: portfolioImage1,
    description: '5-page professional website with booking integration'
  },
  {
    title: 'Creative Portfolio',
    category: 'Creative',
    image: portfolioImage2,
    description: 'Visual showcase with photo gallery and contact form'
  },
  {
    title: 'Service Provider',
    category: 'Services',
    image: portfolioImage3,
    description: 'Conversion-focused site with lead capture'
  }
];

export function Portfolio() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what we've built for businesses like yours. Each site is custom-designed to match the brand and convert visitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 bg-slate-100 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
