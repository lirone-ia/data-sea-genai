import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactModal } from "@/components/ContactModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Technologies = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  useEffect(() => {
    document.title = "Technologies | Multi-Cloud Architecture & Tech Stack — DataSea";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Vendor-neutral AI platform capabilities: orchestration & IaC, lakehouse processing, integration & messaging, MLOps, LLM retrieval, observability/FinOps, and security/governance.');
    }
  }, []);

  const openModal = (type: "consultation" | "contact" | "demo") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const platformCategories = [
    {
      title: "Orchestration & IaC",
      blurb: "Deterministic deployments and scalable runtime for AI workloads.",
      bullets: [
        "Containers & orchestration",
        "Service mesh & traffic policies", 
        "Infrastructure as code (Idempotent)",
        "GitOps/continuous delivery"
      ]
    },
    {
      title: "Data Processing & Lakehouse",
      blurb: "Unified batch/stream processing with governed, ACID-compliant tables.",
      bullets: [
        "Batch & streaming pipelines",
        "ACID table formats and time travel",
        "Catalog, schema evolution & governance",
        "Partitioning, compaction, Z-ordering"
      ]
    },
    {
      title: "Data Integration & Messaging",
      blurb: "Reliable data movement with contracts and exactly-once semantics.",
      bullets: [
        "Connectors & change-data-capture (CDC)",
        "Event routing & schema registry",
        "Outbox/inbox patterns, retries & backoff",
        "Idempotency and deduplication"
      ]
    },
    {
      title: "MLOps Tooling",
      blurb: "From experiment to production with traceability and repeatability.",
      bullets: [
        "Experiment tracking & lineage",
        "Model registry & artifact store",
        "Pipeline engines & feature store",
        "Automated evaluation & drift detection"
      ]
    },
    {
      title: "LLM & Retrieval",
      blurb: "Grounded answers with auditable retrieval and safety policies.",
      bullets: [
        "Tokenization/embeddings & vector stores",
        "Hybrid search (lexical + dense) & reranking",
        "Evaluation harness & red-teaming",
        "Prompt/policy management & guardrails"
      ]
    },
    {
      title: "Observability & FinOps",
      blurb: "Operate with confidence and keep costs predictable.",
      bullets: [
        "Metrics, logs, traces & SLO dashboards",
        "Alerting, incident workflow & postmortems",
        "Cost allocation, budgets & quotas",
        "Performance profiling & right-sizing"
      ]
    },
    {
      title: "Security & Governance",
      blurb: "Security by design with privacy and auditability.",
      bullets: [
        "Encryption in transit/at rest, secrets management",
        "Least-privilege IAM & network policies",
        "Data retention/deletion & data residency",
        "Change management & audit trails"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Multi-Cloud Architecture & Tech Stack
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Portable, resilient AI platforms across public cloud and on-prem with consistent tooling. Built for reproducibility, governance, performance, and cost control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("consultation")}>
            Architecture Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => openModal("demo")}>
            View Demo Environment
          </Button>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Platform Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{category.blurb}</p>
                <ul className="space-y-1">
                  {category.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-muted-foreground text-sm">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Benefits */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Architecture Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Multi-Cloud Portability</h3>
              <p className="text-sm text-muted-foreground">Avoid lock-in with consistent tooling across environments.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Resilience & Auto-Scaling</h3>
              <p className="text-sm text-muted-foreground">Health-based failover, HPA/VPA patterns, and fault isolation.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Security by Design</h3>
              <p className="text-sm text-muted-foreground">Encryption, least-privilege access, network segmentation, secrets hygiene.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Compliance Support</h3>
              <p className="text-sm text-muted-foreground">Controls aligned with GDPR and common audit frameworks (no certification claims).</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Cost Efficiency</h3>
              <p className="text-sm text-muted-foreground">Right-sizing, spot/queueing strategies, storage layouts & caching; budgets and quotas.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Reliability Engineering</h3>
              <p className="text-sm text-muted-foreground">SLOs, canary/blue-green rollouts, chaos testing, and rollback plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Our architects design portable, governed AI platforms tailored to your performance, reliability, and compliance needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("consultation")}>
            Architecture Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => openModal("demo")}>
            View Demo Environment
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

export default Technologies;