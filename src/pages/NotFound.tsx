import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-datasea-dark text-datasea-text">
            <Header />

            <section className="min-h-[70vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center px-6"
                >
                    <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-datasea-cyan to-datasea-blue bg-clip-text text-transparent">
                        404
                    </h1>
                    <p className="text-xl text-datasea-muted mb-8">Page not found</p>
                    <Link
                        to="/"
                        className="px-8 py-4 bg-datasea-blue hover:bg-datasea-cyan text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFound;
