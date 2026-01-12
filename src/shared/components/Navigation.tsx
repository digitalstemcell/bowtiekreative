import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">Bow Tie</span>
            <span className="text-2xl font-light text-emerald-600">Kreative</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
