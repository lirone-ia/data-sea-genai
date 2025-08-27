import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

const CaseStudies = () => {
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
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Case Studies
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Real AI impact—anonymized engagements with measurable outcomes. Below are selected examples across Retail, Banking, and Manufacturing.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Retail Personalization</h3>
              <p className="text-sm text-muted-foreground mb-4">Cosmetics Industry</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Problem:</h4>
                  <p className="text-muted-foreground text-sm">Low conversion on new collections and limited content coverage for long-tail products.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Approach:</h4>
                  <ul className="text-muted-foreground text-xs space-y-1">
                    <li>• Data: Product catalog, content/reviews, web/app events, CRM/loyalty, pricing & promos</li>
                    <li>• Retrieval & LLM: Retrieval-augmented Q&A for product discovery (grounded responses with citations)</li>
                    <li>• Models: Customer segmentation, propensity & uplift, re-ranking for recommendations</li>
                    <li>• Architecture: Batch + streaming features, vector store for product/content, online inference with caching</li>
                    <li>• Evaluation: Offline ranking metrics (NDCG/Recall), online A/B with guardrails (latency, error rate)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Delivery footprint:</h4>
                  <p className="text-muted-foreground text-xs">8–12 weeks • Squad: 1 Lead ML Engineer, 1 Data Engineer, 1 Applied Scientist, 1 Analytics Engineer</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Governance & safety:</h4>
                  <p className="text-muted-foreground text-xs">PII minimization, access controls, prompt safety policies, human-in-the-loop for content quality</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Result:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Conversion:</span>
                      <span className="font-semibold text-green-600">+18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AOV:</span>
                      <span className="font-semibold text-green-600">+12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time-to-content:</span>
                      <span className="font-semibold text-green-600">–24%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" onClick={() => openModal("contact")}>
                Discuss Similar Project
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Banking Risk & Fraud</h3>
              <p className="text-sm text-muted-foreground mb-4">Financial Services</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Problem:</h4>
                  <p className="text-muted-foreground text-sm">High false positives from rule-based monitoring, slow analyst triage.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Approach:</h4>
                  <ul className="text-muted-foreground text-xs space-y-1">
                    <li>• Data: Transactions/events, device & session metadata, KYC/AML, external signals</li>
                    <li>• Features: Streaming feature store, entity resolution, graph-derived features</li>
                    <li>• Models: Supervised classification with calibrated thresholds; analyst copilot for explanations and playbooks</li>
                    <li>• Architecture: Low-latency scoring service, replayable streams, decisioning policies, audit logging</li>
                    <li>• Evaluation: PR/ROC, cost-weighted metrics, drift & stability monitoring; human review loop</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Delivery footprint:</h4>
                  <p className="text-muted-foreground text-xs">10–14 weeks • Squad: 1 Lead ML, 1 Platform/Infra, 1 Data Engineer, 1 Fraud Analyst (client)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Governance & safety:</h4>
                  <p className="text-muted-foreground text-xs">GDPR & AML obligations, model risk governance, explainability artifacts (feature attributions)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Result:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">False positives:</span>
                      <span className="font-semibold text-green-600">–35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Detection precision:</span>
                      <span className="font-semibold text-green-600">+22%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Triage time:</span>
                      <span className="font-semibold text-green-600">minutes-level</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" onClick={() => openModal("contact")}>
                Discuss Similar Project
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Maintenance</h3>
              <p className="text-sm text-muted-foreground mb-4">Automotive Manufacturing</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Problem:</h4>
                  <p className="text-muted-foreground text-sm">Unexpected line stoppages impacting throughput and yield.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Approach:</h4>
                  <ul className="text-muted-foreground text-xs space-y-1">
                    <li>• Data: Sensor/PLC streams, MES/ERP events, maintenance logs, vision QC signals</li>
                    <li>• Models: Time-series anomaly detection, survival/remaining useful life; alert ranking & root-cause hints</li>
                    <li>• Architecture: Stream processing with stateful operators, online inference, work-order integration</li>
                    <li>• Evaluation: Early-warning lead time, precision@k for alerts, MTTR/MTBF improvements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Delivery footprint:</h4>
                  <p className="text-muted-foreground text-xs">12–16 weeks • Squad: 1 Lead ML, 1 Streaming Engineer, 1 Data Engineer, 1 Reliability/OT liaison</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Governance & safety:</h4>
                  <p className="text-muted-foreground text-xs">Environment isolation, change control, traceability and audit trails</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Result:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Downtime:</span>
                      <span className="font-semibold text-green-600">–27%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Yield:</span>
                      <span className="font-semibold text-green-600">+3.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-semibold text-green-600">&lt; 6 months</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6" onClick={() => openModal("contact")}>
                Discuss Similar Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's map your use cases, data assets, and constraints—then deliver a roadmap with clear KPIs, governance, and a production plan.
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

export default CaseStudies;