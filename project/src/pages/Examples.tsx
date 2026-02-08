import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Play } from 'lucide-react';
import { setPageMeta, seoConfig } from '../utils/seo';

export default function Examples() {
  useEffect(() => {
    setPageMeta({
      title: seoConfig.examples.title,
      description: seoConfig.examples.description,
      keywords: seoConfig.examples.keywords,
      canonical: seoConfig.examples.canonical,
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
            name: 'Examples',
            item: 'https://coreflowautomation.net/examples',
          },
        ],
      },
    });
  }, []);

  const featuredDemos = [
    {
      title: 'Inbound Call Handling System',
      systemType: 'Appointment Management AI Voice Caller',
      videoUrl: 'https://youtu.be/EKn7EsF5Wic',
      problem:
        'Businesses spend significant time handling phone calls for appointment booking, updates, and cancellations, leading to missed calls, errors, and operational inefficiency.',
      system:
        'An AI-powered voice calling system that manages the entire appointment lifecycle, integrates with calendars, and escalates calls when needed.',
      observed:
        'The system handled appointment bookings, cancellations, and rescheduling via phone automatically. Calls were answered 24/7 without staff involvement. Double bookings were prevented through calendar integration. Structured data was captured and logged for every interaction.',
      metric: 'Calls answered and appointments managed without human intervention.',
    },
    {
      title: 'Customer Support & Appointment Chat System',
      systemType: 'Appointment Management & Customer Support AI Chat-Agent',
      videoUrl: 'https://youtu.be/_sY0JgB3S54',
      problem:
        'Law firms spend significant time handling messages for appointment booking, updates, and cancellations, leading to errors and operational inefficiency.',
      system:
        "An AI-powered chat-agent system that manages appointments, answers inquiries via a Knowledge Base, and automatically updates the firm's CRM with extracted case details.",
      observed:
        'The system managed appointment bookings through chat, answered frequently asked questions automatically, and extracted case details for CRM updates. Manual message handling was reduced. Double bookings were prevented. Customer inquiries received immediate responses.',
      metric: 'Messages handled, bookings completed, and CRM entries created automatically.',
    },
  ];

  const additionalDemos = [
    {
      title: 'Lead Qualification Voice System',
      systemType: 'Lead Qualification',
      problem: 'Sales team spending hours qualifying inbound leads manually',
      system: 'AI voice caller that handles initial lead qualification calls',
      observed:
        'Leads were called automatically, qualification questions were asked, responses were logged, and data was entered into the CRM without manual intervention.',
      metric: 'Leads qualified and CRM entries completed automatically.',
    },
    {
      title: 'Customer Support Routing System',
      systemType: 'Support Automation',
      problem: 'Support requests being sent to wrong departments causing delays',
      system: 'AI chat system that classifies and routes support inquiries',
      observed:
        'Support requests were classified by type, routed to the correct department, and common issues were resolved automatically without human escalation.',
      metric: 'Support requests routed correctly and tickets resolved automatically.',
    },
    {
      title: 'Appointment Confirmation System',
      systemType: 'Appointment Confirmation',
      problem: 'High no-show rates due to missed confirmations and reminders',
      system: 'Automated voice and SMS confirmation system',
      observed:
        'Appointments were confirmed via automated voice calls and SMS messages. Responses were logged and no-show rates decreased through consistent reminder workflows.',
      metric: 'Confirmations sent and no-show rate reduction observed.',
    },
    {
      title: 'Document Processing System',
      systemType: 'Internal Operations',
      problem: 'Manual data entry from documents causing bottlenecks and errors',
      system: 'AI document processor with automated data extraction',
      observed:
        'Documents were processed automatically, data was extracted and entered into business systems, and manual data entry was eliminated for standard document types.',
      metric: 'Documents processed and data entries completed automatically.',
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Live Example AI Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Each example represents a <span className="font-semibold text-cyan-400">real operational deployment</span>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 mb-16 shadow-lg shadow-cyan-500/10">
            <p className="text-sm text-slate-300 text-center leading-relaxed">
              <span className="font-semibold text-cyan-400">Live Demonstration Systems: </span>
              The following examples show how AI automation systems operate inside real business workflows.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">
            Featured Demo Systems
          </h2>

          <div className="space-y-12 mb-20">
            {featuredDemos.map((demo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start gap-3 mb-6">
                  <div className="flex-shrink-0 px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {demo.systemType}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100">
                  {demo.title}
                </h3>

                <a
                  href={demo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 mb-8 shadow-cyan-500/30"
                >
                  <Play size={20} />
                  Watch Demo Video
                  <ExternalLink size={16} />
                </a>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">
                      Problem:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{demo.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">
                      System Deployed:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{demo.system}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">
                      Observed Outcome:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{demo.observed}</p>
                  </div>

                  <div className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-4">
                    <p className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-cyan-400">Metric Observed: </span>
                      {demo.metric}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">
            Additional Example Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {additionalDemos.map((demo, index) => (
              <div
                key={index}
                className="group bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    {demo.systemType}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {demo.title}
                </h3>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-1">
                      Problem
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {demo.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-1">
                      System Deployed
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{demo.system}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-1">Observed Outcome</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{demo.observed}</p>
                  </div>

                  <div className="bg-slate-800/30 border border-cyan-500/20 rounded-lg p-3 mt-3">
                    <p className="text-slate-300 text-xs leading-relaxed">
                      <span className="font-semibold text-cyan-400">Metric: </span>
                      {demo.metric}
                    </p>
                  </div>
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
    </div>
  );
}
