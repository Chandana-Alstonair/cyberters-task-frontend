import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';

export default function FuturisticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white via-gray-50/40 to-white">
      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-50">
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${i * 200},0 L${i * 200 + 100},100 L${i * 200 + 200},50 L${i * 200 + 300},150`}
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* soft gray to sky blue with subtle neon purple highlight */}
            <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#4ca2b5" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Shield Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        >
          <Shield className="w-8 h-8" style={{ color: 'rgba(64, 193, 255, 0.35)' }} />
        </motion.div>
      ))}

      {/* Network Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${i * 25}%`}
            y1={`${i * 20}%`}
            x2={`${(i + 1) * 25}%`}
            y2={`${(i + 1) * 20}%`}
            stroke="#4ca2b5"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.8
            }}
          />
        ))}
      </svg>

      {/* 3D Rotating Padlock */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative">
          {/* glassy lock with very soft glow */}
          <Lock className="w-16 h-16" style={{ color: 'rgba(160, 196, 255, 0.6)' }} />
          <div className="absolute inset-0 rounded-lg" style={{
            background: 'linear-gradient(45deg, rgba(255,255,255,0.25), rgba(76,162,181,0.2), rgba(124,58,237,0.15))',
            filter: 'blur(6px)'
          }}></div>
        </div>
      </motion.div>

      {/* Digital Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(45deg, rgba(32,95,222,0.35), rgba(0,63,130,0.35), rgba(76,162,181,0.35), rgba(138,115,73,0.25))'
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 10 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Horizontal Scanning Wave */}
      <motion.div
        className="absolute inset-0 w-full h-0.5"
        style={{
          top: '50%',
          background: 'linear-gradient(90deg, transparent, rgba(32,95,222,0.45), rgba(124,58,237,0.35), rgba(76,162,181,0.45), transparent)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(203, 213, 225, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(203, 213, 225, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Pulsing Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: 'linear-gradient(45deg, rgba(64,193,255,0.4), rgba(32,95,222,0.35), rgba(124,58,237,0.3))'
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4
          }}
        />
      ))}
    </div>
  );
}