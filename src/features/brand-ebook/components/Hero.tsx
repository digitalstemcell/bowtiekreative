import { Container } from '../../../shared/components/Container';
import { Button } from '../../../shared/components/Button';
import ebookCover from '../../../assets/1767449755_resized_image.png';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full mb-6">
                <span className="text-amber-400 font-semibold uppercase tracking-wide text-sm">
                  Strategic Framework
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Creating a Memorable Brand Identity
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                A strategic framework for building brands that resonate, endure, and drive business value through intentional design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold"
                >
                  Get the eBook - $27
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>Digital Download</span>
                <span>•</span>
                <span>PDF Format</span>
                <span>•</span>
                <span>Instant Access</span>
              </div>
            </div>
            <div>
              <img
                src={ebookCover}
                alt="Creating a Memorable Brand Identity ebook cover"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
