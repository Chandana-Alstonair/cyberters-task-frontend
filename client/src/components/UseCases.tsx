import { motion } from 'framer-motion';
import { Building2, Landmark, ShoppingCart, Heart, Plane, Factory } from 'lucide-react';

const industries = [
  { icon: Landmark, name: 'Financial Services', desc: 'Protect sensitive financial data and transactions' },
  { icon: Heart, name: 'Healthcare', desc: 'HIPAA-compliant patient data protection' },
  { icon: ShoppingCart, name: 'E-Commerce', desc: 'Secure payment processing and customer data' },
  { icon: Building2, name: 'Enterprise', desc: 'Comprehensive security for large organizations' },
  { icon: Plane, name: 'Government', desc: 'National security-grade protection' },
  { icon: Factory, name: 'Manufacturing', desc: 'Industrial IoT and OT security' }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored security solutions for every sector
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#205fde] to-[#4ca2b5] rounded-full flex items-center justify-center mb-4">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}