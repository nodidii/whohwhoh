import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function Home() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.home.title,
      description: seoConfig.home.description,
      keywords: seoConfig.home.keywords,
      canonical: seoConfig.home.canonical,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        organization: {
          '@type': 'Organization',
          name: 'Coreflow Automation',
          url: 'https://coreflowautomation.net',
          logo: 'https://coreflowautomation.net/logo.png',
          description: 'AI automation agency that designs and deploys temporary AI systems removing operational bottlenecks',
          sameAs: ['https://twitter.com/coreflowai', 'https://linkedin.com/company/coreflow-automation'],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-contact-us',
            contactType: 'Sales',
          },
        },
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What exactly do you deploy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A live AI automation system designed to take over a specific operational outcome inside your existing workflows.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is this a free trial?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. This is a paid, time-boxed deployment designed to prove operational value with minimal risk.',
            },
          },
          {
            '@type': 'Question',
            name: 'What do you measure?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Operational metrics such as calls handled, bookings completed, requests resolved, and manual handoffs avoided.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens after 14 days?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You either remove the system, continue running it, or expand its scope.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do we need to change our tools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not necessarily. Systems are designed around your current stack whenever possible.',
            },
          },
        ],
      },
    });
  }, []);

  const bottlenecks = [
    'Missed or delayed inbound calls',
    'Interruptions breaking focus',
    'Manual handoffs between systems',
    'Knowledge trapped in people',
    'Processes that collapse under volume',
  ];

  const systemsReplace = [
    'Manual inbound call handling',
    'Manual appointment coordination',
    'Manual lead qualification calls',
    'Repetitive customer responses',
    'Cross-system data entry and updates',
  ];

  const systemsTakeOver = [
    'Inbound call handling and routing',
    'Appointment booking and confirmations',
    'Lead qualification and data capture',
    'Repetitive customer inquiries',
    'Cross-system data entry and updates',
  ];

  const whatWeOperate = [
    { title: 'Inbound Call Handling Systems', link: '/solutions#inbound-calls' },
    { title: 'Appointment Booking & Confirmation Systems', link: '/solutions#appointments' },
    { title: 'Lead Qualification & Routing Systems', link: '/solutions#lead-qualification' },
    { title: 'Customer Support Automation Systems', link: '/solutions#customer-support' },
    { title: 'Internal Operations Automation Systems', link: '/solutions#operations' },
  ];

  const commonMistake = [
    'One chatbot here',
    'One automation there',
    'No unified logic',
    'No ownership',
    'No scalability',
  ];

  const whoThisIsFor = [
    'Handle frequent inbound calls or requests',
    'Experience operational interruptions',
    'Are growing faster than their systems',
    'Want clarity instead of experimentation',
  ];

  const benefits = [
    'Live example systems',
    'Logged outcomes',
    'Clear system logic',
  ];

  const faqs = [
    {
      question: 'What exactly do you deploy?',
      answer: 'A live AI automation system designed to take over a specific operational outcome inside your existing workflows.',
    },
    {
      question: 'Is this a free trial?',
      answer: 'No. This is a paid, time-boxed deployment designed to prove operational value with minimal risk.',
    },
    {
      question: 'What do you measure?',
      answer: 'Operational metrics such as calls handled, bookings completed, requests resolved, and manual handoffs avoided.',
    },
    {
      question: 'What happens after 14 days?',
      answer: 'You either remove the system, continue running it, or expand its scope.',
    },
    {
      question: 'Do we need to change our tools?',
      answer: 'Not necessarily. Systems are designed around your current stack whenever possible.',
    },
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-slate-100 mb-3">
              We design and deploy AI Systems
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              That Remove Operational Bottlenecks
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto">
            You Keep Them Only If They Prove Value.
          </p>
          <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl mx-auto">
            Coreflow Automation is an <span className="font-semibold text-slate-300">AI automation agency</span> that designs, deploys, and temporarily operates <span className="font-semibold text-slate-300">outcome-driven AI systems</span> inside real businesses. These systems automate specific operational outcomes across sales operations, customer support, inbound communication, and internal workflows.
          </p>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            These systems are <span className="font-semibold text-cyan-400">deployed for a fixed period</span>, <span className="font-semibold text-cyan-400">logged</span>, and <span className="font-semibold text-cyan-400">measured</span>.
          </p>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            If the outcome doesn't justify keeping them, they are removed.
          </p>
          <p className="text-xl font-semibold text-cyan-400 mb-12">
            No long-term commitment. No blind trust. No hype.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 animate-pulse-glow"
            >
              See How a 14-Day Deployment Works
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/examples"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300"
            >
              View Example Systems
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 shadow-xl shadow-cyan-500/5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              This Is Not About AI Tools
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Most businesses don't fail because they ignored AI.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              They fail because they added it on top of broken workflows.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              AI without structure:
            </p>
            <ul className="space-y-3 mb-8">
              {['increases operational risk', 'hides inefficiencies', 'creates fragile dependencies'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold text-cyan-400">
              We don't sell tools. We temporarily operate systems designed to automate outcomes, not features.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            The Real Bottleneck Is Not Your Team
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            When growth causes friction, the cause is almost always structural:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {bottlenecks.map((bottleneck, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <p className="text-slate-300">{bottleneck}</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-semibold text-cyan-400 text-center">
            Growth exposes weak systems.
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-slate-100 text-center">
              What These Systems Replace
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {systemsReplace.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                  <p className="text-slate-300 text-sm">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            What These Systems Take Over
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
            {systemsTakeOver.map((task, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4"
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-slate-300 text-sm">{task}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto">
            Each deployment focuses on <span className="font-semibold text-cyan-400">one outcome</span> and <span className="font-semibold text-cyan-400">one measurable operational metric</span>.
          </p>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            What We Operate
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Instead of selling services, we deploy <span className="font-semibold text-cyan-400">outcome-specific AI automation systems</span>:
          </p>
          <div className="space-y-4 max-w-4xl mx-auto mb-12">
            {whatWeOperate.map((system, index) => (
              <Link
                key={index}
                to={system.link}
                className="block bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-slate-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-lg font-semibold text-slate-100 hover:text-cyan-400 transition-colors">
                  {system.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-slate-300 text-center leading-relaxed">
              Each system is:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {['deployed live', 'monitored', 'logged', 'removable by default'].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-cyan-400 font-semibold text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 sm:p-12 shadow-xl shadow-yellow-500/5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              The Common Mistake
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Most companies adopt automation tactically:
            </p>
            <ul className="space-y-3 mb-8">
              {commonMistake.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <span className="text-yellow-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold text-yellow-400 mb-4">
              Fragmented automation becomes technical debt.
            </p>
            <p className="text-lg text-slate-300">
              We deploy systems designed to compound — not patch.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '1',
                title: 'Outcome Selection & Scope Definition',
                description: 'We identify one operational bottleneck where automation impact is immediately measurable.',
                output: 'A clearly defined outcome, metric, and deployment scope.',
              },
              {
                number: '2',
                title: '14-Day Live Deployment',
                description: 'We deploy the system directly into your operation.',
                details: ['Live production setup', 'Logging and monitoring', 'Controlled AI behavior', 'Escalation rules'],
                note: 'The system runs for 14 days.',
              },
              {
                number: '3',
                title: 'Decision Point',
                description: 'At the end of the deployment:',
                details: ['You review the logs', 'You see what was handled automatically', 'You decide whether to keep, expand, or remove it'],
                note: 'No extensions. No pressure.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="absolute top-6 left-6 text-8xl font-bold text-cyan-500/5">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  {step.details && (
                    <>
                      <p className="text-sm text-slate-400 mb-2">This includes:</p>
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                            <div className="flex-shrink-0 w-1 h-1 rounded-full bg-cyan-400 mt-2" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {step.output && (
                    <div className="bg-slate-800/30 border border-cyan-500/20 rounded-lg p-4 mt-4">
                      <p className="text-slate-300 text-sm">
                        <span className="font-semibold text-cyan-400">Output: </span>
                        {step.output}
                      </p>
                    </div>
                  )}
                  {step.note && (
                    <p className="text-sm text-cyan-400 mt-4 font-medium">{step.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
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

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            Why This Works
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center leading-relaxed">
            We don't ask for belief.
          </p>
          <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
            We provide <span className="font-semibold text-cyan-400">temporary control and observable results</span>.
          </p>
          <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
            Instead of testimonials, we show:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 justify-center"
              >
                <p className="text-slate-300 font-medium text-center">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/examples"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300"
            >
              View Example Automations
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-100">
            Who This Is For
          </h2>
          <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
            This model fits businesses that:
          </p>
          <div className="space-y-4 mb-12">
            {whoThisIsFor.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <p className="text-lg text-slate-300 text-center leading-relaxed">
              This is <span className="font-semibold text-red-400">not</span> for businesses looking for AI demos or hype.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
            AI Automation Is Becoming Infrastructure
          </h2>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            In the next 12–18 months, AI-driven operations will be baseline.
          </p>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            The question is not <span className="italic">if</span> you use automation —
          </p>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            but whether you <span className="font-semibold text-cyan-400">test and control it now</span>, or inherit complexity later.
          </p>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            This 14-day deployment model exists to let you evaluate AI automation as <span className="font-semibold text-slate-300">operational infrastructure</span>, not as a long-term bet.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Request a 14-Day Deployment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">
            FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-100">
                  {faq.question}
                </h3>
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
