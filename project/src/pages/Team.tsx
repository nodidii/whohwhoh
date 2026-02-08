import { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function Team() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.team.title,
      description: seoConfig.team.description,
      keywords: seoConfig.team.keywords,
      canonical: seoConfig.team.canonical,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://coreflowautomation.net/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Team',
            item: 'https://coreflowautomation.net/team',
          },
        ],
      },
    });
  }, []);

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
              Real Operators Behind the Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              We design, deploy, and operate <span className="font-semibold text-cyan-400">production AI automation systems</span> inside live businesses.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-2">
              This is not advisory work.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              This is not tool reselling.
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
              We take responsibility for systems operating inside real workflows.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-slate-100 text-center">
              What the Team Focuses On
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                'Operational system design',
                'Deployment inside existing stacks',
                'Monitoring and logging',
                'Failure handling and escalation',
                'Controlled AI behavior',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-10 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    AA
                  </span>
                </div>
                <p className="text-cyan-400 font-semibold text-lg mb-6">AI Automation Architect</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/john-automated-systems/ai-automation-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  Portfolio
                </a>
                <a
                  href="https://github.com/john-automated-systems/john-automated-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="group bg-slate-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 sm:p-10 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 border-2 border-blue-500/30 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    TI
                  </span>
                </div>
                <p className="text-blue-400 font-semibold text-lg mb-6">Technical Implementation Specialist</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/anastasiosaienterprise-lang/AUTOMATION"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-slate-800/70 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  Portfolio
                </a>
                <a
                  href="https://github.com/anastasiosaienterprise-lang/Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-slate-800/70 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
