import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import WaitlistDialog from "@/components/WaitlistDialog";
import Vision from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistTab, setWaitlistTab] = useState<"driver" | "passenger">("driver");

  const openDriverWaitlist = () => {
    setWaitlistTab("driver");
    setWaitlistOpen(true);
  };

  const openPassengerWaitlist = () => {
    setWaitlistTab("passenger");
    setWaitlistOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Hero onDriverClick={openDriverWaitlist} onPassengerClick={openPassengerWaitlist} />
      <About />
      <HowItWorks />
      <WhyChoose />
      <Vision />
      <Testimonials />
      <CTABanner onDriverClick={openDriverWaitlist} onPassengerClick={openPassengerWaitlist} />
      <Footer />
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} defaultTab={waitlistTab} />
    </main>
  );
};

export default Index;
