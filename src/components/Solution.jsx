import { motion } from 'framer-motion';

export function Solution() {
  const features = [
    {
      icon: "🫁",
      title: "Crisis Mode",
      description: "Guided breathing exercises and grounding techniques that activate the moment you need them. No login required during panic."
    },
    {
      icon: "💬",
      title: "AI Companion",
      description: "Conversational AI trained on CBT techniques. Available 24/7 to talk you through anxiety spirals, panic attacks, and intrusive thoughts."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Visualize your journey. Track panic episodes, identify triggers, and see your resilience grow over time."
    },
    {
      icon: "🔒",
      title: "Complete Privacy",
      description: "Your mental health journey is yours alone. End-to-end encryption. No data selling. No judgment."
    }
  ];

  return (
    <section className="solution-section">
      <h2>How it works</h2>
      <p className="intro">
        Immediate support when you need it most. Evidence-based techniques. 
        No waiting rooms. No judgment. Just help.
      </p>
      
      <div className="features">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}