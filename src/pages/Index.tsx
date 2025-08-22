import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactModal } from "@/components/ContactModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
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
      <section className="container mx-auto px-6 pt-40 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Advanced MLOps & AI Engineering
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Operate AI with confidence: multi-cloud orchestration, vector search, and production LLM pipelines. We design low-latency, reliable systems—from retrieval to inference—built to scale and govern.
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

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Core Engineering Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h12v2H3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Platforms & Integration</h3>
              <p className="text-muted-foreground text-sm mb-3">
                <strong>Outcome:</strong> One governed source of truth, faster analytics.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Key deliverables:</strong> Event-driven ELT, change-data-capture, data contracts & quality checks, lineage, fine-grained access policies, cost guardrails.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Voice Analytics & NLP</h3>
              <p className="text-muted-foreground text-sm mb-3">
                <strong>Outcome:</strong> Accurate transcripts and insights in real time.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Key deliverables:</strong> Speech-to-text, embeddings store, intent & sentiment, topic modeling, toxicity filtering, streaming inference.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Segmentation & CLV</h3>
              <p className="text-muted-foreground text-sm mb-3">
                <strong>Outcome:</strong> Smarter targeting to lift LTV and reduce churn.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Key deliverables:</strong> Unsupervised clustering, CLV modeling, uplift scoring, propensity predictions, campaign measurement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 12.5c0 .83-.67 1.5-1.5 1.5S14 16.33 14 15.5 14.67 14 15.5 14s1.5.67 1.5 1.5zm2-5c0 .83-.67 1.5-1.5 1.5S16 11.33 16 10.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">LLM Platforms & RAG</h3>
              <p className="text-muted-foreground text-sm mb-3">
                <strong>Outcome:</strong> Grounded answers with auditable citations.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Key deliverables:</strong> Retrieval pipelines, vector databases, evaluation harness, prompt policies, safety guardrails, observability.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">MLOps & Platform Engineering</h3>
              <p className="text-muted-foreground text-sm mb-3">
                <strong>Outcome:</strong> Repeatable, monitored releases with SLAs.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Key deliverables:</strong> Containers & orchestration, CI/CD for ML, model registry, A/B & canary, feature store, telemetry & alerts.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Data & Streaming</h3>
              <p className="text-muted-foreground text-sm mb-3">
                <strong>Outcome:</strong> Millisecond-level decisions at scale.
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Key deliverables:</strong> Event streams, stateful processing, low-latency serving, back-pressure handling, replay, exactly-once semantics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies Preview */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Selected Technologies</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Portable, resilient platforms that avoid vendor lock-in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Orchestration & IaC</div>
              <p className="text-xs text-muted-foreground">Containers & orchestration, service mesh, infrastructure as code, continuous delivery.</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Data Processing</div>
              <p className="text-xs text-muted-foreground">Batch & stream processing, lakehouse/ACID table formats, catalog & governance.</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">MLOps</div>
              <p className="text-xs text-muted-foreground">Experiment tracking, model registry, automated pipelines, feature store.</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">LLM & Retrieval</div>
              <p className="text-xs text-muted-foreground">Tokenization/embedding, vector databases, hybrid search, evaluation suites.</p>
            </div>
          </div>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <a href="/technologies" className="no-underline">View Full Tech Stack</a>
          </Button>
        </div>
      </section>

      {/* Why DataSea Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why DataSea</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Blended teams (senior + emerging talent)</h3>
            <p className="text-sm text-muted-foreground">Expert-led delivery with scalable engineering capacity.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Outcome-first with measurable KPIs</h3>
            <p className="text-sm text-muted-foreground">Clear acceptance criteria, dashboards, and business impact.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Security-by-design & governance</h3>
            <p className="text-sm text-muted-foreground">Encryption, least-privilege access, auditability, privacy best practices.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Transparent delivery</h3>
            <p className="text-sm text-muted-foreground">Short iterations, fixed-price options, and full handover (runbooks + training).</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Scale Your AI Infrastructure</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Enterprise-ready MLOps pipelines, low-latency LLM serving, and vector search—built for compliance and cost efficiency.
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

export default Index;
