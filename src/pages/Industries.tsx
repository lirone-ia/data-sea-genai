import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ShoppingBag, Car } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Industries = () => {
    const industries = [
        {
            icon: <Building2 className="w-12 h-12" />,
            title: "Banking",
            useCases: ["KYC/AML analytics and adverse media screening", "Risk scoring and credit decisioning", "Fraud detection (card, account takeover, payments)", "Customer 360 and next-best-action", "Advisory copilots for relationship managers"],
            enablers: ["Core banking + payments events, bureau data, PEP/sanctions lists", "Streaming features, entity resolution, explainable models, policy enforcement"],
            outcomes: ["Faster onboarding (–30–60% time-to-verify)", "Lower false positives in monitoring (–20–40%)", "Improved capital efficiency via better risk segmentation"],
            regulatory: "GDPR & privacy by design, AML/CFT obligations, model risk governance (policies, auditability)"
        },
        {
            icon: <ShoppingBag className="w-12 h-12" />,
            title: "Cosmetics & Retail",
            useCases: ["Demand forecasting and replenishment", "Personalization and recommendations", "Review mining and VOC analytics", "Shelf/assortment analytics (pricing, promos)", "Marketing mix modeling and incrementality"],
            enablers: ["POS/e-commerce, loyalty/CRM, catalog & reviews, campaign/traffic data", "Feature store, product embeddings, experimentation frameworks"],
            outcomes: ["Higher conversion (+5–15%), increased AOV (+3–10%)", "Reduced stockouts (–10–25%), improved forecast accuracy"],
            regulatory: "Consent and preference management, data minimization, cookie & tracking governance"
        },
        {
            icon: <Car className="w-12 h-12" />,
            title: "Automotive & Manufacturing",
            useCases: ["Predictive maintenance on lines and in-field assets", "Quality inspection (vision) and defect classification", "Digital twins and process optimization", "Supply chain visibility and ETA/purchasing analytics", "After-sales analytics and warranty optimization"],
            enablers: ["Sensor/PLC streams, MES/ERP, BOM/parts data, vision pipelines", "Streaming inference, stateful processing, traceability & lineage"],
            outcomes: ["Lower downtime (–15–30%), yield improvement (+1–5%)", "Smarter inventory (DOH reduction, better OTIF)"],
            regulatory: "Safety & traceability, environment isolation, change control and audit trails"
        }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">Industries</h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">We partner with leading French enterprises across Banking, Cosmetics/Retail, and Automotive/Manufacturing—designing AI platforms that are measurable, governable, and production-ready.</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {industries.map((industry, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-datasea-cyan/10 rounded-lg flex items-center justify-center mb-6 text-datasea-cyan">{industry.icon}</div>
                            <h3 className="text-2xl font-bold mb-6">{industry.title}</h3>
                            <div className="mb-6"><h4 className="font-semibold mb-2 text-datasea-cyan">Use cases:</h4><ul className="space-y-1 text-datasea-muted text-sm">{industry.useCases.map((item, i) => (<li key={i}>• {item}</li>))}</ul></div>
                            <div className="mb-6"><h4 className="font-semibold mb-2 text-datasea-cyan">Typical data & enablers:</h4><ul className="space-y-1 text-datasea-muted text-sm">{industry.enablers.map((item, i) => (<li key={i}>• {item}</li>))}</ul></div>
                            <div className="mb-6"><h4 className="font-semibold mb-2 text-datasea-cyan">Outcomes & target KPIs:</h4><ul className="space-y-1 text-datasea-muted text-sm">{industry.outcomes.map((item, i) => (<li key={i}>• {item}</li>))}</ul></div>
                            <div><h4 className="font-semibold mb-2 text-datasea-cyan">Notes:</h4><p className="text-datasea-muted text-sm">{industry.regulatory}</p></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
                    <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">Let's map your use cases, data assets, and constraints—and design an AI roadmap with clear KPIs and governance.</p>
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

export default Industries;
