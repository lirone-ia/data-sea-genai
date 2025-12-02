import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Blog = () => {
    const posts = [
        {
            date: "Aug 2025",
            readTime: "9 min",
            category: "LLM/RAG",
            title: "Production RAG: A Four-Layer Architecture That Actually Ships",
            description: "From ingestion and chunking to retrieval, generation, and evaluation—how to design a grounded RAG system with auditable citations.",
            highlights: ["Retrieval policies beat prompt tweaks", "Evaluation harness (Recall/NDCG + human review)", "Latency/cost budgets with caching"]
        },
        {
            date: "Aug 2025",
            readTime: "8 min",
            category: "MLOps",
            title: "The Minimum Viable MLOps Platform (2025)",
            description: "What you really need to move models to prod: CI/CD for ML, registry, feature store patterns, and SLOs.",
            highlights: ["Separate experiment vs. prod concerns", "Registry + provenance > ad-hoc checkpoints", "Observability first"]
        },
        {
            date: "Jul 2025",
            readTime: "7 min",
            category: "Data Engineering",
            title: "Streaming 101: Exactly-Once Semantics Beyond Marketing",
            description: "Designing durable pipelines with contracts, idempotency, and replay—how 'exactly-once' is achieved in practice.",
            highlights: ["Outbox/inbox patterns & schema registry", "Back-pressure, retries, dead-letter queues", "Data contracts + quality checks"]
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
                            Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">
                            Practical insights on AI engineering, MLOps, and data platforms—built for production, not demos.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-8">
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {["MLOps", "LLM/RAG", "Data Engineering", "Observability", "Governance", "Case Studies"].map((category) => (
                        <button key={category} className="px-4 py-2 rounded-full border border-datasea-border text-sm text-datasea-muted hover:border-datasea-cyan hover:text-datasea-cyan transition-colors">
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300"
                        >
                            <div className="text-sm text-datasea-muted mb-3">
                                {post.date} · {post.readTime} read · <span className="text-datasea-cyan">{post.category}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                            <p className="text-datasea-muted text-sm mb-4">{post.description}</p>
                            <ul className="text-xs text-datasea-muted space-y-1">
                                {post.highlights.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get the Monthly Roundup</h2>
                    <p className="text-datasea-muted mb-8">No spam—just practical AI engineering notes.</p>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300"
                    >
                        Subscribe
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
