import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, MapPin, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const About = () => {
    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">
                            About DataSea
                        </h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">
                            Founded in 2025, DataSea blends senior expertise with emerging talent to design, build, and run production-grade AI platforms for French enterprises.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>
                    <div className="prose prose-lg mx-auto text-datasea-muted">
                        <p className="text-lg leading-relaxed mb-6">
                            DataSea was founded in 2025 by <strong className="text-white">Lili der Stepani</strong> to bring pragmatic, outcome-driven AI delivery to the enterprise. We assemble compact, senior-led squads that combine <strong className="text-white">Data Science</strong>, <strong className="text-white">ML Engineering</strong>, and <strong className="text-white">Data Engineering</strong> to ship reliable systems—not slide decks.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We partner with <strong className="text-white">major French enterprises</strong> in <strong className="text-white">Île-de-France</strong> and across the country, with a focus on <strong className="text-white">Banking</strong>, <strong className="text-white">Cosmetics/Retail</strong>, and <strong className="text-white">Automotive/Manufacturing</strong>. Our work spans from discovery and architecture to MLOps, real-time inference, and operational handover.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Promise Section */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Mission & Promise</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-4 text-datasea-cyan">Mission</h3>
                            <p className="text-datasea-muted">Turn data into durable business outcomes through governed, portable, and cost-efficient AI platforms.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-4 text-datasea-cyan">Promise</h3>
                            <p className="text-datasea-muted">Clear KPIs, transparent delivery, and production readiness—measured in SLOs, not PowerPoints.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        { title: "Senior-led squads", desc: "Small teams led by staff/lead engineers." },
                        { title: "2–6 week increments", desc: "Short cycles with demos, retros, and backlog transparency." },
                        { title: "Co-creation with client teams", desc: "Pairing, reviews, and knowledge transfer baked in." },
                        { title: "Security-by-design", desc: "Encryption, least-privilege access, auditability, privacy best practices." },
                        { title: "Operational handover", desc: "Runbooks, IaC, dashboards, and training for your teams." },
                        { title: "Outcome-first", desc: "KPIs agreed upfront; we track them from day one." }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-datasea-cyan rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-datasea-muted text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Delivery Method Section */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Delivery Method (Discovery → Scale)</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { step: "1", title: "Discovery & Value Cases", desc: "Stakeholder interviews, data/constraints review, KPI definition, TCO." },
                            { step: "2", title: "Blueprint & Readiness", desc: "Target architecture, governance model, risk register, delivery plan." },
                            { step: "3", title: "Pilot & Evaluate", desc: "Thin slice to de-risk retrieval, inference, and data quality; eval harness." },
                            { step: "4", title: "Scale & Operate", desc: "CI/CD for ML, registry, feature store, monitoring; SLOs and on-call setup." },
                            { step: "5", title: "Handover & Upskill", desc: "Runbooks, playbooks, workshops, and shadow→lead transition to your teams." }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-6 p-6 rounded-xl bg-datasea-dark/30 border border-datasea-border/50 hover:border-datasea-cyan/30 transition-all">
                                <div className="w-10 h-10 bg-datasea-cyan rounded-full flex items-center justify-center text-datasea-darker font-bold text-lg flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                                    <p className="text-datasea-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance, Security & Compliance Section */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Governance, Security & Compliance</h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-datasea-muted mb-12 text-center">
                        We implement <strong className="text-white">security best practices</strong> and support your compliance programs (GDPR, SOC2/HIPAA frameworks) with documented controls and audit-ready artifacts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Encryption in transit/at rest, secrets management, environment isolation",
                            "IAM & network policies (least privilege, segmentation), change management",
                            "Data retention/deletion, data residency, DPIA support, DPA on request",
                            "Observability (metrics/logs/traces), incident workflow, postmortems"
                        ].map((text, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-datasea-navy/30 border border-datasea-border/30">
                                <Shield className="w-5 h-5 text-datasea-cyan mt-1 flex-shrink-0" />
                                <p className="text-datasea-muted text-sm">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Metrics Section */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Impact Metrics</h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { value: "8–12 weeks", label: "Time-to-value: first production slice" },
                            { value: "< 200–400ms", label: "Latency: p95 inference (use-case dependent)" },
                            { value: "SLOs defined", label: "Reliability: per service with canary/blue-green rollouts" },
                            { value: "Cost guardrails", label: "Budgets/quotas and right-sizing with periodic reviews" }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-datasea-dark/50 border border-datasea-border backdrop-blur-sm">
                                <div className="text-2xl font-bold text-datasea-aqua mb-3">{item.value}</div>
                                <p className="text-datasea-muted text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Values</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Impact first", desc: "Every engagement ties to KPIs and business value." },
                        { title: "Pragmatism", desc: "Right tool, right depth—documented trade-offs." },
                        { title: "Craftsmanship", desc: "Clean code, IaC, and observability for long-term maintainability." },
                        { title: "Knowledge transfer", desc: "Enable your teams to own and evolve the platform." }
                    ].map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 text-center group">
                            <div className="w-12 h-12 bg-datasea-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-datasea-cyan group-hover:bg-datasea-cyan group-hover:text-datasea-darker transition-colors">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-datasea-muted text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leadership Section */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Leadership & Team</h2>
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 backdrop-blur-sm text-center">
                            <div className="w-24 h-24 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-12 h-12 text-datasea-cyan" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Lili der Stepani</h3>
                            <p className="text-datasea-cyan font-semibold mb-4">Founder & AI Strategy Lead</p>
                            <p className="text-datasea-muted">
                                Leads enterprise AI transformations with a focus on measurable outcomes, governance, and reliability.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4 text-datasea-muted text-center">
                        <p><strong className="text-white">Team structure:</strong> Staff/Lead ML & Data Engineers, Applied Scientists, Analytics Engineers.</p>
                        <p><strong className="text-white">Blended talent:</strong> Senior experts paired with emerging engineers from top universities/engineering schools.</p>
                        <p><strong className="text-white">Extended network:</strong> Access to specialized advisors (security, reliability, domain experts) when needed.</p>
                    </div>
                </div>
            </section>

            {/* Partners & Ecosystem Section */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Partners & Ecosystem</h2>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-datasea-muted">
                        We work across public cloud and on-prem with open-source tooling. Our approach is <strong className="text-white">vendor-neutral</strong>: we recommend the simplest stack that meets your performance, governance, and cost requirements.
                    </p>
                </div>
            </section>

            {/* Locations & Company Info */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Locations & Company Information</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-datasea-cyan" />
                            <h3 className="text-xl font-semibold">Office Location</h3>
                        </div>
                        <div className="space-y-2 text-datasea-muted">
                            <p><strong className="text-white">DataSea — 5 rue Basse des Grouets, 41000 Blois, France</strong></p>
                            <p className="text-sm mt-4">
                                Remote-friendly delivery with presence in <strong className="text-white">Île-de-France</strong> and regional hubs.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-datasea-cyan" />
                            <h3 className="text-xl font-semibold">Legal Information</h3>
                        </div>
                        <div className="space-y-2 text-sm text-datasea-muted">
                            <p><span className="font-medium text-datasea-text">Company form:</span> <strong className="text-white">SASU</strong> — Founded: <strong className="text-white">July 4, 2025</strong></p>
                            <p><span className="font-medium text-datasea-text">SIREN:</span> 988 832 507 — <span className="font-medium text-datasea-text">SIRET:</span> 988 832 507 00012</p>
                            <p><span className="font-medium text-datasea-text">VAT:</span> FR77988832507 — <span className="font-medium text-datasea-text">NAF:</span> 6202A (IT consulting)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work With Us Section */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Work With Us</h2>
                    <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">
                        Whether you need a discovery sprint, a production RAG platform, or an MLOps foundation, we can assemble a senior-led squad in days—not months.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm"
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
