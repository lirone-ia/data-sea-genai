import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Server, Key, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Security = () => {
    const principles = [
        { icon: <Lock className="w-8 h-8" />, title: "Encryption", description: "Encryption in transit (TLS 1.2+) and at rest; strong key rotation and scoped access to keys and secrets." },
        { icon: <Shield className="w-8 h-8" />, title: "Access Control", description: "Least-privilege by default with role-based permissions, break-glass procedures, and MFA/SSO." },
        { icon: <Eye className="w-8 h-8" />, title: "Audit Trails", description: "Tamper-evident logging for data access and system changes; correlation IDs and event retention." },
        { icon: <Server className="w-8 h-8" />, title: "Environment Isolation", description: "Segregated environments (dev/test/stage/prod), network segmentation, and per-client isolation." },
        { icon: <Key className="w-8 h-8" />, title: "Change Management", description: "Peer reviews and protected branches; automated CI/CD with security scanning and approvals." },
        { icon: <Globe className="w-8 h-8" />, title: "Data Governance", description: "Data classification and minimization, documented retention and deletion workflows, DPIA support." }
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
                            Security & Compliance
                        </h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">
                            Security by design—encryption, access control, auditability, and privacy best practices.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Security Principles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-datasea-cyan/10 rounded-lg flex items-center justify-center mb-6 text-datasea-cyan">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-datasea-muted text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Compliance Stance</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border text-center mb-12">
                            <p className="text-lg text-datasea-muted">
                                We implement security best practices and support your internal audits. We provide architecture docs, control mappings, and evidence on request.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {["GDPR", "ISO 27001", "OWASP ASVS", "NIST CSF"].map((standard, index) => (
                                <div key={index} className="p-6 rounded-xl bg-datasea-dark/50 border border-datasea-border text-center">
                                    <div className="text-xl font-bold text-datasea-cyan mb-2">{standard}</div>
                                    <p className="text-xs text-datasea-muted">Alignment</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Questions About Security?</h2>
                <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">
                    We can provide detailed control mappings and evidence aligned to your audit program.
                </p>
                <Link
                    to="/contact"
                    className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300"
                >
                    Contact Security
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default Security;
