import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Enquiry Capture',
      desc: 'When you miss a call or receive an enquiry, our system instantly triggers a personalized SMS or WhatsApp response.',
      icon: <Phone className="text-white" size={24} />,
      color: 'bg-blue-500',
    },
    {
      title: 'Automated Qualification',
      desc: 'The customer is guided through a short automated chat to understand their needs, location, and urgency.',
      icon: <MessageSquare className="text-white" size={24} />,
      color: 'bg-emerald-500',
    },
    {
      title: 'Direct Booking',
      desc: 'Qualified customers see your live availability and book their preferred slot directly into your calendar.',
      icon: <Calendar className="text-white" size={24} />,
      color: 'bg-amber-500',
    },
    {
      title: 'Job Confirmed',
      desc: 'You receive the job details, and the customer receives a confirmation. The job is tracked in your CRM from start to finish.',
      icon: <CheckCircle2 className="text-white" size={24} />,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
            How It Works
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From enquiry to booked job on autopilot. Here is how JobFlowPro transforms your workflow.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-12">
                  <div className={`p-8 rounded-3xl bg-white shadow-xl max-w-md ${idx % 2 === 1 ? 'lg:text-left text-center' : 'text-center lg:text-right'}`}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                <div className={`z-10 flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${step.color} ring-8 ring-white`}>
                  {step.icon}
                </div>
                
                <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-start">
                  <div className="hidden lg:block text-8xl font-black text-slate-100 italic select-none">
                    0{idx + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
