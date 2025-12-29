import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, TrendingUp, Database, Brain, Shield, Cloud, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const newsArticles = [
    {
        id: 1,
        title: "L'essor de l'IA Générative dans l'Entreprise",
        excerpt: "Comment les LLMs transforment les processus métiers et créent de nouvelles opportunités de valeur pour les organisations.",
        date: "2024-12-15",
        category: "Intelligence Artificielle",
        icon: Brain,
        readTime: "5 min",
        featured: true
    },
    {
        id: 2,
        title: "Data Mesh : Architecture Décentralisée pour l'Échelle",
        excerpt: "Découvrez comment l'approche Data Mesh révolutionne la gouvernance des données en distribuant la responsabilité aux équipes domaines.",
        date: "2024-12-10",
        category: "Architecture Data",
        icon: Database,
        readTime: "7 min",
        featured: true
    },
    {
        id: 3,
        title: "Sécurité des Données Cloud : Tendances 2025",
        excerpt: "Les nouvelles menaces et les meilleures pratiques pour protéger vos données dans un environnement multi-cloud.",
        date: "2024-12-05",
        category: "Sécurité",
        icon: Shield,
        readTime: "6 min",
        featured: false
    },
    {
        id: 4,
        title: "Real-Time Analytics avec Apache Kafka et Flink",
        excerpt: "Implémentation d'une architecture de streaming pour l'analyse en temps réel des données opérationnelles.",
        date: "2024-11-28",
        category: "Data Engineering",
        icon: Zap,
        readTime: "8 min",
        featured: false
    },
    {
        id: 5,
        title: "MLOps : Industrialiser le Machine Learning",
        excerpt: "Les pratiques DevOps appliquées au ML pour accélérer le déploiement et la maintenance des modèles en production.",
        date: "2024-11-20",
        category: "MLOps",
        icon: TrendingUp,
        readTime: "6 min",
        featured: false
    },
    {
        id: 6,
        title: "Migration Cloud : Stratégies et Pièges à Éviter",
        excerpt: "Guide complet pour réussir votre migration vers le cloud sans interruption de service ni perte de données.",
        date: "2024-11-15",
        category: "Cloud",
        icon: Cloud,
        readTime: "10 min",
        featured: false
    }
];

const categories = [
    "Tous",
    "Intelligence Artificielle",
    "Architecture Data",
    "Data Engineering",
    "MLOps",
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
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-datasea-cyan/10 text-datasea-cyan">
                                            <article.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-datasea-blue/20 text-datasea-cyan">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-datasea-cyan transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-datasea-muted mb-6 line-clamp-3">
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
                                        <button className="flex items-center gap-2 text-datasea-cyan hover:gap-3 transition-all">
                                            Lire <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-datasea-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Articles */}
            <section className="py-16 bg-datasea-navy/30">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8">Tous les Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 rounded-xl bg-datasea-dark/50 border border-datasea-border hover:border-datasea-cyan/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-datasea-cyan/10 text-datasea-cyan">
                                        <article.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-medium text-datasea-muted">
                                        {article.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 group-hover:text-datasea-cyan transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-datasea-muted mb-4 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-datasea-muted">
                                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                                    <span>{article.readTime}</span>
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
