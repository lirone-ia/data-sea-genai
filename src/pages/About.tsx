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

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">About DataSea</h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">Founded in 2025, DataSea blends senior expertise with emerging talent to design, build, and run production-grade AI platforms for French enterprises.</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>
                    <div className="text-datasea-muted text-lg leading-relaxed space-y-6">
                        <p>DataSea was founded in 2025 by <strong className="text-white">Lili der Stepani</strong> to bring pragmatic, outcome-driven AI delivery to the enterprise. We assemble compact, senior-led squads that combine <strong className="text-white">Data Science</strong>, <strong className="text-white">ML Engineering</strong>, and <strong className="text-white">Data Engineering</strong> to ship reliable systems—not slide decks.</p>
                        <p>We partner with <strong className="text-white">major French enterprises</strong> in <strong className="text-white">Île-de-France</strong> and across the country, with a focus on <strong className="text-white">Banking</strong>, <strong className="text-white">Cosmetics/Retail</strong>, and <strong className="text-white">Automotive/Manufacturing</strong>.</p>
                    </div>
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Mission & Promise</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border">
                            <h3 className="text-2xl font-bold mb-4 text-datasea-cyan">Mission</h3>
                            <p className="text-datasea-muted">Turn data into durable business outcomes through governed, portable, and cost-efficient AI platforms.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border">
                            <h3 className="text-2xl font-bold mb-4 text-datasea-cyan">Promise</h3>
                            <p className="text-datasea-muted">Clear KPIs, transparent delivery, and production readiness—measured in SLOs, not PowerPoints.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Values</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Impact first", desc: "Every engagement ties to KPIs and business value." },
                        { title: "Pragmatism", desc: "Right tool, right depth—documented trade-offs." },
                        { title: "Craftsmanship", desc: "Clean code, IaC, and observability for long-term maintainability." },
                        { title: "Knowledge transfer", desc: "Enable your teams to own and evolve the platform." }
                    ].map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-datasea-navy/50 border border-datasea-border text-center">
                            <div className="w-12 h-12 bg-datasea-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-datasea-cyan"><Target className="w-6 h-6" /></div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-datasea-muted text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border">
                        <div className="flex items-center gap-3 mb-4"><MapPin className="w-6 h-6 text-datasea-cyan" /><h3 className="text-xl font-semibold">Office Location</h3></div>
                        <p className="text-datasea-muted"><strong className="text-white">DataSea — 5 rue Basse des Grouets, 41000 Blois, France</strong></p>
                        <p className="text-datasea-muted text-sm mt-4">Remote-friendly delivery with presence in Île-de-France and regional hubs.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border">
                        <div className="flex items-center gap-3 mb-4"><FileText className="w-6 h-6 text-datasea-cyan" /><h3 className="text-xl font-semibold">Legal Information</h3></div>
                        <div className="space-y-2 text-sm text-datasea-muted">
                            <p><strong className="text-white">SASU</strong> — Founded: July 4, 2025</p>
                            <p>SIREN: 988 832 507 — SIRET: 988 832 507 00012</p>
                            <p>VAT: FR77988832507 — NAF: 6202A</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Work With Us</h2>
                    <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">Whether you need a discovery sprint, a production RAG platform, or an MLOps foundation, we can assemble a senior-led squad in days—not months.</p>
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

export default About;
