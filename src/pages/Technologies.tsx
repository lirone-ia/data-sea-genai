import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, Settings, BarChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Technologies = () => {
    const cloudPlatforms = [
        { name: "AWS", services: ["SageMaker", "Lambda", "EKS", "S3", "EC2", "RDS"], description: "Comprehensive ML platform with auto-scaling infrastructure" },
        { name: "Azure", services: ["ML Studio", "AKS", "Functions", "Cognitive Services", "Synapse"], description: "Enterprise-grade AI services with hybrid cloud capabilities" },
        { name: "GCP", services: ["Vertex AI", "BigQuery", "GKE", "Cloud Run", "Dataflow"], description: "Advanced data analytics and ML orchestration platform" }
    ];

    const mlFrameworks = [
        { name: "PyTorch", features: ["Transformers", "CUDA", "Lightning", "TorchServe"], description: "Dynamic neural networks with research-grade flexibility" },
        { name: "TensorFlow", features: ["TFX", "Serving", "Lite", "Extended"], description: "Production-ready ML platform with comprehensive ecosystem" },
        { name: "Kubernetes", features: ["Helm", "Istio", "Operators", "KubeFlow"], description: "Container orchestration for scalable ML workloads" }
    ];

    const dataTools = [
        {
            name: "Apache Kafka",
            icon: <img src="https://cdn.simpleicons.org/apachekafka/white" alt="Kafka" className="w-10 h-10 mb-2" />,
            use: "Stream processing",
            description: "Real-time data streaming and event-driven architectures"
        },
        {
            name: "Apache Airflow",
            icon: <img src="https://cdn.simpleicons.org/apacheairflow/017CEE" alt="Airflow" className="w-10 h-10 mb-2" />,
            use: "Workflow orchestration",
            description: "Complex data pipeline scheduling and monitoring"
        },
        {
            name: "MLflow",
            icon: <img src="https://cdn.simpleicons.org/mlflow/0194E2" alt="MLflow" className="w-10 h-10 mb-2" />,
            use: "Experiment tracking",
            description: "ML lifecycle management and model versioning"
        },
        {
            name: "Ray",
            icon: <img src="https://cdn.simpleicons.org/ray/028CF0" alt="Ray" className="w-10 h-10 mb-2" />,
            use: "Distributed training",
            description: "Scalable hyperparameter tuning and distributed computing"
        }
    ];

    const benefits = [
        { icon: <Shield className="w-8 h-8" />, title: "Multi-Cloud Resilience", description: "Zero vendor lock-in with seamless failover" },
        { icon: <Zap className="w-8 h-8" />, title: "Auto-Scaling", description: "Dynamic resource allocation based on workload" },
        { icon: <Settings className="w-8 h-8" />, title: "Enterprise Security", description: "SOC2, HIPAA compliance with encryption" },
        { icon: <BarChart className="w-8 h-8" />, title: "Cost Optimization", description: "Intelligent workload placement and optimization" }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">Multi-Cloud Architecture & Tech Stack</h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">Enterprise-grade infrastructure spanning AWS, Azure, and GCP with cutting-edge ML frameworks and orchestration tools.</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-16">Cloud Platforms</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {cloudPlatforms.map((platform, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-center mb-4 text-datasea-cyan">{platform.name}</h3>
                            <p className="text-datasea-muted text-center mb-4">{platform.description}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {platform.services.map((service, i) => (<span key={i} className="px-3 py-1 bg-datasea-dark border border-datasea-border rounded-full text-xs text-datasea-cyan">{service}</span>))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">ML Frameworks & Orchestration</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mlFrameworks.map((framework, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 backdrop-blur-sm text-center">
                                <h3 className="text-2xl font-bold mb-4">{framework.name}</h3>
                                <p className="text-datasea-muted mb-4">{framework.description}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {framework.features.map((feature, i) => (<span key={i} className="px-3 py-1 bg-datasea-navy border border-datasea-border rounded-full text-xs">{feature}</span>))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Engineering & MLOps Tools */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Data Engineering & MLOps Tools</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dataTools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 text-center flex flex-col items-center"
                        >
                            {tool.icon}
                            <h3 className="text-lg font-bold text-datasea-cyan mb-2">{tool.name}</h3>
                            <span className="inline-block px-3 py-1 bg-datasea-dark border border-datasea-border rounded-full text-xs mb-3">
                                {tool.use}
                            </span>
                            <p className="text-sm text-datasea-muted">{tool.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Architecture Benefits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                                <div className="w-16 h-16 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-datasea-cyan">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-datasea-muted">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
                <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">Let our architects design a custom multi-cloud solution tailored to your requirements.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">Architecture Consultation</Link>
                    <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm">View Demo</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Technologies;
