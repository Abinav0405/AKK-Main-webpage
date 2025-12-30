import { motion, useReducedMotion } from "framer-motion";

export function TimesheetSymbol() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width="260"
      height="260"
      viewBox="0 0 260 260"
      className="drop-shadow-[0_0_30px_rgba(245,158,11,0.25)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="heat-time" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>
      </defs>
      <g transform="translate(130 130)">
        <circle
          r="90"
          fill="none"
          stroke="url(#heat-time)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g>
          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index / 12) * Math.PI * 2;
            const outer = 90;
            const inner = index % 3 === 0 ? 80 : 85;
            const x1 = Math.cos(angle) * inner;
            const y1 = Math.sin(angle) * inner;
            const x2 = Math.cos(angle) * outer;
            const y2 = Math.sin(angle) * outer;
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FED7AA"
                strokeWidth={index % 3 === 0 ? 2 : 1}
                strokeLinecap="round"
              />
            );
          })}
        </g>
        <motion.g
          animate={
            prefersReducedMotion
              ? undefined
              : { rotate: [0, 360] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear"
                }
          }
        >
          <motion.path
            d="M-70 0 A70 70 0 0 1 70 0"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.g>
        <g>
          {Array.from({ length: 8 }).map((_, index) => {
            const angle = (index / 8) * Math.PI * 2;
            const radius = 60;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#F97316"
                initial={{ opacity: 0.4 }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.2, 1, 0.2] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 4 + index * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                }
              />
            );
          })}
        </g>
        <circle
          r="6"
          fill="#F97316"
          stroke="#FACC15"
          strokeWidth="2"
        />
      </g>
    </motion.svg>
  );
}

