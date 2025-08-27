import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          We respect your privacy and process personal data in line with GDPR and privacy best practices.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Last updated: August 2025
        </p>
      </section>

      {/* Privacy Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p>
                DataSea ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are (Data Controller)</h2>
              <p><strong>Data controller:</strong> DataSea, SASU</p>
              <p><strong>Address:</strong> 5 rue Basse des Grouets, 41000 Blois, France</p>
              <p><strong>Identifiers:</strong> SIREN 988 832 507 — SIRET 988 832 507 00012 — VAT FR77988832507 — NAF 6202A</p>
              <p><strong>Contact (privacy):</strong> <a href="mailto:privacy@datasea.fr" className="text-primary hover:underline">privacy@datasea.fr</a></p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p>We collect and process the following categories of personal data, depending on your interactions:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Contact & Identity Data</strong> — name, work email, company, role, phone (if provided).</li>
                <li><strong>Professional Data</strong> — project needs, requirements, interests, messages.</li>
                <li><strong>Usage Data</strong> — pages viewed, events (e.g., CTA clicks), device/OS/browser, IP (truncated or anonymized where feasible).</li>
                <li><strong>Communication Data</strong> — messages, meeting notes, support requests.</li>
                <li><strong>Recruitment Data</strong> (careers) — CV/resume, portfolio, interview records.</li>
              </ul>
              <p className="mt-4">
                We do <strong>not</strong> intentionally collect special categories of data (e.g., health, religious beliefs). Please do not include such data in free-text fields.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Purposes & Legal Bases (GDPR)</h2>
              <p>We process personal data for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Responding to inquiries and providing proposals/support</strong> — <em>legal basis: performance of contract or pre-contractual steps (GDPR Art. 6(1)(b))</em></li>
                <li><strong>Service delivery and account management</strong> — <em>performance of contract (Art. 6(1)(b))</em></li>
                <li><strong>Website operations, security, and debugging</strong> — <em>legitimate interests in operating a reliable service (Art. 6(1)(f))</em></li>
                <li><strong>Analytics to improve content and UX</strong> — <em>consent where required (Art. 6(1)(a)) or legitimate interests (Art. 6(1)(f))</em></li>
                <li><strong>Marketing communications (B2B)</strong> — <em>consent (Art. 6(1)(a)) or legitimate interests where permissible (Art. 6(1)(f)); opt-out anytime</em></li>
                <li><strong>Legal and compliance obligations</strong> — <em>legal obligation (Art. 6(1)(c))</em></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies & Similar Technologies</h2>
              <p>
                We use essential cookies for site functionality and, with your consent, analytics/marketing cookies. You can manage or withdraw consent at any time via the cookie banner or browser settings. See our <a href="/cookies" className="text-primary hover:underline"><strong>Cookies Policy</strong></a> for details (types, lifetimes, vendors).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Sharing & Recipients</h2>
              <p>We may share personal data with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Service providers (processors)</strong> — hosting, analytics, email, CRM, helpdesk; bound by DPAs and confidentiality.</li>
                <li><strong>Professional advisors</strong> — legal, accounting, security.</li>
                <li><strong>Authorities</strong> — when required by law or to protect rights and safety.</li>
              </ul>
              <p className="mt-4">
                We do not sell personal data. A current list of subprocessors is available on request via <a href="/contact" className="text-primary hover:underline"><strong>/contact</strong></a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
              <p>
                Where processing involves transfers outside the <strong>EEA/UK</strong>, we implement appropriate safeguards (e.g., <strong>Standard Contractual Clauses</strong>, transfer impact assessments, additional technical/organizational measures). Regional hosting/residency can be agreed per engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Security Measures</h2>
              <p>We apply security best practices designed to protect personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encryption in transit and at rest; secrets & key management</li>
                <li>Least-privilege access, MFA/SSO where supported</li>
                <li>Environment isolation, change control, secure SDLC and scanning</li>
                <li>Observability, logging/audit trails, incident response runbooks</li>
              </ul>
              <p className="mt-4">
                For more, see <a href="/security" className="text-primary hover:underline"><strong>/security</strong></a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
              <p>We retain data only as long as necessary for the stated purposes and legal requirements. Typical periods:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Contact & inquiry records:</strong> up to <strong>24 months</strong> after last interaction</li>
                <li><strong>Contract & billing data:</strong> up to <strong>10 years</strong> (statutory/accounting)</li>
                <li><strong>Web logs & security events:</strong> up to <strong>12 months</strong></li>
                <li><strong>Analytics:</strong> up to <strong>26 months</strong> (or shorter where configured)</li>
                <li><strong>Recruitment data:</strong> up to <strong>24 months</strong> (talent pool) unless you request deletion sooner</li>
              </ul>
              <p className="mt-4">Retention may differ if a longer/shorter period is required by law or contract.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights (GDPR)</h2>
              <p>Subject to conditions and exceptions under GDPR, you may:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access</strong> your data; <strong>Rectify</strong> inaccurate data</li>
                <li><strong>Erase</strong> your data; <strong>Restrict</strong> processing</li>
                <li><strong>Object</strong> to processing (including direct marketing)</li>
                <li><strong>Data portability</strong> (structured, commonly used format)</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact <a href="mailto:privacy@datasea.fr" className="text-primary hover:underline"><strong>privacy@datasea.fr</strong></a>. We may verify your identity. We aim to respond within <strong>one month</strong> (extendable by two months for complex requests).
              </p>
              <p className="mt-2">
                You also have the right to lodge a complaint with your supervisory authority: <strong>CNIL (France)</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Data</h2>
              <p>
                Our website and services are not directed to children under <strong>16</strong>. We do not knowingly collect children's personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Automated Decision-Making</h2>
              <p>
                We do not perform automated decision-making that produces legal or similarly significant effects without human involvement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
              <p>
                Our website may link to third-party sites. Their privacy practices are governed by their own policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be indicated by updating the "Last updated" date above and, where appropriate, by additional notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>For privacy inquiries or rights requests: <a href="mailto:privacy@datasea.fr" className="text-primary hover:underline"><strong>privacy@datasea.fr</strong></a></p>
              <p>Postal: <strong>DataSea, 5 rue Basse des Grouets, 41000 Blois, France</strong></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;