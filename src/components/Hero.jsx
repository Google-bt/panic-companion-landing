import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Your AI companion for panic attacks</h1>
        <p className="subtitle">
          Available 24/7 when therapy isn't
        </p>
        
        {/* Breathing animation demonstration */}
        <div className="breath-demo">
          <motion.div 
            className="breath-circle"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <motion.a 
          href="#signup" 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Early Access
        </motion.a>
      </motion.div>
    </section>
  );
}