import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const industries = [
  { name: 'Healthcare', logo: '🏥' },
  { name: 'Financial Services', logo: '🏦' },
  { name: 'Government', logo: '🏛️' },
  { name: 'Education', logo: '🎓' },
  { name: 'Manufacturing', logo: '🏭' },
  { name: 'Retail', logo: '🛍️' },
  { name: 'Technology', logo: '💻' },
  { name: 'Energy', logo: '⚡' },
  { name: 'Transportation', logo: '🚛' },
  { name: 'Telecommunications', logo: '📡' }
];

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(industries.length / 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleIndustries = () => {
    const startIndex = currentIndex * 5;
    return industries.slice(startIndex, startIndex + 5);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading organizations across diverse sectors trust Cyberters Pro to protect their digital assets
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8" style={{
            animation: 'scroll 20s linear infinite',
            width: `${industries.length * 240}px`
          }}>
            {[...industries, ...industries].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-56 text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{industry.logo}</div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>


      </div>
    </section>
  );
}