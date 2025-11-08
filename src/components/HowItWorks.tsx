import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Users, Building2 } from "lucide-react";
import driverImage from "@/assets/driver-happy.jpg";
import passengersImage from "@/assets/passengers.jpg";
import communityImage from "@/assets/community.jpg";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Car,
      title: "For Drivers",
      description: "Pay a fixed weekly subscription and enjoy unlimited rides — no deductions.",
      image: driverImage,
      color: "primary",
    },
    {
      icon: Users,
      title: "For Passengers",
      description: "Affordable, safe rides from verified drivers.",
      image: passengersImage,
      color: "secondary",
    },
    {
      icon: Building2,
      title: "For Communities",
      description: "Locally built technology empowering Kenyan jobs.",
      image: communityImage,
      color: "accent",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-kabu-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            How Kabu Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-secondary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
