import { Calendar, Mail } from 'lucide-react';

export default function Contact() {

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Request an Automation Audit
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Get a clear assessment of your automation opportunities and operational
              bottlenecks.
            </p>
            <div className="max-w-2xl mx-auto mt-8 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <p className="text-sm text-slate-400 leading-relaxed">
                An AI automation audit evaluates your current workflows, identifies manual bottlenecks, assesses automation feasibility, and defines clear system boundaries for implementation. The audit provides a structured assessment of where AI automation can create operational leverage.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 shadow-xl shadow-cyan-500/10">
            <div className="space-y-8">
              <div>
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
