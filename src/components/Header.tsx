import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { useState } from "react";
import logoImage from "@/assets/datasea-logo-final.png";

const Header = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  const openModal = (type: "consultation" | "contact" | "demo") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:flex w-full sm:w-auto justify-center sm:justify-start">
            <a href="/" className="flex justify-center w-full sm:w-auto">
              <img 
                src={logoImage} 
                alt="DataSea - Enterprise AI Solutions" 
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-lg"
              />
            </a>
          </div>
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-8">
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/industries" className="text-foreground hover:text-primary transition-colors">Industries</a>
            <a href="/technologies" className="text-foreground hover:text-primary transition-colors">Technologies</a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button onClick={() => openModal("contact")}>Get Started</Button>
          </div>
        </nav>
        </div>
      </header>

      <ContactModal 
        isOpen={modalType !== null} 
        onClose={closeModal} 
        type={modalType || "contact"} 
      />
    </>
  );
};

export default Header;