import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Phone,
  Bot,
  Calendar,
  Settings,
  Globe,
  Cog,
  ArrowRight,
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'customer-support',
      icon: MessageSquare,
      title: 'AI Customer Support Systems',
      description:
        'AI systems that handle repetitive customer inquiries and route complex cases appropriately.',
      features: [
        'Automated responses to common questions',
        'Intelligent case routing based on complexity',
        'Integration with existing support platforms',
        'Escalation protocols for human intervention',
        'Knowledge base integration',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
    {
      id: 'voice-callers',
      icon: Phone,
      title: 'AI Voice Callers',
      description:
        'Automated voice systems for inbound and outbound calls, qualification, and confirmations.',
      features: [
        'Outbound call campaigns for lead qualification',
        'Inbound call handling and routing',
        'Appointment confirmations and reminders',
        'Information gathering and data capture',
        'Natural conversation flows',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
    {
      id: 'chat-agents',
      icon: Bot,
      title: 'AI Chat Agents',
      description:
        'Intelligent chat agents for websites and internal use, guiding users through predefined workflows.',
      features: [
        'Website visitor engagement and qualification',
        'Internal employee support systems',
        'Guided workflow completion',
        'Information retrieval and delivery',
        'Multi-channel deployment',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
    {
      id: 'lead-qualification',
      icon: Calendar,
      title: 'Lead Qualification & Appointment Automation',
      description:
        'End-to-end automation of lead screening, qualification, and meeting scheduling.',
      features: [
        'Automated lead screening criteria',
        'Multi-touch qualification sequences',
        'Calendar integration and scheduling',
        'Confirmation and reminder workflows',
        'CRM integration and data sync',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
    {
      id: 'operations',
      icon: Settings,
      title: 'Internal Operations Automation',
      description:
        'Automation of internal processes, task flows, data handling, and reporting.',
      features: [
        'Data entry and processing automation',
        'Cross-system workflow coordination',
        'Automated reporting and alerts',
        'Document processing and classification',
        'Task assignment and tracking',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
    {
      id: 'web-apps',
      icon: Globe,
      title: 'Custom Websites & Web Applications',
      description:
        'Purpose-built websites and internal tools designed to support automation workflows.',
      features: [
        'Custom dashboards and interfaces',
        'Workflow management tools',
        'Client portals and self-service systems',
        'Data visualization and reporting',
        'Integration with automation systems',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
    {
      id: 'custom',
      icon: Cog,
      title: 'Custom Automation Systems',
      description:
        'Bespoke automation solutions tailored to specific business processes across departments.',
      features: [
        'Process analysis and mapping',
        'Custom workflow design',
        'Department-specific automation',
        'Legacy system integration',
        'Scalable architecture design',
      ],
      colors: {
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/40',
        shadow: 'hover:shadow-cyan-500/20',
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconBorder: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        titleHover: 'group-hover:text-cyan-400',
        dot: 'bg-cyan-400',
      },
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Custom AI automation systems designed for your specific business workflows.
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              These are modular AI automation systems built for specific business processes across sales, customer support, and internal operations. Each solution addresses defined workflows and integrates with your existing business systems.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className={`group bg-slate-900/30 backdrop-blur-sm border ${solution.colors.border} rounded-2xl p-8 sm:p-12 ${solution.colors.hoverBorder} transition-all duration-300 hover:shadow-2xl ${solution.colors.shadow}`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.colors.iconBg} border ${solution.colors.iconBorder} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <solution.icon className={solution.colors.iconColor} size={32} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h2 className={`text-2xl sm:text-3xl font-bold mb-4 text-slate-100 ${solution.colors.titleHover} transition-colors`}>
                      {solution.title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                      <span className="font-semibold">Business Function:</span> {
                        solution.id === 'customer-support' ? 'Customer service operations — replaces manual ticket triage and repetitive response workflows.' :
                        solution.id === 'voice-callers' ? 'Sales and support phone operations — replaces manual outbound calling and inbound call handling.' :
                        solution.id === 'chat-agents' ? 'Digital customer engagement — replaces manual chat-based support and lead qualification.' :
                        solution.id === 'lead-qualification' ? 'Sales pipeline management — replaces manual lead screening and appointment coordination.' :
                        solution.id === 'operations' ? 'Internal business operations — replaces manual data processing and cross-system workflows.' :
                        solution.id === 'web-apps' ? 'Digital infrastructure — provides interfaces for automated workflows and system control.' :
                        'Custom business process automation — replaces department-specific manual workflows.'
                      }
                    </p>

                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${solution.colors.dot} mt-2`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              Discuss Your Requirements
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
