import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nairobi.jpg";

interface CTABannerProps {
  onDriverClick: () => void;
  onPassengerClick: () => void;
}

const CTABanner = ({ onDriverClick, onPassengerClick }: CTABannerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nairobi skyline"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Be part of Kenya's mobility revolution.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-background font-medium max-w-3xl mx-auto">
            Sign up now and ride the change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 hover-lift bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={onDriverClick}
            >
              Join Driver Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover-lift bg-background/10 border-background text-background hover:bg-background hover:text-foreground"
              onClick={onPassengerClick}
            >
              Join Passenger Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
