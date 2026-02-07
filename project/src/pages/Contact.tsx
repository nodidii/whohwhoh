import { useEffect } from 'react';
import { Calendar, Mail } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function Contact() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.contact.title,
      description: seoConfig.contact.description,
      keywords: seoConfig.contact.keywords,
      canonical: seoConfig.contact.canonical,
    });
  }, []);

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Request a 14-Day Outcome Deployment
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Test a live AI automation system inside your operation.
            </p>
            <div className="max-w-2xl mx-auto mt-8 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                This includes:
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  A clearly defined outcome
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Live deployment in production
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Full logging and monitoring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  A clear decision point after 14 days
                </li>
              </ul>
              <p className="text-sm text-slate-300 leading-relaxed mt-4 font-semibold">
                No long-term commitment.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 shadow-xl shadow-cyan-500/10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-100">
                  What Happens After You Request
                </h2>
                <ol className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-cyan-400 flex-shrink-0">1.</span>
                    <span>Outcome review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-cyan-400 flex-shrink-0">2.</span>
                    <span>Scope definition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-cyan-400 flex-shrink-0">3.</span>
                    <span>Deployment scheduling</span>
                  </li>
                </ol>
                <p className="text-slate-400 mt-6 text-sm">
                  Only one system is deployed per engagement.
                </p>
              </div>

              <div className="border-t border-cyan-500/20 pt-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Our contact form is temporarily unavailable.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  To continue, please <span className="font-semibold text-cyan-400">book a call directly through our calendar</span>.
                </p>
              </div>

              <a
                href="https://calendar.app.google/wmsFSP26C5nddYTE7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                <Calendar className="mr-2" size={20} />
                Book a Call
              </a>

              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400">Important:</span> When booking the call, please enter your <span className="font-semibold">phone number in the "Last Name" field</span> so we can call you by phone at the scheduled time.
                </p>
              </div>

              <div>
                <p className="text-slate-300 leading-relaxed">
                  After booking, you can send any additional details, documents, or questions to:{' '}
                  <a
                    href="mailto:contact@coreflowautomation.net"
                    className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
                  >
                    <Mail className="mr-1" size={16} />
                    contact@coreflowautomation.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
