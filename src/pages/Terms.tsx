import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          Contractual terms for accessing our website and engaging DataSea's professional services.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Last updated: August 2025
        </p>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-10 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing this website or engaging our services, you agree to these Terms of Service ("Terms"). If you are entering into these Terms on behalf of a company, you represent that you are authorized to bind that company.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope of Services</h2>
              <p>
                DataSea provides professional services in AI engineering, MLOps, data platforms, analytics, and related advisory/implementation work (the "Services"). Specific scope, deliverables, timelines, and commercial terms are defined in an <strong>Order Form</strong> or <strong>Statement of Work (SOW)</strong> executed by both parties (collectively, the "Order").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Changes & Assumptions</h2>
              <p>
                Changes to scope, timeline, or dependencies require a mutual <strong>Change Order</strong>. Assumptions and client dependencies (e.g., environment access, data readiness, SMEs' availability) are documented in the Order and affect delivery dates and fees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Client Responsibilities</h2>
              <p>Client will:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide timely access to environments, systems, data, and stakeholders.</li>
                <li>Ensure data and content supplied are lawful and accurate, with necessary permissions.</li>
                <li>Maintain appropriate internal security, identity governance, and approvals for third-party tools/services used in Client environments.</li>
                <li>Cooperate in good faith and provide decisions/feedback within agreed timelines.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Fees, Invoicing & Payment</h2>
              <p>
                Fees are specified in the Order (fixed price, time & materials, or hybrid). Unless otherwise stated:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Invoices are issued monthly in arrears; <strong>payment due within 30 days</strong> of invoice date by bank transfer.</li>
                <li>Prices are exclusive of taxes; Client is responsible for VAT and any applicable taxes/withholdings.</li>
                <li><strong>Late payment:</strong> statutory late payment interest as per French law (Code de commerce) and a fixed recovery indemnity of <strong>€40</strong> minimum (or as updated by law).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Expenses</h2>
              <p>
                Reasonable, pre-approved travel and out-of-pocket expenses are invoiced at cost, in accordance with Client's travel policies where provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
              <p><strong>7.1 Pre-existing IP.</strong> Each party retains all right, title, and interest in pre-existing materials, tools, frameworks, code, and know-how ("Background IP").</p>
              <p className="mt-4"><strong>7.2 Deliverables / Work Product.</strong> Unless otherwise stated in the Order, upon full payment DataSea grants Client a <strong>perpetual, worldwide, non-exclusive license</strong> to use, reproduce, and modify Deliverables for Client's internal business purposes.</p>
              <p className="mt-4"><strong>7.3 Reusable Components.</strong> DataSea may incorporate generic libraries, templates, or accelerators. DataSea retains ownership of such reusable components while granting Client the license in 7.2 to use them as part of the Deliverables.</p>
              <p className="mt-4"><strong>7.4 Open-Source Software (OSS).</strong> Where Deliverables include OSS, such components are provided under their respective licenses. In case of conflict, the OSS license governs that component.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Confidentiality</h2>
              <p>
                "Confidential Information" means non-public information disclosed by either party, marked or reasonably considered confidential. The receiving party will use it solely to perform under the Order, protect it with at least reasonable care, and not disclose it to third parties except to personnel and subprocessors bound by confidentiality. Exclusions include information that is public, independently developed, or rightfully obtained from a third party. Obligations survive for <strong>5 years</strong> after disclosure (trade secrets while confidential).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Data Protection & Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Roles (GDPR):</strong> Party roles (controller/processor) are defined per engagement in the Order. A <strong>Data Processing Addendum (DPA)</strong> is available upon request.</li>
                <li><strong>Security:</strong> DataSea implements <strong>security best practices</strong> (see <a href="/security" className="text-primary hover:underline">/security</a>), including encryption in transit/at rest, least-privilege access, environment isolation, change management, and audit trails.</li>
                <li><strong>Client Data:</strong> Client remains responsible for data classification, lawful basis, consents, and data subject rights. Data residency and deletion/retention are agreed per engagement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Subcontracting</h2>
              <p>
                DataSea may engage qualified subcontractors or affiliates. DataSea remains responsible for the performance of its obligations and ensures confidentiality and data protection obligations are flowed down.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Warranties & Disclaimers</h2>
              <p>
                DataSea warrants it will perform Services in a professional and workmanlike manner using qualified personnel. EXCEPT AS EXPRESSLY STATED, THE SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND (INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, neither party is liable for any indirect, incidental, special, consequential, or punitive damages, loss of profits, or business interruption. Except for (i) unpaid fees, (ii) breach of confidentiality, or (iii) infringement indemnity obligations, <strong>each party's total liability</strong> arising out of or related to the Order is capped at the <strong>amounts paid or payable</strong> by Client for the Services giving rise to the claim in the <strong>12 months</strong> preceding the event.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Indemnification</h2>
              <p><strong>13.1 By DataSea (IP).</strong> DataSea will defend and indemnify Client against third-party claims alleging that Deliverables (excluding Client materials and OSS) infringe intellectual property rights, provided Client promptly notifies DataSea and cooperates. DataSea may (a) modify or replace the Deliverable to be non-infringing, or (b) refund fees for the affected Deliverable and terminate the impacted portion.</p>
              <p className="mt-4"><strong>13.2 By Client.</strong> Client will defend and indemnify DataSea against claims arising from Client data, systems, or instructions, or Client's violation of law or third-party rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Non-Solicitation</h2>
              <p>
                During the engagement and for <strong>12 months</strong> thereafter, neither party will solicit the other's personnel who directly worked on the engagement, except through general public advertisements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Term, Suspension & Termination</h2>
              <p>
                These Terms apply from first access to the website/services and continue while you use them. Each Order states its term. Either party may terminate an Order for material breach not cured within <strong>30 days</strong> of written notice. DataSea may suspend Services for (i) non-payment, (ii) security risks, or (iii) legal/regulatory requirements, after notice where feasible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Effects of Termination</h2>
              <p>
                Upon termination/expiry of an Order, Client pays all accrued fees/expenses. Each party returns or deletes the other's Confidential Information (subject to legal retention). Licenses granted under Section 7.2 survive if fees are fully paid.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Force Majeure</h2>
              <p>
                Neither party is liable for failure or delay due to events beyond reasonable control (e.g., natural disasters, war, government actions, labor disputes, utility failures, internet/hosting outages). The affected party will use reasonable efforts to mitigate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Anti-Corruption & Export</h2>
              <p>
                Each party will comply with applicable anti-corruption, trade, and export control laws. Client will not export or provide Deliverables in violation of such laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">19. Publicity</h2>
              <p>
                With prior written consent, either party may use the other's name and logo for case studies or reference lists. Consent may be withheld at either party's discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">20. Order of Precedence</h2>
              <p>
                In case of conflict: <strong>Order (SOW/Order Form)</strong> prevails over these Terms, which prevail over any other document referenced by the parties, unless expressly stated otherwise in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">21. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Material changes will be indicated by updating the "Last updated" date above.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">22. Governing Law & Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of <strong>France</strong>. Courts within <strong>France</strong> have exclusive jurisdiction, without prejudice to mandatory consumer protections where applicable (note: Services are primarily B2B).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">23. Contact Information</h2>
              <p>
                DataSea — <a href="mailto:legal@datasea.fr" className="text-primary hover:underline">legal@datasea.fr</a>
              </p>
              <p>
                Address: <strong>5 rue Basse des Grouets, 41000 Blois, France</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;