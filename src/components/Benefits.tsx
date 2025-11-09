import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  DollarSign, 
  Shield, 
  Users, 
  Zap, 
  Heart, 
  TrendingUp,
  MapPin,
  Clock
} from "lucide-react";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: DollarSign,
      title: "Fair Earnings",
      description: "Drivers keep more of what they earn. Lower commissions mean better pay for honest work.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous driver verification, real-time tracking, and 24/7 support for peace of mind.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Built for Kenyans",
      description: "Created by Kenyans, for Kenyans. We understand local needs and challenges.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick matching, efficient routes, and seamless payments. Get where you need to go, faster.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Supporting local communities and creating opportunities for drivers and riders alike.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Transparent Pricing",
      description: "No surge pricing surprises. See your fare upfront and pay exactly what you expect.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Local Coverage",
      description: "Starting in Nairobi and expanding across Kenya. Your trusted ride, everywhere.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Need a ride at any time? Kabu drivers are ready to get you there, day or night.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Why Kabu Is a Game Changer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kenya's first homegrown ride platform built on fairness, innovation, and community. 
            Here's what makes us different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 hover-lift group"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
