import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Mail, User, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BookDemo() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center bg-white p-12 rounded-3xl shadow-2xl border border-emerald-100"
        >
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle2 size={48} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Demo Requested!</h2>
          <p className="text-slate-600 mb-8">
            Thanks for your interest. We've sent a confirmation SMS and email to you. 
            One of our automation experts will be in touch shortly to confirm your time.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-emerald-600 text-white py-4 rounded-full font-bold hover:bg-emerald-700 transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Book Your <span className="text-emerald-600">Free Demo</span>
            </h1>
            <p className="mb-10 text-lg text-slate-600">
              See how JobFlowPro can save you 10+ hours a week in admin and help you book more jobs without the stress.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Personalised Tour</h3>
                  <p className="text-slate-600">We'll show you exactly how the system works for your specific trade.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Automation Audit</h3>
                  <p className="text-slate-600">We'll identify where you're losing leads and how to fix it instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">No Pressure</h3>
                  <p className="text-slate-600">Just a friendly chat about how we can help your business grow.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-slate-50 p-6">
              <p className="italic text-slate-600">
                "JobFlowPro has completely changed how I run my plumbing business. I don't miss calls anymore, 
                and my calendar is always full. Best investment I've made."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img src="https://picsum.photos/seed/plumber/100/100" alt="Testimonial" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Dave Smith</p>
                  <p className="text-xs text-slate-500">DS Plumbing & Heating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl lg:p-12">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">Schedule your demo</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition-all focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="text" 
                      placeholder="JD Services"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition-all focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="tel" 
                    placeholder="07123 456 789"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition-all focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition-all focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
              >
                Book My Demo
                <ArrowRight size={20} />
              </button>
              <p className="text-center text-xs text-slate-400">
                By booking a demo, you agree to receive SMS and email communications regarding your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
