import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Terms = () => {
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
                            Terms of Service
                        </h1>
                        <p className="text-datasea-muted">Last updated: August 2025</p>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border space-y-8 text-datasea-muted">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing this website or engaging our services, you agree to these Terms of Service.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Scope of Services</h2>
                            <p>DataSea provides professional services in AI engineering, MLOps, data platforms, and related advisory work. Specific scope and terms are defined in individual Orders or Statements of Work.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                            <p>Each party retains rights to pre-existing materials. Upon full payment, DataSea grants Client a perpetual, non-exclusive license to use Deliverables for internal business purposes.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Confidentiality</h2>
                            <p>Both parties agree to protect confidential information and use it solely to perform under the engagement. Obligations survive for 5 years after disclosure.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                            <p>Neither party is liable for indirect or consequential damages. Total liability is capped at amounts paid in the 12 months preceding the event.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
                            <p>These Terms are governed by the laws of France. Courts within France have exclusive jurisdiction.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Contact</h2>
                            <p>DataSea — <strong className="text-datasea-cyan">legal@datasea.fr</strong></p>
                            <p>Address: 5 rue Basse des Grouets, 41000 Blois, France</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
