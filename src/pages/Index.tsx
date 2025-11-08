import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import WaitlistDialog from "@/components/WaitlistDialog";
import Vision from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import DownloadSection from "@/components/DownloadSection";
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
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Hero onDriverClick={openDriverWaitlist} onPassengerClick={openPassengerWaitlist} />
        <About />
        <HowItWorks />
        <WhyChoose />
        <Vision />
        <Testimonials />
        <DownloadSection />
        <CTABanner onDriverClick={openDriverWaitlist} onPassengerClick={openPassengerWaitlist} />
        <Footer />
        <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} defaultTab={waitlistTab} />
      </main>
    </>
  );
};

export default Index;
