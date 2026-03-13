import { Link } from 'react-router-dom';
import { FileSearch, Compass, Rocket, Shield, FileText, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Audit & Workflow Mapping',
      subtitle: 'Understanding Before Building',
      description:
        'We analyze how your operations actually function — not how they are described.',
      details: [
        'Process documentation and workflow mapping',
        'Identification of manual bottlenecks',
        'Review of existing tools and integrations',
        'Definition of automation boundaries',
        'Clear documentation of findings',
      ],
      output: 'A structured system map and prioritized automation opportunities.',
      icon: FileSearch,
    },
    {
      number: '2',
      title: 'Custom System Design',
      subtitle: 'Designed for Reality, Not Templates',
      description: 'Systems are designed specifically around your workflows.',
      details: [
        'Custom system architecture',
        'Integration planning with your current stack',
        'AI behavior constraints and logic design',
        'User flows and escalation rules',
        'Testing and refinement before deployment',
      ],
      output: 'No generic stacks. No pre-built templates.',
      icon: Compass,
    },
    {
      number: '3',
      title: 'Deployment & Optimization',
      subtitle: 'Infrastructure, Not One-Off Delivery',
      description:
        'Systems are deployed to production with monitoring and control in place.',
      details: [
        'Production deployment',
        'Performance and accuracy monitoring',
        'Logging and failure handling',
        'Ongoing refinement based on real usage',
        'Maintenance as systems evolve',
      ],
      output: '',
      icon: Rocket,
    },
  ];

  const riskReductions = [
    'Uncontrolled AI behavior',
    'Hidden dependencies',
    'Operational surprises',
  ];

  const designPrinciples = ['Understandable', 'Documented', 'Maintainable'];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A controlled, predictable process focused on stability, clarity, and
              long-term operability.
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              This page exists to explain how systems are delivered.
            </p>
            <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
              This is the standardized AI automation delivery process used for business automation systems across sales, support, and operations. The process applies to all implementations regardless of industry or scale.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const colors = [
                { border: 'border-cyan-500/20', hover: 'hover:border-cyan-400/40', shadow: 'hover:shadow-cyan-500/20', icon: 'from-cyan-500/20 to-blue-500/20', iconBorder: 'border-cyan-500/30' },
                { border: 'border-blue-500/20', hover: 'hover:border-blue-400/40', shadow: 'hover:shadow-blue-500/20', icon: 'from-blue-500/20 to-violet-500/20', iconBorder: 'border-blue-500/30' },
                { border: 'border-violet-500/20', hover: 'hover:border-violet-400/40', shadow: 'hover:shadow-violet-500/20', icon: 'from-violet-500/20 to-blue-500/20', iconBorder: 'border-violet-500/30' },
              ];
              const color = colors[index % colors.length];
              return (
              <div
                key={step.number}
                className={`relative bg-slate-900/30 backdrop-blur-sm border ${color.border} rounded-2xl p-8 sm:p-12 ${color.hover} transition-all duration-300 hover:shadow-2xl ${color.shadow}`}
              >
                <div className="absolute top-6 left-6 text-8xl font-bold text-cyan-500/5">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color.icon} border ${color.iconBorder} flex items-center justify-center shadow-lg`}>
                      <step.icon className="text-cyan-400" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
                        {step.title}
                      </h2>
                      <p className="text-cyan-400 font-semibold mt-1">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-200 mb-4">
                      This includes:
                    </h3>
                    <ul className="space-y-3">
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

                  {step.output && (
                    <div className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-6">
                      <p className="text-slate-300">
                        <span className="font-semibold text-cyan-400">Output: </span>
                        {step.output}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Shield className="text-cyan-400" size={40} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              Risk Reduction by Design
            </h2>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 mb-8">
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              The process is intentionally structured to reduce:
            </p>
            <ul className="space-y-4 mb-8">
              {riskReductions.map((risk, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300 text-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Every system is designed to be:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {designPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-800/30 border border-cyan-500/20 rounded-xl p-4"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                  <span className="text-slate-200 font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <FileText className="text-cyan-400" size={28} />
            </div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              For strategic context and engagement models, view the Growth Framework.
            </p>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Every system delivered through this process prioritizes risk reduction, operational stability, and long-term maintainability over rapid feature deployment.
            </p>
            <Link
              to="/growth-framework"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              View the Growth Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
