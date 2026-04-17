import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Calendar, MessageSquare, Star, CheckCircle2, ChevronDown, Wrench, Car, Droplets, Home as HomeIcon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isWhoItsForOpen, setIsWhoItsForOpen] = React.useState(false);

  const [isPricingOpen, setIsPricingOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Book Demo', id: 'book-demo' },
  ];

  const categories = [
    {
      title: 'Trades',
      id: 'trades',
      desc: 'Turn missed calls into booked jobs automatically.',
      icon: <Wrench className="text-emerald-600" size={24} />,
      color: 'hover:bg-emerald-50',
    },
    {
      title: 'Garages',
      id: 'garages',
      desc: 'Stop losing high-value repair jobs.',
      icon: <Car className="text-rose-600" size={24} />,
      color: 'hover:bg-rose-50',
    },
    {
      title: 'Cleaners',
      id: 'cleaners',
      desc: 'Fill your schedule without the admin.',
      icon: <Droplets className="text-blue-600" size={24} />,
      color: 'hover:bg-blue-50',
    },
    {
      title: 'Landlords',
      id: 'landlords',
      desc: 'Handle maintenance issues without the hassle.',
      icon: <HomeIcon className="text-purple-600" size={24} />,
      color: 'hover:bg-purple-50',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div 
            className="flex cursor-pointer items-center gap-2" 
            onClick={() => onPageChange('home')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">JobFlowPro</span>
              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Powered by Synergie</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => onPageChange('home')}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                currentPage === 'home' ? 'text-emerald-600' : 'text-slate-600'
              }`}
            >
              Home
            </button>

            {/* Who It's For Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsWhoItsForOpen(true)}
              onMouseLeave={() => setIsWhoItsForOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-emerald-600 ${
                  currentPage === 'industries' ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                Who It's For <ChevronDown size={16} className={`transition-transform duration-200 ${isWhoItsForOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isWhoItsForOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-4 w-[600px] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            onPageChange('industries');
                            setIsWhoItsForOpen(false);
                          }}
                          className={`group flex flex-col items-start rounded-xl p-4 text-left transition-all ${category.color}`}
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                            {category.icon}
                          </div>
                          <h3 className="mb-1 font-bold text-slate-900">{category.title}</h3>
                          <p className="mb-3 text-xs leading-relaxed text-slate-500">{category.desc}</p>
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                            See how it works <ChevronRight size={12} />
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onPageChange('how-it-works')}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                currentPage === 'how-it-works' ? 'text-emerald-600' : 'text-slate-600'
              }`}
            >
              How It Works
            </button>

            {/* Pricing Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPricingOpen(true)}
              onMouseLeave={() => setIsPricingOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-emerald-600 ${
                  currentPage.startsWith('pricing') ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                Pricing <ChevronDown size={16} className={`transition-transform duration-200 ${isPricingOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isPricingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl"
                  >
                    <button
                      onClick={() => { onPageChange('pricing-landlords'); setIsPricingOpen(false); }}
                      className="flex w-full items-center gap-2 rounded-lg p-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-emerald-600"
                    >
                      <HomeIcon size={16} />
                      Landlords
                    </button>
                    <button
                      onClick={() => { onPageChange('pricing-trades'); setIsPricingOpen(false); }}
                      className="flex w-full items-center gap-2 rounded-lg p-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-emerald-600"
                    >
                      <Wrench size={16} />
                      Trades
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button
              onClick={() => onPageChange('book-demo')}
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-slate-100 bg-white md:hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                <button
                  onClick={() => { onPageChange('home'); setIsMenuOpen(false); }}
                  className={`text-left text-lg font-medium ${currentPage === 'home' ? 'text-emerald-600' : 'text-slate-600'}`}
                >
                  Home
                </button>
                
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Who It's For</span>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { onPageChange('industries'); setIsMenuOpen(false); }}
                        className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700"
                      >
                        {cat.icon}
                        {cat.title}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => { onPageChange('how-it-works'); setIsMenuOpen(false); }}
                  className={`text-left text-lg font-medium ${currentPage === 'how-it-works' ? 'text-emerald-600' : 'text-slate-600'}`}
                >
                  How It Works
                </button>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pricing</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => { onPageChange('pricing-landlords'); setIsMenuOpen(false); }}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700"
                    >
                      <HomeIcon size={16} className="text-emerald-600" />
                      Landlords
                    </button>
                    <button
                      onClick={() => { onPageChange('pricing-trades'); setIsMenuOpen(false); }}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700"
                    >
                      <Wrench size={16} className="text-emerald-600" />
                      Trades
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => { onPageChange('book-demo'); setIsMenuOpen(false); }}
                  className="rounded-xl bg-emerald-600 py-3 text-center font-bold text-white"
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">JobFlowPro</span>
              </div>
              <p className="max-w-xs text-sm text-slate-500">
                Automated booking and job management system for local service businesses. 
                Helping trades turn enquiries into booked jobs on autopilot.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => onPageChange('how-it-works')}>How It Works</button></li>
                <li><button onClick={() => onPageChange('industries')}>Who It's For</button></li>
                <li><button onClick={() => onPageChange('pricing-landlords')}>Landlord Pricing</button></li>
                <li><button onClick={() => onPageChange('pricing-trades')}>Trades Pricing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Support</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => onPageChange('book-demo')}>Book a Demo</button></li>
                <li><button onClick={() => onPageChange('privacy-policy')}>Privacy Policy</button></li>
                <li><button onClick={() => onPageChange('terms-of-service')}>Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} JobFlowPro. Powered by Synergie Property Solutions.
          </div>
        </div>
      </footer>
    </div>
  );
}
