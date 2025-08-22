import logoImage from "@/assets/datasea-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="DataSea - Enterprise AI Solutions" 
              className="h-16 w-auto object-contain filter drop-shadow-lg"
            />
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">All Services</a>
              <a href="/industries" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Industries</a>
              <a href="/case-studies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a>
              <a href="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="/security" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="/cookies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-muted-foreground space-y-1">
              <p>© 2025 DataSea. Enterprise AI Solutions.</p>
              <p>SASU - SIREN: 988 832 507 - SIRET: 988 832 507 00012</p>
              <p>TVA: FR77988832507 - NAF: 6202A - Conseil en systèmes et logiciels informatiques</p>
              <p>5 RUE BASSE DES GROUETS, 41000 BLOIS, France</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;