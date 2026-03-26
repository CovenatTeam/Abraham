import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Calendar, MessageSquare, Star, CheckCircle2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Industries', id: 'industries' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Book Demo', id: 'book-demo' },
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
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  currentPage === item.id ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item.name}
              </button>
            ))}
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
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-slate-100 bg-white p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${
                    currentPage === item.id ? 'text-emerald-600' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
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
                <li><button onClick={() => onPageChange('industries')}>Industries</button></li>
                <li><button onClick={() => onPageChange('pricing')}>Pricing</button></li>
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
