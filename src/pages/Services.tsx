import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ContactModal } from "@/components/ContactModal";

const Services = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  useEffect(() => {
    document.title = "Services | Data Platforms, MLOps, LLM & RAG — DataSea";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'End-to-end AI delivery: strategy, data platforms, real-time streaming, MLOps, and LLM/RAG with governance, security best practices, and measurable KPIs.');
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
          Services
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          We architect, build, and run production AI platforms end-to-end. Every engagement includes KPIs, acceptance criteria, and a clean operational handover.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">AI Strategy & Solution Architecture</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Discovery & roadmap (business value cases, TCO, risks), requirements & success criteria</li>
                <li>• Target architecture & delivery plan (domain model, data flows, security, phased rollout)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Data Platforms & Lakehouse</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Event-driven ELT, change-data-capture, data contracts & quality checks, lineage</li>
                <li>• Lakehouse design (ACID table formats, governance, partitioning, lifecycle & cost controls)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Machine Learning & Analytics</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Forecasting, optimization, anomaly detection with feature engineering and guardrails</li>
                <li>• CLV/churn, recommendations, dynamic pricing; experiment design and model evaluation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">LLM Platforms & RAG</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Document ingestion, chunking, retrieval policies; vector & hybrid search, reranking</li>
                <li>• Evaluation harness, safety guardrails, prompt/policy management, observability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">MLOps & Platform Engineering</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• CI/CD for ML, experiment tracking, model registry, artifact management</li>
                <li>• A/B and canary/blue-green rollouts, monitoring & alerting, incident response & SLOs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Real-Time & Streaming Systems</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Stream processing and low-latency inference (caching, autoscaling, back-pressure)</li>
                <li>• State management, idempotency, replay, exactly-once processing semantics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors col-span-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Governance, Security & Compliance</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Least-privilege access (IAM), encryption in transit/at rest, secrets management</li>
                <li>• Data retention & deletion, DPIA support, data residency & DPA, auditable trails</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Deliverables — common to all engagements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Architecture documentation, infrastructure as code, runbooks & playbooks</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dashboards & SLOs, training and knowledge transfer to your teams</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optional managed service (support tiers & SLAs)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Let's discuss your requirements and design the right solution for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => openModal("demo")}>
            Request Demo
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

export default Services;