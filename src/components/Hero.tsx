import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-datasea-cyan/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-datasea-cyan mb-8 backdrop-blur-sm">
                        DataSea Engineering
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                        Advanced MLOps & <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-datasea-cyan to-datasea-blue">
                            AI Engineering
                        </span>
                    </h1>

                    <p className="text-xl text-datasea-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                        Operating AI with confidence. We build scalable, reliable, and governed AI systems for the enterprise.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                        >
                            Start your project
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm"
                        >
                            Explore services
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
