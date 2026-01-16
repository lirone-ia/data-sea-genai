import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  BarChart3, 
  Sparkles, 
  Activity, 
  Layers,
  Award,
  ArrowRight,
  Quote,
  Target,
  Scale
} from "lucide-react";

const Leadership = () => {
  const ambitions = [
    {
      icon: Brain,
      title: "NLP & Semantic Understanding",
      description: "Pioneering the use of Vector Search and Retrieval-Augmented Generation (RAG) to create AI that doesn't just 'guess,' but 'knows' based on a governed source of truth."
    },
    {
      icon: BarChart3,
      title: "Behavioral Data Science",
      description: "Developing complex Customer Segmentation and CLV models, moving beyond simple correlation to causal inference—predicting and influencing future customer behavior with surgical precision."
    },
    {
      icon: Shield,
      title: "Trustworthy AI (Safety & Guardrails)",
      description: "Advocating for transparency with toxicity filtering, intent modeling, and evaluation harnesses to ensure AI outputs are safe, ethical, and compliant."
    }
  ];

  const futureProjects = [
    {
      icon: Sparkles,
      title: "Production-Grade LLM Pipelines",
      description: "Designing systems that can handle millisecond-level inference for Large Language Models while maintaining 'exactly-once' semantics and stateful processing."
    },
    {
      icon: Activity,
      title: "Streaming Data Science",
      description: "Moving from batch processing to Real-Time Inference—AI that learns and adapts to data streams as they happen, providing immediate insights for fraud detection or dynamic pricing."
    },
    {
      icon: Layers,
      title: "Advanced Embeddings & Multi-modal AI",
      description: "Fusing voice analytics, text, and structured data into a unified embedding space to provide a 360-degree cognitive view of business operations."
    }
  ];

  const whyUnique = [
    {
      icon: Award,
      title: "Deep Historical Context",
      description: "A unique ability to combine 'classical' statistical methods with 'cutting-edge' Deep Learning."
    },
    {
      icon: Target,
      title: "Focus on Grounded Truth",
      description: "An obsession with auditable citations and reducing 'hallucinations' in enterprise AI."
    },
    {
      icon: Scale,
      title: "Scale-First Mentality",
      description: "Ensuring that Data Science solutions are built on 'portable, resilient platforms' that avoid vendor lock-in."
    }
  ];

  const technologies = [
    "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", 
    "LangChain", "Vector DBs", "Apache Spark", "Ray"
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
              Strategic Data Science & The Future of Algorithmic Intelligence
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
                A Vision of "Science in Production"
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  For Lili Der Stepani, Data Science is not just about building models—it is about the <strong className="text-foreground">mathematical rigor</strong> required to solve real-world enterprise challenges. Born in 1955, Lili bridges the gap between foundational statistical science and the modern era of Generative AI.
                </p>
                
                <p>
                  Her vision is clear: moving Data Science from "experimental notebooks" to <strong className="text-foreground">high-performance, low-latency production engines</strong>.
                </p>

                <p>
                  She founded DataSea to address the critical gap in the industry: the need for sophisticated AI models that are actually <em>grounded in business reality</em>, auditable, and capable of processing billions of data points in real time.
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
              "Data Science is the bridge between raw information and human wisdom. At DataSea, we don't just build models; we build the intelligence that allows companies to see the future before it happens."
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
              Ambitions: From Predictive Analytics to Generative Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lili's strategic ambition is to transform DataSea into the premier lab for Advanced AI Engineering. She is pushing the boundaries of how machines perceive and process information through three core pillars.
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
              Future Projects: The Next Frontier of Cognitive Engineering
            </h2>
            <p className="text-lg text-datasea-200 max-w-3xl mx-auto">
              Looking ahead, Lili Der Stepani is steering DataSea toward the next generation of Data Science innovations.
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
                <div className="w-10 h-10 bg-datasea-700 rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="w-5 h-5 text-datasea-300" />
                </div>
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
                Leadership Philosophy: "The Rigor of Science, the Speed of Tech"
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Lili leads with an <strong className="text-foreground">"Outcome-First" mindset</strong>. She believes that the most complex algorithm is useless if it doesn't deliver a measurable KPI.
                </p>
                
                <p>
                  At DataSea, she fosters a culture where <strong className="text-foreground">PhD-level research meets agile engineering</strong>—ensuring that every data experiment leads to a concrete business result.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Unique Section */}
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
              Why Her Data Science Vision is Unique
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyUnique.map((item, index) => (
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
              Core Data Science Technologies
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
              Join us in building the future of enterprise-ready AI and Data Science.
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
