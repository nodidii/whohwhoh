import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function GrowthFramework() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.growthFramework.title,
      description: seoConfig.growthFramework.description,
      keywords: seoConfig.growthFramework.keywords,
      canonical: seoConfig.growthFramework.canonical,
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
            name: 'Growth Framework',
            item: 'https://coreflowautomation.net/growth-framework',
          },
        ],
      },
    });
  }, []);

  const frameworkFocus = [
    'System ownership',
    'Clear boundaries between automation and humans',
    'Observable outcomes',
    'Replaceable components',
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

          <div className="space-y-12">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                The Growth Framework supports both <span className="font-semibold text-cyan-400">temporary outcome deployments</span> and <span className="font-semibold text-cyan-400">long-term system ownership</span>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                It exists to prevent automation from becoming technical debt.
              </p>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-4 text-slate-100">
                Core Principle
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Automation should compound operational clarity — not increase complexity.
              </p>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-100">
                Framework Focus Areas
              </h2>
              <div className="space-y-4">
                {frameworkFocus.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/30 border border-cyan-500/20 rounded-xl p-4"
                  >
                    <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 mt-6 leading-relaxed">
                This framework is applied to every deployment.
              </p>
            </div>
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
