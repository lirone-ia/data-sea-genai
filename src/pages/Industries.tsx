import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ContactModal } from "@/components/ContactModal";

const Industries = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  useEffect(() => {
    document.title = "Industries | Banking, Cosmetics/Retail, Automotive — DataSea";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI platforms for Banking, Cosmetics/Retail, and Automotive: use cases, enablers, and measurable outcomes with security and governance best practices.');
    }
  }, []);

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
          Industries
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          We partner with leading French enterprises across Banking, Cosmetics/Retail, and Automotive/Manufacturing—designing AI platforms that are measurable, governable, and production-ready.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Banking</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Use cases:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• KYC/AML analytics and adverse media screening</li>
                  <li>• Risk scoring and credit decisioning</li>
                  <li>• Fraud detection (card, account takeover, payments)</li>
                  <li>• Customer 360 and next-best-action</li>
                  <li>• Advisory copilots for relationship managers</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Typical data & enablers:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Core banking + payments events, bureau data, PEP/sanctions lists</li>
                  <li>• Streaming features, entity resolution, explainable models, policy enforcement</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Outcomes & target KPIs:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Faster onboarding (–30–60% time-to-verify)</li>
                  <li>• Lower false positives in monitoring (–20–40%)</li>
                  <li>• Improved capital efficiency via better risk segmentation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Regulatory notes:</h4>
                <p className="text-muted-foreground text-sm">
                  GDPR & privacy by design, AML/CFT obligations, model risk governance (policies, auditability)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cosmetics & Retail</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Use cases:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Demand forecasting and replenishment</li>
                  <li>• Personalization and recommendations</li>
                  <li>• Review mining and VOC analytics</li>
                  <li>• Shelf/assortment analytics (pricing, promos)</li>
                  <li>• Marketing mix modeling and incrementality</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Typical data & enablers:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• POS/e-commerce, loyalty/CRM, catalog & reviews, campaign/traffic data</li>
                  <li>• Feature store, product embeddings, experimentation frameworks</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Outcomes & target KPIs:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Higher conversion (+5–15%), increased AOV (+3–10%)</li>
                  <li>• Reduced stockouts (–10–25%), improved forecast accuracy</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Compliance notes:</h4>
                <p className="text-muted-foreground text-sm">
                  Consent and preference management, data minimization, cookie & tracking governance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Automotive & Manufacturing</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Use cases:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Predictive maintenance on lines and in-field assets</li>
                  <li>• Quality inspection (vision) and defect classification</li>
                  <li>• Digital twins and process optimization</li>
                  <li>• Supply chain visibility and ETA/purchasing analytics</li>
                  <li>• After-sales analytics and warranty optimization</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Typical data & enablers:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Sensor/PLC streams, MES/ERP, BOM/parts data, vision pipelines</li>
                  <li>• Streaming inference, stateful processing, traceability & lineage</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Outcomes & target KPIs:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Lower downtime (–15–30%), yield improvement (+1–5%)</li>
                  <li>• Smarter inventory (DOH reduction, better OTIF)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Operational notes:</h4>
                <p className="text-muted-foreground text-sm">
                  Safety & traceability, environment isolation, change control and audit trails
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's map your use cases, data assets, and constraints—and design an AI roadmap with clear KPIs and governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => openModal("demo")}>
              Request Demo
            </Button>
          </div>
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

export default Industries;