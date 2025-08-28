import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

const Careers = () => {
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
          Careers
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          We hire curious builders who love shipping reliable AI systems—measurable impact, clean architectures, and production readiness.
        </p>
      </section>

      {/* Open Roles Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Open Roles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">ML Engineer (Platform)</h3>
              <p className="text-muted-foreground mb-4">
                Build and operate production ML services and the platform that powers them.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Design/operate inference services (latency, throughput, SLOs)</li>
                  <li>• CI/CD for ML, artifacts & model registry, automated rollouts (canary/blue-green)</li>
                  <li>• Observability: metrics/logs/traces, incident workflow, reliability reviews</li>
                  <li>• Partner with DS/DE to productionize models and features</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Qualifications:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strong Python and systems fundamentals (containers, networking basics)</li>
                  <li>• Experience with orchestration and IaC concepts; testing & code quality</li>
                  <li>• Understanding of evaluation, drift, and data quality signals</li>
                  <li>• Nice to have: experience with feature stores and online embeddings</li>
                </ul>
              </div>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Data Engineer (Streaming)</h3>
              <p className="text-muted-foreground mb-4">
                Design real-time data processing with durable pipelines and exactly-once semantics.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Event ingestion, CDC, schema design & registry, contracts and SLAs</li>
                  <li>• Stateful stream processing, back-pressure handling, idempotency & replay</li>
                  <li>• Batch/stream unification for lakehouse tables; partitioning & compaction</li>
                  <li>• Cost guardrails and performance tuning</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Qualifications:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strong SQL + Python; data modeling and pipeline design</li>
                  <li>• Experience with stream processing concepts and reliability patterns</li>
                  <li>• Governance mindset: lineage, quality checks, access policies</li>
                  <li>• Nice to have: experience with time-series and change-data-capture</li>
                </ul>
              </div>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Applied Scientist (NLP/RAG)</h3>
              <p className="text-muted-foreground mb-4">
                Build LLM/RAG systems with grounded answers and auditable retrieval.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Corpus ingestion, chunking, retrieval policies; hybrid search & reranking</li>
                  <li>• Prompt/policy engineering, safety guardrails, evaluation harness & red-teaming</li>
                  <li>• Offline metrics (e.g., Recall/NDCG) → online A/B with business KPIs</li>
                  <li>• Collaborate with platform to meet latency and cost targets</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Qualifications:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strong Python and NLP/IR fundamentals; embeddings and vector search</li>
                  <li>• Practical experience evaluating LLM systems beyond toy demos</li>
                  <li>• Ability to communicate trade-offs and failure modes</li>
                  <li>• Nice to have: multilingual datasets and domain adaptation</li>
                </ul>
              </div>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Analytics Engineer</h3>
              <p className="text-muted-foreground mb-4">
                Turn raw data into reliable, documented, and testable analytics products.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Semantic models, metrics layer, data tests & documentation</li>
                  <li>• ELT transformations, performance tuning, cost monitoring</li>
                  <li>• Experimentation and attribution frameworks with stakeholders</li>
                  <li>• Build dashboards that tie to KPIs and decisions</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Qualifications:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Excellent SQL + Python; versioned analytics workflows</li>
                  <li>• Data modeling, governance, and stakeholder communication</li>
                  <li>• Nice to have: experimentation design and causal inference basics</li>
                </ul>
              </div>
              <Button variant="outline" onClick={() => openModal("contact")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What We Look For</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Outcome focus</h3>
              <p className="text-muted-foreground text-sm">You tie work to KPIs and user impact</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Pragmatism</h3>
              <p className="text-muted-foreground text-sm">Right level of complexity; clear trade-offs</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Craftsmanship</h3>
              <p className="text-muted-foreground text-sm">Tests, docs, observability, and clean interfaces</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold mb-1">Communication</h3>
              <p className="text-muted-foreground text-sm">Async-first, concise, and respectful feedback loops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Growth Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Perks & Growth</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mentorship pairing</h3>
                <p className="text-muted-foreground text-sm">Senior + junior collaboration, regular 1:1s and code/design reviews</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Training budget & certifications</h3>
                <p className="text-muted-foreground text-sm">Annual learning allowance; conference participation when relevant</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Hybrid remote</h3>
                <p className="text-muted-foreground text-sm">Remote-friendly within France; client-facing opportunities on site</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Career development</h3>
                <p className="text-muted-foreground text-sm">Clear growth paths (IC/lead), ownership of projects, knowledge sharing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Hiring Process</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
            <div>
              <h3 className="font-bold mb-1">Short intro call (30 min)</h3>
              <p className="text-muted-foreground text-sm">Experience, interests, expectations</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
            <div>
              <h3 className="font-bold mb-1">Technical deep-dive (60–90 min)</h3>
              <p className="text-muted-foreground text-sm">Systems & data problems; share past work</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
            <div>
              <h3 className="font-bold mb-1">Practical exercise or portfolio review</h3>
              <p className="text-muted-foreground text-sm">Real-world scope, not puzzles</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
            <div>
              <h3 className="font-bold mb-1">Panel & values</h3>
              <p className="text-muted-foreground text-sm">Collaboration, communication, and stakeholder handling</p>
            </div>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-8">We aim to provide timely feedback at each step.</p>
      </section>

      {/* Location & Contract Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Location & Contract</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
            <p><strong>Location:</strong> France (Île-de-France and regional hubs) — remote-friendly delivery</p>
            <p><strong>Contract:</strong> Full-time; apprenticeships/internships possible for emerging talent</p>
            <p><strong>Language:</strong> Professional English; French is a plus for client workshops</p>
          </div>
        </div>
      </section>

      {/* Equal Opportunity & Privacy Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Equal Opportunity & Privacy</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            DataSea is an equal opportunity employer. We consider all applicants without regard to legally protected characteristics. Application data is processed under privacy best practices.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join a senior-led team delivering production AI for leading French enterprises.
        </p>
        <Button size="lg" className="text-lg px-8 py-6" onClick={() => openModal("contact")}>
          Apply Now
        </Button>
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

export default Careers;