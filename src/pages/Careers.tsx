import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Zap, Code, BarChart, Briefcase, GraduationCap, MapPin, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Careers = () => {
    const roles = [
        {
            title: "ML Engineer (Platform)",
            description: "Build and operate production ML services and the platform that powers them.",
            responsibilities: [
                "Design/operate inference services (latency, throughput, SLOs)",
                "CI/CD for ML, artifacts & model registry, automated rollouts",
                "Observability: metrics/logs/traces, incident workflow",
                "Partner with DS/DE to productionize models and features"
            ],
            qualifications: [
                "Strong Python and systems fundamentals",
                "Experience with orchestration and IaC concepts",
                "Understanding of evaluation, drift, and data quality"
            ]
        },
        {
            title: "Data Engineer (Streaming)",
            description: "Design real-time data processing with durable pipelines.",
            responsibilities: [
                "Event ingestion, CDC, schema design & registry",
                "Stateful stream processing, back-pressure handling",
                "Batch/stream unification for lakehouse tables",
                "Cost guardrails and performance tuning"
            ],
            qualifications: [
                "Strong SQL + Python; data modeling",
                "Experience with stream processing concepts",
                "Governance mindset: lineage, quality checks"
            ]
        },
        {
            title: "Applied Scientist (NLP/RAG)",
            description: "Build LLM/RAG systems with grounded answers.",
            responsibilities: [
                "Corpus ingestion, chunking, retrieval policies",
                "Prompt/policy engineering, safety guardrails",
                "Offline metrics → online A/B with business KPIs",
                "Collaborate with platform on latency and cost"
            ],
            qualifications: [
                "Strong Python and NLP/IR fundamentals",
                "Experience evaluating LLM systems",
                "Ability to communicate trade-offs"
            ]
        },
        {
            title: "Analytics Engineer",
            description: "Turn raw data into reliable analytics products.",
            responsibilities: [
                "Semantic models, metrics layer, data tests",
                "ELT transformations, performance tuning",
                "Experimentation and attribution frameworks",
                "Build dashboards that tie to KPIs"
            ],
            qualifications: [
                "Excellent SQL + Python",
                "Data modeling and governance",
                "Experimentation design basics"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">
                            Careers
                        </h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">
                            We hire curious builders who love shipping reliable AI systems—measurable impact, clean architectures, and production readiness.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Open Roles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-datasea-cyan">{role.title}</h3>
                            <p className="text-datasea-muted mb-6">{role.description}</p>
                            
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2 text-white">Responsibilities:</h4>
                                <ul className="text-sm text-datasea-muted space-y-1">
                                    {role.responsibilities.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold mb-2 text-white">Qualifications:</h4>
                                <ul className="text-sm text-datasea-muted space-y-1">
                                    {role.qualifications.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <Link
                                to="/contact"
                                className="inline-block px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-all duration-300"
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">What We Look For</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Zap className="w-6 h-6" />, title: "Outcome focus", desc: "You tie work to KPIs and user impact" },
                            { icon: <Code className="w-6 h-6" />, title: "Pragmatism", desc: "Right level of complexity; clear trade-offs" },
                            { icon: <BarChart className="w-6 h-6" />, title: "Craftsmanship", desc: "Tests, docs, observability, clean interfaces" },
                            { icon: <Users className="w-6 h-6" />, title: "Communication", desc: "Async-first, concise, respectful feedback" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 h-12 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-datasea-cyan">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-datasea-muted text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Perks & Growth</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { icon: <Users className="w-6 h-6" />, title: "Mentorship pairing", desc: "Senior + junior collaboration, regular 1:1s" },
                        { icon: <GraduationCap className="w-6 h-6" />, title: "Training budget", desc: "Annual learning allowance; certifications" },
                        { icon: <MapPin className="w-6 h-6" />, title: "Hybrid remote", desc: "Remote-friendly within France" },
                        { icon: <Briefcase className="w-6 h-6" />, title: "Career growth", desc: "Clear paths (IC/lead), project ownership" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-datasea-navy/50 border border-datasea-border text-center"
                        >
                            <div className="w-12 h-12 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-datasea-cyan">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-datasea-muted text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Hiring Process</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            { step: "1", title: "Short intro call (30 min)", desc: "Experience, interests, expectations" },
                            { step: "2", title: "Technical deep-dive (60–90 min)", desc: "Systems & data problems; share past work" },
                            { step: "3", title: "Practical exercise or portfolio review", desc: "Real-world scope, not puzzles" },
                            { step: "4", title: "Panel & values", desc: "Collaboration, communication, stakeholder handling" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-datasea-dark/30 border border-datasea-border/50">
                                <div className="w-10 h-10 bg-datasea-cyan rounded-full flex items-center justify-center text-datasea-darker font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">{item.title}</h3>
                                    <p className="text-datasea-muted text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-datasea-cyan" />
                            <h3 className="text-xl font-semibold">Location & Contract</h3>
                        </div>
                        <div className="space-y-2 text-datasea-muted text-sm">
                            <p><strong className="text-white">Location:</strong> France (Île-de-France and regional hubs)</p>
                            <p><strong className="text-white">Contract:</strong> Full-time; apprenticeships possible</p>
                            <p><strong className="text-white">Language:</strong> Professional English; French is a plus</p>
                        </div>
                    </div>
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-6 h-6 text-datasea-cyan" />
                            <h3 className="text-xl font-semibold">Equal Opportunity</h3>
                        </div>
                        <p className="text-datasea-muted text-sm">
                            DataSea is an equal opportunity employer. We consider all applicants without regard to legally protected characteristics.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
                    <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">
                        Join a senior-led team delivering production AI for leading French enterprises.
                    </p>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
