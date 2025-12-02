import { Cloud, Database, Cpu, Zap, Shield, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "Multi-cloud Orchestration",
        description: "Seamlessly manage and deploy AI workloads across AWS, GCP, and Azure with unified governance."
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Vector Search Systems",
        description: "High-performance vector databases and retrieval systems for RAG and semantic search applications."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Production LLM Pipelines",
        description: "End-to-end pipelines for fine-tuning, evaluation, and serving of Large Language Models."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Low-latency Inference",
        description: "Optimized model serving infrastructure designed for real-time applications and high throughput."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "AI Governance & Security",
        description: "Enterprise-grade security, compliance monitoring, and access control for your AI assets."
    },
    {
        icon: <BarChart className="w-8 h-8" />,
        title: "MLOps Strategy",
        description: "Strategic consulting to build robust MLOps practices and accelerate your AI maturity."
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-datasea-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Enterprise-Grade <span className="text-datasea-cyan">AI Infrastructure</span>
                    </h2>
                    <p className="text-datasea-muted max-w-2xl mx-auto">
                        We provide the technical foundation for scaling artificial intelligence in your organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-datasea-cyan/10"
                        >
                            <div className="mb-6 p-3 bg-datasea-dark rounded-xl w-fit text-datasea-cyan group-hover:bg-datasea-cyan group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-datasea-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-datasea-muted leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
