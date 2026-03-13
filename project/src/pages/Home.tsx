import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, Shield } from 'lucide-react';

export default function Home() {
  const solutions = [
    {
      title: 'AI Customer Support Systems',
      description:
        'Structured AI handling repetitive inquiries with escalation logic for edge cases.',
      link: '/solutions#customer-support',
    },
    {
      title: 'AI Voice Callers',
      description:
        'Automated inbound and outbound calls for qualification, confirmations, and routing.',
      link: '/solutions#voice-callers',
    },
    {
      title: 'AI Chat Agents',
      description:
        'Controlled conversational agents that guide users through predefined workflows.',
      link: '/solutions#chat-agents',
    },
    {
      title: 'Lead Qualification & Appointment Automation',
      description:
        'End-to-end systems that filter, score, and schedule without human intervention.',
      link: '/solutions#lead-qualification',
    },
    {
      title: 'Internal Operations Automation',
      description:
        'Task flows, data handling, reporting, and cross-system synchronization.',
      link: '/solutions#operations',
    },
    {
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built interfaces designed to support automation logic.',
      link: '/solutions#web-apps',
    },
  ];

  const bottlenecks = [
    'Leads handled inconsistently',
    'Response times dependent on availability',
    'Manual handoffs between systems',
    'Knowledge trapped in individuals',
    'Processes that do not survive scale',
  ];

  const benefits = [
    'Live example automations',
    'Clear system architecture',
    'Transparent process design',
    'Demonstrable logic, not promises with hype',
  ];

  const idealFor = [
    'Your operations are growing faster than your systems',
    'Manual processes are slowing decisions',
    'Hiring feels like a temporary fix',
    'You want AI deployed with intent, not experimentation',
    'You value clarity over hype',
  ];

  const faqs = [
    {
      question: 'What exactly do you mean by "AI automation systems"?',
      answer:
        'We design structured systems where AI operates inside defined workflows. This includes decision logic, integrations, escalation rules, and monitoring — not standalone tools or chatbots.',
    },
    {
      question: 'Will this replace my team?',
      answer:
        'No. These systems replace manual steps, not people. The goal is to remove repetitive operational work so human effort is applied where judgment is required.',
    },
    {
      question: 'How is this different from using off-the-shelf automation tools?',
      answer:
        'Tools automate tasks. Systems automate outcomes. We design architecture that connects tools, data, and logic into a single operational flow.',
    },
    {
      question: 'How quickly can we see results?',
      answer:
        'Initial systems are typically deployed within weeks. Operational impact begins as soon as a system replaces a manual bottleneck.',
    },
    {
      question: 'Do we need to change our existing tools or software?',
      answer:
        'No. We design around your current stack whenever possible and only replace components when they limit scalability.',
    },
    {
      question: 'Is this a one-time project or an ongoing system?',
      answer:
        'Automation is treated as infrastructure. Systems can evolve, expand, and optimize as your operations change.',
    },
    {
      question: 'What kind of businesses is this NOT for?',
      answer:
        'Businesses looking for AI experiments, generic chatbots, or quick hype-driven solutions will not benefit. We work best with teams that value structure and long-term operational clarity.',
    },
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-slate-100 mb-3">
              AI Automation Is Becoming
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Operational Infrastructure
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto">
            Control It Early — Or Spend Years Catching Up.
          </p>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            We design and deploy AI automation systems that replace fragile manual
            workflows with scalable operational infrastructure — across sales, support,
            and internal operations.
          </p>
          <p className="text-lg font-medium text-cyan-400 mb-12">
            Your competitors are not "experimenting" anymore. They are systematizing.
          </p>
          <div className="max-w-3xl mx-auto mb-12 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <p className="text-slate-300 leading-relaxed">
              Coreflow Automation is an AI automation agency that builds business automation systems for sales, support, and internal operations. These systems automate complete workflows and business outcomes — not individual tasks or disconnected tools.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 animate-pulse-glow"
            >
              Request an Automation Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/examples"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300"
            >
              See Example Systems
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 shadow-xl shadow-cyan-500/5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              This Is Not About AI Hype
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Most businesses will not lose because they ignored AI. They will lose
              because they implemented it without structure.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              AI added on top of broken workflows does not create leverage — it creates
              hidden operational risk.
            </p>
            <p className="text-xl font-semibold text-cyan-400">
              We don't sell tools. We design systems.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            The Real Bottleneck Isn't Your Team
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            When performance breaks under growth, it's rarely a people problem. It's
            usually one of these:
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
              {[
                'Manual lead qualification calls',
                'Repetitive customer support inquiries',
                'Manual appointment scheduling and confirmations',
                'Copy-paste data entry between systems',
                'Manual document processing and routing',
                'Repetitive email responses and follow-ups',
              ].map((task, index) => (
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

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            What We Build
          </h2>
          <p className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
            Custom AI automation systems designed around real operational constraints —
            not templates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-slate-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 sm:p-12 shadow-xl shadow-yellow-500/5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
              The Mistake Most Companies Will Make
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              They will adopt AI tactically instead of structurally.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              That means:
            </p>
            <ul className="space-y-3 mb-8">
              {['One chatbot here', 'One automation there', 'No unified logic', 'No ownership', 'No scalability'].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <span className="text-yellow-400">—</span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="text-xl font-semibold text-yellow-400 mb-4">
              Fragmented automation becomes technical debt.
            </p>
            <p className="text-lg text-slate-300">
              We design systems that compound — not patch.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '1',
                title: 'Audit & Workflow Mapping',
                description:
                  'We analyze your workflows, identify bottlenecks, and define automation boundaries. Output: A clear system map and prioritized automation opportunities.',
                icon: Target,
              },
              {
                number: '2',
                title: 'Custom System Design',
                description:
                  'We design AI systems around how your business actually operates. No templates. No generic stacks.',
                icon: Zap,
              },
              {
                number: '3',
                title: 'Deployment & Optimization',
                description:
                  'Systems are deployed, monitored, and improved based on real usage. Automation is treated as infrastructure — not a one-off project.',
                icon: Shield,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6 mx-auto">
                  <step.icon className="text-cyan-400" size={28} />
                </div>
                <div className="absolute top-6 left-6 text-5xl font-bold text-cyan-500/10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-100 text-center">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Request an Automation Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
            Why This Works
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center leading-relaxed">
            We don't ask you to trust claims. We show functioning systems.
          </p>
          <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
            Instead of "success stories", we provide:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0" size={24} />
                <p className="text-slate-300">{benefit}</p>
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

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-100">
            Who This Is For
          </h2>
          <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
            You'll benefit most if:
          </p>
          <div className="space-y-4 mb-12">
            {idealFor.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">
            AI Automation Is a Strategic Decision
          </h2>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            In the next 12–18 months, AI-driven operations will stop being a competitive
            edge.
          </p>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            They will become baseline.
          </p>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            The question is whether you design your systems early — or inherit complexity
            later.
          </p>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            AI automation for business operations is treated as permanent infrastructure — not temporary tooling. Systems are designed to scale with operational growth and compound in value over time.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Request an Automation Audit
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
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
