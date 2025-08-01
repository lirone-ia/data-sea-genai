import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/26626dc7-368f-4a72-9aae-b8a995bd5e81.png" 
              alt="DataSea Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button>Get Started</Button>
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
          <Button size="lg" className="text-lg px-8 py-6">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
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
                <span className="text-2xl">📊</span>
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
                <span className="text-2xl">🔊</span>
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
                <span className="text-2xl">🎯</span>
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
                <span className="text-2xl">☁️</span>
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
                <span className="text-2xl">🧠</span>
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
                <span className="text-2xl">⚙️</span>
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
        <Button size="lg" className="text-lg px-8 py-6">
          Discuss Technical Requirements
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/26626dc7-368f-4a72-9aae-b8a995bd5e81.png" 
                alt="DataSea Logo" 
                className="h-8 w-auto"
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
