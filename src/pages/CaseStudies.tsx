import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ShoppingBag, Car } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const CaseStudies = () => {
    const caseStudies = [
        {
            icon: <ShoppingBag className="w-12 h-12" />,
            title: "Retail Personalization",
            industry: "Cosmetics Industry",
            problem: "Low conversion on new collections and limited content coverage for long-tail products.",
            approach: ["Data: Product catalog, content/reviews, web/app events, CRM/loyalty, pricing & promos", "Retrieval & LLM: Retrieval-augmented Q&A for product discovery (grounded responses with citations)", "Models: Customer segmentation, propensity & uplift, re-ranking for recommendations", "Architecture: Batch + streaming features, vector store for product/content, online inference with caching", "Evaluation: Offline ranking metrics (NDCG/Recall), online A/B with guardrails (latency, error rate)"],
            delivery: "8–12 weeks • Squad: 1 Lead ML Engineer, 1 Data Engineer, 1 Applied Scientist, 1 Analytics Engineer",
            governance: "PII minimization, access controls, prompt safety policies, human-in-the-loop for content quality",
            results: [{ label: "Conversion", value: "+18%" }, { label: "AOV", value: "+12%" }, { label: "Time-to-content", value: "–24%" }]
        },
        {
            icon: <Building2 className="w-12 h-12" />,
            title: "Banking Risk & Fraud",
            industry: "Financial Services",
            problem: "High false positives from rule-based monitoring, slow analyst triage.",
            approach: ["Data: Transactions/events, device & session metadata, KYC/AML, external signals", "Features: Streaming feature store, entity resolution, graph-derived features", "Models: Supervised classification with calibrated thresholds; analyst copilot for explanations and playbooks", "Architecture: Low-latency scoring service, replayable streams, decisioning policies, audit logging", "Evaluation: PR/ROC, cost-weighted metrics, drift & stability monitoring; human review loop"],
            delivery: "10–14 weeks • Squad: 1 Lead ML, 1 Platform/Infra, 1 Data Engineer, 1 Fraud Analyst (client)",
            governance: "GDPR & AML obligations, model risk governance, explainability artifacts (feature attributions)",
            results: [{ label: "False positives", value: "–35%" }, { label: "Detection precision", value: "+22%" }, { label: "Triage time", value: "minutes-level" }]
        },
        {
            icon: <Car className="w-12 h-12" />,
            title: "Predictive Maintenance",
            industry: "Automotive Manufacturing",
            problem: "Unexpected line stoppages impacting throughput and yield.",
            approach: ["Data: Sensor/PLC streams, MES/ERP events, maintenance logs, vision QC signals", "Models: Time-series anomaly detection, survival/remaining useful life; alert ranking & root-cause hints", "Architecture: Stream processing with stateful operators, online inference, work-order integration", "Evaluation: Early-warning lead time, precision@k for alerts, MTTR/MTBF improvements"],
            delivery: "12–16 weeks • Squad: 1 Lead ML, 1 Streaming Engineer, 1 Data Engineer, 1 Reliability/OT liaison",
            governance: "Environment isolation, change control, traceability and audit trails",
            results: [{ label: "Downtime", value: "–27%" }, { label: "Yield", value: "+3.5%" }, { label: "ROI", value: "< 6 months" }]
        }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">Case Studies</h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">Real AI impact—anonymized engagements with measurable outcomes across Retail, Banking, and Manufacturing.</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-datasea-cyan/10 rounded-xl text-datasea-cyan flex-shrink-0">{study.icon}</div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                                        <h3 className="text-2xl font-bold">{study.title}</h3>
                                        <span className="w-fit px-3 py-1 bg-datasea-dark border border-datasea-border rounded-full text-xs text-datasea-cyan">{study.industry}</span>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div><h4 className="font-semibold text-datasea-cyan mb-2">Problem:</h4><p className="text-datasea-muted text-sm">{study.problem}</p></div>
                                            <div><h4 className="font-semibold text-datasea-cyan mb-2">Approach:</h4><ul className="space-y-1 text-datasea-muted text-xs">{study.approach.map((item, i) => (<li key={i}>• {item}</li>))}</ul></div>
                                        </div>
                                        <div className="space-y-6">
                                            <div><h4 className="font-semibold text-datasea-cyan mb-2">Delivery footprint:</h4><p className="text-datasea-muted text-xs">{study.delivery}</p></div>
                                            <div><h4 className="font-semibold text-datasea-cyan mb-2">Governance & safety:</h4><p className="text-datasea-muted text-xs">{study.governance}</p></div>
                                            <div><h4 className="font-semibold text-datasea-cyan mb-2">Result:</h4><div className="space-y-2">{study.results.map((result, i) => (<div key={i} className="flex justify-between text-sm border-b border-datasea-border/50 pb-1 last:border-0"><span className="text-datasea-muted">{result.label}:</span><span className="font-bold text-datasea-aqua">{result.value}</span></div>))}</div></div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-datasea-border/30">
                                        <Link to="/contact" className="inline-block w-full md:w-auto text-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-all duration-300">Discuss Similar Project</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
                    <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">Let's map your use cases, data assets, and constraints—then deliver a roadmap with clear KPIs, governance, and a production plan.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1">Get Started</Link>
                        <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm">Request Demo</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudies;
