import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

const technologies = [
  { name: 'AI & Machine Learning', desc: 'Advanced threat prediction', link: '/docs/analytics' },
  { name: 'Blockchain', desc: 'Immutable audit logs', link: '/docs/api' },
  { name: 'Quantum Cryptography', desc: 'Future-proof encryption', link: '/docs' },
  { name: 'SOAR Integration', desc: 'Automated orchestration', link: '/docs/automation' },
  { name: 'Cloud Native', desc: 'Multi-cloud support', link: '/docs' },
  { name: 'Zero Trust Architecture', desc: 'Never trust, always verify', link: '/docs/getting-started' }
];

export default function TechStack() {
  const [, setLocation] = useLocation();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#8a7349] bg-clip-text text-transparent mb-4">
            Built on Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security powered by the latest innovations in cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#205fde] hover:shadow-xl transition cursor-pointer"
              onClick={() => setLocation(tech.link)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {[
              { name: 'ISO 27001', id: 'iso-27001' },
              { name: 'SOC 2 Type II', id: 'soc-2-type-ii' },
              { name: 'GDPR Compliant', id: 'gdpr-compliant' },
              { name: 'NIST Framework', id: 'nist-framework' },
              { name: 'PCI DSS', id: 'pci-dss' }
            ].map((cert, i) => (
              <button 
                key={i} 
                onClick={() => setLocation(`/resources#${cert.id}`)}
                className="px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 hover:shadow-lg transition-all cursor-pointer"
              >
                {cert.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}