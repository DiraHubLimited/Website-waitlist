import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users } from "lucide-react";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every decision we make is guided by fairness and impact on our community.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Building technology that solves real problems for Kenyan drivers and riders.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Success means empowering local drivers and creating better mobility for all.",
    },
  ];

  return (
    <section className="py-20 bg-kabu-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Driven by Purpose
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Kabu isn't just about rides — it's a movement to empower local drivers, create safer
            roads, and keep innovation in Kenya. We believe in fair earnings, affordable rides,
            and community-driven technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 hover-lift text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
