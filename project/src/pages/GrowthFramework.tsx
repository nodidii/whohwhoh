import { Link } from 'react-router-dom';
import { TrendingUp, Target, Cog, CheckCircle, ArrowRight } from 'lucide-react';

export default function GrowthFramework() {
  const roiTrackFeatures = [
    'We audit workflows',
    'Identify high-leverage bottlenecks',
    'Design automation systems with clear performance objectives',
    'Deploy systems intended to reduce cost, time, or operational load',
  ];

  const customTrackFeatures = [
    'You already know what you want automated',
    'We validate feasibility and system boundaries',
    'Design and deploy a custom automation system',
    'Integrate it cleanly into your existing operations',
  ];

  const whatMakesDifferent = [
    'Clear system architecture',
    'Defined automation logic',
    'Predictable delivery',
    'Working systems you can evaluate',
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              The Growth Framework
            </h1>
          </div>

          <div className="space-y-12 mb-16">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                AI automation only creates leverage when it is treated as operational
                infrastructure.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Most implementations fail because they focus on tools instead of systems —
                adding automation on top of workflows that were never designed to scale.
              </p>
              <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                The Growth Framework exists to solve that.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                This is a business automation strategy used to design scalable AI automation systems that integrate with existing operations and compound in value over time.
              </p>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                It is a structured approach for:
              </p>
              <ul className="space-y-3">
                {[
                  'Identifying where automation actually matters',
                  'Defining clear system boundaries',
                  'Designing AI to operate inside controlled workflows',
                  'Deploying systems that remain stable under growth',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                This framework is not about experimentation.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                It is about replacing fragile manual processes with systems that compound
                over time.
              </p>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-slate-300 leading-relaxed">
                The engagement model depends on whether the goal is{' '}
                <span className="font-semibold text-cyan-400">
                  measurable operational impact
                </span>{' '}
                or{' '}
                <span className="font-semibold text-cyan-400">
                  a clearly defined custom system
                </span>
                .
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-slate-100 text-center">
            Engagement Models
          </h2>

          <div className="space-y-8 mb-16">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <TrendingUp className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">1. ROI Track</h3>
                  <p className="text-cyan-400 font-medium mt-1">
                    For businesses that want measurable operational impact.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {roiTrackFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-400 mt-6 mb-4 leading-relaxed">
                This track is focused on{' '}
                <span className="font-semibold text-cyan-400">business outcomes</span>, not
                feature delivery.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Best suited for: businesses experiencing operational bottlenecks, scaling challenges, or manual workflow dependencies that limit growth.
              </p>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 sm:p-12 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Cog className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    2. Custom System Track
                  </h3>
                  <p className="text-cyan-400 font-medium mt-1">
                    For businesses with specific operational requirements.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {customTrackFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-400 mt-6 mb-4 leading-relaxed">
                This track prioritizes{' '}
                <span className="font-semibold text-cyan-400">precision and control</span>.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Best suited for: businesses with defined automation requirements, specific compliance needs, or complex integration constraints.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-100 text-center">
              What Makes This Different
            </h2>
            <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
              We do not sell tools. We do not sell experiments.
            </p>
            <p className="text-lg text-slate-300 mb-6 text-center leading-relaxed">
              Instead, we provide:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {whatMakesDifferent.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-800/30 border border-cyan-500/20 rounded-xl p-4"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-300 text-center leading-relaxed">
              You are not asked to trust claims. You are shown how the system works.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Target className="text-cyan-400" size={28} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Next Step</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              The entry point to the Growth Framework is an automation audit. You submit
              your workflows and needs. We evaluate structure, bottlenecks, and
              feasibility.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Start with an Automation Assessment
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
