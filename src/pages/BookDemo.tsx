import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';

export default function BookDemo() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-50 min-h-screen py-20 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-xl"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for your interest in JobFlowPro. One of our automation specialists will contact you 
            within 24 hours to schedule your personalized demo.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-emerald-600 font-bold hover:underline"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-8">
              See JobFlowPro <span className="text-emerald-600">In Action</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Book a 15-minute strategy call and demo. We'll show you how to automate your enquiries 
              and reclaim your time.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Personalized Strategy', icon: <Video size={20} /> },
                { title: '15-Minute Expert Demo', icon: <Clock size={20} /> },
                { title: 'Immediate ROI Analysis', icon: <Calendar size={20} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-lg font-semibold text-slate-700">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    {item.icon}
                  </div>
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-600 focus:outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-600 focus:outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                <input required type="email" className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-600 focus:outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Business Type</label>
                <select className="w-full rounded-xl border border-slate-200 p-4 focus:border-emerald-600 focus:outline-none bg-white">
                  <option>Landlord</option>
                  <option>Cleaning Company</option>
                  <option>Trade (Plumbing, Electrical, etc.)</option>
                  <option>Other Service Business</option>
                </select>
              </div>
              <button type="submit" className="w-full rounded-full bg-emerald-600 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-200">
                Schedule My Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
