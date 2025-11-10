import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CISO, TechCorp Global',
    image: 'https://d64gsuwffb70l.cloudfront.net/690630357960f44207f5d769_1762013310917_3505d390.webp',
    text: 'CyberMatrix AI Shield transformed our security posture. The AI-driven threat detection caught vulnerabilities our previous systems missed.'
  },
  {
    name: 'Michael Chen',
    role: 'Security Director, FinanceHub',
    image: 'https://d64gsuwffb70l.cloudfront.net/690630357960f44207f5d769_1762013312747_ee0edc13.webp',
    text: 'The blockchain-verified audit trails gave us the compliance confidence we needed. Passed our SOC 2 audit with flying colors.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Engineering, CloudScale',
    image: 'https://d64gsuwffb70l.cloudfront.net/690630357960f44207f5d769_1762013314467_17a55cea.webp',
    text: 'Automated incident response reduced our MTTR by 75%. The SOAR workflows are incredibly powerful and easy to configure.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Trusted by Security Leaders
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-[#205fde] to-[#4ca2b5] rounded-xl p-8 shadow-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-blue-100">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}