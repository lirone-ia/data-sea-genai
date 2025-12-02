import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-datasea-muted mb-12">
                            Last updated: December 2, 2025
                        </p>

                        <div className="space-y-12 text-datasea-muted">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Data Controller</h2>
                                <p className="mb-4">
                                    <strong className="text-white">DataSea</strong> (SASU)<br />
                                    5 rue Basse des Grouets, 41000 Blois, France<br />
                                    SIREN: 988 832 507 | SIRET: 988 832 507 00012<br />
                                    VAT: FR77988832507<br />
                                    Email: management@datasea.fr
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
                                <p className="mb-4">We collect and process the following categories of personal data:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Identity data:</strong> Name, job title, company name</li>
                                    <li><strong className="text-white">Contact data:</strong> Email address, phone number, business address</li>
                                    <li><strong className="text-white">Technical data:</strong> IP address, browser type, device information, access logs</li>
                                    <li><strong className="text-white">Usage data:</strong> Pages visited, interaction with our services, timestamps</li>
                                    <li><strong className="text-white">Communication data:</strong> Messages sent through contact forms, email correspondence</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis for Processing</h2>
                                <p className="mb-4">Under GDPR Article 6, we process your data based on:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Contractual necessity:</strong> To provide our AI/ML engineering services</li>
                                    <li><strong className="text-white">Legitimate interest:</strong> For business development, security monitoring, and service improvement</li>
                                    <li><strong className="text-white">Consent:</strong> For marketing communications and optional analytics</li>
                                    <li><strong className="text-white">Legal obligation:</strong> Tax records, regulatory compliance, audit trails</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Data Processing in Client Engagements</h2>
                                <p className="mb-4">
                                    When delivering MLOps, data engineering, or AI platform services, DataSea may process client data as a <strong className="text-white">Data Processor</strong> under a dedicated Data Processing Agreement (DPA). Such processing is governed by:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Client-specific DPA terms and security requirements</li>
                                    <li>Technical and organizational measures (TOMs) documented per engagement</li>
                                    <li>Data residency requirements (EU-only processing available)</li>
                                    <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
                                    <li>Access controls with least-privilege principles and audit logging</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Contact inquiries:</strong> 3 years from last interaction</li>
                                    <li><strong className="text-white">Client project data:</strong> Duration of contract + 5 years (legal retention)</li>
                                    <li><strong className="text-white">Technical logs:</strong> 12 months (security monitoring)</li>
                                    <li><strong className="text-white">Financial records:</strong> 10 years (French tax law)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Data Transfers</h2>
                                <p className="mb-4">
                                    We prioritize EU-based infrastructure. When transfers outside the EEA are necessary for service delivery (e.g., multi-cloud deployments), we ensure:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Standard Contractual Clauses (SCCs) with sub-processors</li>
                                    <li>Adequacy decisions where applicable</li>
                                    <li>Transfer Impact Assessments (TIAs) for high-risk transfers</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR Articles 15-22)</h2>
                                <p className="mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Access:</strong> Obtain a copy of your personal data</li>
                                    <li><strong className="text-white">Rectification:</strong> Correct inaccurate data</li>
                                    <li><strong className="text-white">Erasure:</strong> Request deletion (subject to legal retention)</li>
                                    <li><strong className="text-white">Portability:</strong> Receive data in machine-readable format</li>
                                    <li><strong className="text-white">Restriction:</strong> Limit processing in certain circumstances</li>
                                    <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interest</li>
                                </ul>
                                <p className="mt-4">
                                    To exercise these rights, contact: <a href="mailto:management@datasea.fr" className="text-datasea-cyan hover:underline">management@datasea.fr</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Security Measures</h2>
                                <p className="mb-4">We implement industry-standard security controls:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Encryption: AES-256 at rest, TLS 1.3 in transit</li>
                                    <li>Access control: Role-based access, MFA, least privilege</li>
                                    <li>Monitoring: SIEM, intrusion detection, audit logging</li>
                                    <li>Infrastructure: Isolated environments, network segmentation</li>
                                    <li>Incident response: 72-hour breach notification per GDPR Article 33</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Supervisory Authority</h2>
                                <p>
                                    You may lodge a complaint with the French data protection authority:<br />
                                    <strong className="text-white">CNIL</strong> — Commission Nationale de l'Informatique et des Libertés<br />
                                    3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
                                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-datasea-cyan hover:underline">www.cnil.fr</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Updates</h2>
                                <p>
                                    This policy may be updated to reflect changes in our practices or legal requirements. Material changes will be communicated via email or website notice.
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

export default Privacy;
