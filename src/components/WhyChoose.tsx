import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Shield, Heart, Zap, Award, MapPin } from "lucide-react";

const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = {
    drivers: [
      { icon: DollarSign, text: "Keep 100% of fares" },
      { icon: Shield, text: "Transparent subscription" },
      { icon: Heart, text: "Local support" },
    ],
    passengers: [
      { icon: Zap, text: "Fair prices" },
      { icon: Award, text: "Verified drivers" },
      { icon: Heart, text: "Local innovation" },
    ],
    communities: [
      { icon: MapPin, text: "Supports local economy" },
      { icon: Award, text: "Kenyan-built tech" },
      { icon: Heart, text: "Empowerment" },
    ],
  };

  const categories = [
    { title: "Drivers", items: benefits.drivers, bgColor: "bg-primary", textColor: "text-primary-foreground" },
    { title: "Passengers", items: benefits.passengers, bgColor: "bg-secondary", textColor: "text-secondary-foreground" },
    { title: "Communities", items: benefits.communities, bgColor: "bg-accent", textColor: "text-accent-foreground" },
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
            Why Choose Kabu
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`${category.bgColor} ${category.textColor} rounded-2xl p-8 hover-lift`}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
