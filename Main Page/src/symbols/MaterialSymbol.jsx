import { motion, useReducedMotion } from "framer-motion";

export function MaterialSymbol() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      width="260"
      height="260"
      viewBox="0 0 260 260"
      className="drop-shadow-[0_0_30px_rgba(248,113,18,0.25)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="heat-hex" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>
      </defs>
      <motion.g
        transform="translate(130 130)"
        animate={
          prefersReducedMotion
            ? undefined
            : { rotate: [0, 3, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }
        }
      >
        <polygon
          points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35"
          fill="none"
          stroke="url(#heat-hex)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        />
        <motion.polyline
          points="-40,-20 0,0 40,20"
          fill="none"
          stroke="#FDBA74"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 10"
          animate={
            prefersReducedMotion
              ? undefined
              : { strokeDashoffset: [0, -40] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }
          }
        />
        <motion.rect
          x="-44"
          y="-8"
          width="14"
          height="16"
          rx="2"
          stroke="#F97316"
          strokeWidth="1.4"
          fill="none"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.4, 1, 0.4] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        />
        <rect
          x="-7"
          y="-8"
          width="14"
          height="16"
          rx="2"
          stroke="#FDBA74"
          strokeWidth="1.4"
          fill="none"
        />
        <rect
          x="30"
          y="0"
          width="14"
          height="16"
          rx="2"
          stroke="#FACC15"
          strokeWidth="1.4"
          fill="none"
        />
        <motion.path
          d="M-30 32 L-14 18"
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 10"
          animate={
            prefersReducedMotion
              ? undefined
              : { strokeDashoffset: [0, -20] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear"
                }
          }
        />
        <motion.path
          d="M14 -18 L30 -32"
          fill="none"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 10"
          animate={
            prefersReducedMotion
              ? undefined
              : { strokeDashoffset: [0, -20] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "linear"
                }
          }
        />
      </motion.g>
    </motion.svg>
  );
}

