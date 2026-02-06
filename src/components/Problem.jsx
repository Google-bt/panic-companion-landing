import { motion } from 'framer-motion';

export function Problem() {
  const problems = [
    {
      title: "It's 3 AM",
      description: "You're having a panic attack. Your therapist is asleep. You can't call friends. You're alone with racing thoughts and a pounding heart."
    },
    {
      title: "Therapy is expensive",
      description: "$200 per session. Most insurance doesn't cover it. You need help every week, but can only afford it once a month."
    },
    {
      title: "Stigma is real",
      description: "You want help, but you're afraid of judgment. You want privacy. You want to work on yourself without explaining to everyone."
    }
  ];

  return (
    <section className="problem-section">
      <h2>Sound familiar?</h2>
      <div className="problem-cards">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="problem-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}