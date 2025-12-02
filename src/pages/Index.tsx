import { motion } from 'framer-motion';
import { Cloud, Database, Users, Cpu, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Index = () => {
    const services = [
        {
            icon: <Database className="w-8 h-8" />,
            title: "Data Platforms & Integration",
            outcome: "One governed source of truth, faster analytics.",
            deliverables: "Event-driven ELT, change-data-capture, data contracts & quality checks, lineage, fine-grained access policies, cost guardrails."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Voice Analytics & NLP",
            outcome: "Accurate transcripts and insights in real time.",
            deliverables: "Speech-to-text, embeddings store, intent & sentiment, topic modeling, toxicity filtering, streaming inference."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Customer Segmentation & CLV",
            outcome: "Smarter targeting to lift LTV and reduce churn.",
            deliverables: "Unsupervised clustering, CLV modeling, uplift scoring, propensity predictions, campaign measurement."
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "LLM Platforms & RAG",
            outcome: "Grounded answers with auditable citations.",
            deliverables: "Retrieval pipelines, vector databases, evaluation harness, prompt policies, safety guardrails, observability."
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "MLOps & Platform Engineering",
            outcome: "Repeatable, monitored releases with SLAs.",
            deliverables: "Containers & orchestration, CI/CD for ML, model registry, A/B & canary, feature store, telemetry & alerts."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Real-Time Data & Streaming",
            outcome: "Millisecond-level decisions at scale.",
            deliverables: "Event streams, stateful processing, low-latency serving, back-pressure handling, replay, exactly-once semantics."
        }
    ];

    const whyDataSea = [
        { icon: <Users className="w-8 h-8" />, title: "Blended teams (senior + emerging talent)", description: "Expert-led delivery with scalable engineering capacity." },
        { icon: <Zap className="w-8 h-8" />, title: "Outcome-first with measurable KPIs", description: "Clear acceptance criteria, dashboards, and business impact." },
        { icon: <Settings className="w-8 h-8" />, title: "Security-by-design & governance", description: "Encryption, least-privilege access, auditability, privacy best practices." },
        { icon: <Cloud className="w-8 h-8" />, title: "Transparent delivery", description: "Short iterations, fixed-price options, and full handover (runbooks + training)." }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text overflow-x-hidden">
            <Header />

            <main>
                <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                    <WaveBackground />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-datasea-cyan/20 rounded-full blur-[128px] animate-float" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-datasea-blue/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '-3s' }} />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                                Advanced MLOps & <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-datasea-cyan via-datasea-blue to-datasea-aqua">AI Engineering</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto mb-12 leading-relaxed">
                                Operate AI with confidence: multi-cloud orchestration, vector search, and production LLM pipelines. We design low-latency, reliable systems—from retrieval to inference—built to scale and govern.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">Get Started</Link>
                                <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm">Request Demo</Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section id="services" className="py-24 bg-datasea-dark/50 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Engineering <span className="text-datasea-cyan">Capabilities</span></h2>
                            <p className="text-datasea-muted max-w-2xl mx-auto text-lg">Enterprise-ready solutions for your AI and data infrastructure.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-datasea-cyan/10 backdrop-blur-sm">
                                    <div className="mb-6 p-3 bg-datasea-dark rounded-xl w-fit text-datasea-cyan group-hover:bg-datasea-cyan group-hover:text-white transition-colors duration-300">{service.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-datasea-cyan transition-colors">{service.title}</h3>
                                    <p className="text-sm text-datasea-muted mb-3"><strong className="text-datasea-text">Outcome:</strong> {service.outcome}</p>
                                    <p className="text-sm text-datasea-muted leading-relaxed"><strong className="text-datasea-text">Key deliverables:</strong> {service.deliverables}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-datasea-dark">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16">Why DataSea</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyDataSea.map((item, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                                    <div className="w-16 h-16 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-datasea-cyan">{item.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-datasea-muted">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-datasea-blue/20 rounded-full blur-[128px] animate-float" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-datasea-cyan/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '-4s' }} />
                    </div>
                    <div className="relative container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Scale Your AI Infrastructure</h2>
                        <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">Enterprise-ready MLOps pipelines, low-latency LLM serving, and vector search—built for compliance and cost efficiency.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">Get Started</Link>
                            <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm">Request Demo</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Index;
