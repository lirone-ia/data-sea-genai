import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Database, Brain, Shield, Cloud, ExternalLink, Video, Cpu, Snowflake, Leaf } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import awsNovaImg from '@/assets/news/aws-nova.jpg';
import microsoftFabricImg from '@/assets/news/microsoft-fabric.jpg';
import duckdbLakeImg from '@/assets/news/duckdb-lake.jpg';
import cyberSecurityAlertImg from '@/assets/news/cyber-security-alert.jpg';
import openaiSoraImg from '@/assets/news/openai-sora.jpg';
import mistralAiImg from '@/assets/news/mistral-ai.jpg';
import databricksMosaicImg from '@/assets/news/databricks-mosaic.jpg';
import snowflakeCortexImg from '@/assets/news/snowflake-cortex.jpg';
import applePrivateCloudImg from '@/assets/news/apple-private-cloud.jpg';
import liquidCoolingImg from '@/assets/news/liquid-cooling.jpg';

interface NewsArticle {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    readTime: string;
    featured: boolean;
    externalLink?: string;
}

const newsArticles: NewsArticle[] = [
    {
        id: 1,
        title: "OpenAI Expands Access to Sora for Video Creation",
        excerpt: "The Sora model redefines video generation from text, opening new opportunities for data-driven content creators.",
        date: "2025-12-28",
        category: "Artificial Intelligence",
        icon: Video,
        image: openaiSoraImg,
        readTime: "5 min",
        featured: true,
        externalLink: "https://www.youtube.com"
    },
    {
        id: 2,
        title: "Mistral AI: The French Champion Strengthens Its Multilingual Models",
        excerpt: "The Parisian company continues to compete with American giants with increasingly powerful and resource-efficient open-source models.",
        date: "2025-12-27",
        category: "Artificial Intelligence",
        icon: Brain,
        image: mistralAiImg,
        readTime: "6 min",
        featured: true,
        externalLink: "https://datascientest.com"
    },
    {
        id: 3,
        title: "Databricks Deploys Mosaic AI for Data Governance",
        excerpt: "With Mosaic AI, Databricks now enables enterprises to build and monitor their own AI agents directly within their Lakehouse.",
        date: "2025-12-26",
        category: "Data Engineering",
        icon: Database,
        image: databricksMosaicImg,
        readTime: "7 min",
        featured: false,
        externalLink: "https://www.databricks.com"
    },
    {
        id: 4,
        title: "Snowflake Cortex: Generative AI Integrates with SQL",
        excerpt: "Snowflake simplifies AI access by allowing data analysts to use language models directly through classic SQL queries.",
        date: "2025-12-25",
        category: "Cloud",
        icon: Snowflake,
        image: snowflakeCortexImg,
        readTime: "5 min",
        featured: false,
        externalLink: "https://blog.nashtechglobal.com"
    },
    {
        id: 5,
        title: "Apple Intelligence and 'Private Cloud Compute' Security",
        excerpt: "Apple sets a new privacy standard with dedicated servers that guarantee personal data is never stored or accessed.",
        date: "2025-12-24",
        category: "Security",
        icon: Shield,
        image: applePrivateCloudImg,
        readTime: "6 min",
        featured: false,
        externalLink: "https://security.apple.com"
    },
    {
        id: 6,
        title: "The Rise of Liquid Cooling for Sustainable Data Centers",
        excerpt: "Facing the energy consumption of AI, data centers are massively adopting liquid cooling to reduce their carbon footprint.",
        date: "2025-12-23",
        category: "Green IT",
        icon: Leaf,
        image: liquidCoolingImg,
        readTime: "8 min",
        featured: false,
        externalLink: "https://www.tetratech.com"
    },
    {
        id: 7,
        title: "AWS Launches Its New Family of AI Models: Amazon Nova",
        excerpt: "Amazon unveiled its Nova models capable of processing text, images, and videos with unprecedented speed at AWS re:Invent 2025.",
        date: "2025-12-20",
        category: "Artificial Intelligence",
        icon: Cpu,
        image: awsNovaImg,
        readTime: "4 min",
        featured: false,
        externalLink: "https://www.aboutamazon.com"
    },
    {
        id: 8,
        title: "Microsoft Fabric Surpasses 28,000 Enterprise Customers",
        excerpt: "Microsoft's unified platform continues to dominate the data analytics market with new real-time features.",
        date: "2025-12-18",
        category: "Cloud",
        icon: Cloud,
        image: microsoftFabricImg,
        readTime: "5 min",
        featured: false,
        externalLink: "https://learn.microsoft.com"
    },
    {
        id: 9,
        title: "The DuckDB Ecosystem Expands with 'DuckLake'",
        excerpt: "DuckDB becomes the go-to solution for ultra-fast data processing directly in the browser.",
        date: "2025-12-15",
        category: "Data Engineering",
        icon: Database,
        image: duckdbLakeImg,
        readTime: "6 min",
        featured: false,
        externalLink: "https://duckdb.org"
    },
    {
        id: 10,
        title: "Cybersecurity Alert at the Ministry of Interior",
        excerpt: "A massive intrusion forced the French government to urgently strengthen the protection of sensitive state data.",
        date: "2025-12-10",
        category: "Security",
        icon: Shield,
        image: cyberSecurityAlertImg,
        readTime: "7 min",
        featured: false,
        externalLink: "https://www.aa.com.tr"
    }
];

const categories = [
    "All",
    "Artificial Intelligence",
    "Data Engineering",
    "Cloud",
    "Security",
    "Green IT"
];

const News = () => {
    const featuredArticles = newsArticles.filter(a => a.featured);
    const regularArticles = newsArticles.filter(a => !a.featured);

    return (
        <div className="min-h-screen bg-datasea-dark text-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-30"></div>
                <div className="relative container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-datasea-cyan to-datasea-blue">Data</span> News
                        </h1>
                        <p className="text-xl text-datasea-muted">
                            Stay informed on the latest trends in data engineering, AI, and cloud computing
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 border-b border-datasea-border">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    index === 0
                                        ? 'bg-datasea-blue text-white'
                                        : 'bg-datasea-navy/50 text-datasea-muted hover:text-white hover:bg-datasea-navy border border-datasea-border'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8">Featured</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-datasea-navy/80 to-datasea-dark border border-datasea-border hover:border-datasea-cyan/50 transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-datasea-dark via-datasea-dark/50 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-2 rounded-lg bg-datasea-cyan/20 text-datasea-cyan backdrop-blur-sm">
                                            <article.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-datasea-blue/30 text-datasea-cyan backdrop-blur-sm">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-datasea-cyan transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-datasea-muted mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 text-sm text-datasea-muted">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(article.date).toLocaleDateString('en-US', { 
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                            <span>{article.readTime} read</span>
                                        </div>
                                        {article.externalLink ? (
                                            <a 
                                                href={article.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-datasea-cyan hover:gap-3 transition-all"
                                            >
                                                Read <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <button className="flex items-center gap-2 text-datasea-cyan hover:gap-3 transition-all">
                                                Read <ArrowRight className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Articles */}
            <section className="py-16 bg-datasea-navy/30">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8">All Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {regularArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group overflow-hidden rounded-xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/30 transition-all duration-300"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-1.5 rounded-md bg-datasea-cyan/10 text-datasea-cyan">
                                            <article.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-medium text-datasea-muted">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-semibold mb-2 group-hover:text-datasea-cyan transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-datasea-muted mb-3 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-datasea-muted">
                                        <span>{new Date(article.date).toLocaleDateString('en-US')}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-datasea-blue/20 to-datasea-cyan/10 border border-datasea-border">
                        <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                        <p className="text-datasea-muted mb-8">
                            Get the latest data news delivered straight to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-6 py-3 rounded-full bg-datasea-dark border border-datasea-border focus:border-datasea-cyan focus:outline-none transition-colors"
                            />
                            <button className="px-8 py-3 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default News;
