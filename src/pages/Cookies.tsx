import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
          Cookie Policy
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          Last updated: January 2025
        </p>
      </section>

      {/* Cookie Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember information about your visit, making it easier to visit the site again and making the site more useful to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <p>DataSea uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Performance Cookies:</strong> Monitor website performance and user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Functional Cookies</h3>
                <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.
              </p>
              
              <p className="mt-4">
                <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. However, if you limit the cookies, you may not be able to use all of our website's functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <p>
                Some cookies may be set by third parties when you visit our website. We have no control over these cookies, and you should check the third-party websites for more information about their cookies and how to manage them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this policy regularly to stay informed about our use of cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p>
                <strong>DataSea</strong><br />
                Email: <a href="mailto:privacy@datasea.fr" className="text-primary hover:underline">privacy@datasea.fr</a><br />
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

export default Cookies;