import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import heroImage from "@/assets/hero-nairobi.jpg";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "I've driven for years — Kabu finally lets me earn what I deserve.",
      author: "David M.",
      role: "Driver, Nairobi",
    },
    {
      quote: "It's exciting to support a Kenyan-built platform that actually cares.",
      author: "Grace K.",
      role: "Passenger, Mombasa",
    },
    {
      quote: "No more commission cuts. Just fair pay for honest work.",
      author: "James O.",
      role: "Driver, Kisumu",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background with city image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nairobi city"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            What People Are Saying
          </h2>
          <p className="text-lg text-muted-foreground">Early feedback from our community</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 hover-lift relative"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-4 right-4" />
              <div className="relative z-10">
                <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-secondary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
