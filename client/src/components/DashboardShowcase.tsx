import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';

const dashboards = [
  {
    title: 'AI Threat Detection',
    desc: 'Real-time threat monitoring with predictive analytics',
    image: '/AI-threat-intelligence-dashboard.png',
    features: ['Anomaly Detection', 'Live Threat Map', 'Dark Web Monitoring', 'Zero-Day Protection'],
    productId: 'ai-threat-detection'
  },
  {
    title: 'Blockchain Audit Trails',
    desc: 'Immutable compliance verification and attestation',
    image: '/block-chain-audit-trail.png',
    features: ['Automated Audits', 'Digital Attestation', 'Compliance Checklists', 'Evidence Management'],
    productId: 'audit-compliance'
  },
  {
    title: 'Automated Response',
    desc: 'SOAR workflows and intelligent incident handling',
    image: 'https://d64gsuwffb70l.cloudfront.net/690630357960f44207f5d769_1762013315243_977e0428.webp',
    features: ['Playbook Builder', 'Root Cause Analysis', 'Auto Patching', 'Pen Testing'],
    productId: 'automation'
  }
];

export default function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const [, setLocation] = useLocation();

  const next = () => setActive((active + 1) % dashboards.length);
  const prev = () => setActive((active - 1 + dashboards.length) % dashboards.length);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent"
        >
          Interactive Dashboard Preview
        </motion.h2>

        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{dashboards[active].title}</h3>
              <p className="text-xl text-gray-600 mb-6">{dashboards[active].desc}</p>
              <ul className="space-y-3">
                {dashboards[active].features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#205fde] rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all cursor-pointer"
              onClick={() => setLocation(`/product#${dashboards[active].productId}`)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-white/5" style={{backdropFilter: 'blur(15px)'}}></div>
              <img 
                src={dashboards[active].image} 
                alt={dashboards[active].title}
                className="relative z-10 rounded-xl shadow-lg w-full"
              />
              <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <span className="text-white text-sm font-medium">View Product</span>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50">
              <ChevronLeft className="w-6 h-6 text-[#205fde]" />
            </button>
            <button onClick={next} className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50">
              <ChevronRight className="w-6 h-6 text-[#205fde]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}