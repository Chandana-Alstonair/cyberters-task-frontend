import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-[#205fde] via-[#003f82] to-[#4ca2b5]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading organizations protecting their digital assets with CyberMatrix AI Shield
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-[#205fde] rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
              >
                Get Demo <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-green-300"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thanks! We'll contact you soon.</span>
              </motion.div>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 support included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}