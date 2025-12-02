import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Cookies = () => {
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
                            Cookie Policy
                        </h1>
                        <p className="text-datasea-muted">Last updated: August 2025</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border space-y-8 text-datasea-muted">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
                            <p>Cookies are small text files stored on your device when you visit a website. They enable core functionality and help us understand usage to improve the experience.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                            <ul className="space-y-2">
                                <li>• <strong className="text-white">Essential</strong> — Required for basic site functionality and security</li>
                                <li>• <strong className="text-white">Analytics</strong> — To measure usage and improve content</li>
                                <li>• <strong className="text-white">Functional</strong> — To remember preferences</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Consent & Control</h2>
                            <p>We do not place non-essential cookies unless you consent. You can withdraw or change consent at any time via browser settings.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Cookie Durations</h2>
                            <ul className="space-y-2">
                                <li>• <strong className="text-white">Essential</strong> — session or up to 12 months</li>
                                <li>• <strong className="text-white">Analytics</strong> — up to 13 months</li>
                                <li>• <strong className="text-white">Functional</strong> — up to 12 months</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                            <p>You can control cookies via your browser settings. Blocking all cookies may impact site functionality.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p><strong className="text-white">Controller:</strong> DataSea, SASU</p>
                            <p><strong className="text-white">Address:</strong> 5 rue Basse des Grouets, 41000 Blois, France</p>
                            <p><strong className="text-white">Privacy contact:</strong> <span className="text-datasea-cyan">privacy@datasea.fr</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Cookies;
