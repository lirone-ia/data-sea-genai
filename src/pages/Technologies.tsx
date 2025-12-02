import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, Settings, BarChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

const Technologies = () => {
    const cloudPlatforms = [
        {
            name: "AWS",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 153" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72.392 55.438c0 3.137-.343 5.69-.915 7.547-.571 1.97-1.6 4.011-3.085 6.236-1.029 1.743-2.515 2.857-4.343 3.365-1.828.457-4.114.686-6.628.686-4 0-7.428-1.143-10.285-3.431-2.858-2.287-4.229-5.371-4.229-9.255h8.571c.229 1.829 1.029 3.2 2.4 4.229 1.372 1.028 2.972 1.542 4.801 1.542 2.058 0 3.658-.571 4.801-1.714 1.143-1.143 1.714-2.972 1.714-5.486V32.361h8.686v23.077zm-50.09-15.277c3.428 0 6.057 1.028 8 3.085 1.943 2.057 2.857 4.914 2.857 8.571v21.449H25v-19.62c0-2.058-.457-3.658-1.371-4.8-.915-1.143-2.286-1.715-4-1.715-1.829 0-3.2.572-4.343 1.715-1.143 1.028-1.715 2.628-1.715 4.8v19.62H5.333V40.475h7.657l.458 4.228c.915-1.485 2.4-2.742 4.343-3.657 1.943-.914 4.229-1.485 6.514-1.485zm167.43 0c3.428 0 6.057 1.028 8 3.085 1.943 2.057 2.857 4.914 2.857 8.571v21.449h-8.229v-19.62c0-2.058-.457-3.658-1.371-4.8-.915-1.143-2.286-1.715-4-1.715-1.829 0-3.2.572-4.343 1.715-1.143 1.028-1.715 2.628-1.715 4.8v19.62h-8.114V40.475h7.657l.458 4.228c.914-1.485 2.4-2.742 4.342-3.657 1.943-.914 4.229-1.485 6.515-1.485zm-58.286 0c3.429 0 6.058 1.028 8 3.085 1.943 2.057 2.858 4.914 2.858 8.571v21.449h-8.229v-19.62c0-2.058-.457-3.658-1.372-4.8-.914-1.143-2.285-1.715-4-1.715-1.828 0-3.2.572-4.342 1.715-1.143 1.028-1.715 2.628-1.715 4.8v19.62h-8.228V32.361h8.228v11.657c.915-1.485 2.4-2.742 4.343-3.657 1.943-.914 4.229-1.485 6.515-1.485zm29.486 0c2.629 0 4.914.571 6.857 1.714 1.943 1.143 3.428 2.629 4.229 4.343.8 1.714 1.257 3.543 1.257 5.485 0 3.543-1.143 6.4-3.429 8.686-2.285 2.286-5.485 3.429-9.6 3.429h-6.742v11.657h-8.114V40.475h15.542zm168.686-8.114c0 1.257-.457 2.4-1.372 3.314-.914.915-2.057 1.372-3.428 1.372-1.372 0-2.515-.457-3.429-1.372-.914-.914-1.371-2.057-1.371-3.314 0-1.372.457-2.515 1.371-3.429.915-.914 2.058-1.371 3.429-1.371s2.514.457 3.428 1.371c.915.915 1.372 2.058 1.372 3.429zM169.523 64c1.6 0 2.857-.457 3.771-1.257.915-.8 1.372-1.943 1.372-3.428s-.457-2.629-1.372-3.429c-.914-.8-2.171-1.257-3.771-1.257h-7.086v9.371h7.086zM256 134.247c-28.8 21.257-66.514 32.685-100.571 32.685-47.543 0-90.4-17.6-122.857-46.857-2.514-2.286-.343-5.372 2.743-3.658 34.514 20.115 77.257 32.229 121.485 32.229 29.829 0 62.629-6.172 92.8-18.973 4.572-1.943 8.343 2.972 4.343 6.4l2.057-.826zM266.286 122.704c-3.658-4.686-24.229-2.286-33.486-1.143-2.857.343-3.314-2.172-.685-4 16.343-11.543 43.2-8.229 46.285-4.343 3.086 3.886-1.028 30.4-16 43.086-2.286 1.943-4.457.914-3.429-1.6 3.429-8.571 11.086-27.771 7.315-32.114v.114z" fill="#FF9900" fillRule="evenodd" />
                </svg>
            ),
            services: ["SageMaker", "Lambda", "EKS", "S3", "EC2", "RDS"],
            description: "Comprehensive ML platform with auto-scaling infrastructure"
        },
        {
            name: "Azure",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="azure-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0078D4" />
                            <stop offset="100%" stopColor="#5EA0EF" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#azure-gradient)" d="M85.343 191.187l55.932-14.017L94.76 101.63 0 181.697zm86.232 8.608l-53.35-14.778 125.362-116.311L255.968 0l-84.393 199.795z" />
                </svg>
            ),
            services: ["ML Studio", "AKS", "Functions", "Cognitive Services", "Synapse"],
            description: "Enterprise-grade AI services with hybrid cloud capabilities"
        },
        {
            name: "GCP",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M170.252 55.185l32.77-32.77 1.363-14.173C179.555 2.832 156.049 0 132.114 0 75.312 0 25.406 30.916 3.906 76.695l13.266-1.87 65.577-10.804.826-8.165c15.93-20.887 40.91-34.158 68.677-34.158 14.235 0 27.505 3.486 39.245 9.627l-21.245 23.86z" />
                    <path fill="#4285F4" d="M255.878 104.149c-3.005-20.158-11.16-38.758-23.226-54.682l-48.015 48.015c9.283 12.872 14.804 28.7 14.804 45.786v3.206c17.676 0 32.008 14.332 32.008 32.009s-14.332 32.008-32.008 32.008h-64.017l-3.207 3.206v19.246l3.207 3.206h64.017c38.788 0 70.196-31.408 70.196-70.196 0-35.283-26.02-64.453-59.76-69.804z" />
                    <path fill="#34A853" d="M71.424 256h64.017v-25.658H71.424c-3.862 0-7.502-.719-10.921-1.918l-13.74 4.238-32.77 32.77-2.871 13.74C27.178 249.715 48.45 256 71.424 256z" />
                    <path fill="#FBBC05" d="M71.424 103.805c-38.788 0-70.196 31.408-70.196 70.196 0 22.974 11.03 43.368 28.084 56.17l49.381-49.381c-11.03-5.717-18.603-17.17-18.603-30.29 0-18.93 15.359-34.288 34.289-34.288 13.12 0 24.573 7.572 30.29 18.602l49.381-49.38C161.186 68.477 118.482 54.424 71.424 103.805z" />
                </svg>
            ),
            services: ["Vertex AI", "BigQuery", "GKE", "Cloud Run", "Dataflow"],
            description: "Advanced data analytics and ML orchestration platform"
        }
    ];

    const mlFrameworks = [
        {
            name: "PyTorch",
            icon: <img src="https://cdn.simpleicons.org/pytorch/EE4C2C" alt="PyTorch" className="w-16 h-16" />,
            features: ["Transformers", "CUDA", "Lightning", "TorchServe"],
            description: "Dynamic neural networks with research-grade flexibility"
        },
        {
            name: "TensorFlow",
            icon: <img src="https://cdn.simpleicons.org/tensorflow/FF6F00" alt="TensorFlow" className="w-16 h-16" />,
            features: ["TFX", "Serving", "Lite", "Extended"],
            description: "Production-ready ML platform with comprehensive ecosystem"
        },
        {
            name: "Kubernetes",
            icon: <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" className="w-16 h-16" />,
            features: ["Helm", "Istio", "Operators", "KubeFlow"],
            description: "Container orchestration for scalable ML workloads"
        }
    ];

    const dataTools = [
        {
            name: "Apache Kafka",
            icon: <img src="https://cdn.simpleicons.org/apachekafka/white" alt="Kafka" className="w-10 h-10 mb-2" />,
            use: "Stream processing",
            description: "Real-time data streaming and event-driven architectures"
        },
        {
            name: "Apache Airflow",
            icon: <img src="https://cdn.simpleicons.org/apacheairflow/017CEE" alt="Airflow" className="w-10 h-10 mb-2" />,
            use: "Workflow orchestration",
            description: "Complex data pipeline scheduling and monitoring"
        },
        {
            name: "MLflow",
            icon: <img src="https://cdn.simpleicons.org/mlflow/0194E2" alt="MLflow" className="w-10 h-10 mb-2" />,
            use: "Experiment tracking",
            description: "ML lifecycle management and model versioning"
        },
        {
            name: "Ray",
            icon: <img src="https://cdn.simpleicons.org/ray/028CF0" alt="Ray" className="w-10 h-10 mb-2" />,
            use: "Distributed training",
            description: "Scalable hyperparameter tuning and distributed computing"
        }
    ];

    const benefits = [
        { icon: <Shield className="w-8 h-8" />, title: "Multi-Cloud Resilience", description: "Zero vendor lock-in with seamless failover capabilities" },
        { icon: <Zap className="w-8 h-8" />, title: "Auto-Scaling", description: "Dynamic resource allocation based on workload demands" },
        { icon: <Settings className="w-8 h-8" />, title: "Enterprise Security", description: "SOC2, HIPAA compliance with end-to-end encryption" },
        { icon: <BarChart className="w-8 h-8" />, title: "Cost Optimization", description: "Intelligent workload placement and resource optimization" }
    ];

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <WaveBackground />
                <div className="relative container mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">
                            Multi-Cloud Architecture & Tech Stack
                        </h1>
                        <p className="text-xl md:text-2xl text-datasea-muted max-w-4xl mx-auto">
                            Enterprise-grade infrastructure spanning AWS, Azure, and GCP with cutting-edge ML frameworks and orchestration tools for production-ready AI solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cloud Platforms */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-16">Cloud Platforms</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {cloudPlatforms.map((platform, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-6 text-datasea-cyan">
                                {platform.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">{platform.name}</h3>
                            <p className="text-datasea-muted text-center mb-4">{platform.description}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {platform.services.map((service, i) => (
                                    <span key={i} className="px-3 py-1 bg-datasea-dark border border-datasea-border rounded-full text-xs text-datasea-cyan">
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ML Frameworks */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">ML Frameworks & Orchestration</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mlFrameworks.map((framework, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="text-center">
                                    <span className="text-5xl mb-4 block">{framework.icon}</span>
                                    <h3 className="text-2xl font-bold mb-4">{framework.name}</h3>
                                    <p className="text-datasea-muted mb-4">{framework.description}</p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {framework.features.map((feature, i) => (
                                            <span key={i} className="px-3 py-1 bg-datasea-navy border border-datasea-border rounded-full text-xs">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Tools */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-16">Data Engineering & MLOps Tools</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dataTools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-datasea-navy/50 border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-300 text-center flex flex-col items-center"
                        >
                            {tool.icon}
                            <h3 className="text-lg font-bold text-datasea-cyan mb-2">{tool.name}</h3>
                            <span className="inline-block px-3 py-1 bg-datasea-dark border border-datasea-border rounded-full text-xs mb-3">
                                {tool.use}
                            </span>
                            <p className="text-sm text-datasea-muted">{tool.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Architecture Benefits */}
            <section className="bg-datasea-navy/30 py-20 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-50"></div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Architecture Benefits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-datasea-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 text-datasea-cyan">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-datasea-muted">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
                <p className="text-xl text-datasea-muted mb-8 max-w-3xl mx-auto">
                    Let our architects design a custom multi-cloud solution tailored to your specific requirements and compliance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
                    >
                        Architecture Consultation
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                        View Demo Environment
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Technologies;
