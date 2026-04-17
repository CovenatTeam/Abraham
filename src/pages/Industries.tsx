import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Droplets, Zap, Wrench, Car, Home } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      title: 'Cleaning Companies',
      desc: 'Capture missed enquiries and book cleaning jobs automatically. Perfect for domestic and commercial cleaners.',
      icon: <Droplets className="text-blue-500" size={40} />,
      image: 'https://picsum.photos/seed/cleaning/800/600',
    },
    {
      title: 'Plumbers',
      desc: 'Convert missed calls into booked repair jobs. Manage emergency call-outs and routine maintenance with ease.',
      icon: <Wrench className="text-slate-600" size={40} />,
      image: 'https://picsum.photos/seed/plumbing/800/600',
    },
    {
      title: 'Electricians',
      desc: 'Schedule jobs automatically. Keep track of certificates, recurring inspections, and new installations.',
      icon: <Zap className="text-amber-500" size={40} />,
      image: 'https://picsum.photos/seed/electrician/800/600',
    },
    {
      title: 'Mechanics',
      desc: 'Capture missed service enquiries. Automate MOT reminders and service bookings for your garage.',
      icon: <Car className="text-rose-500" size={40} />,
      image: 'https://picsum.photos/seed/mechanic/800/600',
    },
    {
      title: 'Handymen',
      desc: 'Keep jobs organised and customers informed. Manage multiple small tasks and larger projects efficiently.',
      icon: <Home className="text-emerald-600" size={40} />,
      image: 'https://picsum.photos/seed/handyman/800/600',
    },
    {
      title: 'Landlords',
      desc: 'Handle maintenance issues without the hassle. Tenants report problems, contractors are notified, and updates are sent automatically.',
      icon: <Home className="text-purple-600" size={40} />,
      image: 'https://picsum.photos/seed/landlord/800/600',
    },
  ];

  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Built for Your Business
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            JobFlowPro is specifically designed for local service businesses and tradespeople.
          </p>
        </div>

        <div className="grid gap-12">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl lg:flex-row ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-16">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50">
                  {industry.icon}
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">{industry.title}</h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">{industry.desc}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                    <span>24/7 Enquiry Capture</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                    <span>Instant SMS Responses</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                    <span>Automated Booking Calendar</span>
                  </div>
                </div>
                <button className="mt-10 inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 font-bold text-white transition-all hover:bg-emerald-700 active:scale-95">
                  Learn More for {industry.title}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="mb-6 text-3xl font-bold text-slate-900">Don't see your industry?</h3>
            <p className="mb-10 text-slate-600">
              If you're a local service business that takes bookings, JobFlowPro will work for you. 
              Fill out the form below and our team will get in touch.
            </p>
          </div>
          
          <form className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left">
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
              <input 
                type="text" 
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                placeholder="e.g. Landscaping, Pest Control"
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
              <textarea 
                rows={4}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                placeholder="Tell us about your business needs..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full rounded-full bg-emerald-600 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 active:scale-95"
              onClick={(e) => e.preventDefault()}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
