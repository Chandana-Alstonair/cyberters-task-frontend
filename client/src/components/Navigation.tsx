import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  
  const showBackButton = location !== '/';
  
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation('/');
    }
  };

  const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/auth/signin' }
  ];

  const navigateTo = (path: string) => {
    if (path === '/#hero') {
      setLocation('/');
      setTimeout(() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setLocation(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-[#205fde] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back</span>
              </button>
            )}
            <Logo size="lg" showText={false} />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => navigateTo(item.href)}
                className="text-gray-700 hover:text-[#205fde] font-medium transition"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo('/auth/signup')}
              className="px-4 py-1 bg-gradient-to-r from-[#205fde] to-[#4ca2b5] text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Get Started
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-2 space-y-2">
                {navItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigateTo(item.href)}
                    className="block w-full text-left text-gray-700 hover:text-[#205fde] font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => navigateTo('/auth/signup')}
                  className="w-full px-4 py-1 bg-gradient-to-r from-[#205fde] to-[#4ca2b5] text-white rounded-lg font-semibold"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}