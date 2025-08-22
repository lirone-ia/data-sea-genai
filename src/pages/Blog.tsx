import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Practical insights, tutorials, and playbooks on AI engineering and MLOps—built for production, not demos.
        </p>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["MLOps", "LLM/RAG", "Data Engineering", "Observability & FinOps", "Governance & Security", "Case Studies"].map((category) => (
            <Button key={category} variant="outline" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Aug 2025 · 9 min read · LLM/RAG</div>
              <CardTitle className="text-xl">Production RAG: A Four-Layer Architecture That Actually Ships</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                From ingestion and chunking to retrieval, generation, and evaluation—how to design a grounded RAG system with auditable citations, predictable latency, and cost guardrails.
              </CardDescription>
              <ul className="text-sm space-y-1">
                <li>• Retrieval policies beat prompt tweaks</li>
                <li>• Evaluation harness (Recall/NDCG + human review)</li>
                <li>• Latency/cost budgets with caching & batching</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Aug 2025 · 8 min read · MLOps</div>
              <CardTitle className="text-xl">The Minimum Viable MLOps Platform (2025)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                What you really need to move models to prod: CI/CD for ML, registry, feature store patterns, and SLOs—with canary/blue-green rollouts and incident workflow.
              </CardDescription>
              <ul className="text-sm space-y-1">
                <li>• Separate experiment vs. prod concerns</li>
                <li>• Registry + provenance &gt; ad-hoc checkpoints</li>
                <li>• Observability first: metrics/logs/traces</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Jul 2025 · 7 min read · Data Engineering</div>
              <CardTitle className="text-xl">Streaming 101: Exactly-Once Semantics Beyond Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Designing durable pipelines with contracts, idempotency, and replay—how "exactly-once" is achieved in practice and where it fails.
              </CardDescription>
              <ul className="text-sm space-y-1">
                <li>• Outbox/inbox patterns & schema registry</li>
                <li>• Back-pressure, retries, dead-letter queues</li>
                <li>• Data contracts + quality checks at the edges</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Jul 2025 · 10 min read · LLM/RAG</div>
              <CardTitle className="text-lg">Evaluating LLM Systems: From Offline Metrics to Online Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tie Recall/NDCG to business KPIs; build red-teaming and regression suites that survive model updates.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Jul 2025 · 6 min read · Observability & FinOps</div>
              <CardTitle className="text-lg">Cost Guardrails for AI Platforms: Budgets, Quotas, and Right-Sizing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Practical levers for inference/storage cost control without breaking SLOs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Jun 2025 · 8 min read · MLOps</div>
              <CardTitle className="text-lg">Feature Stores: Online vs. Batch and When You Actually Need One</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Minimal patterns for features, versioning, and training/serving skew.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">Jun 2025 · 7 min read · Governance & Security</div>
              <CardTitle className="text-lg">Governance by Design: Access, Lineage, and Retention That Teams Use</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Least-privilege IAM, encryption, and deletion workflows with auditability.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">May 2025 · 9 min read · MLOps</div>
              <CardTitle className="text-lg">From Notebook to Service: Hardening Inference for Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Contracts, timeouts, fallbacks, and p95/p99 thinking for stable APIs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">May 2025 · 5 min read · Case Studies</div>
              <CardTitle className="text-lg">Case Study Notes: Personalization Uplift Without a Massive Re-platform</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Thin-slice approach that delivered +18% conversion and –24% time-to-content.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscribe CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get the Monthly Roundup</h2>
          <p className="text-lg text-muted-foreground mb-8">
            No spam—just practical AI engineering notes.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Subscribe</a>
          </Button>
        </div>
      </section>

      {/* Contact Prompt Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Have a topic request or a question about an article? We'd love to hear it.
          </p>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;