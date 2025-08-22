import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

const Careers = () => {
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
          Careers
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          We hire curious builders who love shipping reliable AI systems.
        </p>
      </section>

      {/* Open Roles Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Open Roles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">ML Engineer (Platform)</h3>
              <p className="text-muted-foreground mb-6">
                Build and maintain production ML infrastructure, model serving systems, and MLOps pipelines.
              </p>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Data Engineer (Streaming)</h3>
              <p className="text-muted-foreground mb-6">
                Design and implement real-time data processing systems, event streaming, and low-latency pipelines.
              </p>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Applied Scientist (NLP/RAG)</h3>
              <p className="text-muted-foreground mb-6">
                Research and develop cutting-edge NLP models, RAG systems, and LLM applications for enterprise clients.
              </p>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Analytics Engineer</h3>
              <p className="text-muted-foreground mb-6">
                Transform raw data into actionable insights, build analytics frameworks, and create data products.
              </p>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Perks & Growth Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Perks & Growth</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mentorship pairing</h3>
                <p className="text-muted-foreground text-sm">Senior + junior talent collaboration</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Training budget & certifications</h3>
                <p className="text-muted-foreground text-sm">Continuous learning investment</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Hybrid remote</h3>
                <p className="text-muted-foreground text-sm">Client-facing opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join our team of AI engineers and data scientists building cutting-edge solutions for enterprise clients.
        </p>
        <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
          Apply Now
        </Button>
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

export default Careers;