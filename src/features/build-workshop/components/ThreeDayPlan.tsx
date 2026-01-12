import { Container } from '../../../shared/components/Container';
import { CheckCircle } from 'lucide-react';

export function ThreeDayPlan() {
  const days = [
    {
      day: 'Day 1',
      title: 'Foundation + Structure',
      duration: '2–3 hours',
      goal: 'Choose the platform, set the structure, and start building',
      tasks: [
        'Domain + hosting setup (or connect what you already have)',
        'Install platform + theme/template',
        'Site map + page structure',
        'Brand basics: colors, fonts, logo placement',
        'Build: Home page wireframe + navigation',
        'Homework: gather images + write "rough copy" using prompts'
      ],
      outcome: 'Site exists, structure is live, homepage skeleton is built'
    },
    {
      day: 'Day 2',
      title: 'Build Pages + Lead Flow',
      duration: '2–3 hours',
      goal: 'Build the pages that convert',
      tasks: [
        'Services/Offer page (packages, process, FAQ)',
        'About page (trust story + credibility blocks)',
        'Contact page + form + thank-you message',
        'CTA placement (buttons, booking links, lead magnet optional)',
        'Basic SEO hygiene (titles, descriptions, headers)'
      ],
      outcome: 'Core pages are built and site is ready to polish'
    },
    {
      day: 'Day 3',
      title: 'Polish + Launch + Tracking',
      duration: '2–3 hours',
      goal: 'Finalize, connect tools, and launch confidently',
      tasks: [
        'Mobile optimization pass',
        'Speed/performance cleanup (images, caching basics)',
        'Connect analytics (GA4) + basic event tracking',
        'Final QA checklist (links, forms, layout, browser checks)',
        'Publish + post-launch checklist'
      ],
      outcome: 'Website is launched with tracking and a maintenance plan'
    }
  ];

  return (
    <Container className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
          The 3-Day Build Plan
        </h2>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Step-by-step process from foundation to launch
        </p>
        <div className="space-y-8">
          {days.map((dayInfo, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 border-2 border-orange-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {dayInfo.day} — {dayInfo.title}
                  </h3>
                  <p className="text-orange-600 font-semibold">{dayInfo.duration}</p>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <p className="text-slate-800 font-semibold">
                  Goal: <span className="font-normal">{dayInfo.goal}</span>
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {dayInfo.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-slate-100 border-l-4 border-orange-600 rounded p-4">
                <p className="text-slate-800">
                  <span className="font-bold">End of {dayInfo.day}:</span> {dayInfo.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
