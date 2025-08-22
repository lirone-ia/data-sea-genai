import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { useState } from "react";
import logoImage from "@/assets/datasea-logo-waves.png";

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
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/">
              <img 
                src={logoImage} 
                alt="DataSea - Enterprise AI Solutions" 
                className="h-20 w-auto object-contain filter drop-shadow-lg"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/industries" className="text-foreground hover:text-primary transition-colors">Industries</a>
            <a href="/technologies" className="text-foreground hover:text-primary transition-colors">Technologies</a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button onClick={() => openModal("contact")}>Get Started</Button>
          </div>
        </nav>
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