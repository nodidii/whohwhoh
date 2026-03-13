import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Play } from 'lucide-react';

export default function Examples() {
  const featuredDemos = [
    {
      title: 'Appointment Management AI Voice Caller System',
      videoUrl: 'https://youtu.be/EKn7EsF5Wic',
      problem:
        'Businesses spend significant time handling phone calls for appointment booking, updates, and cancellations, leading to missed calls, errors, and operational inefficiency.',
      system:
        'An AI-powered voice calling system that manages the entire appointment lifecycle, integrates with calendars, and escalates calls when needed.',
      result:
        'Automated 24/7 phone handling, elimination of double bookings, and improved customer experience with structured data capture and system integration.',
    },
    {
      title: 'Appointment Management & Customer Support AI Chat-Agent System',
      videoUrl: 'https://youtu.be/_sY0JgB3S54',
      problem:
        'Law firms spend significant time handling messages for appointment booking, updates, and cancellations, leading to errors and operational inefficiency.',
      system:
        "An AI-powered chat-agent system that manages appointments, answers inquiries via a Knowledge Base, and automatically updates the firm's CRM with extracted case details.",
      result:
        'Reduced manual messaging, 24/7 appointment management, prevented double bookings, and improved customer experience with direct service and structured CRM data capture.',
    },
  ];

  const additionalDemos = [
    {
      title: 'Lead Qualification Voice System',
      problem: 'Sales team spending hours qualifying inbound leads manually',
      system: 'AI voice caller that handles initial lead qualification calls',
      result:
        'Automated qualification of leads with structured data capture and CRM integration',
    },
    {
      title: 'Customer Support Routing System',
      problem: 'Support requests being sent to wrong departments causing delays',
      system: 'AI chat system that classifies and routes support inquiries',
      result:
        'Accurate classification and routing of support requests with automated resolution for common issues',
    },
    {
      title: 'Appointment Confirmation System',
      problem: 'High no-show rates due to missed confirmations and reminders',
      system: 'Automated voice and SMS confirmation system',
      result:
        'Reduced no-show rates through automated confirmation and reminder workflows',
    },
    {
      title: 'Document Processing System',
      problem: 'Manual data entry from documents causing bottlenecks and errors',
      system: 'AI document processor with automated data extraction',
      result: 'Automated extraction and entry of data from documents into business systems',
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Example Automations
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We don't ask you to believe us. We show you working systems.
            </p>
            <p className="text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed">
              These are business process automation examples built to demonstrate real-world AI automation systems in sales, support, and operational workflows.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 mb-16 shadow-lg shadow-cyan-500/10">
            <p className="text-sm text-slate-300 text-center leading-relaxed">
              <span className="font-semibold text-cyan-400">Demonstration Systems: </span>
              The following are example systems created to demonstrate how AI automation
              can be applied to real business workflows.
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
                    Featured Demo
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100">
                  {demo.title}
                </h3>

                <p className="text-sm text-slate-400 mb-6 italic">
                  {index === 0 ? 'This system replaces manual phone-based appointment scheduling with a structured AI workflow that operates 24/7.' : 'This system replaces manual message-based appointment coordination with automated chat workflows and CRM integration.'}
                </p>

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
                      System Built:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{demo.system}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">
                      Result:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{demo.result}</p>
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
                className={`group bg-slate-900/30 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl ${
                  index % 2 === 0
                    ? 'border-cyan-500/20 hover:shadow-cyan-500/10'
                    : 'border-blue-500/20 hover:shadow-blue-500/10'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    Demo System
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {demo.title}
                </h3>

                <p className="text-xs text-slate-400 mb-4 italic">
                  {index === 0 ? 'This system replaces manual lead qualification calls with structured AI voice workflows.' :
                   index === 1 ? 'This system replaces manual support ticket routing with automated classification and assignment.' :
                   index === 2 ? 'This system replaces manual appointment reminder calls and messages with automated confirmation workflows.' :
                   'This system replaces manual document data entry with automated extraction and processing.'}
                </p>

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
                      System Built
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{demo.system}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-1">Result</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{demo.result}</p>
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
              Discuss Your Automation Needs
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
