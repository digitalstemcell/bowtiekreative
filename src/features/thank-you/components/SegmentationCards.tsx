import { useNavigate } from 'react-router-dom';
import { PathCard } from './PathCard';
import { Search, Zap, TrendingUp, Package, Sparkles, Users, Rocket } from 'lucide-react';

export function SegmentationCards() {
  const navigate = useNavigate();

  const paths = [
    {
      icon: Search,
      title: 'My website exists, but it\'s underperforming',
      description: 'If you have traffic (or even modest traffic) but leads don\'t match the opportunity, start here.',
      buttonText: 'Diagnose My Website',
      path: '/audit'
    },
    {
      icon: Users,
      title: 'I need to transform my brand from the ground up',
      description: 'If you need comprehensive brand strategy, positioning, and messaging developed with expert guidance.',
      buttonText: 'Explore Brand Workshop',
      path: '/workshop'
    },
    {
      icon: Sparkles,
      title: 'I want someone to do it all for me',
      description: 'If you want a complete done-for-you implementation—from audit to launch to ongoing optimization.',
      buttonText: 'Apply for Done-For-You',
      path: '/done-for-you'
    },
    {
      icon: TrendingUp,
      title: 'I need more attention/content growth',
      description: 'If your main constraint is traffic and attention, not the site itself.',
      buttonText: 'Show Me the Viral System',
      path: '/viral'
    },
    {
      icon: Package,
      title: 'I want everything (systems + implementation paths)',
      description: 'If you\'re building long-term skills and want the full library + playbooks.',
      buttonText: 'Explore The Vault',
      path: '/vault'
    },
    {
      icon: Rocket,
      title: 'I need a website built fast (3 days)',
      description: 'If you need a live, working website with hands-on guidance—launched in 3 focused days.',
      buttonText: 'Build Your Website in 3 Days',
      path: '/build-workshop'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {paths.map((path, index) => (
        <PathCard
          key={index}
          icon={path.icon}
          title={path.title}
          description={path.description}
          buttonText={path.buttonText}
          onClick={() => navigate(path.path)}
        />
      ))}
    </div>
  );
}
