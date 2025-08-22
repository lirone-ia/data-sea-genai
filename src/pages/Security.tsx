import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Security & Compliance
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Security by design—encryption, access control, auditability, and privacy best practices with documentation and audit-ready artifacts.
        </p>
      </section>

      {/* Security Principles Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Security Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Encryption</h3>
               <p className="text-muted-foreground text-sm">
                 Encryption in transit (TLS 1.2+) and at rest; strong key rotation and scoped access to keys and secrets.
               </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Access Control</h3>
               <p className="text-muted-foreground text-sm">
                 Least-privilege by default with role-based permissions, break-glass procedures, and MFA/SSO where supported.
               </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Audit Trails</h3>
               <p className="text-muted-foreground text-sm">
                 Tamper-evident logging for data access and system changes; correlation IDs and event retention policies.
               </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Environment Isolation</h3>
               <p className="text-muted-foreground text-sm">
                 Segregated environments (dev/test/stage/prod), network segmentation, and per-client isolation where required.
               </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Change Management</h3>
               <p className="text-muted-foreground text-sm">
                 Peer reviews and protected branches; automated CI/CD with security scanning and approvals for production.
               </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Governance</h3>
               <p className="text-muted-foreground text-sm">
                 Data classification and minimization, documented retention and deletion workflows, DPIA support, and DPA on request.
               </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Controls Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Controls</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Secrets & Key Management</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Centralized secret storage, rotation schedules, and least-privileged access to KMS/HSM.</li>
                  <li>• No hard-coded secrets; short-lived tokens for automation.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Network & Perimeter</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Private networking, security groups/policies, egress controls, and service-to-service auth.</li>
                  <li>• Optional WAF and rate-limiting patterns.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Software Supply Chain</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dependency/SBOM tracking, SAST/DAST, container image scanning, pinned base images.</li>
                  <li>• Provenance and artifact signing where supported.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Observability & Monitoring</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Metrics, logs, and traces with SLO dashboards; alerting and on-call runbooks.</li>
                  <li>• Log retention policies and integration with client SIEM when applicable.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Backups & Recovery</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Scheduled backups of critical state; periodic restore tests.</li>
                  <li>• Documented RTO/RPO targets defined per engagement.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Lifecycle & Privacy Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Data Lifecycle & Privacy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Data Collection & Minimization</h3>
              <p className="text-muted-foreground">Collect only what's necessary; pseudonymization where feasible.</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Retention & Deletion</h3>
              <p className="text-muted-foreground">Retention schedules agreed upfront; verified deletion upon request.</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Data Residency</h3>
              <p className="text-muted-foreground">Environments deployed in regions selected with the client; residency constraints respected.</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Data Subject Rights</h3>
              <p className="text-muted-foreground">Processes to support access, rectification, and erasure requests (GDPR).</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Incident Response Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Incident Response</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>• Defined triage and escalation paths, with time-boxed investigation and containment.</li>
                  <li>• Client notification procedures aligned to contractual requirements.</li>
                  <li>• Post-incident reviews with corrective actions and documented lessons learned.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Compliance Stance</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 mb-12">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry Best Practices</h3>
              </div>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                We implement security best practices and support your internal audits. We <strong>do not</strong> claim certifications unless explicitly stated in writing. We provide architecture docs, control mappings, and evidence on request.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold text-center mb-8">Security Standards We Follow (alignment, not certification)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-xl font-bold text-primary mb-2">GDPR</div>
                <p className="text-sm text-muted-foreground">Data protection and privacy by design</p>
              </CardContent>
            </Card>
            
            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-xl font-bold text-primary mb-2">ISO/IEC 27001</div>
                <p className="text-sm text-muted-foreground">Information security management practices</p>
              </CardContent>
            </Card>
            
            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-xl font-bold text-primary mb-2">OWASP ASVS</div>
                <p className="text-sm text-muted-foreground">Secure application design guidelines</p>
              </CardContent>
            </Card>
            
            <Card className="border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-xl font-bold text-primary mb-2">NIST CSF</div>
                <p className="text-sm text-muted-foreground">Risk-based cybersecurity framework</p>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-colors md:col-span-2">
              <CardContent className="p-6 text-center">
                <div className="text-xl font-bold text-primary mb-2">CIS Benchmarks</div>
                <p className="text-sm text-muted-foreground">Hardened configuration guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shared Responsibility Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Shared Responsibility</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  Security is collaborative. DataSea implements platform and delivery controls; clients retain ownership of business data classification, identity governance within their directory/IdP, and approval of third-party services used in their environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Requests & Contacts Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Security Requests & Contacts</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Need a DPA, DPIA template, sub-processor list, or pen-test coordination?
          </p>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>• Send a request via <strong>/contact</strong> (Subject: "Security request"), or email <strong>security@datasea.ai</strong></p>
            <p>• Please do not conduct testing on production systems without prior written authorization.</p>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About Security?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We can provide detailed control mappings and evidence aligned to your audit program.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Contact Security</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;