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
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32 overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/50 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-6 border border-emerald-100">
                <Zap size={16} />
                <span>AI-Powered Automation for Trades</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Turn Enquiries Into <span className="text-emerald-600">Booked Jobs</span>
              </h1>
              <p className="mb-8 text-lg text-slate-600 sm:text-xl">
                Stop losing leads to missed calls. JobFlowPro uses intelligent automation to 
                capture every enquiry and fill your calendar while you're on the tools.
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
                      src={`https://picsum.photos/seed/tech-user${i}/100/100`}
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
              <div className="relative rounded-2xl bg-white p-2 shadow-2xl lg:p-4 border border-slate-100">
                <img
                  src="https://picsum.photos/seed/receptionist-phone-office-desk/1200/800"
                  alt="Professional Receptionist Handling Calls"
                  className="rounded-xl shadow-inner object-cover aspect-[3/2]"
                  referrerPolicy="no-referrer"
                />
                {/* Floating AI Elements */}
                <div className="absolute -top-4 -right-4 rounded-full bg-emerald-600 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg z-30 animate-bounce">
                  Live AI Assistant Active
                </div>
                <div className="absolute -left-6 top-1/4 rounded-xl bg-white p-4 shadow-xl md:-left-12 border border-emerald-100 z-20">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 animate-pulse">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">AI Receptionist</p>
                      <p className="text-sm font-bold text-slate-900">Call Answered</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-1/4 rounded-xl bg-white p-4 shadow-xl md:-right-12 border border-blue-100 z-20">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Smart Booking</p>
                      <p className="text-sm font-bold text-slate-900">Job Scheduled</p>
                    </div>
                  </div>
                </div>
                {/* Decorative element to bridge tech and human */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-600/10 to-transparent pointer-events-none"></div>
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
      <section className="px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(45deg, #10b981 25%, transparent 25%, transparent 50%, #10b981 50%, #10b981 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-600 px-8 py-16 text-center text-white shadow-2xl relative overflow-hidden border border-emerald-400/30">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-black/10 blur-3xl"></div>
          <h2 className="mb-6 text-3xl font-bold sm:text-5xl relative z-10">Ready to automate your business?</h2>
          <p className="mb-10 text-lg text-emerald-50 sm:text-xl relative z-10">
            Join hundreds of tradespeople who are saving time and booking more jobs with JobFlowPro's AI automation.
          </p>
          <button
            onClick={() => onPageChange('book-demo')}
            className="rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-600 transition-all hover:bg-emerald-50 hover:shadow-xl active:scale-95 relative z-10"
          >
            Book Your Free Demo
          </button>
        </div>
      </section>
    </div>
  );
}
