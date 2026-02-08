import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, Users, MessageSquare, Settings } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function Solutions() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.solutions.title,
      description: seoConfig.solutions.description,
      keywords: seoConfig.solutions.keywords,
      canonical: seoConfig.solutions.canonical,
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
            name: 'Solutions',
            item: 'https://coreflowautomation.net/solutions',
          },
        ],
      },
    });
  }, []);

  const solutions = [
    {
      id: 'inbound-calls',
      icon: Phone,
      title: 'Inbound Call Handling Systems',
      outcome: 'Inbound calls answered, routed, or booked without staff involvement.',
      handles: [
        'Incoming call answering',
        'Call routing based on intent',
        'Appointment booking via phone',
        'Call summaries and logging',
      ],
      metric: 'Calls answered, routed correctly, or booked without human intervention.',
    },
    {
      id: 'appointments',
      icon: Calendar,
      title: 'Appointment Booking & Confirmation Systems',
      outcome: 'Appointments scheduled and confirmed without manual coordination.',
      handles: [
        'Availability checks',
        'Booking creation',
        'Confirmation messages',
        'Reminder follow-ups',
      ],
      metric: 'Bookings completed and reduction in no-shows.',
    },
    {
      id: 'lead-qualification',
      icon: Users,
      title: 'Lead Qualification & Routing Systems',
      outcome: 'Leads qualified and routed without manual calls or emails.',
      handles: [
        'Lead intake',
        'Qualification questions',
        'CRM updates',
        'Routing to the correct team or pipeline',
      ],
      metric: 'Qualified leads captured and routed correctly.',
    },
    {
      id: 'customer-support',
      icon: MessageSquare,
      title: 'Customer Support Automation Systems',
      outcome: 'Repetitive customer inquiries resolved without escalation.',
      handles: [
        'FAQ responses',
        'Status requests',
        'Basic troubleshooting',
        'Ticket creation and tagging',
      ],
      metric: 'Tickets resolved without human involvement.',
    },
    {
      id: 'operations',
      icon: Settings,
      title: 'Internal Operations Automation Systems',
      outcome: 'Manual internal data handling removed.',
      handles: [
        'Cross-platform data updates',
        'Internal task execution',
        'System-to-system handoffs',
      ],
      metric: 'Tasks completed automatically without staff input.',
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Outcome-Specific AI Automation Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Each system is designed to <span className="font-semibold text-cyan-400">temporarily take over a single operational function</span>, operate live inside your business, and produce <span className="font-semibold text-cyan-400">observable, logged outcomes</span>.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Systems are deployed individually, not bundled.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <solution.icon className="text-cyan-400" size={32} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100">
                      {solution.title}
                    </h2>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-cyan-400 mb-2">Outcome:</p>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {solution.outcome}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-cyan-400 mb-3">
                        What the system handles automatically:
                      </p>
                      <ul className="space-y-2">
                        {solution.handles.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-4">
                      <p className="text-sm text-slate-300">
                        <span className="font-semibold text-cyan-400">Measured by: </span>
                        {solution.metric}
                      </p>
                    </div>
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
