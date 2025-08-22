import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

const About = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  const openModal = (type: "consultation" | "contact" | "demo") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About DataSea
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Founded in 2025, DataSea blends senior and junior talent to deliver enterprise AI in France.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              <strong>Founded in 2025 by Lili der Stepani</strong>, DataSea brings together top senior and junior talent in Data Science and ML Engineering from leading universities and engineering schools in the region.
            </p>
            <p className="text-lg leading-relaxed">
              We partner with <strong>major French enterprises</strong> in Île-de-France and beyond across <strong>banking, cosmetics/retail, and automotive/manufacturing</strong> to accelerate digital and AI transformation.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Small, senior-led squads</h3>
                <p className="text-muted-foreground text-sm">Delivery in 2–6 week increments</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Co-creation with client teams</h3>
                <p className="text-muted-foreground text-sm">Transparent backlog and demos</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Security-by-design</h3>
                <p className="text-muted-foreground text-sm">Privacy best practices (encryption, access control, auditing)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Impact first</h3>
            <p className="text-muted-foreground">Every solution drives measurable business outcomes</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Pragmatism</h3>
            <p className="text-muted-foreground">Choose the right tool for the job, not the trendy one</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
            <p className="text-muted-foreground">Build systems that last and scale</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Knowledge transfer</h3>
            <p className="text-muted-foreground">Empower teams to maintain and evolve solutions</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership & Team</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Lili der Stepani</h3>
                <p className="text-primary font-semibold mb-4">Founder & AI Strategy Lead</p>
                <p className="text-muted-foreground">
                  Leading enterprise AI transformations with focus on measurable business outcomes and technical excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations & Company Info */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Locations & Company Information</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Office Location</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>DataSea</strong></p>
                <p>5 RUE BASSE DES GROUETS</p>
                <p>41000 BLOIS, France</p>
                <p className="text-sm mt-4">
                  France (Île-de-France + regional hubs). Remote-friendly delivery.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Legal Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium">Company Form:</span> SASU (Société par Actions Simplifiée)</p>
                <p><span className="font-medium">Founded:</span> July 4, 2025</p>
                <p><span className="font-medium">SIREN:</span> 988 832 507</p>
                <p><span className="font-medium">SIRET:</span> 988 832 507 00012</p>
                <p><span className="font-medium">VAT Number:</span> FR77988832507</p>
                <p><span className="font-medium">NAF Code:</span> 6202A</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
            Work With Us
          </Button>
        </div>
      </section>

      <ContactModal 
        isOpen={modalType !== null} 
        onClose={closeModal} 
        type={modalType || "contact"} 
      />

      <Footer />
    </div>
  );
};

export default About;