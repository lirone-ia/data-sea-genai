import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Settings, Cloud, Zap, Shield, FileText, BarChart2, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Services = () => {
    const services = [
        { icon: <FileText className="w-8 h-8" />, title: "AI Strategy & Solution Architecture", items: ["Discovery & roadmap (business value cases, TCO, risks), requirements & success criteria", "Target architecture & delivery plan (domain model, data flows, security, phased rollout)"] },
        { icon: <Database className="w-8 h-8" />, title: "Data Platforms & Lakehouse", items: ["Event-driven ELT, change-data-capture, data contracts & quality checks, lineage", "Lakehouse design (ACID table formats, governance, partitioning, lifecycle & cost controls)"] },
        { icon: <BarChart2 className="w-8 h-8" />, title: "Machine Learning & Analytics", items: ["Forecasting, optimization, anomaly detection with feature engineering and guardrails", "CLV/churn, recommendations, dynamic pricing; experiment design and model evaluation"] },
        { icon: <Cloud className="w-8 h-8" />, title: "LLM Platforms & RAG", items: ["Document ingestion, chunking, retrieval policies; vector & hybrid search, reranking", "Evaluation harness, safety guardrails, prompt/policy management, observability"] },
        { icon: <Settings className="w-8 h-8" />, title: "MLOps & Platform Engineering", items: ["CI/CD for ML, experiment tracking, model registry, artifact management", "A/B and canary/blue-green rollouts, monitoring & alerting, incident response & SLOs"] },
        { icon: <Zap className="w-8 h-8" />, title: "Real-Time & Streaming Systems", items: ["Stream processing and low-latency inference (caching, autoscaling, back-pressure)", "State management, idempotency, replay, exactly-once processing semantics"] },
        { icon: <Shield className="w-8 h-8" />, title: "Governance, Security & Compliance", items: ["Least-privilege access (IAM), encryption in transit/at rest, secrets management", "Data retention & deletion, DPIA support, data residency & DPA, auditable trails"], fullWidth: true }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">Services</h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">We architect, build, and run production AI platforms end-to-end. Every engagement includes KPIs, acceptance criteria, and a clean operational handover.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className={`p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 ${service.fullWidth ? 'md:col-span-2' : ''}`}>
                                <div className="mb-6 p-3 bg-datasea-dark rounded-xl w-fit text-datasea-cyan">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <ul className="space-y-2 text-datasea-muted">
                                    {service.items.map((item, i) => (<li key={i} className="flex items-start"><span className="text-datasea-cyan mr-2">•</span><span>{item}</span></li>))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Deliverables — common to all engagements</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <FileText className="w-8 h-8" />, title: "Architecture documentation, infrastructure as code, runbooks & playbooks" },
                            { icon: <BarChart2 className="w-8 h-8" />, title: "Dashboards & SLOs, training and knowledge transfer to your teams" },
                            { icon: <Target className="w-8 h-8" />, title: "Optional managed service (support tiers & SLAs)" }
                        ].map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                                <div className="w-16 h-16 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-datasea-cyan">{item.icon}</div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
                <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">Let's discuss your requirements and design the right solution for your business.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">Get Started</Link>
                    <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm">Request Demo</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
