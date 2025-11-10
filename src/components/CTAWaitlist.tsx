import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Car, Users } from "lucide-react";

interface CTAWaitlistProps {
  onDriverClick: () => void;
  onPassengerClick: () => void;
}

const CTAWaitlist = ({ onDriverClick, onPassengerClick }: CTAWaitlistProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Be Part of the Revolution
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Join thousands of Kenyans who are ready to experience fair, transparent, and 
            community-driven mobility. Sign up for early access today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={onDriverClick}
                className="text-lg px-8 py-6 min-w-[240px] group"
              >
                <Car className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join Driver Waitlist
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={onPassengerClick}
                className="text-lg px-8 py-6 min-w-[240px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 group"
              >
                <Users className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join Passenger Waitlist
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAWaitlist;
