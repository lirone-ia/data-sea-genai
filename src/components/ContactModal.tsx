import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "consultation" | "contact" | "demo";
}

export const ContactModal = ({ isOpen, onClose, type }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    webhookUrl: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getTitle = () => {
    switch (type) {
      case "consultation":
        return "Schedule AI Consultation";
      case "demo":
        return "Request Technical Demo";
      default:
        return "Contact Our Experts";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "consultation":
        return "Let's discuss your AI implementation strategy and technical requirements.";
      case "demo":
        return "See our MLOps platform and AI solutions in action.";
      default:
        return "Get in touch with our AI engineering team.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send to Zapier if webhook URL is provided
      if (formData.webhookUrl) {
        await fetch(formData.webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            type,
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: "DataSea Website"
          }),
        });
      }

      // Simulate email sending (replace with actual email service)
      const emailData = {
        to: "contact@datasea.ai",
        subject: `${getTitle()} - ${formData.name}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Type: ${type}
Message: ${formData.message}
        `
      };

      console.log("Email would be sent:", emailData);

      toast({
        title: "Request Sent Successfully",
        description: "Our team will contact you within 24 hours to discuss your AI requirements.",
      });

      setFormData({ name: "", email: "", company: "", message: "", webhookUrl: "" });
      onClose();
    } catch (error) {
      console.error("Error sending request:", error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@company.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your AI/ML requirements, data volumes, current tech stack..."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="webhook">Zapier Webhook URL (Optional)</Label>
            <Input
              id="webhook"
              value={formData.webhookUrl}
              onChange={(e) => setFormData({ ...formData, webhookUrl: e.target.value })}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
            />
            <p className="text-xs text-muted-foreground">
              Connect to your CRM or notification system via Zapier
            </p>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Sending..." : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};