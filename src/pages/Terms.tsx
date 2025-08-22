import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          Last updated: January 2025
        </p>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using DataSea's website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Services</h2>
              <p>
                DataSea provides AI engineering, MLOps, and data platform consulting services to enterprise clients. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI strategy and solution architecture</li>
                <li>Data platforms and lakehouse design</li>
                <li>Machine learning and analytics</li>
                <li>LLM platforms and RAG systems</li>
                <li>MLOps and platform engineering</li>
                <li>Real-time and streaming systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to DataSea.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Client Obligations</h2>
              <p>Clients engaging with DataSea agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Cooperate in good faith during project delivery</li>
                <li>Respect confidentiality agreements</li>
                <li>Make timely payments as agreed</li>
                <li>Provide necessary access to systems and data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
              <p>
                DataSea maintains strict confidentiality regarding all client information and projects. We implement appropriate security measures and require all team members to sign confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                DataSea's liability is limited to the value of the specific engagement. We provide services on a best-effort basis and cannot guarantee specific business outcomes, though we work diligently to achieve agreed-upon objectives.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of France, and any disputes shall be subject to the exclusive jurisdiction of French courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>DataSea</strong><br />
                Email: <a href="mailto:legal@datasea.fr" className="text-primary hover:underline">legal@datasea.fr</a><br />
                Address: France
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