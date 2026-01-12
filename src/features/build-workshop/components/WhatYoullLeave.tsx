import { Container } from '../../../shared/components/Container';
import { Globe, Layout, Smartphone, Search, Mail, Settings } from 'lucide-react';

export function WhatYoullLeave() {
  const deliverables = [
    {
      icon: Globe,
      title: 'A live website (published)',
      description: 'Your site will be live and accessible to the world'
    },
    {
      icon: Layout,
      title: 'A clear structure',
      description: 'Home, About, Services/Offer, Contact pages built out'
    },
    {
      icon: Smartphone,
      title: 'Mobile-friendly design',
      description: 'Looks great on phones, tablets, and desktops'
    },
    {
      icon: Search,
      title: 'Basic SEO foundation',
      description: 'Titles, headings, metadata set up correctly'
    },
    {
      icon: Mail,
      title: 'Lead capture',
      description: 'Contact form + CTA flow ready to convert'
    },
    {
      icon: Settings,
      title: 'Simple update system',
      description: 'Learn how to edit and maintain it yourself'
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            What You'll Leave With
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center">
            Everything you need to have a professional, working website
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-orange-600" />
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
