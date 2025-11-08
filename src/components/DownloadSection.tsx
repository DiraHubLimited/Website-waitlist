import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDownload = (platform: string) => {
    window.open(platform === "android" 
      ? "https://play.google.com/store" 
      : "https://apps.apple.com", "_blank");
  };

  return (
    <section className="py-20 bg-muted/30" ref={ref} id="download">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <Smartphone className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Download Kabu Today
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Get started with Kenya's most innovative ride platform. Available on Android and iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => handleDownload("android")}
              className="text-lg px-8 py-6 hover-lift bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px]"
            >
              <span className="text-2xl mr-3">🤖</span>
              Android
            </Button>
            <Button
              size="lg"
              onClick={() => handleDownload("ios")}
              variant="outline"
              className="text-lg px-8 py-6 hover-lift min-w-[200px]"
            >
              <span className="text-2xl mr-3">🍎</span>
              iOS
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Coming soon to your app store
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
