import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { useLocation } from 'wouter';

const features = [
  {
    title: 'AI Intelligence & Threat Detection',
    desc: 'Real-time anomaly detection, predictive analytics, and dark web monitoring',
    image: '/ai-threat-intelloigence.png'
  },
  {
    title: 'Audit & Compliance',
    desc: 'Blockchain-verified audit trails with automated compliance checking',
    image: '/audit-compliance.png'
  },
  {
    title: 'Automation & Response',
    desc: 'SOAR workflows, automated incident response, and patch management',
    image: '/automation-and-response.png'
  },
  {
    title: 'Risk & Policy Management',
    desc: 'AI-driven risk scoring, policy enforcement, and predictive forecasting',
    image: '/risk and policy.png'
  },
  {
    title: 'Cloud & Vendor Security',
    desc: 'Multi-cloud protection, vendor risk scoring, and cyber insurance readiness',
    image: '/cloud-vendor.png'
  },
  {
    title: 'Cyber Training',
    desc: 'Gamified security awareness with certifications and leaderboards',
    image: '/cyber-training.png'
  },
  {
    title: 'Organization Management',
    desc: 'Role-based access control, MFA/SSO, and comprehensive user management',
    image: '/Oorganizations-mgnt.png'
  },
  {
    title: 'Analytics & Visualization',
    desc: 'AI-driven insights with custom reports and predictive dashboards',
    image: '/analytics-visualization.png'
  }
];

export default function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [, setLocation] = useLocation();
  const brandSheen = 'linear-gradient(45deg, rgba(32,95,222,0.0) 0%, rgba(32,95,222,0.25) 35%, rgba(76,162,181,0.25) 50%, rgba(138,115,73,0.2) 65%, rgba(0,0,0,0) 100%)';

  // container variants for staggered slide-in on scroll
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Experience The Future
          </h2>
          <p className="text-blue-600/80 max-w-2xl mx-auto">Explore Cyberters’ core capabilities — crafted for enterprise-grade security with AI, automation, and compliance at the center.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              variants={item}
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}

              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                delay: i * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                y: {
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative group cursor-pointer focus:outline-none"
              onClick={() => setExpandedCard(expandedCard === i ? null : i)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Cyberters Gradient Glass Card */}
              <div className="relative rounded-2xl h-80 overflow-hidden group/card">
                {/* animated gradient outline */}
                <div className="absolute inset-0 rounded-2xl p-[1.5px]" style={{ background: 'linear-gradient(45deg, #205fde, #003f82, #4ca2b5, #8a7349)' }}>
                  <div className="w-full h-full rounded-2xl bg-slate-950/40"></div>
                </div>

                {/* Full Card Background Image with parallax */}
                <div className="absolute inset-0">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-2xl"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* brand-tinted dark overlay */}
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 75%)'
                  }}></div>
                  {/* moving sheen */}
                  <motion.div className="absolute -inset-x-20 -top-10 h-24 opacity-0 group-hover/card:opacity-60" style={{ background: brandSheen }}
                    animate={{ x: ['-30%', '130%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                {/* Sliding Window Overlay (reveals on hover/tap) */}
                <div className="relative z-10 h-full">
                  {/* top title always visible */}
                  <div className="absolute top-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-1" style={{textShadow: '1px 2px 10px rgba(0,0,0,0.7)'}}>{feature.title}</h3>
                  </div>
                  {/* bottom subtitle always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-white/90 leading-relaxed">{feature.desc}</p>
                  </div>
                  {/* sliding panel */}
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: hoveredCard === i || expandedCard === i ? 0 : '100%' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-2xl bg-slate-950/70 backdrop-blur-md border-t border-white/10 flex flex-col justify-end p-6"
                    role="region"
                    aria-label={`${feature.title} details`}
                  >
                    <h4 className="font-semibold text-white mb-2 text-sm">Key Highlights</h4>
                    <ul className="text-xs text-white/90 space-y-1">
                      <li>• AI-driven analytics and auto-response</li>
                      <li>• Real-time dashboards and reports</li>
                      <li>• Enterprise-grade security patterns</li>
                    </ul>
                    <div className="mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // navigate to the Features page section
                          const slugs = [
                            'ai-intelligence',
                            'audit-compliance',
                            'automation',
                            'risk-policy',
                            'cloud-vendor',
                            'training',
                            'organization',
                            'analytics'
                          ];
                          setLocation(`/features#${slugs[i] || 'ai-intelligence'}`);
                        }}
                        className="px-4 py-2 rounded-md text-white text-xs font-medium"
                        style={{ background: 'linear-gradient(45deg, #205fde, #003f82, #4ca2b5, #8a7349)' }}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* bottom brand light bar */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #205fde, #003f82, #4ca2b5, #8a7349)' }}
                  animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for screenshots */}
        <Dialog open={modalIndex !== null} onOpenChange={(open) => !open && setModalIndex(null)}>
          <DialogContent className="max-w-3xl">
            {modalIndex !== null && (
              <>
                <DialogHeader>
                  <DialogTitle>{features[modalIndex].title}</DialogTitle>
                  <DialogDescription>
                    Quick preview of {features[modalIndex].title}. Replace with real module screenshots later.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-2 rounded-lg overflow-hidden">
                  <img src={features[modalIndex].image} alt={features[modalIndex].title} className="w-full h-auto" />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}