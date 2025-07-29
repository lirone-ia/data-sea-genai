import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/26626dc7-368f-4a72-9aae-b8a995bd5e81.png" 
              alt="DataSea Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Enterprise AI Solutions
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Unlock the power of Generative AI and Large Language Models for your business. 
          DataSea delivers cutting-edge AI consulting and implementation services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Our AI Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">LLM Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate Large Language Models into your existing workflows. 
                Custom GPT implementations, fine-tuning, and prompt engineering.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Generative AI</h3>
              <p className="text-muted-foreground">
                Transform your content creation with advanced generative models. 
                Automated document generation, code synthesis, and creative AI solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Strategy</h3>
              <p className="text-muted-foreground">
                Comprehensive AI transformation consulting. RAG systems, vector databases, 
                MLOps pipelines, and enterprise AI architecture.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Technologies We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">OpenAI</div>
              <p className="text-sm text-muted-foreground">GPT-4, DALL-E, Whisper</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Anthropic</div>
              <p className="text-sm text-muted-foreground">Claude, Constitutional AI</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">LangChain</div>
              <p className="text-sm text-muted-foreground">Agent frameworks</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Vector DBs</div>
              <p className="text-sm text-muted-foreground">Pinecone, Weaviate, Chroma</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the AI revolution. Let DataSea guide your enterprise through intelligent automation 
          and next-generation AI implementations.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Contact Our AI Experts
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/26626dc7-368f-4a72-9aae-b8a995bd5e81.png" 
                alt="DataSea Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 DataSea. Enterprise AI Solutions.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
