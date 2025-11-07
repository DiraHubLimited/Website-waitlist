import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Built in Kenya. Powered by Fairness.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Kabu is reimagining mobility for Kenyans — a local solution where drivers earn more
            and riders pay less. With our subscription-based system, drivers keep all their
            earnings and passengers enjoy reliable, affordable rides.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary p-8 rounded-2xl hover-lift text-primary-foreground"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Kabu</h3>
            </div>
            <p className="text-lg mb-4 font-semibold">Subscription Model</p>
            <p className="text-3xl font-bold mb-2">Driver keeps 100%</p>
            <p className="text-sm opacity-90">
              Fixed weekly subscription, unlimited rides, zero commission per trip
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-muted p-8 rounded-2xl border-2 border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-2xl font-bold text-foreground">Others</h3>
            </div>
            <p className="text-lg mb-4 font-semibold text-foreground">Per Ride Commission</p>
            <p className="text-3xl font-bold mb-2 text-destructive">Driver loses up to 25%</p>
            <p className="text-sm text-muted-foreground">
              Commission deducted from every single ride, reducing driver earnings
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
