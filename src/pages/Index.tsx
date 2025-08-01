import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactModal } from "@/components/ContactModal";

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
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/502f36c9-283c-4022-8de7-8585625012a9.png" 
              alt="DataSea Logo" 
              className="h-20 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button onClick={() => openModal("contact")}>Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Advanced MLOps & AI Engineering
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Enterprise-grade AI infrastructure with multi-cloud orchestration, vector databases, and production-ready LLM pipelines. 
          Specialized in Transformers, RAG architectures, and real-time inference optimization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("consultation")}>
            Schedule Consultation
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
              <h3 className="text-xl font-bold mb-4">Salesforce & Data Integration</h3>
              <p className="text-muted-foreground text-sm">
                API orchestration with automated synchronization pipelines. ETL/ELT workflows using Apache Airflow, 
                real-time streaming with Kafka, and custom transformation layers for enterprise data governance.
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
              <p className="text-muted-foreground text-sm">
                Advanced speech processing with Whisper ASR, BERT embeddings, and transformer-based sentiment analysis. 
                Vector similarity search, conversational pattern detection, and real-time inference optimization.
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
              <h3 className="text-xl font-bold mb-4">ML Segmentation & CLV</h3>
              <p className="text-muted-foreground text-sm">
                Unsupervised clustering (K-Means, DBSCAN, GMM), ensemble methods (XGBoost, Random Forest), 
                and deep learning architectures (autoencoders, LSTM sequences) for behavioral pattern recognition.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">GCP Data Engineering</h3>
              <p className="text-muted-foreground text-sm">
                BigQuery optimization, Cloud Storage data lakes, Dataflow batch/streaming processing. 
                Serverless architectures with Cloud Functions and scalable ML workflows via Vertex AI.
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
              <h3 className="text-xl font-bold mb-4">LLM & RAG Systems</h3>
              <p className="text-muted-foreground text-sm">
                Production RAG with vector databases (Pinecone, Weaviate), embedding optimization, 
                fine-tuning strategies, and multi-agent frameworks using LangChain and custom orchestration.
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
              <h3 className="text-xl font-bold mb-4">MLOps & Infrastructure</h3>
              <p className="text-muted-foreground text-sm">
                Kubernetes orchestration, Docker containerization, CI/CD pipelines with MLflow tracking. 
                Model versioning, A/B testing frameworks, and multi-cloud deployment strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Multi-Cloud Architecture & Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">AWS</div>
              <p className="text-xs text-muted-foreground">SageMaker, Lambda, EKS</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Azure</div>
              <p className="text-xs text-muted-foreground">ML Studio, AKS, Functions</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">GCP</div>
              <p className="text-xs text-muted-foreground">Vertex AI, BigQuery, GKE</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">PyTorch</div>
              <p className="text-xs text-muted-foreground">Transformers, CUDA</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">TensorFlow</div>
              <p className="text-xs text-muted-foreground">TFX, Serving, Lite</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Kubernetes</div>
              <p className="text-xs text-muted-foreground">Helm, Istio, Operators</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-xl font-bold text-accent">Apache Kafka</div>
              <p className="text-xs text-muted-foreground">Stream processing</p>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-bold text-accent">Apache Airflow</div>
              <p className="text-xs text-muted-foreground">Workflow orchestration</p>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-bold text-accent">MLflow</div>
              <p className="text-xs text-muted-foreground">Experiment tracking</p>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-bold text-accent">Ray</div>
              <p className="text-xs text-muted-foreground">Distributed training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Scale Your AI Infrastructure</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Enterprise-ready MLOps pipelines, production-grade LLM deployments, and scalable vector search. 
          Let our ML engineers architect your next-generation AI platform with enterprise SLAs and compliance.
        </p>
        <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
          Discuss Technical Requirements
        </Button>
      </section>

      <ContactModal 
        isOpen={modalType !== null} 
        onClose={closeModal} 
        type={modalType || "contact"} 
      />

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/502f36c9-283c-4022-8de7-8585625012a9.png" 
                alt="DataSea Logo" 
                className="h-20 w-auto"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 DataSea. Enterprise AI Solutions.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
