import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Phone, Zap, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700 mb-6">
                <Zap size={16} />
                Automate Your Trade Business
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6">
                Capture More Jobs <span className="text-emerald-600">On Autopilot</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                JobFlowPro turns missed calls into booked jobs. Our automated system handles your enquiries, 
                sends quotes, and manages your calendar so you can focus on the tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onPageChange('book-demo')}
                  className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 active:scale-95"
                >
                  Book Your Free Demo
                </button>
                <button
                  onClick={() => onPageChange('how-it-works')}
                  className="rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 active:scale-95"
                >
                  How It Works
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      className="h-8 w-8 rounded-full border-2 border-white"
                      alt="User"
                    />
                  ))}
                </div>
                <span>Trusted by 500+ local tradespeople</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-10"
            >
              <div className="absolute -inset-4 rounded-3xl bg-emerald-600/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
                alt="Tradesperson working"
                className="relative rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Enquiries Captured', val: '250k+' },
              { label: 'Time Saved Weekly', val: '15hrs+' },
              { label: 'Job Value Booked', val: '£12M+' },
              { label: 'Customer Rating', val: '4.9/5' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-extrabold text-slate-900">{stat.val}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4 italic">"Removes the chaos from your business"</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              You can see every project, every issue, and everything that’s happened — all in one place.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: '24/7 Enquiry Response',
                desc: 'Never miss a lead. Our system responds to every missed call, SMS, and WhatsApp enquiry instantly.',
                icon: <Phone className="text-emerald-600" size={24} />,
              },
              {
                title: 'Automated Booking',
                desc: 'Let customers book jobs directly into your calendar based on your availability and service areas.',
                icon: <Calendar className="text-emerald-600" size={24} />,
              },
              {
                title: 'Smart CRM Pipeline',
                desc: 'Track every job from enquiry to invoice. Full history of communications and job details at your fingertips.',
                icon: <CheckCircle2 className="text-emerald-600" size={24} />,
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Stop Chasing Lead, Start Booking Jobs</h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              Join hundreds of plumbers, electricians, and landlords who have reclaimed their time and increased 
              their revenue with JobFlowPro.
            </p>
            <button
              onClick={() => onPageChange('book-demo')}
              className="flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-900 transition-all hover:bg-emerald-50 active:scale-95 shadow-xl shadow-emerald-950/20"
            >
              Get Your System Setup <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
