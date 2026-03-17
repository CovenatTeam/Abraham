import React from 'react';
import { motion } from 'motion/react';
import { Phone, Zap, Calendar, Clock, Star, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Customer Enquiry',
      desc: 'A customer calls, texts, or fills out a form on your website. Even if you\'re on a job and can\'t answer, we\'ve got you covered.',
      icon: <Phone size={32} />,
      color: 'bg-blue-500',
    },
    {
      title: 'Instant Response',
      desc: 'Our system sends an automated, professional reply instantly. "Sorry we missed your call, we\'re on a job! How can we help?"',
      icon: <Zap size={32} />,
      color: 'bg-emerald-500',
    },
    {
      title: 'Automated Booking',
      desc: 'The customer receives a link to your live calendar. They pick a time that works for them, and the job is booked.',
      icon: <Calendar size={32} />,
      color: 'bg-indigo-500',
    },
    {
      title: 'Smart Reminders',
      desc: 'Automated SMS and email reminders are sent to the customer, drastically reducing no-shows and last-minute cancellations.',
      icon: <Clock size={32} />,
      color: 'bg-amber-500',
    },
    {
      title: 'Review Request',
      desc: 'Once the job is marked as complete, the system automatically sends a friendly request for a Google review.',
      icon: <Star size={32} />,
      color: 'bg-rose-500',
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            How the System Works
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            JobFlowPro is your 24/7 automated office assistant. We handle the admin so you can focus on the tools.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 hidden h-full w-0.5 bg-slate-100 md:block" />

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center md:flex-row ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content */}
                <div className="w-full md:w-1/2">
                  <div className={`rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition-all hover:shadow-2xl ${
                    idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white ${step.color}`}>
                      {step.icon}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-900">Step {idx + 1}: {step.title}</h3>
                    <p className="text-lg leading-relaxed text-slate-600">{step.desc}</p>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center rounded-full bg-white p-2 md:flex">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold text-white ${step.color}`}>
                    {idx + 1}
                  </div>
                </div>

                {/* Empty space for layout */}
                <div className="hidden w-full md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 rounded-3xl bg-slate-900 p-12 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold">Ready to see it in action?</h2>
          <p className="mb-10 text-slate-400">
            We'll show you exactly how this system will look for your specific business.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-10 py-4 text-lg font-bold transition-all hover:bg-emerald-700 active:scale-95">
            Book a Demo
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
