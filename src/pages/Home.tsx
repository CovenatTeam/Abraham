import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Phone, Calendar, MessageSquare, Star, CheckCircle2, Clock, Zap, ShieldCheck } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-6">
                <Zap size={16} />
                <span>Automation for local service businesses</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Turn Enquiries Into <span className="text-emerald-600">Booked Jobs</span>
              </h1>
              <p className="mb-8 text-lg text-slate-600 sm:text-xl">
                Stop losing leads to missed calls. JobFlowPro automates your booking process, 
                captures every enquiry, and fills your calendar while you work.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => onPageChange('book-demo')}
                  className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
                >
                  Book a Demo
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => onPageChange('how-it-works')}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 active:scale-95"
                >
                  See How It Works
                </button>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p>Trusted by 500+ local tradespeople</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-slate-100 p-2 shadow-2xl lg:p-4">
                <img
                  src="https://picsum.photos/seed/dashboard/1200/800"
                  alt="JobFlowPro Dashboard"
                  className="rounded-xl shadow-inner"
                  referrerPolicy="no-referrer"
                />
                {/* Floating UI Elements */}
                <div className="absolute -left-6 top-1/4 rounded-xl bg-white p-4 shadow-lg md:-left-12">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400">Missed Call Captured</p>
                      <p className="text-sm font-bold text-slate-900">New Lead: John Doe</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-1/4 rounded-xl bg-white p-4 shadow-lg md:-right-12">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400">Job Booked</p>
                      <p className="text-sm font-bold text-slate-900">Boiler Service @ 2pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-slate-400">
            Trusted by Local Service Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale md:gap-16">
            {['Cleaning Companies', 'Plumbers', 'Electricians', 'Mechanics', 'Handymen'].map((industry) => (
              <span key={industry} className="text-xl font-bold text-slate-600">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How JobFlowPro Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              We take the stress out of managing your business enquiries.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Capture Leads',
                desc: 'Capture missed calls and web form-ups automatically.',
                icon: <Phone className="text-emerald-600" size={32} />,
              },
              {
                step: '02',
                title: 'Automate Booking',
                desc: 'Convert leads to booked jobs with automated responses.',
                icon: <Zap className="text-emerald-600" size={32} />,
              },
              {
                step: '03',
                title: 'Manage Jobs Easily',
                desc: 'Schedule, assign & track jobs all in one place.',
                icon: <Calendar className="text-emerald-600" size={32} />,
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  {item.icon}
                </div>
                <span className="mb-2 block text-sm font-bold text-emerald-600">Step {item.step}</span>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-900 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Grow Your Business on Autopilot</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Everything you need to run a modern, professional trade business.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Missed Call Capture',
                desc: 'Instantly text back customers when you can\'t answer.',
                icon: <Phone size={24} />,
              },
              {
                title: 'Instant Booking',
                desc: 'Let customers book directly into your calendar 24/7.',
                icon: <Calendar size={24} />,
              },
              {
                title: 'Automated Follow-ups',
                desc: 'Never forget to follow up on a quote or enquiry again.',
                icon: <MessageSquare size={24} />,
              },
              {
                title: 'Review Requests',
                desc: 'Automatically ask for Google reviews after every job.',
                icon: <Star size={24} />,
              },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={() => onPageChange('book-demo')}
              className="rounded-full bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-600 px-8 py-16 text-center text-white shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold sm:text-5xl">Ready to automate your business?</h2>
          <p className="mb-10 text-lg text-emerald-50 sm:text-xl">
            Join hundreds of tradespeople who are saving time and booking more jobs with JobFlowPro.
          </p>
          <button
            onClick={() => onPageChange('book-demo')}
            className="rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-600 transition-all hover:bg-emerald-50 hover:shadow-xl active:scale-95"
          >
            Book Your Free Demo
          </button>
        </div>
      </section>
    </div>
  );
}
