import { useState } from "react";
import { Car, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleDownload = (platform: string) => {
    // Placeholder for download functionality
    window.open(platform === "android" 
      ? "https://play.google.com/store" 
      : "https://apps.apple.com", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Car className="w-8 h-8 text-primary" strokeWidth={2.5} />
              <span className="text-2xl font-bold text-primary">Kabu</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Why Choose
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            
            {/* Download Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Download Kabu
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-popover border border-border">
                <DropdownMenuItem 
                  onClick={() => handleDownload("android")}
                  className="cursor-pointer hover:bg-accent"
                >
                  <span className="text-lg mr-2">🤖</span>
                  Android
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleDownload("ios")}
                  className="cursor-pointer hover:bg-accent"
                >
                  <span className="text-lg mr-2">🍎</span>
                  iOS
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Why Choose
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Button
                  onClick={() => handleDownload("android")}
                  variant="default"
                  className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span className="text-lg mr-2">🤖</span>
                  Download for Android
                </Button>
                <Button
                  onClick={() => handleDownload("ios")}
                  variant="default"
                  className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span className="text-lg mr-2">🍎</span>
                  Download for iOS
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
