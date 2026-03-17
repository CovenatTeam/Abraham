import React from 'react';
import { motion } from 'motion/react';
import { Check, CheckCircle2, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '147',
      desc: 'Perfect for solo tradespeople just getting started with automation.',
      features: [
        'Missed call capture',
        'Booking system',
        'SMS & Email reminders',
        'Basic reporting',
        '1 User account',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: '197',
      desc: 'Ideal for growing businesses that want to build a solid reputation.',
      features: [
        'Everything in Starter',
        'Review automation',
        'Automated follow-ups',
        'Google My Business integration',
        'Up to 3 User accounts',
      ],
      cta: 'Go Growth',
      popular: true,
    },
    {
      name: 'Pro',
      price: '297',
      desc: 'For established companies needing full business automation.',
      features: [
        'Everything in Growth',
        'Full automation suite',
        'CRM pipeline management',
        'Lead tracking & attribution',
        'Unlimited User accounts',
        'Priority support',
      ],
      cta: 'Go Pro',
      popular: false,
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Choose the plan that fits your business stage. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-lg transition-all hover:shadow-2xl ${
                plan.popular 
                  ? 'border-emerald-600 ring-4 ring-emerald-50' 
                  : 'border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-bold text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="mt-4 text-slate-600">{plan.desc}</p>
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-700">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-full py-4 text-lg font-bold transition-all active:scale-95 ${
                plan.popular 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-slate-50 p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-emerald-100 p-3 text-emerald-600">
              <Zap size={32} />
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Need a custom solution?</h2>
          <p className="mb-8 text-slate-600">
            For multi-location businesses or franchises, we offer custom enterprise packages.
          </p>
          <button className="rounded-full border-2 border-slate-200 bg-white px-8 py-3 font-bold text-slate-700 transition-all hover:border-emerald-600 hover:text-emerald-600">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
