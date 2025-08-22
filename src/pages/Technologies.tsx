import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      metaDescription.setAttribute('content', 'Named tools, clear outcomes: AWS/Azure/GCP platforms, PyTorch/TensorFlow/Kubernetes, Kafka/Airflow/MLflow/Ray—built with security best practices, portability and cost control.');
    }
  }, []);

  const openModal = (type: "consultation" | "contact" | "demo") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const cloudPlatforms = [
    {
      title: "AWS",
      subtitle: "Scalable ML workloads with managed services and flexible runtime",
      chips: ["SageMaker", "Lambda", "EKS", "S3", "EC2", "RDS"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      color: "bg-orange-500"
    },
    {
      title: "Azure",
      subtitle: "Enterprise AI services with hybrid identity and governance",
      chips: ["ML Studio", "AKS", "Functions", "Cognitive Services", "Synapse"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      color: "bg-blue-500"
    },
    {
      title: "GCP",
      subtitle: "Analytics-first platform with serverless ML orchestration",
      chips: ["Vertex AI", "BigQuery", "GKE", "Cloud Run", "Dataflow"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      color: "bg-green-500"
    }
  ];

  const mlFrameworks = [
    {
      title: "PyTorch",
      subtitle: "Dynamic neural networks for research-grade and production workloads",
      chips: ["Transformers", "CUDA", "Lightning", "TorchServe"],
      icon: "🔥"
    },
    {
      title: "TensorFlow",
      subtitle: "Production ML with an end-to-end ecosystem",
      chips: ["TFX", "Serving", "Lite", "Extended"],
      icon: "🧠"
    },
    {
      title: "Kubernetes",
      subtitle: "Container orchestration for scalable, reliable ML services",
      chips: ["Helm", "Istio", "Operators", "Kubeflow"],
      icon: "⚙️"
    }
  ];

  const dataEngTools = [
    {
      title: "Apache Kafka",
      badge: "Stream processing",
      copy: "Real-time event streaming and event-driven architectures with durability and back-pressure handling."
    },
    {
      title: "Apache Airflow",
      badge: "Workflow orchestration",
      copy: "Complex data pipeline scheduling, dependency management, SLAs, retries and observability."
    },
    {
      title: "MLflow",
      badge: "Experiment tracking",
      copy: "Lifecycle management, model registry, artifacts, lineage, and reproducible runs."
    },
    {
      title: "Ray",
      badge: "Distributed training",
      copy: "Scalable hyperparameter tuning, distributed compute and parallel inference."
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
          Portable, resilient AI platforms across public cloud and on-prem. Consistent tooling for reproducibility, governance, performance, and cost control.
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

      {/* Cloud Platforms */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Cloud Platforms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cloudPlatforms.map((platform, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <img src={platform.logo} alt={`${platform.title} logo`} className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {platform.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{platform.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {platform.chips.map((chip, chipIndex) => (
                    <Badge key={chipIndex} variant="secondary" className="text-xs hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer border border-primary/20 hover:border-primary">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ML Frameworks & Orchestration */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">ML Frameworks & Orchestration</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mlFrameworks.map((framework, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-4xl mb-4">{framework.icon}</div>
                <CardTitle className="text-xl text-primary">
                  {framework.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{framework.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {framework.chips.map((chip, chipIndex) => (
                    <Badge key={chipIndex} variant="secondary" className="text-xs hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer border border-primary/20 hover:border-primary">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Engineering & MLOps Tools */}
      <section className="container mx-auto px-6 py-20 bg-secondary/50">
        <h2 className="text-4xl font-bold text-center mb-16">Data Engineering & MLOps Tools</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {dataEngTools.map((tool, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-xl text-primary">
                    {tool.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {tool.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tool.copy}</p>
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
              <h3 className="text-xl font-bold">Auto-Scaling</h3>
              <p className="text-sm text-muted-foreground">Demand-based scaling, HPA/VPA patterns, and fault isolation for steady latency under load.</p>
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
              <p className="text-sm text-muted-foreground">Controls aligned with GDPR and common audit frameworks; we support SOC2/HIPAA programs (no certification claims).</p>
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