import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
          <Link
            to="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link
            to="/terms-and-conditions"
            className="hover:text-white transition-colors"
          >
            Terms and Conditions
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link
            to="/refund-policy"
            className="hover:text-white transition-colors"
          >
            Refund Policy
          </Link>
        </div>
        <div className="text-center text-sm text-slate-500 mt-6">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
