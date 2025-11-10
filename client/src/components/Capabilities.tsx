import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/capabilities.css';

const capabilities = [
  { avatar: '/Zero-Day-Protection.png', title: 'Zero-Day Protection', desc: 'AI-powered detection of unknown exploits' },
  { avatar: '/Quantum.webp', title: 'Quantum-Resistant', desc: 'Post-quantum cryptography algorithms' },
  { avatar: '/real time.webp', title: 'Real-Time Response', desc: 'Automated incident containment' },
  { avatar: '/dark web.png', title: 'Dark Web Monitoring', desc: 'Continuous credential leak scanning' },
  { avatar: '/predictive-analytics-icon.jpg', title: 'Predictive Analytics', desc: 'ML-based threat forecasting' },
  { avatar: '/block.webp', title: 'Blockchain Verified', desc: 'Immutable audit trail logging' },
  { avatar: '/complaince automation.png', title: 'Compliance Automation', desc: 'ISO, GDPR, SOC 2 ready' },
  { avatar: '/continuos monitoring.jpg', title: 'Continuous Monitoring', desc: '24/7 AI-driven surveillance' }
];

export default function Capabilities() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{background: 'linear-gradient(45deg, #205fde, #003f82, #4ca2b5, #8a7349)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
            Advanced Security Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies protecting your organization from evolving cyber threats
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                expandedCard === i ? 'shadow-2xl scale-105' : 'shadow-lg'
              }`}
              style={{
                background: 'linear-gradient(45deg, #205fde, #003f82, #4ca2b5, #8a7349)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease infinite'
              }}
              onClick={() => setExpandedCard(expandedCard === i ? null : i)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img 
                    src={cap.avatar} 
                    alt={cap.title}
                    className="w-16 h-16 rounded-full object-cover border-3 border-white/30"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{cap.title}</h3>
                <p className="text-white/90 text-sm text-center">{cap.desc}</p>
                
                {expandedCard === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-white/30"
                  >
                    <h4 className="font-semibold text-white mb-2 text-sm">Advanced Features:</h4>
                    <ul className="text-xs text-white/80 space-y-1">
                      <li>• Machine learning algorithms</li>
                      <li>• Real-time threat analysis</li>
                      <li>• Automated response protocols</li>
                      <li>• 24/7 monitoring capabilities</li>
                    </ul>
                  </motion.div>
                )}
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}