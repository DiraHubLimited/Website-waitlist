import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import WaitlistDialog from "@/components/WaitlistDialog";
import Vision from "@/components/Vision";
import Benefits from "@/components/Benefits";
import CTAWaitlist from "@/components/CTAWaitlist";
import DriverStories from "@/components/DriverStories";
import Testimonials from "@/components/Testimonials";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
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
        <Benefits />
        <Vision />
        <CTAWaitlist onDriverClick={openDriverWaitlist} onPassengerClick={openPassengerWaitlist} />
        <DriverStories />
        <Testimonials />
        <DownloadSection />
        <ContactSection />
        <Footer />
        <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} defaultTab={waitlistTab} />
      </main>
    </>
  );
};

export default Index;
