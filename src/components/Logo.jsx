import { motion } from 'framer-motion';
import logo from '../assets/akk logo.png';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="flex justify-center mb-8"
    >
      <motion.img
        src={logo}
        alt="AKK Engineering Logo"
        className="w-32 h-32 md:w-40 md:h-40 object-contain"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.3))',
        }}
      />
    </motion.div>
  );
};

export default Logo;
