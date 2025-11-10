import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const message = formData.get('message');

    // Create mailto link
    const subject = encodeURIComponent(`Kabu Contact Form: Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );
    
    window.location.href = `mailto:daltone.dev@gmail.com?subject=${subject}&body=${body}`;

    // Reset form and show confirmation
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Please send the email from your email client.",
      });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7511810652827!2d36.93408947496521!3d-1.180979535863397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f7e89c7fdb5%3A0x7403bb72f5e92b65!2sChandaria%20Business%20Innovation%20and%20Incubation%20Centre%2C%20Kenyatta%20University!5e0!3m2!1sen!2ske!4v1731367480000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl hover-lift">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Chandaria Innovation and Incubation Center<br />
                    Kenyatta University, Nairobi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl hover-lift">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:daltone.dev@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info.kabu.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl hover-lift">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                  <p className="text-muted-foreground">@kabu254</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center bg-card p-10 rounded-2xl shadow-lg text-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Want to get in touch?
            </h3>
            <p className="text-muted-foreground max-w-md">
              We’d love to hear from you! Click below to send us an email — your browser will open Gmail with our address pre-filled.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=daltone.dev@gmail.com&su=Inquiry%20from%20Kabu%20Website&body=Hello%20Kabu%20team%2C%0A%0AI'd%20like%20to%20get%20in%20touch%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors"
            >
              Send us an email
            </a>

            <p className="text-sm text-muted-foreground">
              or email us directly at{" "}
              <a
                href="mailto:daltone.dev@gmail.com"
                className="text-primary hover:underline"
              >
                info.kabu.co.ke
              </a>
            </p>
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default ContactSection;
