import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Rocket, CheckSquare, ArrowRight } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function HowItWorks() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.howItWorks.title,
      description: seoConfig.howItWorks.description,
      keywords: seoConfig.howItWorks.keywords,
      canonical: seoConfig.howItWorks.canonical,
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
            name: 'How It Works',
            item: 'https://coreflowautomation.net/how-it-works',
          },
        ],
      },
    });
  }, []);

  const steps = [
    {
      number: '1',
      title: 'Define the Outcome',
      subtitle: 'Outcome Selection & Scope Definition',
      description: 'We identify one operational bottleneck and define:',
      details: [
        'The exact outcome to automate',
        'The metric that determines success',
        'The boundaries of the deployment',
      ],
      result: 'A clearly scoped system with a single responsibility.',
      icon: Target,
    },
    {
      number: '2',
      title: 'Deploy Live for 14 Days',
      subtitle: '14-Day Live Deployment',
      description: 'The system is deployed directly into your production environment.',
      details: [
        'The system operates live',
        'All actions are logged',
        'AI behavior is constrained',
        'Escalation rules are enforced',
      ],
      result: 'The deployment runs for 14 days.',
      icon: Rocket,
    },
    {
      number: '3',
      title: 'Review & Decide',
      subtitle: 'Decision Point',
      description: 'At the end of the deployment:',
      details: [
        'You review system logs',
        'You see what was handled automatically',
        'You evaluate the operational impact',
      ],
      result: 'You decide to: Remove the system, Continue operating it, or Expand its scope',
      note: 'No obligation beyond the deployment window.',
      icon: CheckSquare,
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              A Controlled AI Deployment Model
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Designed to prove operational value quickly while avoiding long-term risk.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute top-6 left-6 text-8xl font-bold text-cyan-500/5">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-lg">
                      <step.icon className="text-cyan-400" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                        Step {step.number} — {step.title}
                      </h2>
                      <p className="text-cyan-400 font-medium mt-1">{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mb-6">
                    {index === 2 ? null : <h3 className="text-md font-semibold text-slate-200 mb-3">
                      {index === 0 ? 'This includes defining:' : 'During this phase:'}
                    </h3>}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-6">
                    <p className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-cyan-400">
                        {index === 2 ? 'You then decide to:' : 'Result:'}
                      </span>{' '}
                      {step.result}
                    </p>
                    {step.note && (
                      <p className="text-slate-400 mt-3 text-sm italic">{step.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Request a 14-Day Deployment
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
