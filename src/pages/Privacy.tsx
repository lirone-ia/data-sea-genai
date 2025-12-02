import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Privacy = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-datasea-muted">Last updated: August 2025</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border space-y-8 text-datasea-muted">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Who We Are (Data Controller)</h2>
                            <p><strong className="text-white">Data controller:</strong> DataSea, SASU</p>
                            <p><strong className="text-white">Address:</strong> 5 rue Basse des Grouets, 41000 Blois, France</p>
                            <p><strong className="text-white">Identifiers:</strong> SIREN 988 832 507 — SIRET 988 832 507 00012</p>
                            <p><strong className="text-white">Contact:</strong> privacy@datasea.fr</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                            <ul className="space-y-2">
                                <li>• <strong className="text-white">Contact & Identity Data</strong> — name, work email, company, role</li>
                                <li>• <strong className="text-white">Professional Data</strong> — project needs, requirements, messages</li>
                                <li>• <strong className="text-white">Usage Data</strong> — pages viewed, device/browser info</li>
                                <li>• <strong className="text-white">Communication Data</strong> — messages, meeting notes</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Purposes & Legal Bases (GDPR)</h2>
                            <ul className="space-y-2">
                                <li>• Responding to inquiries — performance of contract (Art. 6(1)(b))</li>
                                <li>• Website operations — legitimate interests (Art. 6(1)(f))</li>
                                <li>• Analytics — consent or legitimate interests</li>
                                <li>• Legal compliance — legal obligation (Art. 6(1)(c))</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Your Rights (GDPR)</h2>
                            <p>You may: <strong className="text-white">Access</strong>, <strong className="text-white">Rectify</strong>, <strong className="text-white">Erase</strong>, <strong className="text-white">Restrict</strong>, <strong className="text-white">Object</strong>, or request <strong className="text-white">Data portability</strong>.</p>
                            <p className="mt-2">Contact: privacy@datasea.fr</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p>Privacy inquiries: <strong className="text-datasea-cyan">privacy@datasea.fr</strong></p>
                            <p>Postal: DataSea, 5 rue Basse des Grouets, 41000 Blois, France</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Privacy;
