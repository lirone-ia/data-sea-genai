import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          Cookie Policy
        </h1>
        <p className="text-xl text-muted-foreground mb-4 text-center">
          How we use cookies and similar technologies in line with EU ePrivacy and GDPR.
        </p>
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Last updated: August 2025
        </p>
        
        {/* Cookie Settings Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              // Trigger cookie banner/modal - adjust based on your CMP implementation
              if (typeof window !== 'undefined') {
                // Example for common CMP implementations
                const gtag = (window as any).gtag;
                if (gtag) {
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                  });
                }
                alert('Cookie settings would open here. This requires CMP integration.');
              }
            }}
          >
            Cookie Settings
          </Button>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They enable core functionality (e.g., page navigation, security) and help us understand usage to improve the experience. We also use comparable technologies (pixels, local storage) where appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Essential (strictly necessary)</strong> — Required for basic site functionality and security.</li>
                <li><strong>Analytics</strong> — To measure usage and improve content and performance.</li>
                <li><strong>Functional</strong> — To remember preferences (e.g., language) and enhance features.</li>
                <li><strong>Marketing</strong> <em>(if enabled)</em> — To measure campaigns or show relevant content on third-party sites.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Consent & Control</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>On your first visit, a banner asks for your consent for non-essential cookies (<strong>Analytics</strong>, <strong>Functional</strong>, <strong>Marketing</strong>).</li>
                <li>We do <strong>not</strong> place non-essential cookies unless you consent. You can withdraw or change consent at any time.</li>
                <li>Manage your choices here: <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      alert('Cookie settings would open here. This requires CMP integration.');
                    }
                  }}
                ><strong>Cookie Settings</strong></Button> (button opens CMP).</li>
                <li>If your browser sends a <strong>Do Not Track</strong> or similar signal, we will honor it where technically feasible.</li>
                <li>You can also control cookies via your browser settings. Blocking all cookies may impact site functionality.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Categories & Typical Durations</h2>
              <p>These are typical durations; actual lifetimes depend on your choices and providers.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Essential</strong> — session or up to 12 months</li>
                <li><strong>Analytics</strong> — up to <strong>13 months</strong> (typical in the EU)</li>
                <li><strong>Functional</strong> — up to 12 months</li>
                <li><strong>Marketing</strong> — varies by provider (generally up to 13 months)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Details</h2>
              <p className="mb-6">Below are representative examples. <strong>Replace placeholders</strong> with your actual configuration.</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Essential (strictly necessary)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-secondary/20">
                          <th className="border border-border p-3 text-left">Name</th>
                          <th className="border border-border p-3 text-left">Domain</th>
                          <th className="border border-border p-3 text-left">Purpose</th>
                          <th className="border border-border p-3 text-left">Type</th>
                          <th className="border border-border p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">session_id</td>
                          <td className="border border-border p-3">datasea.ai</td>
                          <td className="border border-border p-3">Maintains session state and security</td>
                          <td className="border border-border p-3">First-party</td>
                          <td className="border border-border p-3">Session</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">csrf_token</td>
                          <td className="border border-border p-3">datasea.ai</td>
                          <td className="border border-border p-3">CSRF protection for forms</td>
                          <td className="border border-border p-3">First-party</td>
                          <td className="border border-border p-3">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Analytics</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-secondary/20">
                          <th className="border border-border p-3 text-left">Name</th>
                          <th className="border border-border p-3 text-left">Domain</th>
                          <th className="border border-border p-3 text-left">Purpose</th>
                          <th className="border border-border p-3 text-left">Type</th>
                          <th className="border border-border p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">analytics_id</td>
                          <td className="border border-border p-3">datasea.ai</td>
                          <td className="border border-border p-3">Anonymous visitor analytics and traffic sources</td>
                          <td className="border border-border p-3">First-party</td>
                          <td className="border border-border p-3">13 months</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">_ga / _gid</td>
                          <td className="border border-border p-3">google.com</td>
                          <td className="border border-border p-3">Page analytics and engagement metrics</td>
                          <td className="border border-border p-3">Third-party</td>
                          <td className="border border-border p-3">13 months / 24 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Functional</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-secondary/20">
                          <th className="border border-border p-3 text-left">Name</th>
                          <th className="border border-border p-3 text-left">Domain</th>
                          <th className="border border-border p-3 text-left">Purpose</th>
                          <th className="border border-border p-3 text-left">Type</th>
                          <th className="border border-border p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">pref_lang</td>
                          <td className="border border-border p-3">datasea.ai</td>
                          <td className="border border-border p-3">Stores language or UI preferences</td>
                          <td className="border border-border p-3">First-party</td>
                          <td className="border border-border p-3">12 months</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">player_state</td>
                          <td className="border border-border p-3">datasea.ai</td>
                          <td className="border border-border p-3">Remembers media/player settings</td>
                          <td className="border border-border p-3">First-party</td>
                          <td className="border border-border p-3">6 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Marketing <em>(only if enabled)</em></h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-secondary/20">
                          <th className="border border-border p-3 text-left">Name</th>
                          <th className="border border-border p-3 text-left">Domain</th>
                          <th className="border border-border p-3 text-left">Purpose</th>
                          <th className="border border-border p-3 text-left">Type</th>
                          <th className="border border-border p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">ad_conv</td>
                          <td className="border border-border p-3">example-ads.com</td>
                          <td className="border border-border p-3">Measures campaign conversions</td>
                          <td className="border border-border p-3">Third-party</td>
                          <td className="border border-border p-3">up to 13 months</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-mono text-sm">retarget_tag</td>
                          <td className="border border-border p-3">example-ads.com</td>
                          <td className="border border-border p-3">Enables retargeting</td>
                          <td className="border border-border p-3">Third-party</td>
                          <td className="border border-border p-3">up to 13 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies & Providers</h2>
              <p className="mb-4">
                Some cookies are set by third parties (e.g., analytics, A/B testing, chat widgets, embedded media). Their use is governed by their own policies. We maintain a list of subprocessors/providers on request.
              </p>
              <p>Examples (update based on your stack):</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Analytics provider</strong> (e.g., GA4 or Plausible) — audience measurement</li>
                <li><strong>A/B testing</strong> (e.g., Optimizely) — experiment variants</li>
                <li><strong>Support/chat</strong> (e.g., Intercom) — user support widget</li>
                <li><strong>Video</strong> (e.g., Vimeo/YouTube embeds) — media playback</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies in Your Browser</h2>
              <p className="mb-4">You can delete existing cookies and configure most browsers to block or limit cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy</li>
                <li>Edge: Settings → Cookies and site permissions</li>
              </ul>
              <p className="mt-4"><strong>Note:</strong> Disabling cookies may affect site functionality.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">International Transfers</h2>
              <p>
                If third-party providers process data outside the EEA/UK, appropriate safeguards (e.g., Standard Contractual Clauses) are applied by those providers. Regional hosting/residency can be agreed per engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy to reflect changes in our practices or legal requirements. Material changes will be indicated by updating the "Last updated" date above and, where appropriate, additional notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p><strong>Controller:</strong> DataSea, SASU</p>
              <p><strong>Address:</strong> 5 rue Basse des Grouets, 41000 Blois, France</p>
              <p><strong>Privacy contact:</strong> <a href="mailto:privacy@datasea.fr" className="text-primary hover:underline">privacy@datasea.fr</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;