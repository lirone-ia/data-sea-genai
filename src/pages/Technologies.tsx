import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactModal } from "@/components/ContactModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import awsLogo from "@/assets/aws-logo.svg";
import azureLogo from "@/assets/azure-logo.svg";
import gcpLogo from "@/assets/gcp-logo.svg";

const Technologies = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  const openModal = (type: "consultation" | "contact" | "demo") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const cloudPlatforms = [
    {
      name: "AWS",
      logo: awsLogo,
      services: ["SageMaker", "Lambda", "EKS", "S3", "EC2", "RDS"],
      description: "Comprehensive ML platform with auto-scaling infrastructure"
    },
    {
      name: "Azure",
      logo: azureLogo,
      services: ["ML Studio", "AKS", "Functions", "Cognitive Services", "Synapse"],
      description: "Enterprise-grade AI services with hybrid cloud capabilities"
    },
    {
      name: "GCP",
      logo: gcpLogo,
      services: ["Vertex AI", "BigQuery", "GKE", "Cloud Run", "Dataflow"],
      description: "Advanced data analytics and ML orchestration platform"
    }
  ];

  const mlFrameworks = [
    {
      name: "PyTorch",
      features: ["Transformers", "CUDA", "Lightning", "TorchServe"],
      description: "Dynamic neural networks with research-grade flexibility",
      icon: "🔥"
    },
    {
      name: "TensorFlow",
      features: ["TFX", "Serving", "Lite", "Extended"],
      description: "Production-ready ML platform with comprehensive ecosystem",
      icon: "🧠"
    },
    {
      name: "Kubernetes",
      features: ["Helm", "Istio", "Operators", "KubeFlow"],
      description: "Container orchestration for scalable ML workloads",
      icon: "⚙️"
    }
  ];

  const dataTools = [
    {
      name: "Apache Kafka",
      use: "Stream processing",
      description: "Real-time data streaming and event-driven architectures"
    },
    {
      name: "Apache Airflow", 
      use: "Workflow orchestration",
      description: "Complex data pipeline scheduling and monitoring"
    },
    {
      name: "MLflow",
      use: "Experiment tracking",
      description: "ML lifecycle management and model versioning"
    },
    {
      name: "Ray",
      use: "Distributed training",
      description: "Scalable hyperparameter tuning and distributed computing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Multi-Cloud Architecture & Tech Stack
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Enterprise-grade infrastructure spanning AWS, Azure, and GCP with cutting-edge ML frameworks 
          and orchestration tools for production-ready AI solutions.
        </p>
      </section>

      {/* Cloud Platforms */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">Cloud Platforms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cloudPlatforms.map((platform) => (
            <Card key={platform.name} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <div className="flex items-center justify-center">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{platform.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {platform.services.map((service) => (
                    <Badge key={service} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ML Frameworks */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">ML Frameworks & Orchestration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mlFrameworks.map((framework) => (
              <Card key={framework.name} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                    <span className="text-3xl">{framework.icon}</span>
                    {framework.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{framework.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {framework.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Tools */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Data Engineering & MLOps Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataTools.map((tool) => (
            <Card key={tool.name} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-lg font-bold text-accent">{tool.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {tool.use}
                </Badge>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Benefits */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Architecture Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Multi-Cloud Resilience</h3>
              <p className="text-sm text-muted-foreground">Zero vendor lock-in with seamless failover capabilities</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Auto-Scaling</h3>
              <p className="text-sm text-muted-foreground">Dynamic resource allocation based on workload demands</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">SOC2, HIPAA compliance with end-to-end encryption</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Cost Optimization</h3>
              <p className="text-sm text-muted-foreground">Intelligent workload placement and resource optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Let our architects design a custom multi-cloud solution tailored to your specific requirements and compliance needs.
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