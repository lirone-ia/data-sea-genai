import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp, Database, Brain, Shield, Cloud, Zap, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import awsNovaImg from '@/assets/news/aws-nova.jpg';
import microsoftFabricImg from '@/assets/news/microsoft-fabric.jpg';
import duckdbLakeImg from '@/assets/news/duckdb-lake.jpg';
import cyberSecurityAlertImg from '@/assets/news/cyber-security-alert.jpg';

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
        title: "AWS lance sa nouvelle famille de modèles d'IA : Amazon Nova",
        excerpt: "Amazon a dévoilé ses modèles Nova capables de traiter du texte, des images et des vidéos avec une vitesse inédite lors de AWS re:Invent 2025.",
        date: "2025-12-20",
        category: "Intelligence Artificielle",
        icon: Brain,
        image: awsNovaImg,
        readTime: "4 min",
        featured: true,
        externalLink: "https://www.aboutamazon.com"
    },
    {
        id: 2,
        title: "Microsoft Fabric dépasse les 28 000 entreprises clientes",
        excerpt: "La plateforme unifiée de Microsoft continue de dominer le marché de l'analyse de données avec de nouvelles fonctions en temps réel.",
        date: "2025-12-18",
        category: "Cloud",
        icon: Cloud,
        image: microsoftFabricImg,
        readTime: "5 min",
        featured: true,
        externalLink: "https://learn.microsoft.com"
    },
    {
        id: 3,
        title: "L'écosystème DuckDB s'étend avec \"DuckLake\"",
        excerpt: "DuckDB devient la solution de référence pour le traitement de données ultra-rapide directement dans le navigateur.",
        date: "2025-12-15",
        category: "Data Engineering",
        icon: Database,
        image: duckdbLakeImg,
        readTime: "6 min",
        featured: false,
        externalLink: "https://duckdb.org"
    },
    {
        id: 4,
        title: "Alerte cybersécurité au Ministère de l'Intérieur",
        excerpt: "Une intrusion massive a forcé le gouvernement français à renforcer d'urgence la protection des données sensibles de l'État.",
        date: "2025-12-10",
        category: "Sécurité",
        icon: Shield,
        image: cyberSecurityAlertImg,
        readTime: "7 min",
        featured: false,
        externalLink: "https://www.aa.com.tr"
    }
];

const categories = [
    "Tous",
    "Intelligence Artificielle",
    "Data Engineering",
    "Sécurité",
    "Cloud"
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
                            Actualités <span className="bg-clip-text text-transparent bg-gradient-to-r from-datasea-cyan to-datasea-blue">Data</span>
                        </h1>
                        <p className="text-xl text-datasea-muted">
                            Restez informé des dernières tendances en data engineering, IA et cloud computing
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
                    <h2 className="text-2xl font-bold mb-8">À la Une</h2>
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
                                                {new Date(article.date).toLocaleDateString('fr-FR', { 
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                            <span>{article.readTime} de lecture</span>
                                        </div>
                                        {article.externalLink ? (
                                            <a 
                                                href={article.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-datasea-cyan hover:gap-3 transition-all"
                                            >
                                                Lire <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <button className="flex items-center gap-2 text-datasea-cyan hover:gap-3 transition-all">
                                                Lire <ArrowRight className="w-4 h-4" />
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
                    <h2 className="text-2xl font-bold mb-8">Tous les Articles</h2>
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
                                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
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
                        <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
                        <p className="text-datasea-muted mb-8">
                            Recevez les dernières actualités data directement dans votre boîte mail
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                className="flex-1 px-6 py-3 rounded-full bg-datasea-dark border border-datasea-border focus:border-datasea-cyan focus:outline-none transition-colors"
                            />
                            <button className="px-8 py-3 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300">
                                S'abonner
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
