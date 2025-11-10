import { motion } from 'framer-motion';

// Responsive, pure-white header background with rotating concentric hologram rings.
// Accent colors: #205FDE (main), #003F82 (deep), #4AB3FF (highlight)
export default function HeaderHologramBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* soft neon glows */}
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D46B1E" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#B15916" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8A3F0F" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC08A" />
            <stop offset="50%" stopColor="#D46B1E" />
            <stop offset="100%" stopColor="#FFC08A" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* soft drop shadow */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="#6b3a16" floodOpacity="0.35" />
          </filter>
          {/* light beam gradient */}
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(32,95,222,0)" />
            <stop offset="30%" stopColor="rgba(32,95,222,0.35)" />
            <stop offset="70%" stopColor="rgba(74,179,255,0.35)" />
            <stop offset="100%" stopColor="rgba(138,115,73,0)" />
          </linearGradient>
        </defs>
        {/* subtle dark vignette on the right half to make the unit pop */}
        <linearGradient id="rightShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="60%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.28)" />
        </linearGradient>
        <rect x="0" y="0" width="1920" height="1080" fill="url(#rightShade)" />

        {/* move hologram to the RIGHT side for header composition */}
        <circle cx="1400" cy="540" r="520" fill="url(#halo)" filter="url(#shadow)" />

        {/* rotating rings - separate groups for different speeds */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1400px 540px' }}
          filter="url(#glow)"
        >
          <circle cx="1400" cy="540" r="320" fill="none" stroke="url(#ring)" strokeWidth="2" strokeOpacity="0.95" />
          <circle cx="1400" cy="540" r="380" fill="none" stroke="#D46B1E" strokeWidth="1.6" strokeDasharray="6 10" strokeOpacity="0.65" />
          <circle cx="1400" cy="540" r="450" fill="none" stroke="#FFC08A" strokeWidth="1.2" strokeDasharray="2 14" strokeLinecap="round" strokeOpacity="0.85" />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1400px 540px' }}
          filter="url(#glow)"
        >
          <circle cx="1400" cy="540" r="500" fill="none" stroke="#6b3a16" strokeWidth="1.4" strokeDasharray="12 14" strokeOpacity="0.45" />
          <circle cx="1400" cy="540" r="270" fill="none" stroke="#FFC08A" strokeWidth="1.3" strokeDasharray="3 10" strokeOpacity="0.85" />
        </motion.g>

        {/* subtle radial ticks */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1400px 540px' }}
          stroke="#D46B1E"
          strokeOpacity="0.25"
        >
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = (i * 5 * Math.PI) / 180;
            const x1 = 1400 + Math.cos(angle) * 300;
            const y1 = 540 + Math.sin(angle) * 300;
            const x2 = 1400 + Math.cos(angle) * 320;
            const y2 = 540 + Math.sin(angle) * 320;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" />;
          })}
        </motion.g>

        {/* fingerprint machine-style inner rings (animated dash offset) */}
        <g stroke="#D46B1E" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.98">
          {[
            { r: 210, dash: '6 8', phase: 0 },
            { r: 190, dash: '4 10', phase: 40 },
            { r: 170, dash: '2 6', phase: 80 },
            { r: 150, dash: '1 5', phase: 120 }
          ].map((cfg, idx) => (
            <motion.circle
              key={idx}
              cx={1400}
              cy={540}
              r={cfg.r}
              strokeDasharray={cfg.dash}
              initial={{ strokeDashoffset: cfg.phase }}
              animate={{ strokeDashoffset: [cfg.phase, cfg.phase + 60, cfg.phase] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </g>

        {/* fingerprint curves (simplified concentric biometrics) */}
        <g stroke="#5a2a0b" strokeWidth="1.6" fill="none" opacity="0.95">
          {Array.from({ length: 8 }).map((_, i) => {
            const radius = 60 + i * 10;
            const d = `M ${1400 - radius},540
                       a ${radius},${radius} 0 1,0 ${radius * 2},0
                       a ${radius},${radius} 0 1,0 -${radius * 2},0`;
            return (
              <motion.path
                key={i}
                d={d}
                strokeDasharray="3 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0.6, 1, 0.6] }}
                transition={{ duration: 12 + i, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          })}
        </g>

        {/* sweeping scanner arc across the fingerprint */}
        <motion.circle
          cx={1400}
          cy={540}
          r={230}
          fill="none"
          stroke="#8A3F0F"
          strokeWidth="3.5"
          strokeOpacity="0.35"
          strokeDasharray="40 900"
          animate={{ strokeDashoffset: [0, -940] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          filter="url(#glow)"
        />

        {/* diagonal moving light beams for attractiveness */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.rect
            key={i}
            x={400 - i * 120}
            y={-100}
            width={500}
            height={1200}
            fill="url(#beam)"
            style={{ transformOrigin: '50% 50%' }}
            animate={{ x: [400 - i * 120, 1200], rotate: [45, 45] }}
            transition={{ duration: 14 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
            opacity={0.35}
          />
        ))}

        {/* flowing data lines from scanner to the left */}
        {[0, 80, -80].map((dy, idx) => (
          <motion.path
            key={idx}
            d={`M1400,${540 + dy} C1200,${520 + dy} 900,${580 + dy} 400,${520 + dy}`}
            stroke="#205FDE"
            strokeWidth="2"
            strokeOpacity="0.25"
            fill="none"
            strokeDasharray="6 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeOpacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 10 + idx, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* orbiting indicator dots around the circle */}
        {[0, 120, 240].map((phase, i) => (
          <motion.circle
            key={i}
            cx={1400}
            cy={540}
            r={260}
            fill="none"
            stroke="transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 18 + i * 4, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '1400px 540px' }}
          >
          </motion.circle>
        ))}
        {[0, 120, 240].map((phase, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={1400 + Math.cos((phase * Math.PI) / 180) * 260}
            cy={540 + Math.sin((phase * Math.PI) / 180) * 260}
            r={5}
            fill="#FFC08A"
            animate={{
              cx: [
                1400 + Math.cos((phase * Math.PI) / 180) * 260,
                1400 + Math.cos(((phase + 360) * Math.PI) / 180) * 260,
              ],
              cy: [
                540 + Math.sin((phase * Math.PI) / 180) * 260,
                540 + Math.sin(((phase + 360) * Math.PI) / 180) * 260,
              ],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 18 + i * 4, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>
    </div>
  );
}


