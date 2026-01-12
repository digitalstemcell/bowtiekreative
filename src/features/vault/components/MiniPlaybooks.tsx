import { Container } from '../../../shared/components/Container';
import { FileText, CheckCircle } from 'lucide-react';

export function MiniPlaybooks() {
  const playbooks = [
    'Form submissions',
    'Login flows',
    'Search functionality',
    'File uploads',
    'Checkout processes',
    'Webhooks',
    'Background jobs',
    'UI state management',
    'Password resets',
    'Email verification',
    'Pagination',
    'Rate limiting',
    'Caching strategies',
    'Feature flags',
    'API request/response patterns',
    'Session management',
    'Two-factor authentication',
    'Data validation',
    'Error handling',
    'Security best practices'
  ];

  return (
    <div className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Mini Playbooks Included
              </h2>
            </div>
            <p className="text-xl text-slate-600">
              Step-by-step guides for real scenarios you can implement immediately
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {playbooks.map((playbook, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{playbook}</span>
                </div>
              ))}
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">+</span>
                <span className="text-slate-700 italic">More added regularly</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Real Scenarios, Real Solutions
            </h3>
            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Each playbook walks you through common implementation challenges with practical,
              production-ready code and architecture patterns. No theory—just solutions that work.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
