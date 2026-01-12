import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import authorImage from '../../../assets/1767428238_resized_image.png';

export function AboutAuthor() {
  return (
    <Container className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
          About the Author
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={authorImage}
              alt="Ryan Perez - Social Media Strategist and Author"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Ryan Perez is a neurodivergent social media strategist, keynote speaker, and author
              with over 300,000 followers and 96 million impressions across platforms.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              His autism-enhanced pattern recognition has allowed him to crack the code on virality
              where traditional marketers have failed.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As the founder of Digital Stem Cell and Bow Tie Kreative, Ryan has helped countless
              creators and businesses amplify their voice and go viral. His work has been featured
              in keynote speeches across North America, and he's known for his raw, unapologetic
              approach to digital strategy.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="border-2 border-slate-300"
            >
              Learn More About Ryan
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
