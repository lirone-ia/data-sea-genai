import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-datasea-dark border-t border-datasea-border py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-datasea-cyan to-datasea-blue">DataSea</span>
                    <p className="text-sm text-datasea-muted mt-2">
                        © {new Date().getFullYear()} DataSea. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8">
                    <Link to="/privacy" className="text-sm text-datasea-muted hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="text-sm text-datasea-muted hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/contact" className="text-sm text-datasea-muted hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
