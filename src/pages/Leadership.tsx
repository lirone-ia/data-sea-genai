import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Shield, 
  Globe, 
  Cpu, 
  Users, 
  Zap, 
  Award,
  ArrowRight,
  Quote
} from "lucide-react";

const Leadership = () => {
  const ambitions = [
    {
      icon: Cpu,
      title: "Advanced MLOps & Governance",
      description: "Solving the 'last mile' problem of AI with repeatable, monitored releases that adhere to strict SLAs—moving from experimental silos to industrialized production."
    },
    {
      icon: Globe,
      title: "Multi-Cloud Orchestration",
      description: "Championing portable and resilient platforms to prevent vendor lock-in, enabling enterprises to deploy AI across AWS, GCP, or Azure with seamless consistency."
    },
    {
      icon: Zap,
      title: "Low-Latency Intelligence",
      description: "Pushing the boundaries of real-time streaming and stateful processing, ensuring clients can act on data the moment it is generated."
    }
  ];

  const futureProjects = [
    {
      title: "Grounded LLM Platforms",
      description: "Developing retrieval pipelines that provide auditable citations and safety guardrails, turning 'black box' AI into transparent, trustworthy business partners."
    },
    {
      title: "Autonomous AI Platforms",
      description: "Self-healing infrastructure where MLOps pipelines automatically detect drift and retrain models without human intervention, ensuring 24/7 reliability."
    },
    {
      title: "Senior-Emerging Talent Hybrid",
      description: "Building 'blended teams' that pair senior architectural wisdom with emerging engineering talent to foster transparent delivery and rapid innovation."
    }
  ];

  const whyHerVision = [
    {
      icon: Award,
      title: "Unmatched Perspective",
      description: "A career built on long-term tech cycles, providing a steady hand in a volatile AI market."
    },
    {
      icon: Target,
      title: "Engineering Rigor",
      description: "A focus on 'Core Engineering Capabilities' over marketing trends."
    },
    {
      icon: Shield,
      title: "Global Compliance",
      description: "Navigating complex regulatory landscapes with 'fine-grained access policies' and 'audit trails' at the heart of every solution."
    }
  ];

  const technologies = [
    "Kubernetes", "Terraform", "PyTorch", "Apache Kafka", 
    "Snowflake", "Databricks", "MLflow", "Kubeflow"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-datasea-900 via-datasea-800 to-datasea-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-datasea-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-datasea-300 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 border-datasea-400/50 text-datasea-200 bg-datasea-800/50">
              Leadership & Vision
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lili Der Stepani
            </h1>
            <p className="text-xl text-datasea-200 mb-2">
              CEO & Founder of DataSea
            </p>
            <p className="text-lg text-datasea-300">
              Engineering Excellence in the Age of Industrialized AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                A Vision of Reliability: Beyond the AI Hype
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  For Lili Der Stepani, the true value of Artificial Intelligence does not lie in the "magic" of the model, but in the <strong className="text-foreground">robustness of the infrastructure</strong> that supports it. With a career spanning decades of technological shifts, Lili has built DataSea on a foundational belief: <em>AI is only as good as its orchestration.</em>
                </p>
                
                <p>
                  Born in 1955, Lili brings a rare depth of perspective to the modern AI landscape. She has witnessed the evolution from monolithic systems to decentralized clouds, allowing her to lead DataSea with a focus on <strong className="text-foreground">"Stability at Scale"</strong>—ensuring that Large Language Models (LLMs) and Machine Learning pipelines move out of the lab and into mission-critical production environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-datasea-50 dark:bg-datasea-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-datasea-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-6">
              "AI is no longer a luxury; it is the new infrastructure of global business. My mission with DataSea is to ensure this infrastructure is as reliable, scalable, and governed as the power grids that run our cities."
            </blockquote>
            <p className="text-datasea-600 dark:text-datasea-400 font-semibold">
              — Lili Der Stepani
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ambitions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ambitions: Orchestrating the Future of MLOps
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lili's strategic ambition is to make DataSea the global gold standard for Enterprise-ready AI Engineering. Under her leadership, the firm focuses on the "plumbing" of intelligence—the invisible but vital systems that allow AI to scale safely and cost-effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ambitions.map((ambition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-datasea-200 dark:border-datasea-800 hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-datasea-100 dark:bg-datasea-900 rounded-lg flex items-center justify-center mb-4">
                      <ambition.icon className="w-6 h-6 text-datasea-600 dark:text-datasea-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {ambition.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {ambition.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-20 bg-datasea-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Future Projects: Leading the Next Frontier of Tech
            </h2>
            <p className="text-lg text-datasea-200 max-w-3xl mx-auto">
              Looking toward the next decade, Lili Der Stepani is steering DataSea toward the frontiers of Agentic Workflows and Secure RAG (Retrieval-Augmented Generation).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {futureProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-datasea-800/50 backdrop-blur-sm rounded-xl p-6 border border-datasea-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-datasea-200">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Leadership Philosophy: "Outcome-First, Security-by-Design"
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Lili leads with a pragmatic, engineering-first mindset. For her, technology is a means to an end: a measurable KPI, a reduced churn rate, or a lifted Life-Time Value (LTV).
                </p>
                
                <p>
                  She ensures that every project at DataSea starts with <strong className="text-foreground">security-by-design</strong>, prioritizing encryption, auditability, and privacy from the first line of code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Her Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Her Vision Defines DataSea
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyHerVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-datasea-100 dark:bg-datasea-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-datasea-600 dark:text-datasea-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Alignment */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Selected Technologies Aligned with Lili's Vision
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-datasea-100 dark:bg-datasea-900 text-datasea-700 dark:text-datasea-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <Link 
              to="/technologies"
              className="inline-flex items-center text-datasea-600 dark:text-datasea-400 hover:text-datasea-700 dark:hover:text-datasea-300 font-medium"
            >
              Explore All Technologies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-datasea-600 to-datasea-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work with DataSea?
            </h2>
            <p className="text-xl text-datasea-100 mb-8 max-w-2xl mx-auto">
              Join us in building the future of enterprise-ready AI infrastructure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-datasea-700 font-semibold rounded-lg hover:bg-datasea-50 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
