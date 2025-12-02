import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-datasea-cyan">
                            Terms of Service
                        </h1>
                        <p className="text-datasea-muted mb-12">
                            Last updated: December 2, 2025
                        </p>

                        <div className="space-y-12 text-datasea-muted">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Parties</h2>
                                <p>
                                    These Terms of Service ("Terms") govern the relationship between <strong className="text-white">DataSea</strong> (SASU), registered at 5 rue Basse des Grouets, 41000 Blois, France (SIREN: 988 832 507), and any client ("Client") engaging our AI engineering, MLOps, and data platform services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                                <p className="mb-4">DataSea provides professional services including but not limited to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>AI Strategy and Solution Architecture</li>
                                    <li>Data Platform Engineering and Lakehouse Design</li>
                                    <li>Machine Learning Model Development and Deployment</li>
                                    <li>LLM Platforms and RAG System Implementation</li>
                                    <li>MLOps Pipeline Engineering and Platform Operations</li>
                                    <li>Real-Time Data Processing and Streaming Systems</li>
                                    <li>Governance, Security, and Compliance Advisory</li>
                                </ul>
                                <p className="mt-4">
                                    Specific deliverables, timelines, and acceptance criteria are defined in individual Statements of Work (SOW) or service agreements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Engagement Models</h2>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Fixed-Price Projects:</strong> Defined scope, deliverables, and timeline with milestone-based payments</li>
                                    <li><strong className="text-white">Time & Materials:</strong> Billed at agreed daily rates with regular reporting</li>
                                    <li><strong className="text-white">Managed Services:</strong> Ongoing support with defined SLAs and response times</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                                <p className="mb-4"><strong className="text-white">4.1 Client IP:</strong> All pre-existing Client data, models, and intellectual property remain the exclusive property of the Client.</p>
                                <p className="mb-4"><strong className="text-white">4.2 Deliverables:</strong> Upon full payment, Client receives ownership of custom code, configurations, and documentation developed specifically for the engagement.</p>
                                <p className="mb-4"><strong className="text-white">4.3 DataSea Tools:</strong> DataSea retains ownership of pre-existing tools, frameworks, accelerators, and methodologies. Client receives a perpetual, non-exclusive license to use such components within the delivered solution.</p>
                                <p><strong className="text-white">4.4 Open Source:</strong> Third-party open-source components are subject to their respective licenses (Apache 2.0, MIT, etc.).</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
                                <p className="mb-4">
                                    Both parties agree to maintain strict confidentiality of proprietary information disclosed during the engagement, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Technical architecture and system designs</li>
                                    <li>Data schemas, models, and algorithms</li>
                                    <li>Business strategies and roadmaps</li>
                                    <li>Security configurations and access credentials</li>
                                </ul>
                                <p className="mt-4">
                                    Confidentiality obligations survive termination for a period of 5 years.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Data Processing</h2>
                                <p className="mb-4">
                                    When DataSea processes personal data on behalf of the Client, a Data Processing Agreement (DPA) will be executed in compliance with GDPR Article 28. Key provisions include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Processing limited to documented Client instructions</li>
                                    <li>Technical and organizational security measures</li>
                                    <li>Sub-processor management and notification</li>
                                    <li>Data deletion or return upon engagement termination</li>
                                    <li>Audit rights and compliance attestations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Security Obligations</h2>
                                <p className="mb-4">DataSea commits to implementing and maintaining:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
                                    <li>Access controls with least-privilege and MFA</li>
                                    <li>Environment isolation and network segmentation</li>
                                    <li>Vulnerability management and patching</li>
                                    <li>Incident response procedures with defined notification timelines</li>
                                    <li>Secure development practices and code review</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Service Levels</h2>
                                <p className="mb-4">For managed services and production support:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Critical (P1):</strong> Production down — Response within 1 hour</li>
                                    <li><strong className="text-white">High (P2):</strong> Major degradation — Response within 4 hours</li>
                                    <li><strong className="text-white">Medium (P3):</strong> Partial impact — Response within 1 business day</li>
                                    <li><strong className="text-white">Low (P4):</strong> Minor issues — Response within 3 business days</li>
                                </ul>
                                <p className="mt-4">
                                    Custom SLAs may be negotiated for specific engagement requirements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                                <p className="mb-4">
                                    To the maximum extent permitted by French law:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>DataSea total liability is limited to fees paid in the 12 months preceding the claim</li>
                                    <li>Neither party is liable for indirect, consequential, or punitive damages</li>
                                    <li>Exclusions do not apply to breaches of confidentiality, IP infringement, or gross negligence</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                                <p className="mb-4">Either party may terminate:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">For convenience:</strong> With 30 days written notice</li>
                                    <li><strong className="text-white">For cause:</strong> Immediately upon material breach not cured within 15 days of notice</li>
                                </ul>
                                <p className="mt-4">
                                    Upon termination, DataSea will deliver all completed work, transfer knowledge, and securely delete or return Client data within 30 days.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                                <p>
                                    These Terms are governed by French law. Any disputes shall be submitted to the exclusive jurisdiction of the courts of Blois, France, unless otherwise agreed in writing.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">12. Contact</h2>
                                <p>
                                    For questions regarding these Terms:<br />
                                    <strong className="text-white">DataSea</strong><br />
                                    5 rue Basse des Grouets, 41000 Blois, France<br />
                                    Email: <a href="mailto:management@datasea.fr" className="text-datasea-cyan hover:underline">management@datasea.fr</a><br />
                                    Phone: +33 7 67 55 42 69
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
