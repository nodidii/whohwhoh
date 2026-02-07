import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 backdrop-blur-sm border-t border-cyan-500/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Coreflow Automation
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom AI automation systems for real businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/examples"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Example Automations
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/growth-framework"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Growth Framework
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-500/10">
          <p className="text-slate-500 text-sm text-center">
            © 2026 Coreflow Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
