import { motion } from 'framer-motion';
import { Shield, Zap, Lock } from 'lucide-react';
import HeaderHologramBackground from './HeaderHologramBackground';

export default function Hero() {
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)'}}></div>
      <HeaderHologramBackground />
      
      <div className="relative z-10 w-full px-6 py-20 flex items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-2xl ml-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent mb-6 leading-tight" style={{background: 'linear-gradient(45deg, #205fde, #003f82, #4ca2b5, #8a7349)', WebkitBackgroundClip: 'text'}}>
            Protecting Your Business, Enhancing Your Growth
          </h1>
          <p className="text-xl text-blue-600 mb-8 leading-relaxed">
            Comprehensive cybersecurity ecosystem with 8 integrated dashboards featuring AI-powered threat detection, 
            blockchain-verified compliance, automated SOAR workflows, and quantum-resistant protection for enterprise-grade security.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#205fde] text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Features
            </motion.button>
          </div>
          <div className="flex gap-8">
            {[
              { icon: Shield, text: 'Zero-Day Protection' },
              { icon: Lock, text: 'Blockchain Verified' },
              { icon: Zap, text: 'Automated Response' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-600">
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>



      </div>
    </section>
  );
}