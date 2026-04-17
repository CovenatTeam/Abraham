import React from 'react';
import { motion } from 'motion/react';
import { Check, CheckCircle2, Zap, AlertCircle, Users, Building2, LayoutDashboard } from 'lucide-react';

interface PricingProps {
  onPageChange?: (page: string) => void;
  type?: 'landlords' | 'trades';
}

export default function Pricing({ onPageChange, type = 'landlords' }: PricingProps) {
  interface Plan {
    name: string;
    price: string;
    setupFee: string;
    tagline: string;
    presentation: string;
    whoItsFor: string[];
    features: string[];
    limits?: string;
    cta: string;
    popular: boolean;
    color: string;
  }

  const landlordPlans: Plan[] = [
    {
      name: 'Starter',
      price: '49',
      setupFee: '79',
      tagline: 'Everything you need to get organised',
      presentation: 'Gets you organised',
      whoItsFor: [
        'Small landlords (1–3 properties)',
        'Just starting',
        'Still chaotic but not overwhelmed',
      ],
      features: [
        'Issue reporting form (tenant logs issues)',
        'Basic job tracking pipeline',
        'Manual assignment (you assign contractor)',
        'Email/SMS notifications (basic)',
        'Missed call auto-response (simple)',
      ],
      limits: 'No automation, No CRM depth',
      cta: 'Get Organised',
      popular: false,
      color: 'border-slate-200',
    },
    {
      name: 'Growth',
      price: '99',
      setupFee: '99',
      tagline: 'Run your properties like a business',
      presentation: 'Removes the chaos',
      whoItsFor: [
        'Active landlords',
        'HMOs / SA operators',
        'Feeling the chaos',
      ],
      features: [
        'EVERYTHING in £49 PLUS:',
        'Auto assignment (based on issue type)',
        'Workflow automation (no manual chasing)',
        'Status updates automatically sent',
        'Missed call + SMS + WhatsApp response',
        'Tenant confirmation messages',
        'Contractor notifications',
        'Property database',
        'Tenant records',
        'Issue history per property',
        'Notes & tracking',
      ],
      cta: 'Remove the Chaos',
      popular: true,
      color: 'border-emerald-600',
    },
    {
      name: 'Pro',
      price: '149',
      setupFee: '199',
      tagline: 'Hands-Off - Fully systemised property management',
      presentation: 'Runs your operations for you',
      whoItsFor: [
        'Portfolio landlords',
        'SA operators scaling',
        'Investors',
      ],
      features: [
        'EVERYTHING in £99 PLUS:',
        'Full tenant + property management dashboard',
        'Contractor database',
        'Performance tracking (costs, recurring issues)',
        'Reports (jobs, costs, issues)',
        'Most common problems per property',
        'Contractor portal access (they update jobs)',
        'Priority support',
        'Custom workflows',
        'Setup assistance (onboarding)',
      ],
      cta: 'Scale Your Portfolio',
      popular: false,
      color: 'border-slate-200',
    },
  ];

  const tradesPlans: Plan[] = [
    {
      name: 'Starter',
      price: '147',
      setupFee: '49',
      tagline: 'Perfect for solo tradespeople',
      presentation: 'Gets you started',
      whoItsFor: [
        'Solo tradespeople',
        'New business owners',
        'Looking for basic automation',
      ],
      features: [
        'Missed call capture',
        'Booking system',
        'SMS & Email reminders',
        'Basic reporting',
        '1 User account',
      ],
      cta: 'Get Started',
      popular: false,
      color: 'border-slate-200',
    },
    {
      name: 'Growth',
      price: '197',
      setupFee: '99',
      tagline: 'Ideal for growing businesses',
      presentation: 'Builds your reputation',
      whoItsFor: [
        'Growing teams',
        'Established trades',
        'Ready to scale',
      ],
      features: [
        'Everything in Starter',
        'Review automation',
        'Automated follow-ups',
        'Google My Business integration',
        'Up to 3 User accounts',
      ],
      cta: 'Go Growth',
      popular: true,
      color: 'border-emerald-600',
    },
    {
      name: 'Pro',
      price: '297',
      setupFee: '149',
      tagline: 'Full business automation',
      presentation: 'Total control',
      whoItsFor: [
        'Large trade companies',
        'Multi-team operations',
        'Full automation needs',
      ],
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
      color: 'border-slate-200',
    },
  ];

  const plans = type === 'landlords' ? landlordPlans : tradesPlans;

  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl capitalize">
            {type} Pricing Plans
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            {type === 'landlords' 
              ? '"You can see every property, every issue, and everything that’s happened — all in one place."'
              : 'Automate your trade business and never miss a lead again.'}
          </p>
          {type === 'landlords' && (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              <LayoutDashboard size={16} />
              Property + Operations CRM Included
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-lg transition-all hover:shadow-2xl ${
                plan.popular 
                  ? `${plan.color} ring-4 ring-emerald-50` 
                  : plan.color
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-bold text-white shadow-lg">
                  MOST POPULAR 💰
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {plan.presentation}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  + £{plan.setupFee} one-time setup fee
                </p>
                <p className="mt-4 font-semibold text-emerald-600 italic">"{plan.tagline}"</p>
              </div>

              <div className="mb-8 rounded-2xl bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <Users size={14} />
                  Who it's for
                </div>
                <ul className="space-y-2">
                  {plan.whoItsFor.map((item, iIdx) => (
                    <li key={iIdx} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex-1">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <CheckCircle2 size={14} />
                  What's Included
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className={feature.includes('PLUS') ? 'font-bold text-slate-900' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {plan.limits && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 p-3 text-xs text-amber-800 border border-amber-100">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <p><strong>Limit:</strong> {plan.limits}</p>
                  </div>
                )}
              </div>

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

        <div className="mt-20 rounded-3xl bg-emerald-900 p-12 text-center text-white shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-emerald-800 p-4 text-emerald-400">
              <Building2 size={40} />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold">Manage Your Portfolio Like a Pro</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-emerald-100">
            "You can see every property, every issue, and everything that’s happened — all in one place." 
            Our Property + Operations CRM is designed to scale with your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button 
              onClick={() => onPageChange?.('book-demo')}
              className="w-full rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-900 transition-all hover:bg-emerald-50 sm:w-auto"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
