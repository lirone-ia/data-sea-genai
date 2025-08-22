import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    industry: "",
    clouds: "",
    useCase: "",
    timeline: "",
    budget: "",
    message: "",
    gdprConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      toast({
        title: "GDPR Consent Required",
        description: "Please accept the privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message Sent!",
      description: "Thanks — we'll get back to you within one business day.",
    });
    
    // Reset form
    setFormData({
      email: "",
      company: "",
      industry: "",
      clouds: "",
      useCase: "",
      timeline: "",
      budget: "",
      message: "",
      gdprConsent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact DataSea
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Tell us about your use case. An engineer will reply within one business day.
        </p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banking">Banking & Financial Services</SelectItem>
                        <SelectItem value="retail">Cosmetics & Retail</SelectItem>
                        <SelectItem value="automotive">Automotive & Manufacturing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="clouds">Clouds/Environments</Label>
                    <Input
                      id="clouds"
                      placeholder="AWS, Azure, GCP, On-prem..."
                      value={formData.clouds}
                      onChange={(e) => handleInputChange("clouds", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="useCase">Use Case</Label>
                    <Select onValueChange={(value) => handleInputChange("useCase", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data-platform">Data Platform & Integration</SelectItem>
                        <SelectItem value="ml-analytics">ML & Analytics</SelectItem>
                        <SelectItem value="llm-rag">LLM & RAG Systems</SelectItem>
                        <SelectItem value="mlops">MLOps & Platform Engineering</SelectItem>
                        <SelectItem value="voice-nlp">Voice Analytics & NLP</SelectItem>
                        <SelectItem value="real-time">Real-Time & Streaming</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6months+">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-100k">€50k - €100k</SelectItem>
                      <SelectItem value="100k-250k">€100k - €250k</SelectItem>
                      <SelectItem value="250k-500k">€250k - €500k</SelectItem>
                      <SelectItem value="500k+">€500k+</SelectItem>
                      <SelectItem value="discuss">Let's discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your specific requirements, challenges, or goals..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gdpr"
                    checked={formData.gdprConsent}
                    onCheckedChange={(checked) => handleInputChange("gdprConsent", checked as boolean)}
                  />
                  <Label htmlFor="gdpr" className="text-sm">
                    I agree to the processing of my personal data in accordance with the{" "}
                    <a href="/privacy" className="text-primary hover:underline">privacy policy</a>
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;