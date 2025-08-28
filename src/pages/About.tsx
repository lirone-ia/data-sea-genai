import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

const About = () => {
  const [modalType, setModalType] = useState<"consultation" | "contact" | "demo" | null>(null);

  const openModal = (type: "consultation" | "contact" | "demo") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About DataSea
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Founded in 2025, DataSea blends senior expertise with emerging talent to design, build, and run production-grade AI platforms for French enterprises.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              DataSea was founded in 2025 by <strong>Lili der Stepani</strong> to bring pragmatic, outcome-driven AI delivery to the enterprise. We assemble compact, senior-led squads that combine <strong>Data Science</strong>, <strong>ML Engineering</strong>, and <strong>Data Engineering</strong> to ship reliable systems—not slide decks.
            </p>
            <p className="text-lg leading-relaxed">
              We partner with <strong>major French enterprises</strong> in <strong>Île-de-France</strong> and across the country, with a focus on <strong>Banking</strong>, <strong>Cosmetics/Retail</strong>, and <strong>Automotive/Manufacturing</strong>. Our work spans from discovery and architecture to MLOps, real-time inference, and operational handover.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Promise Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Mission & Promise</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground">Turn data into durable business outcomes through governed, portable, and cost-efficient AI platforms.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Promise</h3>
                <p className="text-muted-foreground">Clear KPIs, transparent delivery, and production readiness—measured in SLOs, not PowerPoints.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Senior-led squads</h3>
              <p className="text-muted-foreground text-sm">Small teams led by staff/lead engineers.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">2–6 week increments</h3>
              <p className="text-muted-foreground text-sm">Short cycles with demos, retros, and backlog transparency.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Co-creation with client teams</h3>
              <p className="text-muted-foreground text-sm">Pairing, reviews, and knowledge transfer baked in.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Security-by-design</h3>
              <p className="text-muted-foreground text-sm">Encryption, least-privilege access, auditability, privacy best practices.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Operational handover</h3>
              <p className="text-muted-foreground text-sm">Runbooks, IaC, dashboards, and training for your teams.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Outcome-first</h3>
              <p className="text-muted-foreground text-sm">KPIs agreed upfront; we track them from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Method Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Delivery Method (Discovery → Scale)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
              <div>
                <h3 className="font-bold mb-2">Discovery & Value Cases</h3>
                <p className="text-muted-foreground">Stakeholder interviews, data/constraints review, KPI definition, TCO.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
              <div>
                <h3 className="font-bold mb-2">Blueprint & Readiness</h3>
                <p className="text-muted-foreground">Target architecture, governance model, risk register, delivery plan.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
              <div>
                <h3 className="font-bold mb-2">Pilot & Evaluate</h3>
                <p className="text-muted-foreground">Thin slice to de-risk retrieval, inference, and data quality; eval harness.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
              <div>
                <h3 className="font-bold mb-2">Scale & Operate</h3>
                <p className="text-muted-foreground">CI/CD for ML, registry, feature store, monitoring; SLOs and on-call setup.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</div>
              <div>
                <h3 className="font-bold mb-2">Handover & Upskill</h3>
                <p className="text-muted-foreground">Runbooks, playbooks, workshops, and shadow→lead transition to your teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance, Security & Compliance Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Governance, Security & Compliance</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 text-center">
            We implement <strong>security best practices</strong> and support your compliance programs (GDPR, SOC2/HIPAA frameworks) with documented controls and audit-ready artifacts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground text-sm">Encryption in transit/at rest, secrets management, environment isolation</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground text-sm">IAM & network policies (least privilege, segmentation), change management</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground text-sm">Data retention/deletion, data residency, DPIA support, DPA on request</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground text-sm">Observability (metrics/logs/traces), incident workflow, postmortems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Impact Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8–12 weeks</div>
              <p className="text-muted-foreground text-sm">Time-to-value: first production slice</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt; 200–400ms</div>
              <p className="text-muted-foreground text-sm">Latency: p95 inference (use-case dependent)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">SLOs defined</div>
              <p className="text-muted-foreground text-sm">Reliability: per service with canary/blue-green rollouts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Cost guardrails</div>
              <p className="text-muted-foreground text-sm">Budgets/quotas and right-sizing with periodic reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Impact first</h3>
              <p className="text-muted-foreground">Every engagement ties to KPIs and business value.</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Pragmatism</h3>
              <p className="text-muted-foreground">Right tool, right depth—documented trade-offs.</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
              <p className="text-muted-foreground">Clean code, IaC, and observability for long-term maintainability.</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Knowledge transfer</h3>
              <p className="text-muted-foreground">Enable your teams to own and evolve the platform.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Leadership & Team</h2>
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Lili der Stepani</h3>
                <p className="text-primary font-semibold mb-4">Founder & AI Strategy Lead</p>
                <p className="text-muted-foreground">
                  Leads enterprise AI transformations with a focus on measurable outcomes, governance, and reliability.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
            <p><strong>Team structure:</strong> Staff/Lead ML & Data Engineers, Applied Scientists, Analytics Engineers.</p>
            <p><strong>Blended talent:</strong> Senior experts paired with emerging engineers from top universities/engineering schools.</p>
            <p><strong>Extended network:</strong> Access to specialized advisors (security, reliability, domain experts) when needed.</p>
          </div>
        </div>
      </section>

      {/* Partners & Ecosystem Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Partners & Ecosystem</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            We work across public cloud and on-prem with open-source tooling. Our approach is <strong>vendor-neutral</strong>: we recommend the simplest stack that meets your performance, governance, and cost requirements.
          </p>
        </div>
      </section>

      {/* Locations & Company Info */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Locations & Company Information</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Office Location</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>DataSea — 5 rue Basse des Grouets, 41000 Blois, France</strong></p>
                <p className="text-sm mt-4">
                  Remote-friendly delivery with presence in <strong>Île-de-France</strong> and regional hubs.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Legal Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium">Company form:</span> <strong>SASU</strong> — Founded: <strong>July 4, 2025</strong></p>
                <p><span className="font-medium">SIREN:</span> 988 832 507 — <span className="font-medium">SIRET:</span> 988 832 507 00012</p>
                <p><span className="font-medium">VAT:</span> FR77988832507 — <span className="font-medium">NAF:</span> 6202A (IT consulting)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Work With Us</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you need a discovery sprint, a production RAG platform, or an MLOps foundation, we can assemble a senior-led squad in days—not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => openModal("demo")}>
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={modalType !== null} 
        onClose={closeModal} 
        type={modalType || "contact"} 
      />

      <Footer />
    </div>
  );
};

export default About;