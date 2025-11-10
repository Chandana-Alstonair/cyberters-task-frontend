import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: 'Threats Detected Daily' },
  { value: 99.9, suffix: '%', label: 'Compliance Rate' },
  { value: 24, suffix: '/7', label: 'AI Monitoring' },
  { value: 100, suffix: '%', label: 'Blockchain Verified' }
];

export default function Stats() {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[i] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[i] = start;
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-transparent mb-2" style={{WebkitTextStroke: '2px #205fde'}}>
                {stat.suffix === '%' ? counts[i].toFixed(1) : Math.floor(counts[i])}{stat.suffix}
              </div>
              <div className="text-transparent font-medium" style={{WebkitTextStroke: '1px #4ca2b5'}}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}