import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const subject = `Contact Request from ${formData.name} (${formData.company})`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = `mailto:management@datasea.fr?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">
                            Let's discuss how we can help you build production-ready AI infrastructure.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border backdrop-blur-sm">
                            <h2 className="text-2xl font-bold mb-6 text-datasea-cyan">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-datasea-dark border border-datasea-border rounded-lg focus:outline-none focus:border-datasea-cyan transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-datasea-dark border border-datasea-border rounded-lg focus:outline-none focus:border-datasea-cyan transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-datasea-dark border border-datasea-border rounded-lg focus:outline-none focus:border-datasea-cyan transition-colors"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-datasea-dark border border-datasea-border rounded-lg focus:outline-none focus:border-datasea-cyan transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-datasea-cyan/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-datasea-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Email</h3>
                                        <a href="mailto:management@datasea.fr" className="text-datasea-muted hover:text-datasea-cyan transition-colors">
                                            management@datasea.fr
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-datasea-cyan/10 rounded-lg">
                                        <Phone className="w-6 h-6 text-datasea-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Phone</h3>
                                        <p className="text-datasea-muted">+33 (0)1 XX XX XX XX</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-datasea-cyan/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-datasea-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">Location</h3>
                                        <p className="text-datasea-muted">Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
