import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import driverImage from "@/assets/driver-happy.jpg";
import communityImage from "@/assets/community.jpg";
import passengersImage from "@/assets/passengers.jpg";

const DriverStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stories = [
    {
      image: driverImage,
      title: "Empowering Drivers",
      description: "Meet John, a Kabu driver who's now earning 30% more than with other platforms. Fair commissions mean he can support his family better and plan for the future.",
      stat: "30% Higher Earnings"
    },
    {
      image: communityImage,
      title: "Building Community",
      description: "Kabu isn't just a ride app—it's a movement. We're creating jobs, supporting local businesses, and keeping money in Kenyan communities.",
      stat: "100% Kenyan Owned"
    },
    {
      image: passengersImage,
      title: "Safe & Reliable",
      description: "Sarah takes Kabu daily to work. She loves the transparent pricing, verified drivers, and real-time tracking that keeps her safe every journey.",
      stat: "5-Star Safety Rating"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Kabu is transforming lives and revolutionizing mobility across Kenya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-bold rounded-full text-sm">
                    {story.stat}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {story.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverStories;
